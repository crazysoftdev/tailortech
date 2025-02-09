import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { pricingCards } from '@/lib/constants'
import { stripe } from '@/lib/stripe'
import clsx from 'clsx'
import { Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/footer'
import { LandingContent } from '@/components/testimonials'
export default async function Home() {
  const prices = await stripe.prices.list({
    product: process.env.NEXT_PLURA_PRODUCT_ID,
    active: true,
  })

  return (
    <>
    <div className='banner'>
      <section className="h-full w-full md:pt-44 mt-[-70px] relative flex items-center justify-center flex-col">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#6387f2_1px,transparent_1px),linear-gradient(to_bottom,#6387f2_1px,transparent_1px)] bg-[size:1rem_1rem] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" />
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
          <h1 className="text-7xl sm:text-7xl md:text-9xl lg:text-[150px] xl:text-[200px] font-bold text-center mt-48">
            TailorTech
          </h1>
        </div>
        <p className="text-center font-bold text-lg">Manage Your Entire Agency from a Single, Unified Platform</p>
        <div className="flex justify-center items-center relative md:mt-[-1px] shadow-xl shadow-blue-500 rounded-2xl">
          <Image
            src={'/assets/preview2.png'}
            alt="banner image"
            height={1000}
            width={1000}
            className="rounded-2xl border-2 border-muted transition-all duration-300 transform hover:scale-110"
          />
          <div className="bottom-0 bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
        </div>
      </section>
      <section className="flex justify-center items-center flex-col gap-4 md:!mt-20 mt-[-60px]">
        <h2 className="text-4xl text-center mt-40"> Choose your plan today!</h2>
        <p className="text-muted-foreground text-center mb-8">
          Discover pricing plans designed with your requirements in mind.
          <br />
          Start your journey risk-free and take advantage of our complimentary trial starter plan, no commitment required.
        </p>
        <div className="flex justify-center gap-4 flex-wrap mt-6 mb-10">
          {prices.data.map((card) => (
            //WIP: Wire up free product from stripe
            <Card
              key={card.nickname}
              className={clsx('w-[300px] flex flex-col justify-between border-2 transition-all duration-300 transform hover:scale-105 hover:border-blue-200', {
                'border-2 border-primary': card.nickname === 'Unlimited Saas',
                'border-2 border-primary/50': card.nickname === 'Basic',
              })}
            >
              <CardHeader>
                <CardTitle
                  className={clsx('', {
                    // 'text-muted-foreground': card.nickname !== 'Unlimited Saas',
                  })}
                >
                  {card.nickname}
                </CardTitle>
                <CardDescription>
                  {
                    pricingCards.find((c) => c.title === card.nickname)
                      ?.description
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-4xl font-bold">
                  ${card.unit_amount && card.unit_amount / 100}
                </span>
                <span className="text-muted-foreground">
                  <span>/ {card.recurring?.interval}</span>
                </span>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4">
                <div>
                  {pricingCards
                    .find((c) => c.title === card.nickname)
                    ?.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex gap-2"
                      >
                        <Check className="text-blue-500" />
                        <p>{feature}</p>
                      </div>
                    ))}
                </div>
                <Link
                  href={`/agency?plan=${card.id}`}
                  className={clsx(
                    'w-full text-center font-bold bg-primary p-2 rounded-md hover:bg-primary/80 hover:text-white',
                    {
                      // '!bg-muted-foreground':
                      //   card.nickname !== 'Unlimited Saas',
                    }
                  )}
                >
                  Get Started
                </Link>
              </CardFooter>
            </Card>
          ))}
          <Card className={clsx('w-[300px] flex flex-col justify-between border-2 transition-all duration-300 transform hover:scale-105 hover:border-blue-200')}>
            <CardHeader>
              <CardTitle
                className={clsx({
                  // 'text-muted-foreground': true,
                })}
              >
                {pricingCards[0].title}
              </CardTitle>
              <CardDescription>{pricingCards[0].description}</CardDescription>
            </CardHeader>
            <CardContent>
              <span className="text-4xl font-bold">$0</span>
              <span>/ month</span>
            </CardContent>
            <CardFooter className="flex flex-col  items-start gap-4 ">
              <div>
                {pricingCards
                  .find((c) => c.title === 'Starter')
                  ?.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex gap-2"
                    >
                      <Check className="text-blue-500" />
                      <p>{feature}</p>
                    </div>
                  ))}
              </div>
              <Link
                href="/agency"
                className={clsx(
                  'w-full text-center font-bold bg-primary p-2 rounded-md hover:bg-primary/80 hover:text-white',
                  {
                    // '!bg-muted-foreground': true,
                  }
                )}
              >
                Get Started
              </Link>
            </CardFooter>
          </Card>

        </div>
        <LandingContent />
        <h2 className="text-5xl font-extrabold text-center mt-20">Support users everywhere</h2>
        <div className="flex justify-center items-center relative mt-20">
          <Image
            src={'/assets/map.webp'}
            alt="banner image"
            height={1200}
            width={1200}
            className="rounded-tl-2xl rounded-2xl"
          />
          <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  )
}

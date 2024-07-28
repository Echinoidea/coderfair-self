'use client';

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useEffect, useState } from "react"

export function ProjectsCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [currentIndex, setCurrentIndex ] = useState<number>(0);
  const [slideProgress, setSlideProgress] = useState<number>(0);
  const [slidesInView, setSlidesInView] = useState<number[]>([])

  useEffect(() => {
    if (!api) {
      return
    }

    api.on("scroll", () => {
      let progress = api.scrollProgress();

      if (progress < 0) {
        progress = 0;
      }
      else if (progress > 1) {
        progress = 1;
      }

      setSlideProgress(progress);
    })

    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap())
      console.log("changed slides")
    })
  }, [api])

  return (
    <Carousel 
      setApi={setApi}
      className="w-full px-8"
      opts={{
        align: "center",
        loop: true
      }}>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => {
          // let className = 'basis-1/2 scale-50'

          // if (currentIndex === index) {
          //   className = "basis-1/2 scale-100"
          // }

          return (
            <CarouselItem key={index} className={"basis-1/2"}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          )
        })}
      </CarouselContent>
    </Carousel>
  )
}

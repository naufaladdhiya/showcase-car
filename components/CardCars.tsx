"use client";
import Image from "next/image";

import { CarsProps } from "@/types";
import { calculateCarRent } from "@/utils";
import { CustomButton } from ".";
import { useState } from "react";

interface CardCarsProps {
  car: CarsProps;
}

const CardCars = ({ car }: CardCarsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    city_mpg,
    combination_mpg,
    cylinders,
    displacement,
    drive,
    fuel_type,
    highway_mpg,
    make,
    model,
    transmission,
    year,
  } = car;

  const carRents = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-3xl font-extrabold">
        <span className="self-start text-sm font-semibold">$</span>
        {carRents}
        <span className="self-end text-sm font-medium">day</span>
      </p>

      <div className="relative w-full h-40 my-3">
        <Image
          src="/hero.png"
          alt="cars model"
          className="object-contain"
          fill
          priority
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              alt="steering wheel"
              width={20}
              height={20}
            />
            {transmission === "a" ? "Automatic" : "Manual"}
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" alt="tire" width={20} height={20} />
            {drive.toUpperCase()}
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" alt="gas" width={20} height={20} />
            {fuel_type}
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyle="text-white text-sm leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default CardCars;

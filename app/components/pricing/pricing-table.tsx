"use client";

import { useState } from "react";
import PricingCard from "@/app/components/pricing/pricing-card";
import { pricingPlans } from "@/data/pricing";

export default function PricingTable() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const plans = pricingPlans[billing];

  return (
    <section className="bg-[#f5f5f5] px-7 py-16 md:px-10 md:py-[112px] lg:px-[165px]">
      <div className="mx-auto max-w-[1110px]">
        <div className="flex items-center justify-center gap-8">
          <button
            type="button"
            onClick={() => setBilling("monthly")}
            className={`text-[18px] font-bold leading-[25px] transition ${
              billing === "monthly"
                ? "text-black"
                : "text-black/50 hover:text-black"
            }`}
          >
            Monthly
          </button>

          <button
            type="button"
            onClick={() =>
              setBilling((prev) => (prev === "monthly" ? "yearly" : "monthly"))
            }
            aria-label="Toggle billing period"
            aria-pressed={billing === "yearly"}
            className="relative h-8 w-16 rounded-full bg-[#dfdfdf] transition hover:bg-black/25"
          >
            <span
              className={`absolute top-1 h-6 w-6 rounded-full bg-black transition ${
                billing === "monthly" ? "left-1" : "left-9"
              }`}
            />
          </button>

          <button
            type="button"
            onClick={() => setBilling("yearly")}
            className={`text-[18px] font-bold leading-[25px] transition ${
              billing === "yearly"
                ? "text-black"
                : "text-black/50 hover:text-black"
            }`}
          >
            Yearly
          </button>
        </div>

        <div className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-3 lg:items-center lg:gap-[30px]">
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              name={plan.name}
              description={plan.description}
              price={plan.price}
              billing={billing}
              isFeatured={plan.isFeatured}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

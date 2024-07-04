"use client";

import React, { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cards, investorCards } from "@/lib/damp-data";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/hooks";
import OrdersTable from "@/components/dashboard/OrdersTables";
import { Invoice01Icon, Invoice02Icon, Invoice03Icon, MoneyBag02Icon } from "hugeicons-react";
import { getOrders } from "@/services/userService";
import Cookies from "js-cookie";
import { useQuery } from "@tanstack/react-query";

function Dashboard() {
  const router = useRouter();
  const userSelector = useAppSelector((state) => state.user.user);

  const accessToken = Cookies.get("next-auth.session-token");

  const { data: orders = [], isLoading, error } = useQuery({
    queryKey: "orders",
    queryFn: () => getOrders(accessToken),
  });

  // Derived state for counting orders and calculating total amount
  const { pendingCount, acceptedCount, totalAmount } = useMemo(() => {
    let pendingCount = 0;
    let acceptedCount = 0;
    let totalAmount = 0;

    orders.forEach(order => {
      if (order.status === "PENDING") pendingCount++;
      if (order.status === "ACCEPTED") acceptedCount++;
      totalAmount += order.amount;
    });

    return { pendingCount, acceptedCount, totalAmount };
  }, [orders]);

  const cards = [
    {
      id: 1,
      title: "Total Orders",
      metric: orders.length,
      icon: <Invoice01Icon size={20} />,
    },
    {
      id: 2,
      title: "Pending Orders",
      metric: pendingCount,
      icon: <Invoice03Icon size={20} />,
    },
    {
      id: 3,
      title: "Accepted Orders",
      metric: acceptedCount,
      icon: <Invoice02Icon size={20} />,
    },
    {
      id: 4,
      title: "Total Amount",
      metric: new Intl.NumberFormat("en-US", { style: "currency", currency: "TZS" }).format(totalAmount),
      icon: <MoneyBag02Icon size={20} />,
    },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-col">
        <div className="flex justify-between items-center max-sm:flex-col max-sm:items-start max-sm:gap-y-2">
          <div>
            <h1 className="font-bold text-xl">Overview</h1>
            <p className="text-gray-600 text-sm">Dashboard</p>
          </div>

          {userSelector?.accountType === "Borrower" && (
            <div className="">
              <Button
                size=""
                className="font-semibold"
                onClick={() => router.push("/invoices/submit-invoice")}
              >
                Submit Invoice
              </Button>
            </div>
          )}
        </div>

        {/* BORROWER CARDS */}
          <div className="grid grid-cols-4 gap-4 mt-8 max-sm:grid-cols-1 max-lg:grid-cols-2">
            {cards.map((card) => (
              <Card key={card.id}>
                <CardContent className="px-4 py-5">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex flex-col">
                      <h1 className="text-gray-600 text-sm">{card.title}</h1>
                      <h1 className="font-bold text-xl">{card.metric}</h1>
                    </div>

                    <div className="bg-main-yellow text-white p-2 rounded-lg">
                      {card.icon}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
      

        {/* INVESTOR CARDS */}
        {userSelector?.accountType === "Investor" && (
          <div className="grid grid-cols-4 gap-4 mt-8 max-sm:grid-cols-1 max-lg:grid-cols-2">
            {investorCards.map((card) => (
              <Card key={card.id}>
                <CardContent className="px-4 py-5">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex flex-col">
                      <h1 className="text-gray-600 text-sm">{card.title}</h1>
                      <h1 className="font-bold text-xl">{card.metric}</h1>
                    </div>

                    <div className="bg-main-yellow text-white p-2 rounded-lg">
                      {card.icon}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* RECENT ACTIVITIES */}
        <div className="bg-white p-6 mt-8 rounded-2xl max-sm:p-3 max-sm:rounded-xl">
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <div className="font-semibold text-xl max-sm:text-lg max-lg:text-lg">
                <h1>Recent orders</h1>
              </div>
            </div>

            <div className="">
              <OrdersTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

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
import UsersTables from "@/components/dashboard/UsersTables";

function Users() {
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
            <p className="text-gray-600 text-sm">Users</p>
          </div>
        </div>

        {/* RECENT ACTIVITIES */}
        <div className="bg-white p-6 mt-8 rounded-2xl max-sm:p-3 max-sm:rounded-xl">
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <div className="font-semibold text-xl max-sm:text-lg max-lg:text-lg">
                <h1>All users</h1>
              </div>
            </div>

            <div className="">
              <UsersTables />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;

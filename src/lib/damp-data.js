import {
  Invoice01Icon,
  Invoice02Icon,
  Invoice03Icon,
  MoneyBag02Icon,
} from "hugeicons-react";

export const cards = [
  {
    id: 1,
    title: "Total Invoices",
    metric: "28",
    icon: <Invoice01Icon size={20} />,
  },
  {
    id: 2,
    title: "Pending Invoices",
    metric: "19",
    icon: <Invoice03Icon size={20} />,
  },
  {
    id: 3,
    title: "Unsuccessful invoices",
    metric: "9",
    icon: <Invoice02Icon size={20} />,
  },
  {
    id: 4,
    title: "Total Invoices",
    metric: "TZS 5,173,000",
    icon: <MoneyBag02Icon size={20} />,
  },
];

export const investorCards = [
  {
    id: 1,
    title: "Your Bids",
    metric: "28",
    icon: <Invoice01Icon size={20} />,
  },
  {
    id: 2,
    title: "Paid Investments",
    metric: "19",
    icon: <Invoice03Icon size={20} />,
  },
  {
    id: 3,
    title: "Winvo Balance",
    metric: "9",
    icon: <Invoice02Icon size={20} />,
  },
  {
    id: 4,
    title: "Winvo Wallet",
    metric: "TZS 15,173,000",
    icon: <MoneyBag02Icon size={20} />,
  },
];

export const invoices = [
  {
    id: 1,
    invoice: "Tech requirements.pdf",
    paymentStatus: "Completed",
    totalAmount: 30000000,
    requested: 19000000,
    date: "02 Jan 2024",
  },
  {
    id: 2,
    invoice: "Dashboard screenshot.jpg",
    paymentStatus: "Pending",
    totalAmount: 80700000,
    requested: 19000000,
    date: "10 Jan 2024",
  },
  {
    id: 3,
    invoice: "Dashboard prototype recording.mp4",
    paymentStatus: "Completed",
    totalAmount: 60020000,
    requested: 6000000,
    date: "14 Feb 2024",
  },
  {
    id: 4,
    invoice: "Dashboard prototype FINAL.fig",
    paymentStatus: "On hold",
    totalAmount: 400000000,
    requested: 209000000,
    date: "14 Mar 2024",
  },
  {
    id: 5,
    invoice: "UX Design Guidelines.docx",
    paymentStatus: "Completed",
    totalAmount: 30000000,
    requested: 11800000,
    date: "01 Apr 2024",
  },
  {
    id: 6,
    invoice: "Dashboard interaction.framerx",
    paymentStatus: "Pending",
    totalAmount: 91000000,
    requested: 71000000,
    date: "18 Apr 2024",
  },
  {
    id: 7,
    invoice: "App inspiration.png",
    paymentStatus: "Pending",
    totalAmount: 91000000,
    requested: 71000000,
    date: "18 Apr 2024",
  },
];

export const markets = [
  {
    id: 1,
    title: "Dashboard prototype recording",
    category: "Category",
    description:
      "Lorem ipsum dolor sit amet consectetur. In cursus tristique ut nullam eu nulla vitae.",
    details: [
      {
        title: "Amount",
        metric: "105M",
      },
      {
        title: "Raised",
        metric: "89M",
      },
      {
        title: "Return",
        metric: "5%",
      },
      {
        title: "Days left",
        metric: "4",
      },
    ],
  },

  {
    id: 2,
    title: "Dashboard prototype recording",
    category: "Category",
    description:
      "Lorem ipsum dolor sit amet consectetur. In cursus tristique ut nullam eu nulla vitae.",
    details: [
      {
        title: "Amount",
        metric: "79M",
      },
      {
        title: "Raised",
        metric: "62M",
      },
      {
        title: "Return",
        metric: "5%",
      },
      {
        title: "Days left",
        metric: "27",
      },
    ],
  },

  {
    id: 3,
    title: "Dashboard  recording",
    category: "Category",
    description:
      "Lorem ipsum dolor sit amet consectetur. In cursus tristique ut nullam eu nulla vitae.",
    details: [
      {
        title: "Amount",
        metric: "10M",
      },
      {
        title: "Raised",
        metric: "4M",
      },
      {
        title: "Return",
        metric: "5%",
      },
      {
        title: "Days left",
        metric: "30",
      },
    ],
  },
];

export const bidders = [
  {
    id: 1,
    name: "Moses Ibrahim",
    img: "/img/dashboard/profile.png",
    days: "3 days",
    amount: "5.5M",
  },

  {
    id: 2,
    name: "Anonymous",
    img: "/img/dashboard/profile.png",
    days: "19 days",
    amount: "10M",
  },

  {
    id: 3,
    name: "Rachel Charles",
    img: "/img/dashboard/profile.png",
    days: "23 days",
    amount: "8M",
  },
  {
    id: 4,
    name: "Anonymous",
    img: "/img/dashboard/profile.png",
    days: "14 days",
    amount: "4M",
  },
];

export const fundAccounts = [
  {
    id: 1,
    name: "Jonathan Doe",
    accountNumber: "6782 1234 4321 8005",
  },

  {
    id: 2,
    name: "Jonathan Doe",
    accountNumber: "2579 1234 4321 2357",
  },

]

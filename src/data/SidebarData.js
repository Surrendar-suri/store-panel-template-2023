const sidebarRoutes=[
    {
        title: "Dashboard",
        icon: "bx bx-home-circle",
        path: "/dashboard"
    },
    {
        title: "Business",
        icon: "bx bx-briefcase-alt",
        path: "/#",
        "childrens": [
            {
                title: "Merchant List",
                icon: "bx bxs-store-alt",
                path: "/storemerchant"
            },
            {
                title: "Store List",
                icon: "bx bx-store",
                path: "/storelist"
            },
            {
                title: "SubUser list",
                icon: "fa-solid fa-users",
                path: "/subuserlist"
            },
            {
                title: "SubMerchant list",
                icon: "fa-solid fa-users",
                path: "/submerchantlist"
            },
            {
                title: "Vpa list",
                icon: "fa-solid fa-money-bill-transfer",
                path: "/vpalist"
            },
            {
                title: "Bank list",
                icon: "bx bxs-bank",
                path: "/banklist"
            }

        ]
    },
    {
        title: "Payments",
        icon: "bx bx-transfer",
        path: "/#",
        "childrens": [
            {
                title: "Transaction List",
                icon: "bx bx-money-withdraw",
                path: "/transaction"
            },
            {
                title: "UPI List",
                icon: "bx bx-money-withdraw",
                path: "/upitransaction"
            },
            {
                title: "Paylink List",
                icon: "bx bx-link",
                path: "/paylinktransaction"
            },
            {
                title: "Manual List",
                icon: "bx bx-cog",
                path: "/manualtransaction"
            },
            {
                title: "Settlement List",
                icon: "fa-solid fa-sack-dollar",
                path: "/settlementtransaction"
            }
        ]
    },
    {
        title: "Your Merchants",
        icon: "bx bx-group",
        path: "/#",
        "childrens": [
            {
                title: "Merchants",
                icon: "bx bx-user",
                path: "/merchants"
            },
            {
                title: "Generate QR Merchant",
                icon: "bx bx-qr",
                path: "/generateqrmerchant"
            },
            {
                title: "Merchant Qr Request",
                icon: "bx bx-qr-scan",
                path: "/merchantqrrequest"
            },
            {
                title: "Blocked Merchants",
                icon: "fa-solid fa-user-xmark",
                path: "/blockedmerchants"
            }
        ]
    },
    {
        title: "Management",
        icon: "bx bx-list-ul",
        path: "/#",
        "childrens": [
            {
                title: "Sub Admin",
                icon: "bi bi-people-fill",
                path: "/subadmins"
            },
            {
                title: "Categories",
                icon: "bx bx-category-alt",
                path: "/categories"
            },
            {
                title: "Banks",
                icon: "bx bxs-bank",
                path: "/banks"
            },
            {
                title: "Paylinks",
                icon: "bx bx-link",
                path: "/managementpaylink"
            },
            {
                title: "Disputes",
                icon: "bi-question-circle-fill",
                path: "/disputes"
            },
            {
                title: "Push Notification",
                icon: "bx bxs-bell-ring",
                path: "/pushnotification"
            }

        ]
    },
    {
        title: "Approvals",
        icon: "bi bi-hand-thumbs-up",
        path: "/#",
        "childrens": [
            {
                title: "Payouts",
                icon: "bx bxs-navigation",
                path: "/payouts"
            },
            {
                title: "Paylinks",
                icon: "bx bx-link-external",
                path: "/approvalpaylinks"
            },
            {
                title: "Bank Approve",
                icon: "bi bi-bank2",
                path: "/bankapprove"
            }
        ]
    },
    {
        title: "Insurance",
        icon: "bi bi-shield-shaded",
        path: "/#",
        "childrens": [
            {
                title: "Personal",
                icon: "bx bxs-user",
                path: "/personal"
            },
            {
                title: "Shop",
                icon: "bx bx-shopping-bag",
                path: "/shop"
            }
        ]
    },
    {
        title: "Inventory",
        icon: "bi bi-cart4",
        path: "/inventory"
    },
    {
        title: "Settings",
        icon: "bx bx-cog",
        path: "/settings"
    }
]
export default sidebarRoutes;
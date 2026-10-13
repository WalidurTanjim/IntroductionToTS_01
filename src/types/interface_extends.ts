// USER_ROLE_OPTONS
const userRole = ["Admin", "Moderator", "User", "Guest"] as const;
type USER_ROLE_OPTIONS = typeof userRole[number];

// ADMIN_PERMISSION_OPTIONS
const adminPermission = ["Add user", "Restrict user", "Remove user"] as const;
type ADMIN_PERMISSION_OPTIONS = typeof adminPermission[number];

// MODERATOR_PERMISSION_OPTIONS

interface User {
    name: string;
    role: USER_ROLE_OPTIONS;
    email: string;
}

interface Admin extends User {
    adminPermission:  ADMIN_PERMISSION_OPTIONS[];
}

const bigBoos: Admin = {
    name: "Walidur Tanjim",
    role: "Admin",
    email: "walidur.tanjim@gmail.com",
    adminPermission: ["Add user", "Restrict user", "Remove user"],
}

import React, { useState } from "react";

import Navbar from "@src/layouts/Navbar";
import Sidebar from "@src/layouts/Sidebar";

const DashboardPage = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
	return (
		<div>
			<Navbar toggleSidebar={toggleSidebar} isDark={false}/>
			<Sidebar isOpen={sidebarOpen} isDark={false}/>
		</div>
	);
};

export default DashboardPage;
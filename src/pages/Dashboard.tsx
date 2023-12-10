import React, { useEffect, useState } from "react";

import Navbar from "@src/layouts/Navbar";
import Sidebar from "@src/layouts/Sidebar";
import { useRoutes } from "react-router-dom";
import ProductsRoutes from "@src/modules/products/productsRoutes";
import "@src/pages/DashboardPage.scss";

const DashboardPage = () => {
	const productRoutes = useRoutes(ProductsRoutes());
	const [sidebarOpen, setSidebarOpen] = useState(true);
	const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

	useEffect(() => {
		const handleResize = () => {
			if(window.innerWidth <= 768){
				setSidebarOpen(false);
			}else{
				setSidebarOpen(true);
			}
		};
		window.addEventListener("resize", handleResize);
		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return (
		<div>
			<Navbar toggleSidebar={toggleSidebar} isDark={false}/>
			<Sidebar isOpen={sidebarOpen} isDark={false}/>
			<main className="main-content">
				{productRoutes}
			</main>
		</div>
	);
};

export default DashboardPage;
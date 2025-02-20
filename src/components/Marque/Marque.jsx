/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const Marque = ({ cls }) => {
	const [sizeDevices, setSizeDevices] = useState(Window.innerWidth);

	useEffect(() => {
		const marx = document.querySelectorAll("#zhaenxMark");

		marx.forEach((markElement, valueScrool) => {
			markElement.setAttribute("behavior", "alternate");
			markElement.setAttribute("scrollamount", "50");
			markElement.innerHTML = "◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼◼";

			if (valueScrool === 0) {
				markElement.setAttribute("scrollamount", "100");
			} else {
				markElement.setAttribute("scrollamount", "130");
			}
			// Jika device = 576, maka ubah tulisan
			if (sizeDevices < 576) {
				markElement.innerHTML = "◼◼◼◼◼◼◼◼◼◼";
				if (valueScrool === 0) {
					markElement.setAttribute("scrollamount", "80");
				} else {
					markElement.setAttribute("scrollamount", "100");
				}
			}
			
		});

		// Update window width on resize
		const handleResize = () => {
			setSizeDevices(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [sizeDevices]);

	return (
		<div className="col-lg-12 px-0 noSelect">
			<div className="boxMark">
				<marquee className={`zhaenxMark ${cls}`} id="zhaenxMark" width={"100%"}></marquee>
			</div>
		</div>
	);
};

export default Marque;

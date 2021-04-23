import React from "react";
import Homepagestyles from "./Homepagestyle";
import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<Homepagestyles>
			<div className="HeaderContainer">
				<div className="Logo">
					<h1>Lambda Eats</h1>
				</div>
				<div className="Navigation">
					<Link to="/">Home</Link>
					<Link to="/Pizza">Form</Link>
				</div>
			</div>
			<div className="TextContainer">
				<div className="TextTitle">
					<h2> Welcome to Lambda Eats! </h2>
				</div>
				<div className="TextParagraph">
					<p>
						Where you can enjoy developing your own pizza while you code.
						<br /> We promise to hand create each pizza with love and gloves!
						For you're safety <br /> and ours. Head on over to our{" "}
						<span>form page</span> to place your order now. We appreciate your
						business!
					</p>
				</div>
				<div className="buttonDiv">
					<p>Ready for pizza? Click on the button below.</p>
					<Link to="/Pizza">
						<button>PIZZA TIME</button>
					</Link>
				</div>
                <div>
                    <img alt="" href='https://i.kym-cdn.com/photos/images/newsfeed/001/487/364/6f4.png'/>
                </div>
			</div>
		</Homepagestyles>
	);
};
export default HomePage;

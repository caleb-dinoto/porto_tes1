// components/Intelliticks.js
"use client"
import { useEffect } from "react";

// Component for Intelliticks chat widget
const Chat = () => {
	useEffect(() => {
		(function (Q, R) {
			if (Q.__qr__) return;
			Q.__qr__ = {
				brandSetting: {
					includePageLink: false,
					messageText: "Hi.. I have a query.",
					phoneNumber: "+6289507576487"
				},
				chatButtonSetting: {
					sideMargin: 20,
					marginBottom: 20,
					position: "right",
					buttonType: "ICON",
					buttonText: undefined,
					buttonBgColor: "#04AA6D",
					buttonTextColor: "#fff"
				}
			};
			var u = 'https://webview.quickreply.ai/whatsapp/script-v2.min.js';
			var h = R.head || R.documentElement;
			var e = R.createElement('script');
			e.type = 'text/javascript';
			e.async = true;
			e.src = u;
			h.insertBefore(e, h.lastChild);
		})(window, document);
	}, []);




	return null;
};

export default Chat;

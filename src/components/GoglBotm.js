import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize"; // Put your HTML here:

const customHtml = `
<a href='https://play.google.com/store/apps/details?id=com.privaterf.tender&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Доступно в Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/ru_badge_web_generic.png' width="100%"/></a>`;

const EmbedHTML = ({
	children,
	...props
}) => {
	const ref = useRef(null);
	useLayoutEffect(() => {
		ref.current.innerHTML = customHtml;
	}, []);
	return <div {...props} ref={ref} />;
};

export default atomize(EmbedHTML)({
	name: "google",
	normalize: true,
	mixins: true
});
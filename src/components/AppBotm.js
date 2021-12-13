import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize"; // Put your HTML here:

const customHtml = `
<a href='https://apps.apple.com/ru/app/privat-tender/id1582622548'><img alt='Доступно в App Store' src='https://uploads.quarkly.io/602a53318e7be4001e97a8e2/images/Download_on_the_App_Store_Badge_RU_RGB_blk_100317.svg?v=2021-03-16T20:27:06.320Z' width="100%"/></a>`;

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
	name: "apple",
	normalize: true,
	mixins: true
});
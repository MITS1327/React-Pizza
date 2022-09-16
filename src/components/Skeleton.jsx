import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={300}
        height={465}
        viewBox="0 0 280 465"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="123" cy="97" r="88" />
        <rect x="14" y="194" rx="15" ry="15" width="221" height="35" />
        <rect x="15" y="241" rx="15" ry="15" width="219" height="102" />
        <rect x="225" y="508" rx="15" ry="15" width="115" height="45" />
        <rect x="53" y="506" rx="15" ry="15" width="98" height="37" />
        <rect x="19" y="367" rx="15" ry="15" width="78" height="32" />
        <rect x="136" y="368" rx="15" ry="15" width="92" height="43" />
    </ContentLoader>
)

export default Skeleton
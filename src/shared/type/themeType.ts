// button types
export type TButtonStatus = "default" | "focus" | "hover" | "hoverFocus" | "active";
export type TButtonVariant = "primary" | "secondary" | "error" | "disable";

// icons types
export type TIcon =
    | "arrow-left"
    | "arrow-right"
    | "bell"
    | "bell-filled"
    | "check"
    | "chevron-down"
    | "chevron-down-fill"
    | "chevron-up"
    | "heart"
    | "heart-smily"
    | "info"
    | "location"
    | "plus"
    | "search"
    | "setting"
    | "twinkle"
    | "user"
    | "x"
    | "google"
    | "card-heart"
    | "arrow-target"
    | "graph-bar";

// typo types
export type TTypoVariant =
    | "display/superLarge"
    | "display/large"
    | "display/medium"
    | "display/small"
    | "display/notificationTitle"
    | "h1/bold"
    | "h2/medium"
    | "h3/medium"
    | "h4/regular"
    | "h5/bold"
    | "h6/bold"
    | "body/bold"
    | "body/medium"
    | "body/regular"
    | "label/bold"
    | "label/medium"
    | "label/regular"
    | "button/large"
    | "button/medium"
    | "button/small"
    | "link/large"
    | "link/regular"
    | "tag/bold"
    | "tag/medium"
    | "tag/regular"
    | "supporting/regular"
    | "supporting/medium"
    | "supporting/bold";

// push notification types
export type TPushNotification = "default" | "error" | "success" | "info";

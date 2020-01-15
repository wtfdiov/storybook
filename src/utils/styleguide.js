import colors from "../constants/colors";

export function getBackgroundColor(type, isHover) {
  switch (type) {
    case "secondary":
      return colors.footerTextColor;
    case "outline":
      return colors.white;
    case "success":
      return isHover ? colors.actionGreenHover : colors.actionGreen;
    default:
      return isHover ? colors.brandHover : colors.brand;
  }
}

export function getTextColor(type) {
  switch (type) {
    case "secondary":
      return colors.brand;
    case "outline":
      return colors.brand;
    default:
      return colors.white;
  }
}

export function getFontFamily(weight) {
  switch (weight) {
    case "bold":
      return "Graphik-Bold";
    case "semibold":
      return "Graphik-Semibold";
    case "medium":
      return "Graphik-Medium";
    default:
      return "Graphik-Regular";
  }
}

export function getTextProperties(size) {
  switch (size) {
    case "huge":
      return {
        fontFamily: getFontFamily("semibold"),
        fontSize: "2rem",
        fontWeight: 600,
        lineHeight: 1.5
      };
    case "large":
      return {
        fontFamily: getFontFamily("semibold"),
        fontSize: "1.777rem",
        fontWeight: 500,
        lineHeight: 1.5
      };
    case "medium":
      return {
        fontFamily: getFontFamily("medium"),
        fontSize: "1.333rem",
        fontWeight: 500,
        lineHeight: 1.5
      };
    case "small":
      return {
        fontFamily: getFontFamily("regular"),
        fontSize: "0.777rem",
        fontWeight: 500,
        lineHeight: 1.5
      };
    default:
      return {
        fontFamily: getFontFamily("regular"),
        fontSize: "0.888rem",
        fontWeight: 500,
        lineHeight: 1.5
      };
  }
}

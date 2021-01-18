import StyledIcon from "./styles"
import { AddFilled, AddOutline, Back, Calendar, Drop, Favourite, Lightbulb } from "./svgs"

export default function Icon({ colour, symbol }) {
  const iconColour = colour ? colour : 'dark-neutral';
  const iconSymbol = symbol ? symbol : 'leaf'
  let iconSvg;

  switch (iconSymbol) {
    case "back":
      iconSvg = <Back />
      break
    case "addFilled":
      iconSvg = <AddFilled />
      break
    case "addOutline":
      iconSvg = <AddOutline />
      break
    case "drop":
      iconSvg = <Drop />
      break
    case "lightbulb":
      iconSvg = <Lightbulb />
      break
    case "calendar":
      iconSvg = <Calendar />
      break
    case "favourite":
      iconSvg = <Favourite />
      break
    default:
  }

  return (
    <StyledIcon>{iconSvg}</StyledIcon>
  );
}
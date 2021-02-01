import StyledIcon from "./styles";
import {
  AddFilled,
  AddFromGallery,
  AddOutline,
  Back,
  Calendar,
  Check,
  Close,
  Delay,
  Delete,
  DownArrow,
  Drop,
  Edit,
  Favourite,
  Fertilizer,
  Filter,
  Leaf,
  Lightbulb,
  Logo,
  Next,
  Previous,
  Repeat,
  Save,
  Search,
  Settings,
  Sort,
  TakePhoto,
  Tasks,
  UpArrow,
  Upload,
} from "./svgs";

export default function Icon({ colour, symbol, size, background, onClick }) {
  const iconColour = colour ? colour : "dark-neutral";
  const iconSymbol = symbol ? symbol : "leaf";
  const iconSize = size ? size : 24;
  const iconBackground = background ? background : false;
  let iconSvg;

  switch (iconSymbol) {
    case "back":
      iconSvg = <Back />;
      break;
    case "addFilled":
      iconSvg = <AddFilled />;
      break;
    case "addOutline":
      iconSvg = <AddOutline />;
      break;
    case "drop":
      iconSvg = <Drop />;
      break;
    case "lightbulb":
      iconSvg = <Lightbulb />;
      break;
    case "delay":
      iconSvg = <Delay />;
      break;
    case "calendar":
      iconSvg = <Calendar />;
      break;
    case "edit":
      iconSvg = <Edit />;
      break;
    case "favourite":
      iconSvg = <Favourite />;
      break;
    case "sort":
      iconSvg = <Sort />;
      break;
    case "leaf":
      iconSvg = <Leaf />;
      break;
    case "addFromGallery":
      iconSvg = <AddFromGallery />;
      break;
    case "check":
      iconSvg = <Check />;
      break;
    case "close":
      iconSvg = <Close />;
      break;
    case "delete":
      iconSvg = <Delete />;
      break;
    case "downArrow":
      iconSvg = <DownArrow />;
      break;
    case "fertilizer":
      iconSvg = <Fertilizer />;
      break;
    case "filter":
      iconSvg = <Filter />;
      break;
    case "logo":
      iconSvg = <Logo />;
      break;
    case "next":
      iconSvg = <Next />;
      break;
    case "previous":
      iconSvg = <Previous />;
      break;
    case "repeat":
      iconSvg = <Repeat />;
      break;
    case "save":
      iconSvg = <Save />;
      break;
    case "search":
      iconSvg = <Search />;
      break;
    case "settings":
      iconSvg = <Settings />;
      break;
    case "takePhoto":
      iconSvg = <TakePhoto />;
      break;
    case "tasks":
      iconSvg = <Tasks />;
      break;
    case "upArrow":
      iconSvg = <UpArrow />;
      break;
    case "upload":
      iconSvg = <Upload />;
      break;
    default:
      iconSvg = null;
  }

  return (
    <StyledIcon
      colour={iconColour}
      size={iconSize}
      background={iconBackground}
      onClick={onClick}
    >
      {iconSvg}
    </StyledIcon>
  );
}

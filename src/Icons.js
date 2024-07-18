import {Image} from 'react-native';

function Home({size}) {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('./../assets/Home.png')}
    />
  );
}
function HomeDark({size}) {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('./../assets/HomeDark.png')}
    />
  );
}
function Search({size}) {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('./../assets/Search.png')}
    />
  );
}
function SearchDark({size}) {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('./../assets/SearchDark.png')}
    />
  );
}

function Reels({size}) {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('./../assets/Reels.png')}
    />
  );
}
function ReelsDark({size}) {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('./../assets/ReelsDark.png')}
    />
  );
}

function Shop({size}) {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('./../assets/Shop.png')}
    />
  );
}
function ShopDark({size}) {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('./../assets/ShopDark.png')}
    />
  );
}

function Logo() {
  return <Image source={require('./../assets/Logo.png')} />;
}

function Plus({size}) {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/plus.png')}
    />
  );
}

function Like({size}) {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/like.png')}
    />
  );
}
function Chat({size}) {
  return (
    <Image
      style={{width: size, height: size}}
      source={require('../assets/chat.png')}
    />
  );
}
function Dots({size}) {
  return (
    <Image
      style={{width: 14, height: 24}}
      source={require('../assets/dots.png')}
    />
  );
}
function Comment({size}) {
  return (
    <Image
      style={{width: 22, height: 22}}
      source={require('../assets/Comment.png')}
    />
  );
}
function Record({size}) {
  return (
    <Image
      style={{width: 22, height: 22}}
      source={require('../assets/record.png')}
    />
  );
}
function Transmit({size}) {
  return (
    <Image
      style={{width: 22, height: 22}}
      source={require('../assets/transmit.png')}
    />
  );
}
function Dropdown({size}) {
  return (
    <Image
      style={{width: 22, height: 22}}
      source={require('../assets/dropdown.png')}
    />
  );
}
function Menu({size}) {
  return (
    <Image
      style={{width: 24, height: 24}}
      source={require('../assets/menu.png')}
    />
  );
}
export {
  Home,
  Logo,
  HomeDark,
  Search,
  SearchDark,
  Reels,
  ReelsDark,
  Shop,
  ShopDark,
  Plus,
  Like,
  Chat,
  Dots,
  Comment,
  Record,
  Transmit,
  Dropdown,
  Menu,
};

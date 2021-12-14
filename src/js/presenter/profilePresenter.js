import React from "react";
import promiseNoRender from "../promiseNoRender.js";
import ProfileView from "../views/profileView.js";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

function ProfilePresenter(props) {
    const [user, setUser] = React.useState(props.model.profile);
    const [watchlistMovies, setWatchlistMovies] = React.useState(props.model.watchlistMovies);

    React.useEffect(() => {
        const obs = () => {
            setUser(props.model.profile);
            setWatchlistMovies(props.model.watchlistMovies);
        };
        props.model.addObserver(obs);
        return () => props.model.removeObserver(obs);
    }, [props.model]);

    return (
        <div>
            {promiseNoRender('', user, null) ||
                <ProfileView
                    user={user}
                    watchlistMovies={watchlistMovies}
                />
            }
        </div>
    );    
}

// const getItems = () =>
//   Array(20)
//     .fill(0)
//     .map((_, ind) => ({ id: `element-${ind}` }));

// function ProfilePresenter() {
//   const [items, setItems] = React.useState(getItems);
//   const [selected, setSelected] = React.useState([]);
//   const [position, setPosition] = React.useState(0);

//   const isItemSelected = (id) => !!selected.find((el) => el === id);

//   const handleClick =
//     (id) =>
//     ({ getItemById, scrollToItem }) => {
//       const itemSelected = isItemSelected(id);

//       setSelected((currentSelected) =>
//         itemSelected
//           ? currentSelected.filter((el) => el !== id)
//           : currentSelected.concat(id)
//       );
//     };

//   return (
//     <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
//       {items.map(({ id }) => (
//         <Card
//           itemId={id} // NOTE: itemId is required for track items
//           title={id}
//         />
//       ))}
//     </ScrollMenu>
//   );
// }

// function LeftArrow() {
//   const { isFirstItemVisible, scrollPrev } =
//     React.useContext(VisibilityContext);

//   return (
//     <button disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
//       Left
//     </button>
//   );
// }

// function RightArrow() {
//   const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

//   return (
//     <button disabled={isLastItemVisible} onClick={() => scrollNext()}>
//       Right
//     </button>
//   );
// }

// function Card({}) {
//   const visibility = React.useContext(VisibilityContext);

//   return (
//     <div
//       style={{
//         width: '560px',
//         backgroundColor: '#white',
//         paddingTop: '150px',
//       }}
//       tabIndex={0}
//     >
//       <div className="card"
//       style={{
//         backgroundColor: '#fff',
//       }}>
//     </div>
//     </div>
//   );
// }


export default ProfilePresenter;

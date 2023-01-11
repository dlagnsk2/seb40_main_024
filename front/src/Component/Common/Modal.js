import styled from 'styled-components';
// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars

// eslint-disable-next-line no-unused-vars
import { title, setTitleName } from '../../Redux/titleSlice';
// import { useState,t, useContext } from 'react';
const Div = styled.div`
  .modal {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    color: #020626;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 99999;
  }
  .modal button {
    outline: none;
    cursor: pointer;
    border: 0;
  }
  .modal > section {
    min-width: 290px;
    margin: 0 auto;
    border-radius: 0.3rem;
    background-color: #dee2e6;
    width: 90%;
    border: 1px solid #92b4ec;
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: modal-show 0.6s;
    overflow: hidden;
  }
  .modal > section > header {
    position: relative;
    padding: 16px 64px 16px 16px;
    background-color: #020626;
    font-weight: 700;
    color: #92b4ec;
  }
  .modal > section > header button {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 30px;
    font-size: 21px;
    font-weight: 700;
    text-align: center;
    color: #999;
    background-color: transparent;
  }
  .modal > section > main {
    padding: 16px;
    border-bottom: 1px solid #dee2e6;
    border-top: 1px solid #dee2e6;
  }
  .modal > section > main > div {
    height: 250px;
  }
  .modal > section > main > div > div {
    width: 256px;
  }
  .modal > section > main > div > div > div {
    width: 100%;
    margin-left: 0px;
    margin-right: 0px;
  }
  .modal > section > main > div > div > div > input {
    width: 100%;
    margin-left: 0px;
    margin-right: 0px;
    background-color: transparent;
  }
  .modal > section > footer {
    padding: 12px 16px;
    text-align: right;
  }

  .modal > section > footer button {
    padding: 6px 12px;
    color: #92b4ec;
    font-weight: bold;
    background-color: #020626;
    border-radius: 5px;
    font-size: 13px;
  }
  .modal > section > main button {
    padding: 6px 12px;
    color: #92b4ec;
    font-weight: bold;
    background-color: #020626;
    border-radius: 5px;
    font-size: 13px;
  }
  .modal.openModal {
    display: flex;
    align-items: center;
    /* 팝업이 열릴때 스르륵 열리는 효과 */
    animation: modal-bg-show 0.3s;
  }
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Modal = (props) => {
  const { open, close, header } = props;

  return (
    <Div>
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <section>
            <header>
              {header}
              <button className="close" onClick={close}>
                &times;
              </button>
            </header>
            <main>{props.children}</main>
            <footer>
              <button className="close" onClick={close}>
                close
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    </Div>
  );
};

export const AutoModal = (props) => {
  const { open, close, header } = props;
  // eslint-disable-next-line no-unused-vars
  const [check, setCheck] = useState(false);

  const checkHandler = () => {
    setCheck(true);
    setTimeout(() => {
      setCheck(false);
      close();
      window.location.reload();
    }, 5);
  };
  return (
    <Div>
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <section>
            <header>
              {header}
              <button className="close">&times;</button>
            </header>
            <main>{props.children}</main>
            <footer>
              <button className="close" onClick={(() => close, checkHandler)}>
                close
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    </Div>
  );
};
export const AssetListPostModal1 = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { open, close, header, api } = props;

  // eslint-disable-next-line no-unused-vars
  const miniHandler = () => {
    api();
    // setTimeout(() => {
    //   window.location.reload();
    // }, 10);
  };
  return (
    <Div>
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <section>
            <header>
              {header}
              <button className="close" onClick={close}>
                &times;
              </button>
            </header>
            <main>{props.children}</main>
            <footer>
              <button className="edit" onClick={miniHandler}>
                Edit
              </button>
              <button
                className="close"
                onClick={close}
                style={{ marginLeft: '20px', width: '65.52px' }}
              >
                close
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    </Div>
  );
};
export const AssetTextEditModal1 = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { open, close, header, EditText } = props;
  // console.log('EditText', EditText);
  // const miniHandler = () => {
  //   if (EditText.length >= 1) {
  //     api();
  //     setTimeout(() => {
  //       window.location.reload();
  //     }, 5);
  //   }
  // };
  return (
    <Div>
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <section>
            <header>
              {header}
              <button className="close" onClick={close}>
                &times;
              </button>
            </header>
            <main>{props.children}</main>
            <footer>
              <button
                className="close"
                onClick={close}
                style={{ marginLeft: '20px', width: '65.52px' }}
              >
                close
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    </Div>
  );
};

export const AssetTextEditModal2 = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { open, close, header, api } = props;
  // const miniHandler = () => {
  //   api();
  //   setTimeout(() => {
  //     window.location.reload();
  //   }, 5);
  // };
  return (
    <Div>
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <section>
            <header>
              {header}
              <button className="close" onClick={close}>
                &times;
              </button>
            </header>
            <main>{props.children}</main>
            <footer>
              {/* <button className="edit" onClick={miniHandler}>
                Edit
              </button> */}
              <button
                className="close"
                onClick={close}
                style={{ marginLeft: '20px', width: '65.52px' }}
              >
                close
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    </Div>
  );
};
export const AssetTextEditModal3 = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { open, close, header, api } = props;
  // const miniHandler = () => {
  //   api();
  //   setTimeout(() => {
  //     window.location.reload();
  //   }, 5);
  // };
  return (
    <Div>
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <section>
            <header>
              {header}
              <button className="close" onClick={close}>
                &times;
              </button>
            </header>
            <main>{props.children}</main>
            <footer>
              {/* <button className="edit" onClick={miniHandler}>
                Edit
              </button> */}
              <button
                className="close"
                onClick={close}
                style={{ marginLeft: '20px', width: '65.52px' }}
              >
                close
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    </Div>
  );
};
export const AssetTextEditModal4 = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { open, close, header, api } = props;
  // const miniHandler = () => {
  //   api();
  //   setTimeout(() => {
  //     window.location.reload();
  //   }, 5);
  // };
  return (
    <Div>
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <section>
            <header>
              {header}
              <button className="close" onClick={close}>
                &times;
              </button>
            </header>
            <main>{props.children}</main>
            <footer>
              {/* <button className="edit" onClick={miniHandler}>
                Edit
              </button> */}
              <button
                className="close"
                onClick={close}
                style={{ marginLeft: '20px', width: '65.52px' }}
              >
                close
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    </Div>
  );
};
export const AssetTextEditModal5 = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { open, close, header, api } = props;
  // const miniHandler = () => {
  //   api();
  //   setTimeout(() => {
  //     window.location.reload();
  //   }, 5);
  // };
  return (
    <Div>
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <section>
            <header>
              {header}
              <button className="close" onClick={close}>
                &times;
              </button>
            </header>
            <main>{props.children}</main>
            <footer>
              {/* <button className="edit" onClick={miniHandler}>
                Edit
              </button> */}
              <button
                className="close"
                onClick={close}
                style={{ marginLeft: '20px', width: '65.52px' }}
              >
                close
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    </Div>
  );
};
export const AssetTextEditModal6 = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { open, close, header, api } = props;

  // eslint-disable-next-line no-unused-vars
  // const miniHandler = () => {
  //   api();
  //   setTimeout(() => {
  //     window.location.reload();
  //   }, 5);
  // };
  return (
    <Div>
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <section>
            <header>
              {header}
              <button className="close" onClick={close}>
                &times;
              </button>
            </header>
            <main>{props.children}</main>
            <footer>
              {/* <button className="edit" onClick={miniHandler}>
                Edit
              </button> */}
              <button
                className="close"
                onClick={close}
                style={{ marginLeft: '20px', width: '65.52px' }}
              >
                close
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    </Div>
  );
};

export const AssetDeleteModal1 = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { open, close, header, api1 } = props;
  const miniHandler = () => {
    api1();
    setTimeout(() => {
      window.location.reload();
    }, 5);
  };
  return (
    <Div>
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <section>
            <header>
              {header}
              <button className="close" onClick={close}>
                &times;
              </button>
            </header>
            <main>{props.children}</main>
            <footer>
              <button className="close" onClick={miniHandler}>
                Delete
              </button>
              <button
                className="close"
                onClick={close}
                style={{ marginLeft: '20px', width: '65.52px' }}
              >
                close
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    </Div>
  );
};

export const AssetDeleteModal2 = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { open, close, header, api2 } = props;
  const miniHandler = () => {
    api2();
    setTimeout(() => {
      window.location.reload();
    }, 5);
  };
  return (
    <Div>
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <section>
            <header>
              {header}
              <button className="close" onClick={close}>
                &times;
              </button>
            </header>
            <main>{props.children}</main>
            <footer>
              <button className="close" onClick={miniHandler}>
                Delete
              </button>
              <button
                className="close"
                onClick={close}
                style={{ marginLeft: '20px', width: '65.52px' }}
              >
                close
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    </Div>
  );
};

export const AssetDeleteModal3 = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { open, close, header, api3 } = props;
  const miniHandler = () => {
    api3();
    setTimeout(() => {
      window.location.reload();
    }, 5);
  };
  return (
    <Div>
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <section>
            <header>
              {header}
              <button className="close" onClick={close}>
                &times;
              </button>
            </header>
            <main>{props.children}</main>
            <footer>
              <button className="close" onClick={miniHandler}>
                Delete
              </button>
              <button
                className="close"
                onClick={close}
                style={{ marginLeft: '20px', width: '65.52px' }}
              >
                close
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    </Div>
  );
};
export const AssetDeleteModal4 = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { open, close, header, api4 } = props;
  const miniHandler = () => {
    api4();
    setTimeout(() => {
      window.location.reload();
    }, 5);
  };
  return (
    <Div>
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <section>
            <header>
              {header}
              <button className="close" onClick={close}>
                &times;
              </button>
            </header>
            <main>{props.children}</main>
            <footer>
              <button className="close" onClick={miniHandler}>
                Delete
              </button>
              <button
                className="close"
                onClick={close}
                style={{ marginLeft: '20px', width: '65.52px' }}
              >
                close
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    </Div>
  );
};

export const AssetDeleteModal5 = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { open, close, header, api5 } = props;
  const miniHandler = () => {
    api5();
    setTimeout(() => {
      window.location.reload();
    }, 5);
  };
  return (
    <Div>
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <section>
            <header>
              {header}
              <button className="close" onClick={close}>
                &times;
              </button>
            </header>
            <main>{props.children}</main>
            <footer>
              <button className="close" onClick={miniHandler}>
                Delete
              </button>
              <button
                className="close"
                onClick={close}
                style={{ marginLeft: '20px', width: '65.52px' }}
              >
                close
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    </Div>
  );
};

export const AssetDeleteModal6 = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { open, close, header, api6 } = props;
  const miniHandler = () => {
    api6();
    setTimeout(() => {
      window.location.reload();
    }, 5);
  };
  return (
    <Div>
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <section>
            <header>
              {header}
              <button className="close" onClick={close}>
                &times;
              </button>
            </header>
            <main>{props.children}</main>
            <footer>
              <button className="close" onClick={miniHandler}>
                Delete
              </button>
              <button
                className="close"
                onClick={close}
                style={{ marginLeft: '20px', width: '65.52px' }}
              >
                close
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    </Div>
  );
};
// export const AssetDeleteEditModal2 = (props) => {
//   // eslint-disable-next-line no-unused-vars
//   const { open, close, header, api2 } = props;
//   // eslint-disable-next-line no-unused-vars
//   const miniHandler = () => {
//     api2();
//   };

//   return (
//     <Div>
//       <div className={open ? 'openModal modal' : 'modal'}>
//         {open ? (
//           <section>
//             <header>
//               {header}
//               <button className="close" onClick={close}>
//                 &times;
//               </button>
//             </header>
//             <main>{props.children}</main>
//             <footer>
//               <button className="close" onClick={miniHandler}>
//                 Delete
//               </button>
//               <button
//                 className="close"
//                 onClick={close}
//                 style={{ marginLeft: '20px' }}
//               >
//                 close
//               </button>
//             </footer>
//           </section>
//         ) : null}
//       </div>
//     </Div>
//   );
// };
// export const AssetDeleteEditModal3 = (props) => {
//   // eslint-disable-next-line no-unused-vars
//   const { open, close, header, api3 } = props;
//   // eslint-disable-next-line no-unused-vars
//   const miniHandler = () => {
//     api3();
//   };

//   return (
//     <Div>
//       <div className={open ? 'openModal modal' : 'modal'}>
//         {open ? (
//           <section>
//             <header>
//               {header}
//               <button className="close" onClick={close}>
//                 &times;
//               </button>
//             </header>
//             <main>{props.children}</main>
//             <footer>
//               <button className="close" onClick={miniHandler}>
//                 Delete
//               </button>
//               <button
//                 className="close"
//                 onClick={close}
//                 style={{ marginLeft: '20px' }}
//               >
//                 close
//               </button>
//             </footer>
//           </section>
//         ) : null}
//       </div>
//     </Div>
//   );
// };
// export const AssetDeleteEditModal4 = (props) => {
//   // eslint-disable-next-line no-unused-vars
//   const { open, close, header, api4 } = props;
//   // eslint-disable-next-line no-unused-vars
//   const miniHandler = () => {
//     api4();
//   };

//   return (
//     <Div>
//       <div className={open ? 'openModal modal' : 'modal'}>
//         {open ? (
//           <section>
//             <header>
//               {header}
//               <button className="close" onClick={close}>
//                 &times;
//               </button>
//             </header>
//             <main>{props.children}</main>
//             <footer>
//               <button className="close" onClick={miniHandler}>
//                 Delete
//               </button>
//               <button
//                 className="close"
//                 onClick={close}
//                 style={{ marginLeft: '20px' }}
//               >
//                 close
//               </button>
//             </footer>
//           </section>
//         ) : null}
//       </div>
//     </Div>
//   );
// };
// export const AssetDeleteEditModal5 = (props) => {
//   // eslint-disable-next-line no-unused-vars
//   const { open, close, header, api5 } = props;
//   // eslint-disable-next-line no-unused-vars
//   const miniHandler = () => {
//     api5();
//   };

//   return (
//     <Div>
//       <div className={open ? 'openModal modal' : 'modal'}>
//         {open ? (
//           <section>
//             <header>
//               {header}
//               <button className="close" onClick={close}>
//                 &times;
//               </button>
//             </header>
//             <main>{props.children}</main>
//             <footer>
//               <button className="close" onClick={miniHandler}>
//                 Delete
//               </button>
//               <button
//                 className="close"
//                 onClick={close}
//                 style={{ marginLeft: '20px' }}
//               >
//                 close
//               </button>
//             </footer>
//           </section>
//         ) : null}
//       </div>
//     </Div>
//   );
// };

// export const AssetDeleteEditModal6 = (props) => {
//   // eslint-disable-next-line no-unused-vars
//   const { open, close, header, api6 } = props;
//   // eslint-disable-next-line no-unused-vars
//   const miniHandler = () => {
//     api6();
//   };

//   return (
//     <Div>
//       <div className={open ? 'openModal modal' : 'modal'}>
//         {open ? (
//           <section>
//             <header>
//               {header}
//               <button className="close" onClick={close}>
//                 &times;
//               </button>
//             </header>
//             <main>{props.children}</main>
//             <footer>
//               <button className="delete" onClick={miniHandler}>
//                 Delete
//               </button>
//               <button
//                 className="close"
//                 onClick={close}
//                 style={{ marginLeft: '20px' }}
//               >
//                 close
//               </button>
//             </footer>
//           </section>
//         ) : null}
//       </div>
//     </Div>
//   );
// };
export const GoalModifyModal = (props) => {
  const { open, close, header, goalPatch, id } = props;

  return (
    <Div>
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <section>
            <header>
              {header}
              <button className="close" onClick={close}>
                &times;
              </button>
            </header>
            <main>{props.children}</main>
            <footer>
              <button className="close" onClick={goalPatch} data-id={id}>
                Edit
              </button>
              <button
                className="close"
                onClick={close}
                style={{ marginLeft: '20px' }}
              >
                close
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    </Div>
  );
};

export const SavingModal = (props) => {
  const { open, close, header } = props;

  return (
    <Div>
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <section>
            <header>
              {header}
              <button className="close" onClick={close}>
                &times;
              </button>
            </header>
            <main>{props.children}</main>
            <footer>
              <button
                className="close"
                onClick={close}
                style={{ marginLeft: '20px' }}
              >
                저장
              </button>
            </footer>
          </section>
        ) : null}
      </div>
    </Div>
  );
};
// export const AssetTextEditModal = (props) => {
//   const { open, close, header, api } = props;
//   // eslint-disable-next-line no-unused-vars
//   const [check, setCheck] = useState(false);

//   const checkHandler = () => {
//     setCheck(true);
//     setTimeout(() => {
//       setCheck(false);
//       window.location.reload();
//     }, 5);
//   };
//   return (
//     <Div>
//       <div className={open ? 'openModal modal' : 'modal'}>
//         {open ? (
//           <section>
//             <header>
//               {header}
//               <button className="close" onClick={close}>
//                 &times;
//               </button>
//             </header>
//             <main>{props.children}</main>
//             <footer>
//               <button
//                 className="edit"
//                 onClick={(() => close, checkHandler, api)}
//               >
//                 Edit
//               </button>
//               <button
//                 className="close"
//                 onClick={close}
//                 style={{ marginLeft: '20px' }}
//               >
//                 close
//               </button>
//             </footer>
//           </section>
//         ) : null}
//       </div>
//     </Div>
//   );
// };

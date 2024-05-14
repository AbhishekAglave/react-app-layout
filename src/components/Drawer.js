import React from 'react';

function Drawer({ Navigator }) {
  return (
    <div
      class="offcanvas offcanvas-start"
      tabindex="-1"
      id="drawer"
      aria-labelledby="drawerLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="drawerLabel">
          Offcanvas
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <Navigator />
      </div>
    </div>
  );
}

export default Drawer;

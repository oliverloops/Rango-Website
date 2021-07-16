import { useRef, useEffect } from "react";

function createRootElement(id) {
  const rootContainer = document.createElement("div");
  rootContainer.setAttribute("id", id);
  return rootContainer;
}

function addRootElement(rootElem) {
  document
    .querySelector("#grid-parent")
    .insertBefore(
      rootElem,
      document.querySelector("#grid-parent").lastElementChild.nextElementSibling
    );
}

function usePortal(id) {
  const rootElemRef = useRef(null);

  console.log(rootElemRef.current);

  function removeElement(parentElem) {
    rootElemRef.current.remove();
    if (!parentElem.childElementCount) {
      parentElem.remove();
    }
  }

  useEffect(
    function setupElement() {
      // Look for existing target dom element to append to
      const existingParent = document.querySelector(`#${id}`);
      // Parent is either a new root or the existing dom element
      const parentElem = existingParent || createRootElement(id);

      // If there is no existing DOM element, add a new one.
      if (!existingParent) {
        addRootElement(parentElem);
      }

      // Add the detached element to the parent
      parentElem.appendChild(rootElemRef.current);

      setTimeout(() => {
        rootElemRef.current.className = "dissapear";
      }, 3000);

      return function removeElement() {
        rootElemRef.current.remove();
        if (!parentElem.childElementCount) {
          parentElem.remove();
        }
      };
    },
    [id]
  );

  function getRootElem() {
    if (!rootElemRef.current) {
      rootElemRef.current =
        typeof window !== undefined && document.createElement("div");
    }
    return rootElemRef.current;
  }

  return getRootElem();
}

export default usePortal;

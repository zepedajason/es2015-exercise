


function choice(items) {
   const randomIdx = Math.floor(Math.random() * items.length);
   return items[randomIdx];
}

function remove(items, item) {
    const idx = items.indexOf(item);

    if(idx !== -1) {
        return items.splice(index, 1)[0];
    }

    return undefined;
}

export {choice, remove};
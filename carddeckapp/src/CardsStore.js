let CardsData =
    [
        {
            'id': '1',
            'name': 'Dragons',
            'description': 'test deck 1abc',

            'back-image': 'Images/BackTexture1.png',

            'cards': [
                {
                    'front-image': 'Images/S9L1.png',
                    'text': ''
                },
                {
                    'front-image': 'Images/S10L1.png',
                    'text': ''
                },
                {
                    'front-image': 'Images/SAL1.png',
                    'text': ''
                },
                {
                    'front-image': 'Images/SJL1.png',
                    'text': ''
                },
                {
                    'front-image': 'Images/SKL1.png',
                    'text': ''
                },
                {
                    'front-image': 'Images/SQL1.png',
                    'text': ''
                }
            ]
        },
        {
            'id': '2',
            'name': 'Treasure',
            'description': 'test deck 2',

            'back-image': 'Images/BackTexture1.png',

            'cards': [
                {
                    'front-image': 'Images/S9L1.png',
                    'text': ''
                },
                {
                    'front-image': 'Images/S10L1.png',
                    'text': ''
                },
                {
                    'front-image': 'Images/SAL1.png',
                    'text': ''
                },
                {
                    'front-image': 'Images/SJL1.png',
                    'text': ''
                },
                {
                    'front-image': 'Images/SKL1.png',
                    'text': ''
                },
                {
                    'front-image': 'Images/SQL1.png',
                    'text': ''
                }
            ]
        }
    ];

function getAll() {
    return CardsData;
}

function get(id) {
    //Using ES6
    return CardsData.find(function (d) { return d.id === id; });
}

function remove(id) {
    return CardsData.splice(id, 1);
}

function add(deck) {
    return CardsData.push(deck);
}

class CardsStore {

    getAll() {
        return getAll();
    }

    get(id) {
        return get(id);
    }

    remove(id) {
        return remove(id);
    }

    add(deck) {
        return add(deck);
    }
}

// export singleton
export default new CardsStore();
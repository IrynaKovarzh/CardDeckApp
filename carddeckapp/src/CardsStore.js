let CardsData =
    [
        {
            'id': '1',
            'name': 'Dragons',
            'description': 'test deck 1abc',

            'back-image': 'BackTexture1',

            'cards': [
                {
                    'front-image': 'S9L1',
                    'text': ''
                },
                {
                    'front-image': 'S10L1',
                    'text': ''
                },
                {
                    'front-image': 'SAL1',
                    'text': ''
                },
                {
                    'front-image': 'SJL1',
                    'text': ''
                },
                {
                    'front-image': 'SKL1',
                    'text': ''
                },
                {
                    'front-image': 'SQL1',
                    'text': ''
                }
            ]
        },
        {
            'id': '2',
            'name': 'Treasure',
            'description': 'test deck 2',

            'back-image': 'BackTexture1',

            'cards': [
                {
                    'front-image': 'S9L1',
                    'text': ''
                },
                {
                    'front-image': 'S10L1',
                    'text': ''
                },
                {
                    'front-image': 'SAL1',
                    'text': ''
                },
                {
                    'front-image': 'SJL1',
                    'text': ''
                },
                {
                    'front-image': 'SKL1',
                    'text': ''
                },
                {
                    'front-image': 'SQL1',
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
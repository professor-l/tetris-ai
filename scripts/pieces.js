var TPiece = [
    [
        [0, 1, 0],
        [1, 1, 1], 
        [0, 0, 0]
    ],
    [
        [0, 1, 0],
        [0, 1, 1], 
        [0, 1, 0]
    ],
    [
        [0, 0, 0],
        [1, 1, 1],
        [0, 1, 0]
    ],
    [
        [0, 1, 0],
        [1, 1, 0], 
        [0, 1, 0]
    ]
];




var JPiece = [
    [
        [2, 0, 0],
        [2, 2, 2], 
        [0, 0, 0]
    ],
    [
        [0, 2, 2],
        [0, 2, 0], 
        [0, 2, 0]
    ],
    [
        [0, 0, 0],
        [2, 2, 2],
        [0, 0, 2]
    ],
    [
        [0, 2, 0],
        [0, 2, 0], 
        [2, 2, 0]
    ]
];




var ZPiece = [
    [
        [0, 3, 3],
        [3, 3, 0],
        [0, 0, 0]
    ],
    [
        [0, 3, 0],
        [0, 3, 3], 
        [0, 0, 3]
    ],
    [
        [0, 0, 0],
        [0, 3, 3],
        [3, 3, 0]
    ],
    [
        [3, 0, 0],
        [3, 3, 0],
        [0, 3, 0]
    ]
];




var OPiece = [
    [
        [4, 4],
        [4, 4]
    ]
];




var SPiece = [
    [
        [5, 5, 0],
        [0, 5, 5],
        [0, 0, 0]
    ],
    [
        [0, 0, 5],
        [0, 5, 5], 
        [0, 5, 0]
    ],
    [
        [0, 0, 0],
        [5, 5, 0],
        [0, 5, 5]
    ],
    [
        [0, 5, 0],
        [5, 5, 0],
        [5, 0, 0]
    ]
];




var LPiece = [
    [
        [0, 0, 6],
        [6, 6, 6], 
        [0, 0, 0]
    ],
    [
        [0, 6, 0],
        [0, 6, 0], 
        [0, 6, 6]
    ],
    [
        [0, 0, 0],
        [6, 6, 6],
        [6, 0, 0]
    ],
    [
        [6, 6, 0],
        [0, 6, 0], 
        [0, 6, 0]
    ]
];




var IPiece = [
    [
        [0, 0, 0, 0],
        [7, 7, 7, 7],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ],
    [
        [0, 0, 7, 0],
        [0, 0, 7, 0],
        [0, 0, 7, 0],
        [0, 0, 7, 0]
    ],
    [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [7, 7, 7, 7],
        [0, 0, 0, 0]
    ],
    [
        [0, 7, 0, 0],
        [0, 7, 0, 0],
        [0, 7, 0, 0],
        [0, 7, 0, 0]
    ]
];

var pieces = [IPiece, JPiece, LPiece, OPiece, SPiece, TPiece, ZPiece];
var colors = ["blank", "light-blue", "blue", "orange", "yellow", "green", "purple", "red"];
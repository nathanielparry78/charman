export const demoChar = {
    info:{
        name: 'Mehgrin Mehregan',
        classes: [
            {
                class: 'Cleric',
                level: 4,
                hitDie: 'd8',
            }
        ],
        initBonus: '+4',
        proficiencyBonus: '+2',
        AC: '15',
        alignment: 'Lawful Good',
        race: 'human',
        background: 'acolyte',
        movement: '30',
        xpTotal: '4392',
        image: {
            src: './mehgrin.jpg'
        },
        inspiration: false,
        passivePerception: '16'
    },
    attributes: [
        {
            name: "Strength",
            val: 20,
            class: true,
            skills: [
                {
                    name: 'Athletics',
                    prof: false
                }
            ]
        },{
            name: "Dexterity",
            val: 17,
            class: false,
            skills: [
                {
                    name: 'Acrobatics',
                    prof: false
                },{
                    name: 'Sleight of Hand',
                    prof: true
                },{
                    name: 'Stealth',
                    prof: false
                }
            ]
        },{
            name: "Constitution",
            val: 14,
            class: false,
            skills: []
        },{
            name: "Intelligence",
            val: 9,
            class: false,
            skills: [
                {
                    name: 'Arcana',
                    prof: false
                },{
                    name: 'History',
                    prof: true
                },{
                    name: 'Investigation',
                    prof: true
                },{
                    name: 'Nature',
                    prof: false
                },{
                    name: 'Religion',
                    prof: false
                }
            ]
        },{
            name: "Wisdom",
            val: 16,
            class: true,
            skills: [
                {
                    name: 'Animal Handling',
                    prof: false
                },{
                    name: 'Insight',
                    prof: false
                },{
                    name: 'Medicine',
                    prof: false
                },{
                    name: 'Perception',
                    prof: false
                },{
                    name: 'Survival',
                    prof: false
                }
            ]
        },{
            name: "Charisma",
            val: 10,
            class: false,
            skills: [
                {
                    name: 'Deception',
                    prof: false
                },{
                    name: 'Intimidation',
                    prof: false
                },{
                    name: 'Performance',
                    prof: true
                },{
                    name: 'Persuasion',
                    prof: false
                }
            ]
        }
    ],
}
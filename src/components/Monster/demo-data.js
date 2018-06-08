export const beast = {
    "name": "Goat",
    "size": "Medium",
    "type": "beast",
    "subtype": "",
    "alignment": "unaligned",
    "armor_class": 10,
    "hit_points": 4,
    "hit_dice": "1d8",
    "speed": "40 ft.",
    "strength": 12,
    "dexterity": 10,
    "constitution": 11,
    "intelligence": 2,
    "wisdom": 10,
    "charisma": 5,
    "damage_vulnerabilities": "",
    "damage_resistances": "",
    "damage_immunities": "",
    "condition_immunities": "",
    "senses": "passive Perception 10",
    "languages": "",
    "challenge_rating": "0",
    "special_abilities": [
    {
        "name": "Charge",
        "desc": "If the goat moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 2 (1d4) bludgeoning damage. If the target is a creature, it must succeed on a DC 10 Strength saving throw or be knocked prone.",
        "attack_bonus": 0,
        "damage_dice": "1d4"
    },
        {
            "name": "Sure-Footed",
            "desc": "The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone.",
            "attack_bonus": 0
        }
    ],
    "actions": [
        {
            "name": "Ram",
            "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) bludgeoning damage.",
            "attack_bonus": 3,
            "damage_dice": "1d4",
            "damage_bonus": 1
        }
    ]
}
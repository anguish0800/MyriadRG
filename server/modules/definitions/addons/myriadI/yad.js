const { combineStats, makeDeco, makeTurret } = require('../../facilitators.js');
const { base, statnames } = require('../../constants.js');
const g = require('../../gunvals.js');

// generics

Class.myriad_genericYad = {
	PARENT: "genericTank",
	BODY: {
		HEALTH: 1.5 * base.HEALTH,
		DAMAGE: 2 * base.DAMAGE,
		DENSITY: 2 * base.DENSITY,
		SPEED: 1.1 * base.SPEED,
		ACCELERATION: 0.85 * base.ACCEL,
		FOV: 0.8 * base.FOV
	},
	COLOR: "orange",
	SHAPE: "M -1.2 -1 L -0.9 0 L -1.2 1 L 0.8 0.8 L 1.2 0 L 0.8 -0.8 Z",
	SIZE: 35,
	SKILL_CAP: Array(10).fill(12),
	EXTRA_SKILL: 18
}

// turrets and bullets

Class.myriad_yad_artilleryTurretNorm = makeTurret({
	GUNS: [
		{
			POSITION: [19, 9, 1, 0, 0, 0, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.spam, g.turret]),
				TYPE: "bullet"
			}
		}
	]
}, {limitFov: true, fov: 2.5, color: "orange"})

// YADs

Class.myriad_yad_base = {
	PARENT: "myriad_genericYad",
	LABEL: "Base",
	DANGER: 10
}

// Base upgrades

Class.myriad_yad_duo = {
	PARENT: "myriad_genericYad",
	LABEL: "Duo",
	DANGER: 11,
	GUNS: [
		{
			POSITION: [18, 6, 1, 0, 4, 3, 0],
			PROPERTIES: {
				SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
				TYPE: "bullet"
			}
		},
		{
                        POSITION: [18, 6, 1, 0, -4, -3, 0.5],
                        PROPERTIES: {
                                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                                TYPE: "bullet"
                        }
                }
	]
}

Class.myriad_yad_artillery = {
        PARENT: "myriad_genericYad",
        LABEL: "Duo",
        DANGER: 11,
        TURRETS: [
                {
                        POSITION: [8, -4, 14, 22.5, 120, 0],
                        TYPE: "myriad_yad_artilleryTurretNorm"
                }
        ]
}

// Duo upgrades
// Artillery upgrades
// Automation upgrades
// Sprinter upgrades

Class.addons.UPGRADES_TIER_0.push("myriad_yad_base")
Class.myriad_yad_base.UPGRADES_TIER_5 = ["myriad_yad_duo", "myriad_yad_artillery"]

const { combineStats, weaponArray, makeDeco, makeTurret } = require('../../facilitators.js')
const { base, statnames } = require('../../constants.js')
const g = require('../../gunvals.js')
//wave 2
Class.myriad_shield = {
  	PARENT: "genericTank",
  	LABEL: "Shield",
  	SHAPE: 'M 0 -2 Q 1 0 0 2 0.5 0 0 -2',
  	MIRROR_MASTER_ANGLE: true,
  	GUNS: [
      	{
          	POSITION: {
              	LENGTH: 5,
              	WIDTH: 5,
              	X: 5,
            },
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.basic]),
              	TYPE: "bullet"
            }
        },
      	{
          	POSITION: {
              	LENGTH: 5,
              	WIDTH: 5,
              	X: 7,
              	Y: 5,
              	ANGLE: 22.5,
              	DELAY: 0.5
            },
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.basic]),
              	TYPE: "bullet"
            }
        },
      	{
          	POSITION: {
              	LENGTH: 5,
              	WIDTH: 5,
              	X: 7,
              	Y: -5,
              	ANGLE: -22.5,
              	DELAY: 0.5
            },
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.basic]),
              	TYPE: "bullet"
            }
        }
    ]
}

// wave 5

Class.myriad_cannonLeg = {
	SHAPE: "M -0.7 0.2 C -1 0.2 -1 -0.2 -0.7 -0.2 L 0.7 -0.2 C 1 -0.2 1 0.2 0.7 0.2 L -0.7 0.2",
	COLOR: "darkGray"
}

// wave 8

Class.myriad_mechGun = makeTurret({
    GUNS: [
        {
            POSITION: [20, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
		    SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.twin, g.power, { speed: 0.7, maxSpeed: 0.7, spray: 0, shudder: 0}]),
                TYPE: "bullet",
            },
        }
    ],
}, {canRepel: true, limitFov: true})


// its like arms race but like ass i guess.

const { combineStats, weaponArray, dereference, makeDeco, makeOver } = require("../../facilitators.js"),
			{ base, statnames } = require("../../constants.js"),
      g = require("../../gunvals.js")
require("./tanks.js")
require("./projectiles.js")
require("../../../../config.js")

let enableNoRemorse = true //Math.random() < 0.1 ? false : true
return
// multi funcs
function makeMultiBullet(splitAmount, bulltype, size) {
  	/*
    1. define the deco
    2. define the bullet
    2.5. push guns via for loop stolen from makeOver
    3. if statements
    4. push deco in
    */
  	Class.deco = {
      	PARENT: "genericTank",
      	COLOR: 'red'
    }
  	let bullet = {
      	PARENT: "bullet",
      	INDEPENDENT: true,
      	GUNS: [],
      	PROPS: []
    }
  	let multiproper = {
      	SHOOT_SETTINGS: combineStats([g.basic, {shudder: 0, spray: 0}]),
      	TYPE: [bulltype, {PERSISTS_AFTER_DEATH: true}],
      	SHOOT_ON_DEATH: true,
      	ALPHA: 0
    }
    for (let i = 0; i < splitAmount; i++) {
      	
  			const ANGLE = 30; // should be lesser than 30

				if (i % 2 == 1) {
    				bullet.GUNS.push(
              	{
                  	POSITION: {
                      	LENGTH: 0,
                      	WIDTH: (size / 2) + 8
                    },
                  	PROPERTIES: multiproper
                }
            )
				}
      	
      	i += 1

				for (let j = 0; j < i; ++j) {
    		// add gun where angle = ANGLE*(j+1)/i
    		// add gun but invert it angle by Y
          	bullet.GUNS.push(
              	{
              			POSITION: {
                      	LENGTH: 0,
                      	WIDTH: (size / 2) + 8,
                      	ANGLE: ANGLE * (j + 1) / i,
                      	Y: -i
                    },
                  	PROPERTIES: multiproper
                },
              	{
                  	POSITION: {
                      	LENGTH: 0,
                      	WIDTH: (size / 2) + 8,
                      	ANGLE: -ANGLE * (j + 1) / i,
                      	Y: i
                    },
                  	PROPERTIES: multiproper
                }
            )
    		}
    }
  	if (splitAmount <= 2) {
      	bullet.PROPS.push({
          	POSITION: [size, 0, 0, 0, 1],
          	TYPE: "deco"
        })
    } else {
      	bullet.PROPS.push(exports.weaponArray({
          	POSITION: [size - splitAmount, 0, 0, 0, 1]
        }, splitAmount))
    }
  	return bullet
}
const makeMultiDeco = ({ tier = 0, width = 0 }) => { // best used when pushed
  	let deco = []
    for (let i = 1; i < tier; i++) {
      	deco.push(
          	{
              	POSITION: {
                  	LENGTH: (tier + 15) - (i * 2),
                  	WIDTH: width + (i * 2)
                },
              	PROPERTIES: {
                  	COLOR: 12
                }
            }
        )
    }
  	return deco.flat()
}
// blimp funcs and oth r shit
const noBulletStats = [12, 0, 0, 0, 0, 12, 12, 12, 12, 12]
const twelveBullet = [12, 12, 12, 12, 12, 12, 12, 12, 12, 12]
const makeBlimp = ({ length = 0, width = 0, recoil = 0, angle = 0, y = 0, delay = 0 }) => {
      return {
          POSITION: [
              length + 15,
              width + 8,
              1,
              0,
              y,
              angle,
              delay
        ], // too lazy to fix the format ,_,
          PROPERTIES: {
              SHOOT_SETTINGS: combineStats([g.basic, g.thruster, { recoil: recoil + 1.3 }]),
              TYPE: "bullet"
        }
    }
}
function spikeify(type, name = -1, opts = {}) {
      let output = dereference(type)
    let spike = Class.arras_spike.TURRETS
    opts.damage == null ? 1 : opts.damage
      opts.speed == null ? 1 : opts.speed
      opts.health == null ? 1 : opts.health
    output.BODY.DAMAGE *= opts.damage
      output.BODY.HEALTH *= opts.health
      output.BODY.SPEED *= opts.speed
    output.TURRETS = type.TURRETS == null ? spike : type.TURRETS.concat(spike)
      output.DANGER = type.DANGER + 1
      output.LABEL = name == -1 ? type.LABEL : name
      return output
}
// missiler funcs and other hit
function makeMissile(level, amount) {
      let cannons = []
      for (let i = 0; i < level; i++) {
          cannons.push({
              POSITION: {
                  LENGTH: 0
            },
              PROPERTIES: {
                  SHOOT_SETTINGS: combineStats([g.basic, {speed: 1 * ((i / 2) + 1), spray: 0, shudder: 0}]),
                  TYPE: ["bullet", {PERSISTS_AFTER_DEATH: "true"}],
                  SHOOT_ON_DEATH: true
            }
        })
    }
      Class.deco = makeDeco(0, 'red')
      let missile = {
          PARENT: "bullet",
          LABEL: "Missile",
          INDEPENDENT: true,
          GUNS: [
              {
                  POSITION: {
                      LENGTH: 0,
                      WIDTH: 26,
                      X: 10
                },
                  PROPERTIES: {
                      SHOOT_SETTINGS: combineStats([g.basic, {spray: 0, shudder: 0, speed: 0, pen: 1.2}]),
                      TYPE: ["bullet", {PERSISTS_AFTER_DEATH: true, MOTION_TYPE: "grow"}],
                      SHOOT_ON_DEATH: true,
                      ALPHA: 0
                }
            },
              {
                  POSITION: {
                      LENGTH: 5,
                      WIDTH: 20,
                      ASPECT: -1.5
                }
            },
              {
                  POSITION: {
                      LENGTH: 20,
                      WIDTH: 10,
                      ASPECT: 0.01
                }
            },
              {
                  POSITION: {
                      LENGTH: 15,
                      WIDTH: 10,
                      ASPECT: 1.2,
                      ANGLE: 180,
                }
            },
              ...weaponArray(cannons, amount)
        ],
          PROPS: [
              {
                  POSITION: [13, 0, 0, 0, 0],
                  TYPE: "deco"
              }
        ]
    }
      return missile
}
function makeMissiler(a, b, c, bullType, danger, name){
        let tank = {    
              PARENT: "genericTank",
          LABEL: name,
          DANGER: danger,
          GUNS: []
    }
    for (let i = 0; i < a; i++) {
          tank.GUNS.push({
              POSITION: {    
                      LENGTH: 15 + (i / 1.75),
                    WIDTH: 6,
                  Y: (3.5 + a) - i
            }
        },
          {
              POSITION: {
                  LENGTH: 15 + (i * 1.75),
                  WIDTH: 6,
                  Y: (-3.5 - a) + i
            }
        })
    }
      for (let i = 0; i < c; i++) {
          tank.GUNS.push({
              POSITION: {
                  LENGTH: 20,
                  WIDTH: 8,
                  ASPECT: -0.2,
                  X: (1.5 + (c + 1)) - (i + 2)
            }
        })
    }
      tank.GUNS.push(
            {
            POSITION: {
                LENGTH: 20,
                WIDTH: 8,
                ASPECT: -0.2
            }
        },
        {
            POSITION: {
                WIDTH: 9
            },
            PROPERTIES: {
                      SHOOT_SETTINGS: combineStats([g.basic, g.pounder, {damage: (1 / (a + 1) + 0.25), pen: 1 / (b + 1), speed: 1 * ((c + 1) / 2 + 0.5)}]),
                    TYPE: bullType,
                STAT_CALCULATOR: "sustained"
            }
        }
    )
      for (let i = 0; i < b; i++) {
          tank.GUNS.push({
              POSITION: {
                  WIDTH: 9,
                  X: -1.5 * (i + 1),
                  DELAY: (i + 1) / (b + 1)
            },
              PROPERTIES: {
                  SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
                  TYPE: bullType,
                  STAT_CALCULATOR: "sustained"
            }
        })
    }
      return tank
}
// tanks
/*Class.myriad_L_hexaBullet = {
  	PARENT: "bullet",
  	INDEPENDENT: true,
  	GUNS: [
      	{
          	POSITION: {
              	LENGTH: 0,
              	ANGLE: 45
            },
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
              	TYPE: ["myriad_pentaBullet", p],
              	SHOOT_ON_DEATH: true
            }
        },
      	{
          	POSITION: {
              	LENGTH: 0,
              	ANGLE: -45
            },
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
              	TYPE: ["myriad_pentaBullet", p],
              	SHOOT_ON_DEATH: true
            }
        }
    ],
  	PROPS: [
      	{
          	POSITION: [15, 0, 0, 0, 1],
          	TYPE: ["genericTank", {COLOR: 12}]
        }
    ]
}
Class.myriad_L_hyperOperaBullet = {
  	PARETN: "bullet",
  	INDEPENDENT: true,
  	GUNS: [
      	{
        		POSITION: {
              	LENGTH: 0,
              	ANGLE: 22.5
            },
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
              	TYPE: ["myriad_pentaBullet", p],
              	SHOOT_ON_DEATH: true
            }
        },
      	{
          	POSITION: {
              	LENGTH: 0
            },
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
              	TYPE: ["myriad_pentaBullet", p],
              	SHOOT_ON_DEATH: true
            }
        },
      	{
          	POSITION: {
              	LENGTH: 0
            }
        }
    ]
}*/
Class.myriad_L_hexBullet = makeMultiBullet(2, "myriad_pentaBullet", 15)
Class.myriad_L_hexation = {
  	PARENT: "genericTank",
  	LABEL: "Hexation",
  	DANGER: 8,
  	GUNS: [
      	{
          	POSITION: {
              	LENGTH: 20.5,
              	WIDTH: 19.5
            },
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.destroyer, g.annihilator, {damage: 0.9, pen: 0.8, speed: 1.2}]),
              	TYPE: "myriad_L_hexBullet"
            }
        }
    ]
}
Class.myriad_L_hexation.GUNS.push(
		...makeMultiDeco({ tier: 5, width: 4 })
)
Class.myriad_L_hyperOperaBullet = makeMultiBullet(3, "myriad_tetraBullet", 10)
if (enableNoRemorse) {
  	Class.myriad_pentation.UPGRADES_TIER_4 = ["myriad_L_hexation"]
  	Config.LEVEL_CHEAT_CAP = 60
}

const { combineStats } = require("../../../facilitators.js")
const g = require("../../../gunvals.js")

Class.myriad_trainBullet = { //made by waitwhat
    PARENT: "bullet",
    LABEL: "Bullet Train",
    DANGER: 4,
    HITS_OWN_TYPE: "never",
    PERSISTS_AFTER_DEATH: true,
    GUNS: [
        {
            POSITION: [0, 20, 1, -100, 0, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, {speed: 0, maxSpeed:0, recoil: 0}]), TYPE: ["bullet", {DIE_AT_RANGE: false}],
                AUTOFIRE:true,
                MAX_CHILDREN: 5,
                DRAW_SELF: false,
                ALPHA: 0,
                // CODE_CONTROLLED: true,
            }
        }
    ],
    ON: [
        {
            event: "tick",
            handler: ({ body }) => {
                if (body?.guns?.[0]?.children?.length) { let previous = body;
                    const children = body.guns[0].children;
                    for (const child of children) {
                        const dx = child.x - previous.x;
                        const dy = child.y - previous.y;
                        const distance = Math.hypot(dx, dy) || 1; // Avoid division by zero
                        const factor = (child.size + previous.size + 1) / distance;
                        child.x = previous.x + dx * factor;
                        child.y = previous.y + dy * factor;
                        child.velocity.x = 0;
                        child.velocity.y = 0;
                        child.settings.hitsOwnType = "never"
                        previous = child;
                    }
                }
            }
        }
    ]
}

Class.myriad_mamba = {
    PARENT: "genericTank",
    LABEL: "Mamba",
    GUNS: [
        {
                        POSITION: [15.5, 9.5, 0.9, 0, 0, 0, 0]
        },
        {
            POSITION: [17, 7, 0.9, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: ["myriad_trainBullet", {CONTROLLERS: [["snake"]]}]
            }
        }
    ]
}

Class.addons.UPGRADES_TIER_0.push("myriad_mamba")

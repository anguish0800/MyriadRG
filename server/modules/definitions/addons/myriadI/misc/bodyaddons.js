const { combineStats, makeOver, makeBattle, makeAuto, addAura, makeGuard, addBackGunner, menu } = require("../../../facilitators.js")
const { base } = require("../../../constants.js")
const g = require("../../../gunvals.js")

// menus
Class.myriad_bodyAddonMenu = menu("Body Addons")
Class.myriad_BAMTurrets = menu("Turret Addons")
Class.myriad_BAMAuras = menu("Aura Addons")
Class.myriad_BAMDrones = menu("Drone Addons")
Class.myriad_BAMMisc = menu("Misc. Addons")

// turret addons
Class.myriad_auto_ = makeAuto("genericTank", "Auto")
// aura addons
Class.myriad_auraDamageAura = addAura(1)
Class.myriad_auraDamagePlusAura = addAura(2, 0.9, 0.3, "red")
Class.myriad_auraDamageHugeAura = addAura(0.9, 2, 0.3)
Class.myriad_auraHealAura = addAura(-1)
Class.myriad_auraHealPlusAura = addAura(-2, 0.9, 0.3, "green")
Class.myriad_auraHealHugeAura = addAura(-0.9, 2, 0.3)
Class.myriad_auraDamage_ = {
	PARENT: "genericTank",
	LABEL: "Aura",
	TURRETS: [
		{
                        POSITION: [11, 0, 0, 0, 360, 1],
                        TYPE: "myriad_auraDamageAura"
                }
	]
}
Class.myriad_auraDamagePlus_ = {
        PARENT: "genericTank",
        LABEL: "Aura+",
        TURRETS: [
		{
			POSITION: [10, 0, 0, 0, 360, 1],
			TYPE: "myriad_auraDamagePlusAura"
		}
        ]
}
Class.myriad_auraDamageHuge_ = {
        PARENT: "genericTank",
        LABEL: "Big Aura",
        TURRETS: [
                {
			POSITION: [12, 0, 0, 0, 360, 1],
                        TYPE: "myriad_auraDamageHugeAura"
                }
        ]
}
Class.myriad_auraHeal_ = {
        PARENT: "genericTank",
        LABEL: "Heal Aura",
        TURRETS: [
                {
                        POSITION: [11, 0, 0, 0, 360, 1],
                        TYPE: "myriad_auraHealAura"
                }
        ]
}
Class.myriad_auraHealPlus_ = {
        PARENT: "genericTank",
        LABEL: "Heal Aura+",
        TURRETS: [
                {
                        POSITION: [10, 0, 0, 0, 360, 1],
                        TYPE: "myriad_auraHealPlusAura"
                }
        ]
}
Class.myriad_auraHealHuge_ = {
        PARENT: "genericTank",
        LABEL: "Big Heal Aura",
        TURRETS: [
                {
                        POSITION: [12, 0, 0, 0, 360, 1],
                        TYPE: "myriad_auraHealHugeAura"
                }
        ]
}
// drone addons
Class.myriad_hybrid_ = makeOver("genericTank", "Hybrid", {count: 1, independent: true, cycle: false})
Class.myriad_over_ = makeOver("genericTank", "Over")
Class.myriad_despot_ = makeOver("genericTank", "Despot", {count: 3, angle: 90})
Class.myriad_synthesis_ = makeBattle("genericTank", "Synthesis", {count: 1, independent: true})
Class.myriad_battle_ = makeBattle("genericTank", "Battle")
Class.myriad_warship_ = makeBattle("genericTank", "Warship", {count: 3})

Class.addons.UPGRADES_TIER_0.push("myriad_bodyAddonMenu")
Class.myriad_bodyAddonMenu.UPGRADES_TIER_0 = ["myriad_BAMTurrets", "myriad_BAMAuras", "myriad_BAMDrones", "myriad_BAMMisc"]
Class.myriad_BAMTurrets.UPGRADES_TIER_0 = ["myriad_auto_"]
Class.myriad_BAMAuras.UPGRADES_TIER_0 = ["myriad_auraDamage_", "myriad_auraHeal_", "myriad_auraDamagePlus_", "myriad_auraHealPlus_", "myriad_auraDamageHuge_", "myriad_auraHealHuge_"]
Class.myriad_BAMDrones.UPGRADES_TIER_0 = ["myriad_hybrid_", "myriad_over_", "myriad_despot_", "myriad_synthesis_", "myriad_battle_", "myriad_warship_"]

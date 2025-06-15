const { base } = require("../../constants.js");
const {
  combineStats,
  addAura,
  makeAuto,
  makeMulti,
  weaponArray
} = require("../../facilitators.js");
const { smshskl } = require("../../constants.js");
const g = require("../../gunvals.js");

/*
this command for aeipfpendfopweofnfnwnfopw
	for (let i = 0; i < 2; i++) {
		Class..GUNS.push(
	)
}
*/

// You can also disable addons by not making them end with '.js'
// If you want to enable, simply make the line below just not run.
//return console.log('the addon [Dreadnoughts. the chromosome update.js] is disabled, no more chromosomes :(');

const chromosomeBody = {
  SPEED: base.SPEED,
  HEALTH: base.HEALTH * 2,
  SHIELD: base.SHIELD * 2,
  REGEN: base.REGEN * 2,
  FOV: base.FOV * 1.4,
  RESIST: base.RESIST,
  DENSITY: base.DENSITY * 2,
};
Class.genericChromosomeDreadnought = {
  PARENT: ["genericTank"],
  SKILL_CAP: Array(10).fill(smshskl),
  REROOT_UPGRADE_TREE: [
    "chromosomePrimary",
    "chromosomeSecondary",
    "chromosomeBody",
  ],
};
Class.genericChromosome = {
  PARENT: ["genericChromosomeDreadnought"],
  BODY: chromosomeBody,
  SHAPE:
    "M -0.5 0.5 Q -0.25 0.4 0 0.4 Q 0.25 0.4 0.5 0.5 Q 0.75 0.75 1.25 0.75 L 1.25 0.5 L 0.75 0 L 1.25 -0.5 L 1.25 -0.75 Q 0.75 -0.75 0.5 -0.5 Q 0.25 -0.4 0 -0.4 Q -0.25 -0.4 -0.5 -0.5 Q -0.75 -0.75 -1.25 -0.75 L -1.25 -0.5 L -0.75 0 L -1.25 0.5 L -1.25 0.75 Q -0.75 0.75 -0.5 0.5",
  COLOR: 14,
  LEVEL: 90,
  SIZE: 25,
  DANGER: 8,
  EXTRA_SKILL: 28,
};

// This adds the tank to the definitions and to the fun menu
Class.tissueShield = {
  PARENT: "genericChromosome",
  LABEL: "FR",
  SHAPE:
    "m -0.55 0.55 q 0.275 -0.11 0.55 -0.11 q 0.275 0 0.55 0.11 q 0.275 0.275 0.825 0.275 l 0 -0.275 l -0.55 -0.55 l 0.55 -0.55 l 0 -0.275 q -0.55 0 -0.825 0.275 q -0.275 0.11 -0.55 0.11 q -0.275 0 -0.55 -0.11 q -0.275 -0.275 -0.825 -0.275 l 0 0.275 l 0.55 0.55 l -0.55 0.55 l 0 0.275 q 0.55 0 0.825 -0.275",
};
Class.tissue = {
  PARENT: "genericChromosome",
  LABEL: "Tissue",
  BODY: {
    HEALTH: 1.6,
    SHIELD: 1.6,
    REGEN: 1.5,
    SPEED: 0.8,
  },
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 0, 0],
      TYPE: ["tissueShield", { COLOR: 9 }, { MIRROR_MASTER_ANGLE: true }],
    },
  ],
};
Class.chromosome = {
  PARENT: "genericChromosome",
  LABEL: "Chromosome",
};
Class.chromosomeBody = {
  PARENT: "genericChromosome",
  LABEL: "",
};
Class.chromosomeSecondary = {
  PARENT: "genericChromosome",
  LABEL: "",
};
Class.centromere = {
  PARENT: "genericChromosome",
  LABEL: "Centromere",
  UPGRADE_TOOLTIP: "Bullets",
  GUNS: [],
};
for (let i = 0; i < 2; i++) {
  Class.centromere.GUNS.push({
    POSITION: [14, 7, 1, 0, 0, 180 * i, 0],
    PROPERTIES: {
      SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.85, damage: 2 }]),
      TYPE: "bullet",
    },
  });
}
Class.building = {
  PARENT: "genericChromosome",
  LABEL: "Building",
  UPGRADE_TOOLTIP: "More Bullets",
  GUNS: [],
};
for (let i = 0; i < 2; i++) {
  Class.building.GUNS.push(
    {
      POSITION: [5, 7, 1, 9, -3, 180 * i, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.85, damage: 2 }]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [5, 7, 1, 9, 3, 180 * i, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.85, damage: 2 }]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [16, 7, 1, 0, 0, 180 * i, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.85, damage: 2 }]),
        TYPE: "bullet",
      },
    }
  );
}
Class.structure = {
  PARENT: "genericChromosome",
  LABEL: "structure",
  UPGRADE_TOOLTIP: "Sniper Bullets",
  GUNS: [],
};
for (let i = 0; i < 2; i++) {
  Class.structure.GUNS.push({
    POSITION: [17, 7, 1, 0, 0, 180 * i, 0],
    PROPERTIES: {
      SHOOT_SETTINGS: combineStats([
        g.basic,
        g.sniper,
        { reload: 0.85, damage: 2 },
      ]),
      TYPE: "bullet",
    },
  });
}
Class.histones = {
  PARENT: "genericChromosome",
  LABEL: "Histones",
  UPGRADE_TOOLTIP: "Traps",
  GUNS: [],
};
for (let i = 0; i < 2; i++) {
  Class.histones.GUNS.push(
    {
      POSITION: [12, 7, 1, 0, 0, 180 * i, 0],
    },
    {
      POSITION: [3, 7, 1.5, 12, 0, 180 * i, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.85, damage: 2 }]),
        TYPE: "trap",
      },
    }
  );
}
Class.chromatide = {
  PARENT: "genericChromosome",
  LABEL: "Chromatide",
  UPGRADE_TOOLTIP: "Drones",
  GUNS: [],
};
for (let i = 0; i < 2; i++) {
  Class.chromatide.GUNS.push({
    POSITION: [8, 7, 1.5, 6, 0, 180 * i, 0],
    PROPERTIES: {
      SHOOT_SETTINGS: combineStats([g.drone]),
      TYPE: "drone",
      AUTOFIRE: true,
      SYNCS_SKILLS: true,
      STAT_CALCULATOR: "drone",
      MAX_CHILDREN: 6,
    },
  });
}
Class.dna = {
  PARENT: "genericChromosome",
  LABEL: "D.N.A",
  UPGRADE_TOOLTIP: "Heavy Bullets",
  GUNS: [],
};
for (let i = 0; i < 2; i++) {
  Class.dna.GUNS.push({
    POSITION: [14, 9, 1, 0, 0, 180 * i, 0],
    PROPERTIES: {
      SHOOT_SETTINGS: combineStats([
        g.basic,
        g.pounder,
        { reload: 0.85, damage: 2 },
      ]),
      TYPE: "bullet",
    },
  });
}
Class.genes = {
  PARENT: "genericChromosome",
  LABEL: "Genes",
  UPGRADE_TOOLTIP: "Heavier Bullets",
  GUNS: [],
};
for (let i = 0; i < 2; i++) {
  Class.genes.GUNS.push({
    POSITION: [8, 11, 1, 6, 0, 180 * i, 0],
    PROPERTIES: {
      SHOOT_SETTINGS: combineStats([
        g.basic,
        g.pounder,
        g.destroyer,
        { reload: 0.85, damage: 2 },
      ]),
      TYPE: "bullet",
    },
  });
}
Class.nucleotides = {
  PARENT: "genericChromosome",
  LABEL: "Nucleotides",
  UPGRADE_TOOLTIP: "missiles",
  GUNS: [],
};
for (let i = 0; i < 2; i++) {
  Class.nucleotides.GUNS.push(
    {
      POSITION: [15, 8, 1, 0, 0, 180 * i, 0],
    },
    {
      POSITION: [14, 9, 1, 0, 0, 180 * i, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pounder,
          { reload: 0.85, damage: 2 },
        ]),
        TYPE: "minimissile",
      },
    }
  );
}
Class.membrane = {
  PARENT: "genericChromosome",
  LABEL: "Membrane",
  UPGRADE_TOOLTIP: "Bullets on the side",
  GUNS: [],
};
for (let i = 0; i < 2; i++) {
  Class.membrane.GUNS.push({
    POSITION: [10, 7, 1, 0, 0, 180 * i + 90, 0],
    PROPERTIES: {
      SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.85, damage: 2 }]),
      TYPE: "bullet",
    },
  });
}
Class.nucleus = {
  PARENT: "genericChromosome",
  LABEL: "Nucleus",
  UPGRADE_TOOLTIP: "Traps on the side",
  GUNS: [],
};
for (let i = 0; i < 2; i++) {
  Class.nucleus.GUNS.push(
    {
      POSITION: [7, 7, 1, 0, 0, 180 * i + 90, 0],
    },
    {
      POSITION: [3, 7, 1.5, 7, 0, 180 * i + 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.85, damage: 2 }]),
        TYPE: "trap",
      },
    }
  );
}
Class.organism = {
  PARENT: "genericChromosome",
  LABEL: "Organism",
  UPGRADE_TOOLTIP: "Drones on the side",
  GUNS: [],
};
for (let i = 0; i < 2; i++) {
  Class.organism.GUNS.push({
    POSITION: [10, 7, 1.5, 0, 0, 180 * i + 90, 0],
    PROPERTIES: {
      SHOOT_SETTINGS: combineStats([g.drone]),
      TYPE: "drone",
      AUTOFIRE: true,
      SYNCS_SKILLS: true,
      STAT_CALCULATOR: "drone",
      MAX_CHILDREN: 6,
    },
  });
}
Class.flesh = {
  PARENT: "genericChromosome",
  LABEL: "Flesh",
  UPGRADE_TOOLTIP: "More Bullets on the side",
  GUNS: [],
};
for (let i = 0; i < 2; i++) {
  Class.flesh.GUNS.push(
    {
      POSITION: [10, 7, 1, 0, -3, 180 * i + 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.85, damage: 2 }]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [10, 7, 1, 0, 3, 180 * i + 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.85, damage: 2 }]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [13, 7, 1, 0, 0, 180 * i + 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, { reload: 0.85, damage: 2 }]),
        TYPE: "bullet",
      },
    }
  );
}
Class.blood = {
  PARENT: "genericChromosome",
  LABEL: "Blood",
  UPGRADE_TOOLTIP: "Sniper Bullets on the side",
  GUNS: [],
};
for (let i = 0; i < 2; i++) {
  Class.blood.GUNS.push({
    POSITION: [17, 7, 1, 0, 0, 180 * i + 90, 0],
    PROPERTIES: {
      SHOOT_SETTINGS: combineStats([
        g.basic,
        g.sniper,
        { reload: 0.85, damage: 2 },
      ]),
      TYPE: "bullet",
    },
  });
}
Class.coilaura = addAura(1, 2, 0.15);
Class.telomereaura = addAura(1, 4, 0.15);
Class.springaura = addAura(2, 3, 0.15);
Class.coil = {
  PARENT: ["genericChromosome"],
  LABEL: "Coil",
  UPGRADE_TOOLTIP: "Aura",
  TURRETS: [
    {
      POSITION: [5.5, 0, 0, 0, 360, 1],
      TYPE: "coilaura",
    },
  ],
};
Class.spring = {
  PARENT: ["genericChromosome"],
  LABEL: "Spring",
  UPGRADE_TOOLTIP: "Aura",
  TURRETS: [
    {
      POSITION: [6, 0, 0, 0, 360, 1],
      TYPE: "springaura",
    },
  ],
};
Class.protiensTurret = {
  PARENT: "genericTank",
  LABEL: "Turret",
  COLOR: "grey",
  INDEPENDENT: true,
  CONTROLLERS: ["nearestDifferentMaster"],
  BODY: {
    FOV: 0.8,
  },
  GUNS: weaponArray([
    {
      POSITION: [14, 5, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [14, 5, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power]),
        TYPE: "bullet",
      },
    },
  ], 2),
};
Class.telomereTurret = {
  PARENT: "genericTank",
  LABEL: "Turret",
  COLOR: "grey",
  INDEPENDENT: true,
  CONTROLLERS: ["nearestDifferentMaster"],
  BODY: {
    FOV: 0.8,
  },
  GUNS: Class.protiensTurret.GUNS,
  TURRETS: [
    {
      POSITION: [7.5, 0, 0, 0, 360, 2],
      TYPE: "telomereaura",
    },
  ],
};
Class.chromonema = {
  PARENT: "genericChromosome",
  LABEL: "Chromonema",
  BODY: {
    HEALTH: 1.6,
    SHIELD: 1.6,
    REGEN: 1.5,
    SPEED: 0.8,
  },
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 0, 0],
      TYPE: ["tissueShield", { COLOR: 9 }, { MIRROR_MASTER_ANGLE: true }],
    },
    {
      POSITION: [5, 0, 0, 0, 360, 1],
      TYPE: ["protiensTurret"],
    },
  ],
};
Class.cytosine = {
  PARENT: "genericChromosome",
  LABEL: "Cytosine",
  BODY: {
    HEALTH: 1.6,
    SHIELD: 1.6,
    REGEN: 1.5,
    SPEED: 0.8,
  },
  TURRETS: [
    {
      POSITION: [20, 0, 0, 0, 0, 0],
      TYPE: ["tissueShield", { COLOR: 9 }, { MIRROR_MASTER_ANGLE: true }],
    },
    {
      POSITION: [5.5, 0, 0, 0, 360, 1],
      TYPE: ["coilaura"],
    },
  ],
};
Class.adenine = {
  PARENT: "genericChromosome",
  LABEL: "Adenine",
  BODY: {
    HEALTH: 2,
    SHIELD: 2.2,
    REGEN: 2,
    SPEED: 0.6,
  },
  TURRETS: [
    {
      POSITION: [21, 0, 0, 0, 0, 0],
      TYPE: ["tissueShield", { COLOR: 9 }, { MIRROR_MASTER_ANGLE: true }],
    },
  ],
};
Class.vitaminsTurret = {
  PARENT: "genericTank",
  LABEL: "Turret",
  COLOR: "grey",
  INDEPENDENT: true,
  CONTROLLERS: ["nearestDifferentMaster"],
  BODY: {
    FOV: 0.8,
  },
  GUNS: weaponArray([
    {
      POSITION: [14, 5, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power]),
        TYPE: "bullet",
      },
    },
    {
      POSITION: [14, 5, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power]),
        TYPE: "bullet",
      },
    }
  ], 4),
};
Class.protiens = makeAuto(Class.chromosomeBody, "Protiens", {
  type: "protiensTurret",
  size: 5,
});
Class.vitamins = makeAuto(Class.chromosomeBody, "Vitamins", {
  type: "vitaminsTurret",
  size: 5,
});
Class.telomere = makeAuto(Class.chromosomeBody, "Telomere", {
  type: "telomereTurret",
  size: 5,
});
Class.addons.UPGRADES_TIER_0.push("chromosome");
// primary
Class.chromosome.UPGRADES_TIER_1 = [
  ["centromere", "chromosomeSecondary", "chromosomeBody"],
  ["chromatide", "chromosomeSecondary", "chromosomeBody"],
  ["dna",        "chromosomeSecondary", "chromosomeBody"],
  ["histones",   "chromosomeSecondary", "chromosomeBody"],
];
Class.centromere.UPGRADES_TIER_0 = ["structure", "building"];
Class.dna.UPGRADES_TIER_0 =        ["genes",     "nucleotides"];
// body
Class.chromosomeBody.UPGRADES_TIER_0 = ["coil",       "protiens",   "tissue"  ];
Class.protiens.UPGRADES_TIER_0 =       ["vitamins",   "chromonema", "telomere"];
Class.coil.UPGRADES_TIER_0 =           ["telomere",   "spring",     "cytosine"];
Class.tissue.UPGRADES_TIER_0 =         ["chromonema", "cytosine",   "adenine" ];
// secondary
Class.chromosomeSecondary.UPGRADES_TIER_0 = ["membrane", "nucleus", "organism"];
Class.membrane.UPGRADES_TIER_0 =            ["flesh",    "blood"]

console.log("Here comes the chromosomes!");


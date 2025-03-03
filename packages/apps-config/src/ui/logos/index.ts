// Copyright 2017-2022 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint sort-keys: ["error", "asc", { caseSensitive: false }] */

// The mapping here is done on the actual chain name (system.chain RPC) or
// the actual RPC node it is corrected to (system.name RPC)

// anything for a specific chain, most would probably fit into the node category (but allow for chain-specific)
// alphabetical
import { sanitize } from '../util';
import chainAcala from './chains/acala.svg';
import chainAleph from './chains/aleph.svg';
import chainAltair from './chains/altair.svg';
import chainAstar from './chains/astar.png';
import chainBitgreen from './chains/bitgreen.png';
import chainBrainstorm from './chains/brainstorm.png';
import chainCoinversation from './chains/coinversation.png';
import chainCompetitorsClub from './chains/competitors-club.png';
import chainComposableFinance from './chains/composableFinance.png';
import chainCreditcoin from './chains/creditcoin.png';
import chainCreditcoinTest from './chains/creditcoin-test.png';
import chainCrownSterling from './chains/crown-sterling.png';
import chainRococoDali from './chains/dali.png';
import chainRoccoDataHighway from './chains/datahighway.png';
import chainDorafactory from './chains/dorafactory.png';
import chainEfinity from './chains/efinity.svg';
import chainEquilibrium from './chains/equilibrium.svg';
import chainGeminis from './chains/geminis.png';
import chainGenshiro from './chains/genshiro.svg';
import chainHydrate from './chains/hydrate.png';
import chainInterlay from './chains/interlay.svg';
import chainKarura from './chains/karura.svg';
import chainKico from './chains/kico.png';
import chainKintsugi from './chains/kintsugi.png';
import chainKusama from './chains/kusama-128.gif';
import chainListen from './chains/listen.png';
import chainMangata from './chains/mangatax.svg';
import chainMoonsamaDevelopment from './chains/moonsama.png';
import chainOpal from './chains/opal-logo.png';
import chainOriginTrail from './chains/origintrail.png';
import chainOriginTrailTestnet from './chains/origintrail-testnet.png';
import chainParallel from './chains/parallel.svg';
import chainComposable from './chains/picasso.svg';
import chainQuartz from './chains/quartz.png';
import chainRococo from './chains/rococo.svg';
import chainRococoContracts from './chains/rococo-contracts.png';
import chainRococoTick from './chains/rococo-tick.svg';
import chainRococoTrack from './chains/rococo-track.svg';
import chainRococoTrick from './chains/rococo-trick.svg';
import chainShiden from './chains/shiden.png';
import chainSkyeKiwi from './chains/skyekiwi.png';
import chainSnakenet from './chains/snakenet.svg';
import chainSnowbridge from './chains/snowbridge.png';
import chainSpanner from './chains/spanner.png';
import chainStandard from './chains/standard.png';
import chainT0rn from './chains/t0rn.png';
import chainKusamaDataHighway from './chains/tanganika.png';
import nodeTotem from './chains/totem.svg';
import chainTuring from './chains/turing.png';
import chainUnique from './chains/unique.svg';
import chainUnorthodox from './chains/unorthodox.png';
import chainVirto from './chains/virto.png';
import extensionPolkadotJs from './extensions/polkadot-js.svg';
import externalCommonwealth from './external/commonwealth.png';
import externalDotreasury from './external/dotreasury.svg';
import externalDotScanner from './external/dotscanner.png';
import externalKodaDot from './external/kodadot.png';
import externalPolkascan from './external/polkascan.png';
import externalPolkassembly from './external/polkassembly.png';
import externalPolkastats from './external/polkastats.png';
import externalSingular from './external/singular.svg';
import externalStatescan from './external/statescan.svg';
import externalSubId from './external/subid.svg';
import externalSubscan from './external/subscan.svg';
import externalSubsquare from './external/subsquare.svg';
import nodeAjuna from './nodes/ajuna.png';
import nodeApron from './nodes/apron.png';
import nodeArctic from './nodes/arctic.png';
import nodeAres from './nodes/ares.png';
import nodeAresGladios from './nodes/ares-gladios.svg';
import nodeAresMars from './nodes/ares-mars.png';
import nodeAstar from './nodes/astar.png';
import nodeAutomata from './nodes/automata.png';
import nodeBajun from './nodes/bajun.png';
import nodeBasilisk from './nodes/basilisk.png';
import nodeBeast from './nodes/beast.svg';
import nodeBifrost from './nodes/bifrost.svg';
import nodeBitCountry from './nodes/bitcountry.svg';
import nodeCalamari from './nodes/calamari.png';
import nodeCentrifuge from './nodes/centrifuge.png';
import nodeChainx from './nodes/chainx.svg';
import nodeClover from './nodes/clover.svg';
import nodeCoinversation from './nodes/coinversation.png';
import nodeCompetitorsClub from './nodes/competitors-club.png';
import nodeCrab from './nodes/crab.svg';
import nodeCrownSterling from './nodes/crown-sterling.png';
import nodeCrust from './nodes/crust.svg';
import nodeCrustMaxwell from './nodes/crust-maxwell.svg';
import nodeCrustParachain from './nodes/crustParachain.svg';
import nodeDaliTestnet from './nodes/dali.png';
import nodeDarwinia from './nodes/darwinia.png';
import nodeDataHighway from './nodes/datahighway.png';
import nodeDockMainnet from './nodes/dock-mainnet.png';
import nodeDockTestnet from './nodes/dock-testnet.png';
import nodeDolphin from './nodes/dolphin.svg';
import nodeDotMog from './nodes/dotmog.svg';
import nodeEave from './nodes/eave.svg';
import nodeEdgeware from './nodes/edgeware-white.png';
import nodeEfinity from './nodes/efinity.svg';
import nodeEncointer from './nodes/encointer-blue.svg';
import nodeFantour from './nodes/fantour.png';
import nodeGalital from './nodes/galital-logo.png';
import nodeGamePower from './nodes/gamepower.svg';
import nodeGeek from './nodes/geek.svg';
import nodeHanonycash from './nodes/hanonycash.svg';
import nodeIdavoll from './nodes/idavoll.png';
import nodeImbue from './nodes/imbue.png';
import nodeIntegritee from './nodes/integritee.svg';
import nodeInterBTC from './nodes/interlay.svg';
import nodeIpse from './nodes/ipse.png';
import nodeJoystream from './nodes/joystream.svg';
import nodeJupiter from './nodes/jupiter.svg';
import nodeKabocha from './nodes/kabocha.svg';
import nodeKhala from './nodes/khala.svg';
import nodeKilt from './nodes/kilt.png';
import nodeKlug from './nodes/klug.png';
import nodeKonomi from './nodes/konomi.png';
import nodeKulupu from './nodes/kulupu.svg';
import nodeKusari from './nodes/kusari.svg';
import nodeKylin from './nodes/kylin.png';
import nodeLaminar from './nodes/laminar-circle.svg';
import nodeLitentry from './nodes/litentry.png';
import nodeLitmus from './nodes/litmus.png';
import nodeLoomNetwork from './nodes/loom_network.png';
import nodeManta from './nodes/manta.png';
import nodeMath from './nodes/math.svg';
import nodeMinix from './nodes/minix.png';
import moonbase from './nodes/moonbase_alpha.png';
import moonbeam from './nodes/moonbeam.png';
import moonriver from './nodes/moonriver.svg';
import nodeMoonrock from './nodes/moonrock.png';
import moonshadow from './nodes/moonshadow.png';
import mybank from './nodes/mybank.png';
import nodeNFTMart from './nodes/nftmart.png';
import nodeNodle from './nodes/nodle.svg';
import oak from './nodes/oak.png';
import nodeUniqueWestend from './nodes/opal-logo.png';
import nodeOpportunity from './nodes/opportunity.png';
import nodePangolin from './nodes/pangolin.svg';
import nodePangoro from './nodes/pangoro.svg';
import nodeParallel from './nodes/parallel.svg';
import nodeParami from './nodes/parami.png';
import nodePhala from './nodes/phala.svg';
import nodePhoenix from './nodes/phoenix.png';
import nodePichiu from './nodes/pichiu.png';
import nodePioneerNetwork from './nodes/pioneer.png';
import nodePlasm from './nodes/plasm.png';
import nodePolkadex from './nodes/polkadex.svg';
import nodePolkadot from './nodes/polkadot-circle.svg';
import nodePolkadotJs from './nodes/polkadot-js.svg';
import nodePolkaFoundry from './nodes/polkafoundry.svg';
import nodePolkaSmith from './nodes/polkasmith.svg';
import nodePolymesh from './nodes/polymesh.svg';
import nodePontem from './nodes/pontem.svg';
import nodePrism from './nodes/prism.png';
import nodeQuartz from './nodes/quartz.png';
import nodeRealis from './nodes/realis.png';
import nodeRiochain from './nodes/riochain.svg';
import nodeRobonomics from './nodes/robonomics.svg';
import nodeSakura from './nodes/sakura.svg';
import nodeShadow from './nodes/shadow.svg';
import nodeShell from './nodes/shell.svg';
import nodeSherpax from './nodes/sherpax.png';
import nodeSingLavender from './nodes/singlavender.svg';
import nodeSoonsocial from './nodes/soonsocial.png';
import nodeSoonsocialX from './nodes/soonsocialX.png';
import nodeSora from './nodes/sora-substrate.svg';
import nodeStafi from './nodes/stafi.png';
import nodeStatemine from './nodes/statemine.svg';
import nodeSubDAO from './nodes/subdao.png';
import nodeSubGame from './nodes/subgame.svg';
import nodeSubsocial from './nodes/subsocial.svg';
import nodeSubsocialX from './nodes/subsocialX.svg';
import nodeSubspace from './nodes/subspace.png';
import nodeSubstrateContractsNode from './nodes/substrate-contracts-node.png';
import nodeSubstrate from './nodes/substrate-hexagon.svg';
import nodeSwapdex from './nodes/swapdex.svg';
import nodeTernoa from './nodes/ternoa.svg';
import nodeTrustBase from './nodes/trustbase.png';
import nodeUniarts from './nodes/uniarts.png';
import nodeUnique from './nodes/unique.svg';
import nodeUnitv from './nodes/unitv.png';
import nodeVln from './nodes/valiu.png';
import nodeWeb3games from './nodes/web3games.svg';
import nodeWestend from './nodes/westend_colour.svg';
import nodeWestlake from './nodes/westlake.png';
import nodeWhala from './nodes/whala.svg';
import nodeZCloak from './nodes/zCloak.svg';
import nodeZeitgeist from './nodes/zeitgeist.png';
import nodeZenlink from './nodes/zenlink.svg';
import nodeZero from './nodes/zero.svg';
import emptyLogo from './empty.svg';
// last-resort fallback, just something empty

// Alphabetical overrides based on the actual matched chain name
// NOTE: This is as retrieved via system.chain RPC
export const chainLogos = Object.entries({
  'Ajuna Testnet': nodeAjuna,
  'Aleph Zero': chainAleph,
  'Aleph Zero Testnet': chainAleph,
  Altair: chainAltair,
  'Apron PC1': nodeApron,
  Arctic: nodeArctic,
  'Ares Gladios': nodeAresGladios,
  'Ares PC1': nodeAres,
  Astar: chainAstar,
  Automata: nodeAutomata,
  'Automata ContextFree': nodeAutomata,
  'Bajun Testnet': nodeBajun,
  'Beast Developer': nodeBeast,
  Bifrost: nodeBifrost,
  'Bifrost Asgard CC4': nodeBifrost,
  'Bifrost Stage Testnet': nodeBifrost,
  BitgreenRococo: chainBitgreen,
  'Calamari Parachain': nodeCalamari,
  'Calamari Parachain Development': nodeCalamari,
  'Calamari Parachain Local': nodeCalamari,
  'Calamari Parachain Testnet': nodeCalamari,
  'Catalyst Testnet': nodeCentrifuge,
  Centrifuge: nodeCentrifuge,
  ChainX: nodeChainx,
  'Charcoal Testnet': nodeCentrifuge,
  Coinversation: chainCoinversation,
  'Competitors Club': chainCompetitorsClub,
  'Contracts on Rococo': chainRococoContracts,
  Creditcoin: chainCreditcoin,
  'Creditcoin Testnet': chainCreditcoinTest,
  'Crown Sterling': chainCrownSterling,
  'Crust Maxwell': nodeCrustMaxwell,
  'Crust PC1': nodeCrust,
  'darwinia crab': nodeCrab,
  'Darwinia Crab PC2': nodeCrab,
  'Darwinia PC2': nodeDarwinia,
  DataHighway: nodeDataHighway,
  'DataHighway Spreehafen Rococo Parachain Testnet': chainRoccoDataHighway,
  'DataHighway Tanganika Kusama Parachain': chainKusamaDataHighway,
  'Dolphin Testnet': nodeDolphin,
  'Dora Factory': chainDorafactory,
  Efinity: chainEfinity,
  Equilibrium: chainEquilibrium,
  'Equilibrium parachain': chainEquilibrium,
  EquilibriumTestnet: chainEquilibrium,
  Galital: nodeGalital,
  'GamePower Network': nodeGamePower,
  GEEK: nodeGeek,
  Geminis: chainGeminis,
  Genshiro: chainGenshiro,
  'Genshiro Rococo Testnet': chainGenshiro,
  HydraDX: chainSnakenet,
  'HydraDX Hydrate': chainHydrate,
  'HydraDX Snakenet': chainSnakenet,
  'HydraDX Snakenet Gen2': chainSnakenet,
  'HydraDX Snakenet Gen3': chainSnakenet,
  Idavoll: nodeIdavoll,
  'Imbue Testnet': nodeImbue,
  InterBTC: nodeInterBTC,
  'InterBTC Staging': nodeInterBTC,
  Interlay: chainInterlay,
  'InvArch Brainstorm Testnet': chainBrainstorm,
  IpseTestnet: nodeIpse,
  'Jupiter A1': nodeJupiter,
  'Jupiter PC1': nodeJupiter,
  Kapex: nodeTotem,
  Karura: chainKarura,
  Kerria: chainParallel,
  'Kerria Dev': chainParallel,
  Khala: nodeKhala,
  KICO: chainKico,
  KILT: nodeKilt,
  'KILT Local': nodeKilt,
  'KILT Peregrine': nodeKilt,
  'KILT Testnet': nodeKilt,
  Kintsugi: chainKintsugi,
  KlugDossier: nodeKlug,
  Konomi: nodeKonomi,
  Kpron: nodeApron,
  Kusama: chainKusama, // new name after CC3
  'Kusama CC1': chainKusama,
  'Kusama CC2': chainKusama,
  'Kusama CC3': chainKusama,
  kusari: nodeKusari,
  'Kylin Testnet': nodeKylin,
  Lego: nodeTotem,
  'Listen Network': chainListen,
  Litentry: nodeLitentry,
  'Litentry-rococo': nodeLitentry,
  Litmus: nodeLitmus,
  'Loom Network Local': nodeLoomNetwork,
  LoomNetwork: nodeLoomNetwork,
  'Mangata Kusama Mainnet': chainMangata,
  'Mangata Public Testnet': chainMangata,
  'Manta Parachain': nodeManta,
  'Manta Parachain Development': nodeManta,
  'Manta Parachain Local': nodeManta,
  'Manta Parachain Testnet': nodeManta,
  Mars: nodeAresMars,
  MathChain: nodeMath,
  'MathChain PC1': nodeMath,
  'mathchain-galois': nodeMath,
  Minix: nodeMinix,
  'Minix Testnet': nodeMinix,
  'Moonbase Alpha': moonbase,
  'Moonbase Development Testnet': moonbase,
  'Moonbase Stage': moonbase,
  Moonbeam: moonbeam,
  Moonriver: moonriver,
  Moonrock: nodeMoonrock,
  'Moonsama Development': chainMoonsamaDevelopment,
  Moonshadow: moonshadow,
  'mybank.network PC1': mybank,
  'Neumann Network': oak,
  NFTMart: nodeNFTMart,
  'NFTMart Staging': nodeNFTMart,
  'NFTMart Testnet': nodeNFTMart,
  Odyssey: nodeAresGladios,
  'OPAL by UNIQUE': chainOpal,
  'OriginTrail Parachain': chainOriginTrail,
  'OriginTrail Parachain Testnet': chainOriginTrailTestnet,
  Pangolin: nodePangolin,
  Pangoro: nodePangoro,
  Parallel: chainParallel,
  'Parallel Dev': chainParallel,
  'Parallel Heiko': chainParallel,
  'Parallel Heiko Dev': chainParallel,
  'Parami PC2': nodeParami,
  Phala: nodePhala,
  'PHOENIX PC1': nodePhoenix,
  'Pichiu Mainnet': nodePichiu,
  'Pichiu Testnet': nodePichiu,
  'Pioneer Network': nodePioneerNetwork,
  'Polkadex Mainnet': nodePolkadex,
  'Polkadex Testnet': nodePolkadex,
  'PolkaFoundry PC1': nodePolkaFoundry,
  'Pontem Testnet': nodePontem,
  'Prism PC1': nodePrism,
  'Prism Testnet': nodePrism,
  'QUARTZ by UNIQUE': chainQuartz,
  'ReAlis Network': nodeRealis,
  'RioChain CC-1': nodeRiochain,
  'RioChain Staging': nodeRiochain,
  Robonomics: nodeRobonomics,
  Rococo: chainRococo,
  Sherpax: nodeSherpax,
  'Sherpax Testnet': nodeSherpax,
  Shiden: chainShiden,
  SingLavender: nodeSingLavender,
  SkyeKiwi: chainSkyeKiwi,
  soonsocial: nodeSoonsocial,
  soonsocialX: nodeSoonsocialX,
  SORA: nodeSora,
  'SORA Kusama': nodeSora,
  Spanner: chainSpanner,
  Statemine: nodeStatemine,
  'Statemine Test': nodeStatemine,
  'Statemint Test': nodeStatemine,
  'Steam PC': nodeEave,
  subdao: nodeSubDAO,
  'SubDAO PC1': nodeSubDAO,
  'SubDAO Staging': nodeSubDAO,
  subgame: nodeSubGame,
  'SubGame Gamma': nodeSubGame,
  'SubGame Staging': nodeSubGame,
  subsocial: nodeSubsocial,
  subsocialX: nodeSubsocialX,
  subspace: nodeSubspace,
  swapdex: nodeSwapdex,
  t0rn: chainT0rn,
  Tick: chainRococoTick,
  Track: chainRococoTrack,
  Trick: chainRococoTrick,
  trustbase: nodeTrustBase,
  'TrustBase PC1': nodeTrustBase,
  turing: chainTuring,
  'uni arts staging network': nodeUniarts,
  'UniArts Mainnet': nodeUniarts,
  Unique: chainUnique,
  UNIQUE: chainUnique,
  'Unit Network': nodeUnitv,
  Unorthodox: chainUnorthodox,
  VirtoRococo: chainVirto,
  Vln: nodeVln,
  'VLN PC': nodeVln,
  Wapex: nodeTotem,
  'Web3Games Plum': nodeWeb3games,
  Westend: nodeWestend,
  Westlake: nodeWestlake,
  Westmint: nodeStatemine,
  'Westmint Test': nodeStatemine,
  WILT: nodeKilt,
  'zcloak poc1': nodeZCloak
}).reduce<Record<string, unknown>>((logos, [chain, logo]) => ({
  ...logos,
  [sanitize(chain)]: logo
}), {});

// Alphabetical overrides based on the actual software node type
// NOTE: This is as retrieved via system.name RPC
export const nodeLogos = Object.entries({
  'Acala Node': chainAcala,
  'Ajuna Node': nodeAjuna,
  'Apron Node': nodeApron,
  'Apron Parachain Collator': nodeApron,
  Arctic: nodeArctic,
  'Ares Gladios': nodeAresGladios,
  'Ares Node': nodeAres,
  'Ares Parachain Collator': nodeAres,
  Astar: nodeAstar,
  'Automata ContextFree Node': nodeAutomata,
  'Automata Node': nodeAutomata,
  'Bajun Node': nodeBajun,
  Basilisk: nodeBasilisk,
  'Beast Node': nodeBeast,
  Bifrost: nodeBifrost,
  'Bifrost Node': nodeBifrost,
  'Bifrost Stage Testnet': nodeBifrost,
  'Bit Country Tewai Parachain Collator': nodeBitCountry,
  'Bit.Country': nodeBitCountry,
  'BitCountry Node': nodeBitCountry,
  'Calamari Parachain Collator': nodeCalamari,
  Centrifuge: nodeCentrifuge,
  'centrifuge chain': nodeCentrifuge,
  'Centrifuge Chain Node': nodeCentrifuge,
  'ChainX Node': nodeChainx,
  'Clover Node': nodeClover,
  Coinversation: nodeCoinversation,
  'Competitors Club': nodeCompetitorsClub,
  'Crown Sterling': nodeCrownSterling,
  crust: nodeCrust,
  'Crust Collator': nodeCrust,
  'Crust Maxwell': nodeCrustMaxwell,
  darwinia: nodeDarwinia,
  'darwinia crab': nodeCrab,
  'darwinia parachain': nodeDarwinia,
  'Darwinia Runtime Module Library': nodeDarwinia,
  DataHighway: nodeDataHighway,
  'DataHighway Node': nodeDataHighway,
  'DataHighway Parachain Collator': nodeDataHighway,
  'DataHighway Spreehafen Rococo Parachain Testnet': chainRoccoDataHighway,
  'DataHighway Tanganika Kusama Parachain': chainKusamaDataHighway,
  'Dock Full Node': nodeDockMainnet,
  'Dock Node': nodeDockMainnet,
  'Dora Factory': chainDorafactory,
  'DOTMog Node': nodeDotMog,
  'Eave Node': nodeEave,
  'Edgeware Node': nodeEdgeware,
  Efinity: nodeEfinity,
  'Efinity Node': nodeEfinity,
  'Encointer collator': nodeEncointer,
  'Encointer Node noTEE': nodeEncointer,
  'Fantour Node': nodeFantour,
  'Galital Parachain Collator': nodeGalital,
  'GamePower Node': nodeGamePower,
  GEEK: nodeGeek,
  Geminis: chainGeminis,
  'Halongbay Parachain Collator': nodePolkaFoundry,
  hanonycash: nodeHanonycash,
  'Idavoll Node': nodeIdavoll,
  'Imbue Node': nodeImbue,
  'Integritee Collator': nodeIntegritee,
  'Integritee Node': nodeIntegritee,
  Interlay: chainInterlay,
  'InvArch Brainstorm Node': chainBrainstorm,
  IpseTestnet: nodeIpse,
  'Joystream Node': nodeJoystream,
  Kabocha: nodeKabocha,
  Kerria: nodeParallel,
  'Kerria Dev': nodeParallel,
  KICO: chainKico,
  KILT: nodeKilt,
  'KILT Local': nodeKilt,
  'KILT Peregrine': nodeKilt,
  Kintsugi: chainKintsugi,
  'Klug Dossier Node': nodeKlug,
  'Kpron Collator': nodeApron,
  kulupu: nodeKulupu,
  kusari: nodeKusari,
  'Kylin Node': nodeKylin,
  'Laminar Node': nodeLaminar,
  'Listen Network': chainListen,
  'Litentry node': nodeLitentry,
  'mandala node': chainAcala,
  'Manta Node': nodeManta,
  'Manta Parachain Collator': nodeManta,
  MathChain: nodeMath,
  'mathChain-galois': nodeMath,
  minix: nodeMinix,
  Moonrock: nodeMoonrock,
  'Moonsama Development': chainMoonsamaDevelopment,
  'mybank.network': mybank,
  'Neumann Network': oak,
  NFTMart: nodeNFTMart,
  'NFTMart Staging': nodeNFTMart,
  'NFTMart Testnet': nodeNFTMart,
  'node-template': nodeSubstrate,
  'Nodle Chain Node': nodeNodle,
  'Opal Node': nodeUniqueWestend,
  'Opportunity Standalone Testnet': nodeOpportunity,
  Pangolin: nodePangolin,
  Pangoro: nodePangoro,
  Parallel: nodeParallel,
  'Parallel Dev': nodeParallel,
  'Parallel Heiko': nodeParallel,
  'Parallel Heiko Dev': nodeParallel,
  Parami: nodeParami,
  'parity-polkadot': nodePolkadot,
  'Patract Node': nodeJupiter,
  Phala: nodePhala,
  phala: nodePhala,
  'Phala Collator': nodePhala,
  'phala-substrate-node': nodePhala,
  'PHOENIX Collator': nodePhoenix,
  'PHOENIX Node': nodePhoenix,
  'Pichiu Node': nodePichiu,
  'Pioneer Network Collator Node': nodePioneerNetwork,
  Plasm: nodePlasm,
  'Plasm Node': nodePlasm,
  'Plasm Parachain Collator': nodePlasm,
  'Polkadex Node': nodePolkadex,
  'polkadot-js': nodePolkadotJs,
  'PolkaFoundry Node': nodePolkaFoundry,
  'PolkaFoundry Parachain Collator': nodePolkaFoundry,
  'PolkaSmith Parachain Collator': nodePolkaSmith,
  'Pontem Testnet': nodePontem,
  'Prism Collator': nodePrism,
  'Prism Node': nodePrism,
  'Quartz Node': nodeQuartz,
  'ReAlis Network': nodeRealis,
  'Rio Defi Chain Node': nodeRiochain,
  'RioChain Staging': nodeRiochain,
  robonomics: nodeRobonomics,
  Sakura: nodeSakura,
  Shadow: nodeShadow,
  sherpax: nodeSherpax,
  'Shiden Collator': chainShiden,
  'SingLavender Parachain Collator': nodeSingLavender,
  Sora: nodeSora,
  Stafi: nodeStafi,
  'Stafi Node': nodeStafi,
  'Statemine Collator': nodeStatemine,
  'Statemint Collator': nodeStatemine,
  subdao: nodeSubDAO,
  'SubDAO Collator': nodeSubDAO,
  'SubDAO Staging': nodeSubDAO,
  subgame: nodeSubGame,
  'SubGame Gamma': nodeSubGame,
  'SubGame Staging': nodeSubGame,
  subspace: nodeSubspace,
  'substrate-contracts-node': nodeSubstrateContractsNode,
  'substrate-node': nodeSubstrate,
  'subzero node': nodeZero,
  swapdex: nodeSwapdex,
  t0rn: chainT0rn,
  'Ternoa Node': nodeTernoa,
  'Totem Parachain Collator': nodeTotem,
  'TrustBase Collator': nodeTrustBase,
  'TrustBase Node': nodeTrustBase,
  'uni arts node': nodeUniarts,
  'UniArts Node': nodeUniarts,
  'Unique Node': nodeUnique,
  'Unit Collator': nodeUnitv,
  'Unit Node': nodeUnitv,
  Vanilla: nodeParallel,
  'Vanilla Dev': nodeParallel,
  Vln: nodeVln,
  'VLN PC': nodeVln,
  'Web3Games Node': nodeWeb3games,
  Westend: nodeWestend,
  Westlake: nodeWestlake,
  'Westmint Collator': nodeStatemine,
  Whala: nodeWhala,
  'Whala Node': nodeWhala,
  WILT: nodeKilt,
  'zcloak node': nodeZCloak,
  'Zeitgeist Collator': nodeZeitgeist,
  'Zeitgeist Node': nodeZeitgeist,
  Zenlink: nodeZenlink,
  'Zenlink Collator': nodeZenlink
}).reduce<Record<string, unknown>>((logos, [node, logo]) => ({
  ...logos,
  [sanitize(node)]: logo
}), {});

// Alphabetical overrides based on the actual specName
export const specLogos = Object.entries({
  shell: nodeShell,
  statemine: nodeStatemine,
  statemint: nodeStatemine,
  westmint: nodeStatemine
}).reduce<Record<string, unknown>>((logos, [spec, logo]) => ({
  ...logos,
  [sanitize(spec)]: logo
}), {});

// Alphabetical overrides when we pass an explicit logo name
// NOTE: Matches with what is defined as "info" in settings/endpoints.ts
// (Generally would be the 'network' key in the known ss58 as per
// https://github.com/polkadot-js/common/blob/master/packages/networks/src/index.ts)
export const namedLogos: Record<string, unknown> = {
  acala: chainAcala,
  ajuna: nodeAjuna,
  aleph: chainAleph,
  alexander: nodePolkadot,
  altair: chainAltair,
  arctic: nodeArctic,
  'Ares Gladios': nodeAresGladios,
  astar: chainAstar,
  automata: nodeAutomata,
  'automata-contextfree': nodeAutomata,
  bajun: nodeBajun,
  basilisk: nodeBasilisk,
  beast: nodeBeast,
  bifrost: nodeBifrost,
  'Bifrost Stage Testnet': nodeBifrost,
  bitcountry: nodeBitCountry,
  bitcountryPioneer: nodePioneerNetwork,
  brainstorm: chainBrainstorm,
  calamari: nodeCalamari,
  centrifuge: nodeCentrifuge,
  chainx: nodeChainx,
  charcoal: nodeCentrifuge,
  clover: nodeClover,
  coinversation: chainCoinversation,
  'competitors-club': chainCompetitorsClub,
  composableFinance: chainComposableFinance,
  crab: nodeCrab,
  creditcoin: chainCreditcoin,
  'creditcoin-testnet': chainCreditcoinTest,
  'crown-sterling': chainCrownSterling,
  crust: nodeCrust,
  'Crust Maxwell': nodeCrustMaxwell,
  crustParachain: nodeCrustParachain,
  'Dali Testnet (Rococo Relay)': chainRococoDali,
  DaliTestnet: nodeDaliTestnet,
  darwinia: nodeDarwinia,
  datahighway: nodeDataHighway,
  'dock-pos-mainnet': nodeDockMainnet,
  'dock-pos-testnet': nodeDockTestnet,
  dolphin: nodeDolphin,
  dorafactory: chainDorafactory,
  dotmog: nodeDotMog,
  eave: nodeEave,
  edgeware: nodeEdgeware,
  efinity: nodeEfinity,
  empty: emptyLogo,
  encointer: nodeEncointer,
  equilibrium: chainEquilibrium,
  fantour: nodeFantour,
  galital: nodeGalital,
  galois: nodeMath,
  gamepower: nodeGamePower,
  geek: nodeGeek,
  geminis: chainGeminis,
  genshiro: chainGenshiro,
  halongbay: nodePolkaFoundry,
  hanonycash: nodeHanonycash,
  heiko: chainParallel,
  hydra: chainSnakenet,
  idavoll: nodeIdavoll,
  imbue: nodeImbue,
  integritee: nodeIntegritee,
  interbtc: nodeInterBTC,
  interlay: chainInterlay,
  ipse: nodeIpse,
  joystream: nodeJoystream,
  jupiter: nodeJupiter,
  kabocha: nodeKabocha,
  kapex: nodeTotem,
  karura: chainKarura,
  kerria: nodeParallel,
  khala: nodeKhala,
  kico: chainKico,
  kilt: nodeKilt,
  kintsugi: chainKintsugi,
  klugdossier: nodeKlug,
  kpron: nodeApron,
  kulupu: nodeKulupu,
  kusama: chainKusama,
  kusari: nodeKusari,
  kylin: nodeKylin,
  laminar: nodeLaminar,
  lego: nodeTotem,
  listen: chainListen,
  litentry: nodeLitentry,
  litmus: nodeLitmus,
  loomNetwork: nodeLoomNetwork,
  mangata: chainMangata,
  manta: nodeManta,
  mars: nodeAresMars,
  mathchain: nodeMath,
  minix: nodeMinix,
  moonbaseAlpha: moonbase,
  moonbeam,
  moonriver,
  moonrock: nodeMoonrock,
  moonshadow,
  mybank,
  neumann: oak,
  nftmart: nodeNFTMart,
  nodle: nodeNodle,
  odyssey: nodeAresGladios,
  opal: nodeUniqueWestend,
  opportunity: nodeOpportunity,
  'origintrail-parachain': chainOriginTrail,
  pangolin: nodePangolin,
  pangoro: nodePangoro,
  parallel: chainParallel,
  phala: nodePhala,
  phoenix: nodePhoenix,
  picasso: chainComposable,
  pichiu: nodePichiu,
  plasm: nodePlasm,
  polkadex: nodePolkadex,
  polkadot: nodePolkadot,
  polkafoundry: nodePolkaFoundry,
  polkasmith: nodePolkaSmith,
  polymesh: nodePolymesh,
  pontem: nodePontem,
  prism: nodePrism,
  quartz: nodeQuartz,
  realis: nodeRealis,
  riochain: nodeRiochain,
  robonomics: nodeRobonomics,
  rocfinity: nodeEfinity,
  rocky: nodeCrust,
  rococo: chainRococo,
  rococoAcala: chainAcala,
  rococoApron: nodeApron,
  rococoAres: nodeAres,
  rococoBajun: nodeBajun,
  rococoBasilisk: nodeBasilisk,
  rococoBifrost: nodeBifrost,
  rococoBitCountry: nodeBitCountry,
  rococoBitgreen: chainBitgreen,
  rococoCatalyst: nodeCentrifuge,
  rococoChainX: nodeChainx,
  rococoClover: nodeClover,
  rococoContracts: chainRococoContracts,
  rococoCrab: nodeCrab,
  rococoCrust: nodeCrust,
  rococoDali: chainRococoDali,
  rococoDarwinia: nodeDarwinia,
  rococoDolphin: nodeDolphin,
  rococoEave: nodeEave,
  rococoEncointer: nodeEncointer,
  rococoGalital: nodeGalital,
  rococoGenshiro: chainGenshiro,
  rococoHydrate: chainHydrate,
  rococoIdavoll: nodeIdavoll,
  rococoImbue: nodeImbue,
  rococoIntegritee: nodeIntegritee,
  rococoInterBTC: chainInterlay,
  rococoJupiter: nodeJupiter,
  rococoKilt: nodeKilt,
  rococoKonomi: nodeKonomi,
  rococoKylin: nodeKylin,
  rococoLaminar: nodeLaminar,
  rococoLitentry: nodeLitentry,
  rococoLoomNetwork: nodeLoomNetwork,
  rococoManta: nodeManta,
  rococoMathChain: nodeMath,
  rococoMoonrock: nodeMoonrock,
  rococoMoonsama: chainMoonsamaDevelopment,
  rococoNodle: nodeNodle,
  rococoOriginTrailParachain: chainOriginTrailTestnet,
  rococoPangolin: nodePangolin,
  rococoParami: nodeParami,
  rococoPhala: nodePhala,
  rococoPhoenix: nodePhoenix,
  rococoPlasm: nodePlasm,
  rococoPolkaFoundry: nodePolkaFoundry,
  rococoPrism: nodePrism,
  rococoSingLavender: nodeSingLavender,
  rococoSpreehafen: chainRoccoDataHighway,
  rococoStandard: chainStandard,
  rococoStatemint: nodeStatemine,
  rococoSubDAO: nodeSubDAO,
  rococoSubsocial: nodeSoonsocialX,
  rococoTick: chainRococoTick,
  rococoTrack: chainRococoTrack,
  rococoTrick: chainRococoTrick,
  rococoTrustBase: nodeTrustBase,
  rococoTuring: chainTuring,
  rococoUnitv: nodeUnitv,
  rococoVirto: chainVirto,
  rococoVln: nodeVln,
  rococoZeitgeist: nodeZeitgeist,
  rococoZenlink: nodeZenlink,
  sakura: nodeSakura,
  shadow: nodeShadow,
  shell: nodeShell,
  sherpax: nodeSherpax,
  shibuya: chainShiden,
  shiden: chainShiden,
  singLavender: nodeSingLavender,
  skyekiwi: chainSkyeKiwi,
  snakenet: chainSnakenet,
  snowbridge: chainSnowbridge,
  soonsocial: nodeSoonsocial,
  sora: nodeSora,
  'sora-substrate': nodeSora,
  sora_ksm: nodeSora,
  spanner: chainSpanner,
  stafi: nodeStafi,
  statemine: nodeStatemine,
  statemint: nodeStatemine,
  subdao: nodeSubDAO,
  'SubDAO PC1': nodeSubDAO,
  'SubDAO Staging': nodeSubDAO,
  subgame: nodeSubGame,
  'SubGame Gamma': nodeSubGame,
  'SubGame Staging': nodeSubGame,
  subsocial: nodeSubsocial,
  subsocialX: nodeSubsocialX,
  subspace: nodeSubspace,
  'subspace-farmnet': nodeSubspace,
  substrate: nodeSubstrate,
  substrateContractsNode: nodeSubstrateContractsNode,
  swapdex: nodeSwapdex,
  t0rn: chainT0rn,
  tanganika: chainKusamaDataHighway,
  'ternoa-alphanet': nodeTernoa,
  'ternoa-mainnet': nodeTernoa,
  'ternoa-testnet': nodeTernoa,
  'totem-parachain': nodeTotem,
  trustbase: nodeTrustBase,
  turing: chainTuring,
  uniarts: nodeUniarts,
  unique: nodeUnique,
  unitv: nodeUnitv,
  unorthodox: chainUnorthodox,
  vanilla: nodeParallel,
  vln: nodeVln,
  wapex: nodeTotem,
  web3games: nodeWeb3games,
  westend: nodeWestend,
  westendPichiu: nodePichiu,
  westendStandard: chainStandard,
  westlake: nodeWestlake,
  westmint: nodeStatemine,
  whala: nodeWhala,
  zCloak: nodeZCloak,
  zeitgeist: nodeZeitgeist,
  zero: nodeZero
};

// extension logos
export const extensionLogos: Record<string, unknown> = {
  'polkadot-js': extensionPolkadotJs
};

// external logos, i.e. for explorers
export const externalLogos: Record<string, unknown> = {
  commonwealth: externalCommonwealth,
  dotreasury: externalDotreasury,
  dotscanner: externalDotScanner,
  kodadot: externalKodaDot,
  polkascan: externalPolkascan,
  polkassembly: externalPolkassembly,
  polkastats: externalPolkastats,
  singular: externalSingular,
  statescan: externalStatescan,
  subid: externalSubId,
  subscan: externalSubscan,
  subsquare: externalSubsquare
};

// empty logos
export const emptyLogos: Record<string, unknown> = {
  empty: emptyLogo
};

// preload all
[chainLogos, extensionLogos, externalLogos, namedLogos, nodeLogos, emptyLogos].forEach((imageSet): void => {
  Object.values(imageSet).forEach((src): void => {
    new Image().src = src as string;
  });
});

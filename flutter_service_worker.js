'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d8e8fca2dc0f896fd7cb4cb0031ba249",
".git/config": "5c3d10e6bee3d2bc77ef8299cbc94d5b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "dbfb4d7c845f8ccb5e9ad9fee7de83f6",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "720962eaa6571ec35715fe88d0e5bc21",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "25ca6bdb0737187ff95920e8ed790ace",
".git/logs/refs/heads/master": "25ca6bdb0737187ff95920e8ed790ace",
".git/logs/refs/remotes/origin/HEAD": "782050b16a7e377b34a1dc8a74b80556",
".git/logs/refs/remotes/origin/main": "c24114d58a8fa16d6837ffea12009b46",
".git/logs/refs/remotes/origin/master": "cd69e2c1eaf1711ed576726b28d9f1f9",
".git/objects/04/333603ec8a051ae4a2f3149e42cc12e3b839a3": "6fe09223dd61cc98f04fc0c42c38b697",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/f493d21a87d3a9ce89b68e7ffa31c72f859765": "fa452d947bb03f91bcb555b33f545a1c",
".git/objects/0a/21fc727035c61e7baaa046c6ca3b67bdcc40f8": "946ee694ee987219d000a0d92254245a",
".git/objects/0a/845e8e37cd857bda7e8b244f5bf5c0ef759762": "45f31b5fa64057fc828c9e8f954932ad",
".git/objects/0c/991172b232f971a87e1ba788f82aef408142cc": "7a4f722fab19aa79202b28f368ba703e",
".git/objects/0e/4d82f4d34e92f038f002a816d558fc7a7d672a": "082ae67f46930c20a180150e2bec869c",
".git/objects/18/95a76c44ca2b5654b24178d3f12624f3661268": "191dbc82fc5c4161b366f16760d3073b",
".git/objects/1a/bf279267155d68573acf8808cbed486887bdca": "cc32b0fb060ce45bb97da81dc64bf112",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/6c2ad61671f9780dce3c3e432111f22823dc39": "bfca9f51469658ac267e12ea4ec02eb0",
".git/objects/20/0c7568348d8b74bc04aa57e2f1e919984dbe3a": "d686f2a61a34b575a1226dbf20310eb3",
".git/objects/20/48c94faef7da840dcac83da9ce5ac0750e4643": "51912eb290cc2c4b4543fe3e1f7dc265",
".git/objects/22/03df59a011f55e45bc8c580bc92571413455ff": "52a10f596849abb1450ef5ed7baf7abc",
".git/objects/23/47267ae09742e27143cb9c44f648b84abde23e": "4f1d02265d432a7872c3dfa4f3780807",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/f6dff0916dfe8228a25cdf78fcb23fcf53e6f9": "29ace0643f8e4f78c79e3397bc111bab",
".git/objects/26/7bd4c1c7f5c39f93982c8d626d65748cbe6e6f": "edcfa81a4918873e898d8f71423e2b8a",
".git/objects/2d/42779943b2c76299daa54ca94227e41d53456f": "5df1b63e2c410158399d185171067f43",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/a01f21112487fff955d19127d736bd0d59a66a": "f31b7fe0bd849f5ffca118b458e9b23b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/e3826172ea6185b92a2913755a797709e581c0": "1ef06842d86e55884babae2dab897857",
".git/objects/4f/17801375c367b733514582f02b0fcacaf2849a": "5320d3a0754facab86fd6db2596ea5b2",
".git/objects/50/6ae39e31a478c9cb651aaa5aa34732d881a557": "1744960751b671cd1ea0a0bcad2c1fb8",
".git/objects/58/3b844f5bf8f39632458874df3a510d47647246": "0822109037f11a3d13083d57d1d72164",
".git/objects/5a/9fbc8a89b6e3a09966e96c234715170609682c": "c431b4735a37dabfc14bf2dee03267d5",
".git/objects/67/a46f8f14331a8177d52da815451eb949453626": "294d52b8843d5ebe3cea11e9fcdd8e31",
".git/objects/6a/3ef49fe5d271854937ebbb4d6b4785b7785cdb": "3e3a3c5c40fc6529cfe300eddcdac86f",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/60b4ccd99529573e0fbed15926e89d75d83a7f": "e2789ce56e77f5532cb220ef9951bc87",
".git/objects/76/6afa72a21144e0450d7a9f749d9b41a8f2ee9b": "87b4b0df043477b59363799f22f2471f",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/95/2b21ef81d9aab86f2435f059b3f64de136d5eb": "a2ed762923f0ff6c20a6e3cbda0f36e8",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/a52e9c1ee28adf917735df1609484e6743c6de": "9ef3decc0dc2410cac5a2fb493f0e1a3",
".git/objects/9c/2bc6dbdd0bac01b6a2fe87e191ca941d5a77bb": "8cc2791e77bfc234368ce96d41540513",
".git/objects/9f/6bd98f83b2ec8f28a0d88fe3c4fe4655ea15a8": "4b03012aa04bbab76a5cdaf5908bc289",
".git/objects/a4/f0a2e8de9c652da50af307d4bb11bb358bfa98": "41dd951324543ddffe205c2e605c2907",
".git/objects/b0/a8cb8c216036fc720ec1877fb5ada472e2afee": "708bec5aeac86579038a2607f6ec2229",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/101a80db92e6df65aee8109fb229915454d09d": "d71f9e0c9e34819d873250b446c5c617",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/b3117e83626fbdac7f3f764af47d910ddc9877": "a4ca76c20ae4a33e6e1021e78364191a",
".git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "f455d63cfccab304798020f3d589d259",
".git/objects/c3/25dca7c32d9847e70e490a50c9ace07bcf2c77": "73453e519178f71cc75a74be3b5c1bbf",
".git/objects/c3/cda38e3a02f6e167def1419bb7ab7216f4f71e": "f14d463c4b5117cc8a01007f990f71bd",
".git/objects/c4/bb6e0ae8a44f516245ebfbe02cd9116aaf0067": "a7c8e2565fbf3fb954242fc04875423b",
".git/objects/c7/d167b69012ceae476ed43329a21d6fe5aacc9c": "0025225699f6bc22ec7cd131c77f0e66",
".git/objects/c9/cb2a69ed03fea86572dd2a9e46b2d4ffd7500f": "bfd4f418ad7d3e9904996c73564185dc",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/5881a7245d16677d7b939579640a2659023f88": "1c3eb9ba0db0f9a99b0ff62263d7f967",
".git/objects/dc/85bfc44e304dbc3d95f32e86b3f11ac1c3508a": "296f5e6a7207e14dad1245fa7c38e3cd",
".git/objects/de/c7b9a084f78e54e512ee7cba6dec7893688cf9": "1ae70232c0201c9461ec3722ec36516a",
".git/objects/e6/0e65823aad410de3d557e6874c8cea14268c45": "653d003fa3f182086bfe366916bb82cc",
".git/objects/e6/80711ef53d00dbd65bd841f0110bca23d67854": "db2fe1544c49b73fd14a143e4a213e52",
".git/objects/eb/387772bf6031f57dd6ba05548b1f54fb418f0e": "5a3c6accdc46bcf43190ecf3a6df81a7",
".git/objects/ed/257afc1e6bfc0b0267d9606e9649d71fa37be6": "f33e1ef67386de298896e2eadb6a188d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/pack/pack-cfc776bf270993f274c369e3054dd06108d08f6f.idx": "4b691170db16d0c635cfa612f322f725",
".git/objects/pack/pack-cfc776bf270993f274c369e3054dd06108d08f6f.pack": "4e0e93af0f95d35f408b1d87a88c7647",
".git/objects/pack/pack-cfc776bf270993f274c369e3054dd06108d08f6f.rev": "d4636c539581ef4ba9315dee65314fab",
".git/ORIG_HEAD": "faa43605adc3c4004428362237a6f140",
".git/refs/heads/master": "faa43605adc3c4004428362237a6f140",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "92185e4341cdc9ff8ffa8f5353ab4c9e",
".git/refs/remotes/origin/master": "faa43605adc3c4004428362237a6f140",
"assets/AssetManifest.bin": "f78caf07d2a7e8626df2cc99b8549550",
"assets/AssetManifest.bin.json": "75d4b10a4ce33d4829ffcaff0b02add1",
"assets/AssetManifest.json": "4b6a12b389ac21d317929d548cefc4a5",
"assets/assets/abdomen_icon.svg": "45b322619b27d7896c05d4697c6c5ea8",
"assets/assets/antebraco_icon.svg": "02db98630646629b14957e1109d5b962",
"assets/assets/biceps_icon.svg": "5f9411657d2835bf5f869640395304d1",
"assets/assets/costas_icon.svg": "696c51ba93e4e7d494518a8cd2cc2db8",
"assets/assets/default_icon.svg": "3de76dfbb465fcff72e4012ad9d49005",
"assets/assets/gluteos_icon.svg": "1ea1bf89bae849583c5f3ed6c80b86a1",
"assets/assets/logo.png": "e9cebf7acd25fd738d93a4ead1eb4169",
"assets/assets/lombar_icon.svg": "f05dc5bdd06fd9bdc497bb3dc7880713",
"assets/assets/ombro_icon.svg": "b15347c439cfaba635b1da5201a63334",
"assets/assets/panturrilha_icon.svg": "8bf208e1549d9c3f45560c3ba3a37af9",
"assets/assets/peito_icon.svg": "c21ac0ab4865fe07e317fe6bb24f8ef8",
"assets/assets/posteriores_de_coxa_icon.svg": "a0b306f5f7ee8eb3f6755a780b8f505e",
"assets/assets/profile-circle.png": "0266d876f478ef5da65940023550fda7",
"assets/assets/profile.png": "307974d7be16d0d5249f07f48b21ff0a",
"assets/assets/quadriceps_icon.svg": "1820b7f19c53d0195347394ec5e1bb1d",
"assets/assets/trapezio_icon.svg": "49023b6df875a267132463d38378b137",
"assets/assets/triceps_icon.svg": "8eba400ccbc6e061cfc871d220c94697",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7fab205e7e729346b61950efe9bdf19b",
"assets/NOTICES": "55c20c0eb0c7d0f2113d3ebb106032b6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "671ee6f753894572b32c3e535ed8c2bd",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "9c8dd4d48d7c78881157448b3578c162",
"icons/Icon-192.png": "ea9fc43cde4a2915fc24e16f06be5072",
"icons/Icon-512.png": "7b2e62271d7590ef82822b6975cf08e0",
"icons/Icon-maskable-192.png": "ea9fc43cde4a2915fc24e16f06be5072",
"icons/Icon-maskable-512.png": "7b2e62271d7590ef82822b6975cf08e0",
"index.html": "a588a5c30ae6fd5bd0ae04d5302f4232",
"/": "a588a5c30ae6fd5bd0ae04d5302f4232",
"main.dart.js": "0156b95065ea552fc55e7388ac187fd1",
"manifest.json": "4dfa9ac972e00fcef84534d0f77d833a",
"version.json": "11e1a177d57c5da2bc6e3a6acc3010f4",
"workoutAppWeb/.git/config": "625d050daeae573798021e3810789409",
"workoutAppWeb/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"workoutAppWeb/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"workoutAppWeb/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"workoutAppWeb/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"workoutAppWeb/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"workoutAppWeb/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"workoutAppWeb/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"workoutAppWeb/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"workoutAppWeb/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"workoutAppWeb/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"workoutAppWeb/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"workoutAppWeb/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"workoutAppWeb/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"workoutAppWeb/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"workoutAppWeb/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"workoutAppWeb/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"workoutAppWeb/.git/index": "0d5ba23a97ed799390e2cf5ce0dcde43",
"workoutAppWeb/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"workoutAppWeb/.git/logs/HEAD": "a686bf6842fc5c8b05e03f87e386ee9f",
"workoutAppWeb/.git/logs/refs/heads/main": "a686bf6842fc5c8b05e03f87e386ee9f",
"workoutAppWeb/.git/logs/refs/remotes/origin/HEAD": "a686bf6842fc5c8b05e03f87e386ee9f",
"workoutAppWeb/.git/objects/pack/pack-150933cb9db33085f2819d8a4a40010225409f7f.idx": "fd5de1cf570b377d5dff7860da36b7f7",
"workoutAppWeb/.git/objects/pack/pack-150933cb9db33085f2819d8a4a40010225409f7f.pack": "529c88c21970307c2e51588f7a6dcf8b",
"workoutAppWeb/.git/objects/pack/pack-150933cb9db33085f2819d8a4a40010225409f7f.rev": "6a881361143437362b15a4d919928d76",
"workoutAppWeb/.git/packed-refs": "ceaf6b801f6f05b859d0b33b7e20562f",
"workoutAppWeb/.git/refs/heads/main": "92185e4341cdc9ff8ffa8f5353ab4c9e",
"workoutAppWeb/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"workoutAppWeb/assets/AssetManifest.bin": "f78caf07d2a7e8626df2cc99b8549550",
"workoutAppWeb/assets/AssetManifest.bin.json": "75d4b10a4ce33d4829ffcaff0b02add1",
"workoutAppWeb/assets/AssetManifest.json": "4b6a12b389ac21d317929d548cefc4a5",
"workoutAppWeb/assets/assets/abdomen_icon.svg": "9a1915c29585afc3f14c34cf18ded11a",
"workoutAppWeb/assets/assets/antebraco_icon.svg": "87cdbe6943c2ce4933ad2a1d0aa62cb8",
"workoutAppWeb/assets/assets/biceps_icon.svg": "1a28502961041240abab0a791034deff",
"workoutAppWeb/assets/assets/costas_icon.svg": "3ec8e5ec27f435fb32c029f6b4a98d56",
"workoutAppWeb/assets/assets/default_icon.svg": "3de76dfbb465fcff72e4012ad9d49005",
"workoutAppWeb/assets/assets/gluteos_icon.svg": "6ad1df91e9e45fd5ccf1b621b2e672a9",
"workoutAppWeb/assets/assets/logo.png": "e9cebf7acd25fd738d93a4ead1eb4169",
"workoutAppWeb/assets/assets/lombar_icon.svg": "ea981f8c94936e7a2c6d45bad216d461",
"workoutAppWeb/assets/assets/ombro_icon.svg": "a5b275ca2a7d21ee9c9a3460729100e4",
"workoutAppWeb/assets/assets/panturrilha_icon.svg": "2d907eda1ab5e67421f9082996d7cf53",
"workoutAppWeb/assets/assets/peito_icon.svg": "6576fe1131d999c8543e90c7519d4762",
"workoutAppWeb/assets/assets/posteriores_de_coxa_icon.svg": "aa6fef026df15c61c53f67912c91f533",
"workoutAppWeb/assets/assets/profile-circle.png": "0266d876f478ef5da65940023550fda7",
"workoutAppWeb/assets/assets/profile.png": "307974d7be16d0d5249f07f48b21ff0a",
"workoutAppWeb/assets/assets/quadriceps_icon.svg": "37aa0976db52b41aba07e3550ef1a967",
"workoutAppWeb/assets/assets/trapezio_icon.svg": "bae944c72cbed03629d2edc829e17dfd",
"workoutAppWeb/assets/assets/triceps_icon.svg": "f68991c908aefad92dad21d7cb8f1f9b",
"workoutAppWeb/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"workoutAppWeb/assets/fonts/MaterialIcons-Regular.otf": "7fab205e7e729346b61950efe9bdf19b",
"workoutAppWeb/assets/NOTICES": "973290e9353321c34e4ef2ffa5c0a109",
"workoutAppWeb/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"workoutAppWeb/assets/shaders/ink_sparkle.frag": "9bb2aaa0f9a9213b623947fa682efa76",
"workoutAppWeb/canvaskit/canvaskit.js": "b8f4beed9f92960c33fac4f3ec0f49db",
"workoutAppWeb/canvaskit/canvaskit.js.symbols": "a5abd9548c1ac52492fb83682355175c",
"workoutAppWeb/canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"workoutAppWeb/canvaskit/chromium/canvaskit.js": "ae8a22c690cdbe6db931f7fcfa32793c",
"workoutAppWeb/canvaskit/chromium/canvaskit.js.symbols": "e6a058eeb908ce2c2c30d450cffb438a",
"workoutAppWeb/canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"workoutAppWeb/canvaskit/skwasm.js": "78e709d9dc8ed5e0288a151e3cf3e95d",
"workoutAppWeb/canvaskit/skwasm.js.symbols": "d10d5b9ecde9454f3b5e0574a3d4649c",
"workoutAppWeb/canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"workoutAppWeb/canvaskit/skwasm.worker.js": "e35e7fbec8f04f340add4f6ace89a29c",
"workoutAppWeb/favicon.png": "671ee6f753894572b32c3e535ed8c2bd",
"workoutAppWeb/flutter.js": "9fd90a6808bad6cfbaf32408c99eee90",
"workoutAppWeb/icons/Icon-192.png": "ea9fc43cde4a2915fc24e16f06be5072",
"workoutAppWeb/icons/Icon-512.png": "7b2e62271d7590ef82822b6975cf08e0",
"workoutAppWeb/icons/Icon-maskable-192.png": "ea9fc43cde4a2915fc24e16f06be5072",
"workoutAppWeb/icons/Icon-maskable-512.png": "7b2e62271d7590ef82822b6975cf08e0",
"workoutAppWeb/index.html": "d3cce7ec2e9190447d2d791da63c8534",
"workoutAppWeb/main.dart.js": "926883f1902f9597f1d8b1e89a416f4b",
"workoutAppWeb/manifest.json": "4dfa9ac972e00fcef84534d0f77d833a",
"workoutAppWeb/version.json": "11e1a177d57c5da2bc6e3a6acc3010f4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

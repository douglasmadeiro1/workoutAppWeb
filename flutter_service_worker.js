'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c514939fdd61df26b103925a5122b356",
".git/config": "625d050daeae573798021e3810789409",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "00a5b222e1d126ee6e85c575f6587a11",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "6f67fe42dceaafe7836505764328aed5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f3ef5fc4d83169975f8806b62b21813f",
".git/logs/refs/heads/main": "60df9f44f97af68f6585bc255d1938eb",
".git/logs/refs/remotes/origin/main": "892786a70142b4b48e1d42a0351ee6cb",
".git/logs/refs/remotes/origin/master": "b9df308f20fd37afa79e9495be832dee",
".git/objects/00/84943c80858dd1060e467615c392b5e5f7a5bb": "48d2b5ae68448358d54e3be04bf7430d",
".git/objects/01/db919ae4bf9a6604af6723695a7cdf7a2561f7": "bcc6ee202cac161296f905f06f3f53dd",
".git/objects/05/e41898d2066a17e20d140c392c6c514ac8961a": "3fb898b6c8616ff05c23ffedf43e40f7",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0a/845e8e37cd857bda7e8b244f5bf5c0ef759762": "45f31b5fa64057fc828c9e8f954932ad",
".git/objects/0c/0d59b6bae0afbe93ee5c39421bfa3f18d8efb9": "3a4e5e10e8181236abd816f3186c49c9",
".git/objects/0e/b7dba92e6115db4f94ce550cb848c97caa9242": "317c9ae5da27c770b852fc294de809ac",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/16/8e1e5f2c4d6829b45a66aab8f41f8c6f34f3b3": "a10f76260780cbf53805b7009bec095f",
".git/objects/1a/66333f875851a6e1712bbc9be2d366f7357f18": "0b295f781dcea0f6d638ba6ed8b6214a",
".git/objects/1b/7e7400933cbaac2565267b799d618d794e55fa": "1b980a6b8f56a8a3bf275c619fb8f538",
".git/objects/1d/ede516bce052ff4f07169a31c0526935cf648e": "c554675ac530a1999f287e3ddb2a1c12",
".git/objects/1f/51aceda3ec88d635ad124fc0ee21f47a19aa7f": "8d757d2d21f05540df448ee6057e8a86",
".git/objects/1f/6c2ad61671f9780dce3c3e432111f22823dc39": "bfca9f51469658ac267e12ea4ec02eb0",
".git/objects/20/0c7568348d8b74bc04aa57e2f1e919984dbe3a": "d686f2a61a34b575a1226dbf20310eb3",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/03df59a011f55e45bc8c580bc92571413455ff": "52a10f596849abb1450ef5ed7baf7abc",
".git/objects/24/0026bec4f3696103bcd4e5cbb664339ad2403b": "70579aee3172c4be62cb99c2fd68e409",
".git/objects/24/f1da5914f16e4bcf288215465cec336145c22d": "08fea85a8c5a4845a207bf6329f63578",
".git/objects/25/a44a6bf4876a0403878207e87cf9350ec79b70": "25830f14dbca157b36a56df70e2cb876",
".git/objects/25/f6dff0916dfe8228a25cdf78fcb23fcf53e6f9": "29ace0643f8e4f78c79e3397bc111bab",
".git/objects/28/6a189e7f52ced012aa8ad0ff0a40de3ceb0f78": "500ab05487fb54eb91ba4a9de545dda1",
".git/objects/2a/a11531a9f2c6c8bad84d981790abb04cb110d3": "f8bd370dafa6424e3cede468d68a3ba4",
".git/objects/30/04c23a23ebc702c533ef509c066833201352a5": "76dfa452d7d1383bd3044e40458bbd7e",
".git/objects/30/6a92e438de964cbb72403d875a04f980101007": "ea552d5529b4ed663dda56e92a96f62d",
".git/objects/33/f35993993b74c810ec9dc15b614b3f4d0bab2e": "c27444ba3df1ff385bac44c24764ba1e",
".git/objects/34/3138d7a47c86816158292ab9bd09ccd87947f2": "e5eb419f3b64065d11fe7cdd86a935b8",
".git/objects/34/6be1575f05e4f86741be609eedf3abd4596d52": "c113a9b329ea31f5b86a1f262098f877",
".git/objects/34/ab4305e24e96f51f76a34ec3971fdf1abaea46": "71a1f5eb7d3128a5de19c9b9447eae1a",
".git/objects/35/60f489d21995eb92c46265bf4731582197164e": "de01f594679db5e04a60b5e95761cc17",
".git/objects/45/476c630677685a51346fc9ccdd18a114b618ca": "156ac8499e4b3c2f276d6354150bcaaa",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/1ccd25072d1d9adfca93c646ec8229915f681b": "46dc08bcf2012d8b3ddba639631644c8",
".git/objects/49/d2afbb8cfeba54ac1f23bb7988bac819e53bec": "138789635946e5f974d80fade4d1180c",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/e3826172ea6185b92a2913755a797709e581c0": "1ef06842d86e55884babae2dab897857",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4d/8a0656e2bdef612d00356a6bef52fef9e3c493": "117533b4db4e4be9df02c3cc50a1f9e7",
".git/objects/50/aef17c87e039e577b9f58f1cf2a0f7a7914fc9": "18b3701c294dad10846c2099220a9d6a",
".git/objects/50/e7555250eb78fa7fb7f0544de5d8fd6f31f776": "97fd46f999fed5eb5030308d4deeda75",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/c83471a2ef957bd5d89e5151f1c7e57a326520": "576022d3e62cbc05c8fbbee7a8ff87a7",
".git/objects/58/3b844f5bf8f39632458874df3a510d47647246": "0822109037f11a3d13083d57d1d72164",
".git/objects/5a/4fedb4e3bf703fdf04c4eee05b15714beb03c3": "8359061dc6f7efdbdae7f4c9de9683e6",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5d/1a114c27b5d9c46f0342f984d843bc53cac05d": "deb5197a020b109b0ea6c0496d42f536",
".git/objects/5f/5ee43268cbf12ebdc4c30d6729793ad177bc49": "dd8bf56b31b4a4c494fda09f79b6dc2f",
".git/objects/5f/70543b4e720d36b2db5b5b06102cf56e6ed848": "7f1fb4345c0cdc4244c1f2b2b3be4b1e",
".git/objects/63/befc1c1c2dc2b83887d7e58f85461ff86e7cfc": "f6f98d77cb2647f10733938e40518ff6",
".git/objects/67/50d8f9495c3f029c784e83f63cb93c57634072": "b3fc7574152308e695a0e0ff3c14a25f",
".git/objects/6c/60b4ccd99529573e0fbed15926e89d75d83a7f": "e2789ce56e77f5532cb220ef9951bc87",
".git/objects/6c/cebd9c2b06fb153c40964bf1c0a5cac6fe707f": "2d1b29f9cb72ac9686827742c4d860b9",
".git/objects/6e/e2272a9794e3b4f56325927bdf0e55eb4c2aed": "08cbf693362dee32de295070643193fb",
".git/objects/6e/ebe1b2f3ba550f97129cd39163ab1337abf04b": "4c5916cc9314e0451dd9702aebcdfd53",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/70/8824df191ad5a892b17e03036b36df86fb77f8": "0cd4c4fa25a02866b9d376ba8b9b2433",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/73/a48ca5657ea1aaf6c26f6c2b8edd45ed4ba80a": "53235438aa4b236fa1d8b76d229827cb",
".git/objects/7c/a1046f842732cbad5e62e72d2a9e1c927bd44c": "b1c27456026d9dfcce98e167d0d4f28a",
".git/objects/7d/781f40919c04bd86f5e10f85819b9497107b38": "2b3f8b73ae1e389037647048bb6a158e",
".git/objects/7d/89f0cf3f71a3b2d3ae0f48406ea68149c02db7": "5f3062881bd538a8f5fa2b63e6a86350",
".git/objects/7f/64160b5b18aa0dec30d33baaea52ebde1f124e": "2a3167ef2e0819229e0707e5762fbac6",
".git/objects/7f/ddaed9311fe5a33fd4d15c04a475ab98a05eaf": "c727fae7ec6d0d97626edce298800ac0",
".git/objects/84/fd1bfc90d971a7ba2e32eb560e332c7bd80121": "ad4dbf06eae72836a469425ddeb803dd",
".git/objects/8d/98b53a729b1ea0bd1db20ac9aa75ca2d88d325": "00059f5cbf6d31c2b4cc55b59d90c0df",
".git/objects/90/cb32d8d5f877d47b6cc56ac06d7b9977760b9a": "f8c419eafe31d68d2c27df75c4088bd5",
".git/objects/92/8da4de48ea34c84dc8942537b61426305902b4": "69a6d840896ee7a1a6895086512baa10",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/357eeba7ab4ac705a0d57205fae0bd71db98e1": "9050210ac64abb66716583e6d00ab9b0",
".git/objects/96/4cb5881862a859ae50ab9363961a753693736d": "973609008f762ffe56e04264c0298f57",
".git/objects/98/00ce9b2631ab9e273f7f96ade21f736a338e43": "8c376dc137190a5799e6b9823c3f00a7",
".git/objects/99/286e0eaa29554b8b470470c4b4476b65d1d47a": "ca6f3d19c3cf568bec4e5457de4456e0",
".git/objects/99/dbea829fa076af22de13000fb66978f786e370": "f3429e26622da05edb84c5dfe6464f69",
".git/objects/a1/9b1d897cd5e72565ff7bf5ff7c6b9ccab44bd1": "9386e267ca65dc7ce00f3409fca5306d",
".git/objects/ae/e57050b7d5ead3862a62e0b113fa57fa55ff98": "70ac000722324790dec41686abe83a18",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b9/573494d1af4d694f34bad7ce94c73d9beee0bb": "95a2dfa94bd082c353e6762cef5cc15a",
".git/objects/bb/062d6b6f6544071bf3e66e740cea35a7fb5c70": "0bc95afd2647c62c0e9c5d4d3dc716d6",
".git/objects/bd/a4a77e3f123979ce9101d8ac34abe6574b8550": "bb401a4813ed2bb0d48e01f90efefe38",
".git/objects/c0/7ae8b32fa5c2a8511adb5a6d5a133d16925042": "7f36e4f2c6121e8308ca9d9db0f524e7",
".git/objects/c1/d8b4f98573bdefbe4fc076962ed1bb347f0e10": "a9f0b40d4a6ac7ae1a6a6c26603d5c95",
".git/objects/c3/25dca7c32d9847e70e490a50c9ace07bcf2c77": "73453e519178f71cc75a74be3b5c1bbf",
".git/objects/c3/903e0f4d6a9b2ae836df46358cd1bb8f22b76f": "bdea0999e586801cf378d26fcb26c76d",
".git/objects/c4/ba4d300acc3cefac9ecbe7a2a7c40b0c31ae59": "363c51c03a876d17d63d08fccd506481",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c9/170724c376e4887704636346d669a3611ac321": "7869715236a14c58e7a4d9d1fcc8caab",
".git/objects/c9/8e408384dc7c30acfa70f0cb928ae0b4e565a8": "75103190ec5655aa5a9b2f9fc8fb0886",
".git/objects/c9/cb2a69ed03fea86572dd2a9e46b2d4ffd7500f": "bfd4f418ad7d3e9904996c73564185dc",
".git/objects/d1/df453558f9ddafd34f6ec45e604c8c266697a8": "761f6ff75bfd796e925253bc5048c195",
".git/objects/d3/1f4d3cf393c877edaf0de5ff85722e69fba95a": "991eb3b4646bd41a885b47932ed81105",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/bfa301f7a5a1a29fc39ec2dbfdb5440f15cb2a": "137d948f1f3f3d7afa2c215ba6359a45",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/d2e6b93a045885e1f4bb72fe19c4b1601a7328": "8982ffb8a97d365beac8100c878a660a",
".git/objects/d7/e396766706b7ae0949f082e55bc42f2a0d39b7": "6c4ff108c00568532d91efa2f1003d2f",
".git/objects/db/5881a7245d16677d7b939579640a2659023f88": "1c3eb9ba0db0f9a99b0ff62263d7f967",
".git/objects/db/9b2c8088c67cf7368f49f0cc1adf67e5001cb6": "35ff9745c93513bf3bc5594f77850807",
".git/objects/dc/7cb570fdcb18f2107cadc4be87237dbf51e7c6": "adc501f431f597c6e89f2b970907d576",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e5/24701895e72fda1455f58366f8ba87111d8c57": "0b5d98ec8b544d433246335cafb0d72d",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/ea/28fb18ba15f663bfa7ba73fc80146fa9aa37c4": "ece5ccafeb4cdbc45fd3d1c774fe7613",
".git/objects/ee/b99a084eddb053ff365f6df7e48e15cb42123f": "60d8390339c0f5119f179991991d6d59",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/5fde2d1018d4ec69c433fc63cbe61a76b3da2c": "fa72a01ad4ddc3a50cd1b7e43a31c647",
".git/objects/f5/7a261288c998d5a3875b1412b6e2a0e74f9dbb": "2c9a906b0df39580646a431c431053a8",
".git/objects/f9/2fdaba1d53bce30638369800989b459e02cff2": "6f656bc18941589c3df0cd9b7edd9ee3",
".git/objects/fe/efc01e4d74d5f177ab864e6ea0bd1b4679d0d5": "ca8666ceca41989ef5b86ab8718df876",
".git/objects/ff/93bccf5f57663928756a64e726a3f5f23221c5": "0c39b1567973f8de56aedecda44eea81",
".git/objects/pack/pack-a8453001f6dd4b2edecb1a2165c42839508e45ef.idx": "21386ddc18414b9bfe8873e6015df5e7",
".git/objects/pack/pack-a8453001f6dd4b2edecb1a2165c42839508e45ef.pack": "55cdc518a155482c9fb20a8a78186b6c",
".git/objects/pack/pack-a8453001f6dd4b2edecb1a2165c42839508e45ef.rev": "76ae329dce96d69eb7870389d9c99ce3",
".git/refs/heads/main": "52e211e67e49a767e92fc0e6a2a3383d",
".git/refs/remotes/origin/main": "52e211e67e49a767e92fc0e6a2a3383d",
".git/refs/remotes/origin/master": "154c04d3f9ba85ea45ea915d26deeb60",
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
"assets/NOTICES": "11eaa9ac57aaf769840fed9df9bffe80",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "671ee6f753894572b32c3e535ed8c2bd",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ea9fc43cde4a2915fc24e16f06be5072",
"icons/Icon-512.png": "7b2e62271d7590ef82822b6975cf08e0",
"icons/Icon-maskable-192.png": "ea9fc43cde4a2915fc24e16f06be5072",
"icons/Icon-maskable-512.png": "7b2e62271d7590ef82822b6975cf08e0",
"index.html": "97f6e8be96e928d1e26bd20c645e4a4d",
"/": "97f6e8be96e928d1e26bd20c645e4a4d",
"main.dart.js": "c601b15900d956d4c3710668feec83e8",
"manifest.json": "4dfa9ac972e00fcef84534d0f77d833a",
"version.json": "11e1a177d57c5da2bc6e3a6acc3010f4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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

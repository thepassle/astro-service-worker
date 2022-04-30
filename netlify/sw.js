
self.process = {env: {}, argv: []}; self.global = globalThis;
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

  // node_modules/mime/Mime.js
  var require_Mime = __commonJS({
    "node_modules/mime/Mime.js"(exports, module) {
      "use strict";
      function Mime2() {
        this._types = /* @__PURE__ */ Object.create(null);
        this._extensions = /* @__PURE__ */ Object.create(null);
        for (let i = 0; i < arguments.length; i++) {
          this.define(arguments[i]);
        }
        this.define = this.define.bind(this);
        this.getType = this.getType.bind(this);
        this.getExtension = this.getExtension.bind(this);
      }
      Mime2.prototype.define = function(typeMap, force) {
        for (let type in typeMap) {
          let extensions = typeMap[type].map(function(t) {
            return t.toLowerCase();
          });
          type = type.toLowerCase();
          for (let i = 0; i < extensions.length; i++) {
            const ext = extensions[i];
            if (ext[0] === "*") {
              continue;
            }
            if (!force && ext in this._types) {
              throw new Error('Attempt to change mapping for "' + ext + '" extension from "' + this._types[ext] + '" to "' + type + '". Pass `force=true` to allow this, otherwise remove "' + ext + '" from the list of extensions for "' + type + '".');
            }
            this._types[ext] = type;
          }
          if (force || !this._extensions[type]) {
            const ext = extensions[0];
            this._extensions[type] = ext[0] !== "*" ? ext : ext.substr(1);
          }
        }
      };
      Mime2.prototype.getType = function(path) {
        path = String(path);
        let last = path.replace(/^.*[/\\]/, "").toLowerCase();
        let ext = last.replace(/^.*\./, "").toLowerCase();
        let hasPath = last.length < path.length;
        let hasDot = ext.length < last.length - 1;
        return (hasDot || !hasPath) && this._types[ext] || null;
      };
      Mime2.prototype.getExtension = function(type) {
        type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
        return type && this._extensions[type.toLowerCase()] || null;
      };
      module.exports = Mime2;
    }
  });

  // node_modules/mime/types/standard.js
  var require_standard = __commonJS({
    "node_modules/mime/types/standard.js"(exports, module) {
      module.exports = { "application/andrew-inset": ["ez"], "application/applixware": ["aw"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cu-seeme": ["cu"], "application/dash+xml": ["mpd"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["es", "ecma"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/express": ["exp"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["js", "mjs"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["mp4s", "m4p"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-signature": ["asc", "sig"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/trig": ["trig"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avif": ["avif"], "image/bmp": ["bmp"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/step+xml": ["stpx"], "model/step+zip": ["stpz"], "model/step-xml+zip": ["stpxz"], "model/stl": ["stl"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["markdown", "md"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"] };
    }
  });

  // node_modules/mime/types/other.js
  var require_other = __commonJS({
    "node_modules/mime/types/other.js"(exports, module) {
      module.exports = { "application/prs.cww": ["cww"], "application/vnd.1000minds.decision-model+xml": ["1km"], "application/vnd.3gpp.pic-bw-large": ["plb"], "application/vnd.3gpp.pic-bw-small": ["psb"], "application/vnd.3gpp.pic-bw-var": ["pvb"], "application/vnd.3gpp2.tcap": ["tcap"], "application/vnd.3m.post-it-notes": ["pwn"], "application/vnd.accpac.simply.aso": ["aso"], "application/vnd.accpac.simply.imp": ["imp"], "application/vnd.acucobol": ["acu"], "application/vnd.acucorp": ["atc", "acutc"], "application/vnd.adobe.air-application-installer-package+zip": ["air"], "application/vnd.adobe.formscentral.fcdt": ["fcdt"], "application/vnd.adobe.fxp": ["fxp", "fxpl"], "application/vnd.adobe.xdp+xml": ["xdp"], "application/vnd.adobe.xfdf": ["xfdf"], "application/vnd.ahead.space": ["ahead"], "application/vnd.airzip.filesecure.azf": ["azf"], "application/vnd.airzip.filesecure.azs": ["azs"], "application/vnd.amazon.ebook": ["azw"], "application/vnd.americandynamics.acc": ["acc"], "application/vnd.amiga.ami": ["ami"], "application/vnd.android.package-archive": ["apk"], "application/vnd.anser-web-certificate-issue-initiation": ["cii"], "application/vnd.anser-web-funds-transfer-initiation": ["fti"], "application/vnd.antix.game-component": ["atx"], "application/vnd.apple.installer+xml": ["mpkg"], "application/vnd.apple.keynote": ["key"], "application/vnd.apple.mpegurl": ["m3u8"], "application/vnd.apple.numbers": ["numbers"], "application/vnd.apple.pages": ["pages"], "application/vnd.apple.pkpass": ["pkpass"], "application/vnd.aristanetworks.swi": ["swi"], "application/vnd.astraea-software.iota": ["iota"], "application/vnd.audiograph": ["aep"], "application/vnd.balsamiq.bmml+xml": ["bmml"], "application/vnd.blueice.multipass": ["mpm"], "application/vnd.bmi": ["bmi"], "application/vnd.businessobjects": ["rep"], "application/vnd.chemdraw+xml": ["cdxml"], "application/vnd.chipnuts.karaoke-mmd": ["mmd"], "application/vnd.cinderella": ["cdy"], "application/vnd.citationstyles.style+xml": ["csl"], "application/vnd.claymore": ["cla"], "application/vnd.cloanto.rp9": ["rp9"], "application/vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"], "application/vnd.cluetrust.cartomobile-config": ["c11amc"], "application/vnd.cluetrust.cartomobile-config-pkg": ["c11amz"], "application/vnd.commonspace": ["csp"], "application/vnd.contact.cmsg": ["cdbcmsg"], "application/vnd.cosmocaller": ["cmc"], "application/vnd.crick.clicker": ["clkx"], "application/vnd.crick.clicker.keyboard": ["clkk"], "application/vnd.crick.clicker.palette": ["clkp"], "application/vnd.crick.clicker.template": ["clkt"], "application/vnd.crick.clicker.wordbank": ["clkw"], "application/vnd.criticaltools.wbs+xml": ["wbs"], "application/vnd.ctc-posml": ["pml"], "application/vnd.cups-ppd": ["ppd"], "application/vnd.curl.car": ["car"], "application/vnd.curl.pcurl": ["pcurl"], "application/vnd.dart": ["dart"], "application/vnd.data-vision.rdz": ["rdz"], "application/vnd.dbf": ["dbf"], "application/vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"], "application/vnd.dece.ttml+xml": ["uvt", "uvvt"], "application/vnd.dece.unspecified": ["uvx", "uvvx"], "application/vnd.dece.zip": ["uvz", "uvvz"], "application/vnd.denovo.fcselayout-link": ["fe_launch"], "application/vnd.dna": ["dna"], "application/vnd.dolby.mlp": ["mlp"], "application/vnd.dpgraph": ["dpg"], "application/vnd.dreamfactory": ["dfac"], "application/vnd.ds-keypoint": ["kpxx"], "application/vnd.dvb.ait": ["ait"], "application/vnd.dvb.service": ["svc"], "application/vnd.dynageo": ["geo"], "application/vnd.ecowin.chart": ["mag"], "application/vnd.enliven": ["nml"], "application/vnd.epson.esf": ["esf"], "application/vnd.epson.msf": ["msf"], "application/vnd.epson.quickanime": ["qam"], "application/vnd.epson.salt": ["slt"], "application/vnd.epson.ssf": ["ssf"], "application/vnd.eszigno3+xml": ["es3", "et3"], "application/vnd.ezpix-album": ["ez2"], "application/vnd.ezpix-package": ["ez3"], "application/vnd.fdf": ["fdf"], "application/vnd.fdsn.mseed": ["mseed"], "application/vnd.fdsn.seed": ["seed", "dataless"], "application/vnd.flographit": ["gph"], "application/vnd.fluxtime.clip": ["ftc"], "application/vnd.framemaker": ["fm", "frame", "maker", "book"], "application/vnd.frogans.fnc": ["fnc"], "application/vnd.frogans.ltf": ["ltf"], "application/vnd.fsc.weblaunch": ["fsc"], "application/vnd.fujitsu.oasys": ["oas"], "application/vnd.fujitsu.oasys2": ["oa2"], "application/vnd.fujitsu.oasys3": ["oa3"], "application/vnd.fujitsu.oasysgp": ["fg5"], "application/vnd.fujitsu.oasysprs": ["bh2"], "application/vnd.fujixerox.ddd": ["ddd"], "application/vnd.fujixerox.docuworks": ["xdw"], "application/vnd.fujixerox.docuworks.binder": ["xbd"], "application/vnd.fuzzysheet": ["fzs"], "application/vnd.genomatix.tuxedo": ["txd"], "application/vnd.geogebra.file": ["ggb"], "application/vnd.geogebra.tool": ["ggt"], "application/vnd.geometry-explorer": ["gex", "gre"], "application/vnd.geonext": ["gxt"], "application/vnd.geoplan": ["g2w"], "application/vnd.geospace": ["g3w"], "application/vnd.gmx": ["gmx"], "application/vnd.google-apps.document": ["gdoc"], "application/vnd.google-apps.presentation": ["gslides"], "application/vnd.google-apps.spreadsheet": ["gsheet"], "application/vnd.google-earth.kml+xml": ["kml"], "application/vnd.google-earth.kmz": ["kmz"], "application/vnd.grafeq": ["gqf", "gqs"], "application/vnd.groove-account": ["gac"], "application/vnd.groove-help": ["ghf"], "application/vnd.groove-identity-message": ["gim"], "application/vnd.groove-injector": ["grv"], "application/vnd.groove-tool-message": ["gtm"], "application/vnd.groove-tool-template": ["tpl"], "application/vnd.groove-vcard": ["vcg"], "application/vnd.hal+xml": ["hal"], "application/vnd.handheld-entertainment+xml": ["zmm"], "application/vnd.hbci": ["hbci"], "application/vnd.hhe.lesson-player": ["les"], "application/vnd.hp-hpgl": ["hpgl"], "application/vnd.hp-hpid": ["hpid"], "application/vnd.hp-hps": ["hps"], "application/vnd.hp-jlyt": ["jlt"], "application/vnd.hp-pcl": ["pcl"], "application/vnd.hp-pclxl": ["pclxl"], "application/vnd.hydrostatix.sof-data": ["sfd-hdstx"], "application/vnd.ibm.minipay": ["mpy"], "application/vnd.ibm.modcap": ["afp", "listafp", "list3820"], "application/vnd.ibm.rights-management": ["irm"], "application/vnd.ibm.secure-container": ["sc"], "application/vnd.iccprofile": ["icc", "icm"], "application/vnd.igloader": ["igl"], "application/vnd.immervision-ivp": ["ivp"], "application/vnd.immervision-ivu": ["ivu"], "application/vnd.insors.igm": ["igm"], "application/vnd.intercon.formnet": ["xpw", "xpx"], "application/vnd.intergeo": ["i2g"], "application/vnd.intu.qbo": ["qbo"], "application/vnd.intu.qfx": ["qfx"], "application/vnd.ipunplugged.rcprofile": ["rcprofile"], "application/vnd.irepository.package+xml": ["irp"], "application/vnd.is-xpr": ["xpr"], "application/vnd.isac.fcs": ["fcs"], "application/vnd.jam": ["jam"], "application/vnd.jcp.javame.midlet-rms": ["rms"], "application/vnd.jisp": ["jisp"], "application/vnd.joost.joda-archive": ["joda"], "application/vnd.kahootz": ["ktz", "ktr"], "application/vnd.kde.karbon": ["karbon"], "application/vnd.kde.kchart": ["chrt"], "application/vnd.kde.kformula": ["kfo"], "application/vnd.kde.kivio": ["flw"], "application/vnd.kde.kontour": ["kon"], "application/vnd.kde.kpresenter": ["kpr", "kpt"], "application/vnd.kde.kspread": ["ksp"], "application/vnd.kde.kword": ["kwd", "kwt"], "application/vnd.kenameaapp": ["htke"], "application/vnd.kidspiration": ["kia"], "application/vnd.kinar": ["kne", "knp"], "application/vnd.koan": ["skp", "skd", "skt", "skm"], "application/vnd.kodak-descriptor": ["sse"], "application/vnd.las.las+xml": ["lasxml"], "application/vnd.llamagraphics.life-balance.desktop": ["lbd"], "application/vnd.llamagraphics.life-balance.exchange+xml": ["lbe"], "application/vnd.lotus-1-2-3": ["123"], "application/vnd.lotus-approach": ["apr"], "application/vnd.lotus-freelance": ["pre"], "application/vnd.lotus-notes": ["nsf"], "application/vnd.lotus-organizer": ["org"], "application/vnd.lotus-screencam": ["scm"], "application/vnd.lotus-wordpro": ["lwp"], "application/vnd.macports.portpkg": ["portpkg"], "application/vnd.mapbox-vector-tile": ["mvt"], "application/vnd.mcd": ["mcd"], "application/vnd.medcalcdata": ["mc1"], "application/vnd.mediastation.cdkey": ["cdkey"], "application/vnd.mfer": ["mwf"], "application/vnd.mfmp": ["mfm"], "application/vnd.micrografx.flo": ["flo"], "application/vnd.micrografx.igx": ["igx"], "application/vnd.mif": ["mif"], "application/vnd.mobius.daf": ["daf"], "application/vnd.mobius.dis": ["dis"], "application/vnd.mobius.mbk": ["mbk"], "application/vnd.mobius.mqy": ["mqy"], "application/vnd.mobius.msl": ["msl"], "application/vnd.mobius.plc": ["plc"], "application/vnd.mobius.txf": ["txf"], "application/vnd.mophun.application": ["mpn"], "application/vnd.mophun.certificate": ["mpc"], "application/vnd.mozilla.xul+xml": ["xul"], "application/vnd.ms-artgalry": ["cil"], "application/vnd.ms-cab-compressed": ["cab"], "application/vnd.ms-excel": ["xls", "xlm", "xla", "xlc", "xlt", "xlw"], "application/vnd.ms-excel.addin.macroenabled.12": ["xlam"], "application/vnd.ms-excel.sheet.binary.macroenabled.12": ["xlsb"], "application/vnd.ms-excel.sheet.macroenabled.12": ["xlsm"], "application/vnd.ms-excel.template.macroenabled.12": ["xltm"], "application/vnd.ms-fontobject": ["eot"], "application/vnd.ms-htmlhelp": ["chm"], "application/vnd.ms-ims": ["ims"], "application/vnd.ms-lrm": ["lrm"], "application/vnd.ms-officetheme": ["thmx"], "application/vnd.ms-outlook": ["msg"], "application/vnd.ms-pki.seccat": ["cat"], "application/vnd.ms-pki.stl": ["*stl"], "application/vnd.ms-powerpoint": ["ppt", "pps", "pot"], "application/vnd.ms-powerpoint.addin.macroenabled.12": ["ppam"], "application/vnd.ms-powerpoint.presentation.macroenabled.12": ["pptm"], "application/vnd.ms-powerpoint.slide.macroenabled.12": ["sldm"], "application/vnd.ms-powerpoint.slideshow.macroenabled.12": ["ppsm"], "application/vnd.ms-powerpoint.template.macroenabled.12": ["potm"], "application/vnd.ms-project": ["mpp", "mpt"], "application/vnd.ms-word.document.macroenabled.12": ["docm"], "application/vnd.ms-word.template.macroenabled.12": ["dotm"], "application/vnd.ms-works": ["wps", "wks", "wcm", "wdb"], "application/vnd.ms-wpl": ["wpl"], "application/vnd.ms-xpsdocument": ["xps"], "application/vnd.mseq": ["mseq"], "application/vnd.musician": ["mus"], "application/vnd.muvee.style": ["msty"], "application/vnd.mynfc": ["taglet"], "application/vnd.neurolanguage.nlu": ["nlu"], "application/vnd.nitf": ["ntf", "nitf"], "application/vnd.noblenet-directory": ["nnd"], "application/vnd.noblenet-sealer": ["nns"], "application/vnd.noblenet-web": ["nnw"], "application/vnd.nokia.n-gage.ac+xml": ["*ac"], "application/vnd.nokia.n-gage.data": ["ngdat"], "application/vnd.nokia.n-gage.symbian.install": ["n-gage"], "application/vnd.nokia.radio-preset": ["rpst"], "application/vnd.nokia.radio-presets": ["rpss"], "application/vnd.novadigm.edm": ["edm"], "application/vnd.novadigm.edx": ["edx"], "application/vnd.novadigm.ext": ["ext"], "application/vnd.oasis.opendocument.chart": ["odc"], "application/vnd.oasis.opendocument.chart-template": ["otc"], "application/vnd.oasis.opendocument.database": ["odb"], "application/vnd.oasis.opendocument.formula": ["odf"], "application/vnd.oasis.opendocument.formula-template": ["odft"], "application/vnd.oasis.opendocument.graphics": ["odg"], "application/vnd.oasis.opendocument.graphics-template": ["otg"], "application/vnd.oasis.opendocument.image": ["odi"], "application/vnd.oasis.opendocument.image-template": ["oti"], "application/vnd.oasis.opendocument.presentation": ["odp"], "application/vnd.oasis.opendocument.presentation-template": ["otp"], "application/vnd.oasis.opendocument.spreadsheet": ["ods"], "application/vnd.oasis.opendocument.spreadsheet-template": ["ots"], "application/vnd.oasis.opendocument.text": ["odt"], "application/vnd.oasis.opendocument.text-master": ["odm"], "application/vnd.oasis.opendocument.text-template": ["ott"], "application/vnd.oasis.opendocument.text-web": ["oth"], "application/vnd.olpc-sugar": ["xo"], "application/vnd.oma.dd2+xml": ["dd2"], "application/vnd.openblox.game+xml": ["obgx"], "application/vnd.openofficeorg.extension": ["oxt"], "application/vnd.openstreetmap.data+xml": ["osm"], "application/vnd.openxmlformats-officedocument.presentationml.presentation": ["pptx"], "application/vnd.openxmlformats-officedocument.presentationml.slide": ["sldx"], "application/vnd.openxmlformats-officedocument.presentationml.slideshow": ["ppsx"], "application/vnd.openxmlformats-officedocument.presentationml.template": ["potx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ["xlsx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.template": ["xltx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ["docx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.template": ["dotx"], "application/vnd.osgeo.mapguide.package": ["mgp"], "application/vnd.osgi.dp": ["dp"], "application/vnd.osgi.subsystem": ["esa"], "application/vnd.palm": ["pdb", "pqa", "oprc"], "application/vnd.pawaafile": ["paw"], "application/vnd.pg.format": ["str"], "application/vnd.pg.osasli": ["ei6"], "application/vnd.picsel": ["efif"], "application/vnd.pmi.widget": ["wg"], "application/vnd.pocketlearn": ["plf"], "application/vnd.powerbuilder6": ["pbd"], "application/vnd.previewsystems.box": ["box"], "application/vnd.proteus.magazine": ["mgz"], "application/vnd.publishare-delta-tree": ["qps"], "application/vnd.pvi.ptid1": ["ptid"], "application/vnd.quark.quarkxpress": ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"], "application/vnd.rar": ["rar"], "application/vnd.realvnc.bed": ["bed"], "application/vnd.recordare.musicxml": ["mxl"], "application/vnd.recordare.musicxml+xml": ["musicxml"], "application/vnd.rig.cryptonote": ["cryptonote"], "application/vnd.rim.cod": ["cod"], "application/vnd.rn-realmedia": ["rm"], "application/vnd.rn-realmedia-vbr": ["rmvb"], "application/vnd.route66.link66+xml": ["link66"], "application/vnd.sailingtracker.track": ["st"], "application/vnd.seemail": ["see"], "application/vnd.sema": ["sema"], "application/vnd.semd": ["semd"], "application/vnd.semf": ["semf"], "application/vnd.shana.informed.formdata": ["ifm"], "application/vnd.shana.informed.formtemplate": ["itp"], "application/vnd.shana.informed.interchange": ["iif"], "application/vnd.shana.informed.package": ["ipk"], "application/vnd.simtech-mindmapper": ["twd", "twds"], "application/vnd.smaf": ["mmf"], "application/vnd.smart.teacher": ["teacher"], "application/vnd.software602.filler.form+xml": ["fo"], "application/vnd.solent.sdkm+xml": ["sdkm", "sdkd"], "application/vnd.spotfire.dxp": ["dxp"], "application/vnd.spotfire.sfs": ["sfs"], "application/vnd.stardivision.calc": ["sdc"], "application/vnd.stardivision.draw": ["sda"], "application/vnd.stardivision.impress": ["sdd"], "application/vnd.stardivision.math": ["smf"], "application/vnd.stardivision.writer": ["sdw", "vor"], "application/vnd.stardivision.writer-global": ["sgl"], "application/vnd.stepmania.package": ["smzip"], "application/vnd.stepmania.stepchart": ["sm"], "application/vnd.sun.wadl+xml": ["wadl"], "application/vnd.sun.xml.calc": ["sxc"], "application/vnd.sun.xml.calc.template": ["stc"], "application/vnd.sun.xml.draw": ["sxd"], "application/vnd.sun.xml.draw.template": ["std"], "application/vnd.sun.xml.impress": ["sxi"], "application/vnd.sun.xml.impress.template": ["sti"], "application/vnd.sun.xml.math": ["sxm"], "application/vnd.sun.xml.writer": ["sxw"], "application/vnd.sun.xml.writer.global": ["sxg"], "application/vnd.sun.xml.writer.template": ["stw"], "application/vnd.sus-calendar": ["sus", "susp"], "application/vnd.svd": ["svd"], "application/vnd.symbian.install": ["sis", "sisx"], "application/vnd.syncml+xml": ["xsm"], "application/vnd.syncml.dm+wbxml": ["bdm"], "application/vnd.syncml.dm+xml": ["xdm"], "application/vnd.syncml.dmddf+xml": ["ddf"], "application/vnd.tao.intent-module-archive": ["tao"], "application/vnd.tcpdump.pcap": ["pcap", "cap", "dmp"], "application/vnd.tmobile-livetv": ["tmo"], "application/vnd.trid.tpt": ["tpt"], "application/vnd.triscape.mxs": ["mxs"], "application/vnd.trueapp": ["tra"], "application/vnd.ufdl": ["ufd", "ufdl"], "application/vnd.uiq.theme": ["utz"], "application/vnd.umajin": ["umj"], "application/vnd.unity": ["unityweb"], "application/vnd.uoml+xml": ["uoml"], "application/vnd.vcx": ["vcx"], "application/vnd.visio": ["vsd", "vst", "vss", "vsw"], "application/vnd.visionary": ["vis"], "application/vnd.vsf": ["vsf"], "application/vnd.wap.wbxml": ["wbxml"], "application/vnd.wap.wmlc": ["wmlc"], "application/vnd.wap.wmlscriptc": ["wmlsc"], "application/vnd.webturbo": ["wtb"], "application/vnd.wolfram.player": ["nbp"], "application/vnd.wordperfect": ["wpd"], "application/vnd.wqd": ["wqd"], "application/vnd.wt.stf": ["stf"], "application/vnd.xara": ["xar"], "application/vnd.xfdl": ["xfdl"], "application/vnd.yamaha.hv-dic": ["hvd"], "application/vnd.yamaha.hv-script": ["hvs"], "application/vnd.yamaha.hv-voice": ["hvp"], "application/vnd.yamaha.openscoreformat": ["osf"], "application/vnd.yamaha.openscoreformat.osfpvg+xml": ["osfpvg"], "application/vnd.yamaha.smaf-audio": ["saf"], "application/vnd.yamaha.smaf-phrase": ["spf"], "application/vnd.yellowriver-custom-menu": ["cmp"], "application/vnd.zul": ["zir", "zirz"], "application/vnd.zzazz.deck+xml": ["zaz"], "application/x-7z-compressed": ["7z"], "application/x-abiword": ["abw"], "application/x-ace-compressed": ["ace"], "application/x-apple-diskimage": ["*dmg"], "application/x-arj": ["arj"], "application/x-authorware-bin": ["aab", "x32", "u32", "vox"], "application/x-authorware-map": ["aam"], "application/x-authorware-seg": ["aas"], "application/x-bcpio": ["bcpio"], "application/x-bdoc": ["*bdoc"], "application/x-bittorrent": ["torrent"], "application/x-blorb": ["blb", "blorb"], "application/x-bzip": ["bz"], "application/x-bzip2": ["bz2", "boz"], "application/x-cbr": ["cbr", "cba", "cbt", "cbz", "cb7"], "application/x-cdlink": ["vcd"], "application/x-cfs-compressed": ["cfs"], "application/x-chat": ["chat"], "application/x-chess-pgn": ["pgn"], "application/x-chrome-extension": ["crx"], "application/x-cocoa": ["cco"], "application/x-conference": ["nsc"], "application/x-cpio": ["cpio"], "application/x-csh": ["csh"], "application/x-debian-package": ["*deb", "udeb"], "application/x-dgc-compressed": ["dgc"], "application/x-director": ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"], "application/x-doom": ["wad"], "application/x-dtbncx+xml": ["ncx"], "application/x-dtbook+xml": ["dtb"], "application/x-dtbresource+xml": ["res"], "application/x-dvi": ["dvi"], "application/x-envoy": ["evy"], "application/x-eva": ["eva"], "application/x-font-bdf": ["bdf"], "application/x-font-ghostscript": ["gsf"], "application/x-font-linux-psf": ["psf"], "application/x-font-pcf": ["pcf"], "application/x-font-snf": ["snf"], "application/x-font-type1": ["pfa", "pfb", "pfm", "afm"], "application/x-freearc": ["arc"], "application/x-futuresplash": ["spl"], "application/x-gca-compressed": ["gca"], "application/x-glulx": ["ulx"], "application/x-gnumeric": ["gnumeric"], "application/x-gramps-xml": ["gramps"], "application/x-gtar": ["gtar"], "application/x-hdf": ["hdf"], "application/x-httpd-php": ["php"], "application/x-install-instructions": ["install"], "application/x-iso9660-image": ["*iso"], "application/x-iwork-keynote-sffkey": ["*key"], "application/x-iwork-numbers-sffnumbers": ["*numbers"], "application/x-iwork-pages-sffpages": ["*pages"], "application/x-java-archive-diff": ["jardiff"], "application/x-java-jnlp-file": ["jnlp"], "application/x-keepass2": ["kdbx"], "application/x-latex": ["latex"], "application/x-lua-bytecode": ["luac"], "application/x-lzh-compressed": ["lzh", "lha"], "application/x-makeself": ["run"], "application/x-mie": ["mie"], "application/x-mobipocket-ebook": ["prc", "mobi"], "application/x-ms-application": ["application"], "application/x-ms-shortcut": ["lnk"], "application/x-ms-wmd": ["wmd"], "application/x-ms-wmz": ["wmz"], "application/x-ms-xbap": ["xbap"], "application/x-msaccess": ["mdb"], "application/x-msbinder": ["obd"], "application/x-mscardfile": ["crd"], "application/x-msclip": ["clp"], "application/x-msdos-program": ["*exe"], "application/x-msdownload": ["*exe", "*dll", "com", "bat", "*msi"], "application/x-msmediaview": ["mvb", "m13", "m14"], "application/x-msmetafile": ["*wmf", "*wmz", "*emf", "emz"], "application/x-msmoney": ["mny"], "application/x-mspublisher": ["pub"], "application/x-msschedule": ["scd"], "application/x-msterminal": ["trm"], "application/x-mswrite": ["wri"], "application/x-netcdf": ["nc", "cdf"], "application/x-ns-proxy-autoconfig": ["pac"], "application/x-nzb": ["nzb"], "application/x-perl": ["pl", "pm"], "application/x-pilot": ["*prc", "*pdb"], "application/x-pkcs12": ["p12", "pfx"], "application/x-pkcs7-certificates": ["p7b", "spc"], "application/x-pkcs7-certreqresp": ["p7r"], "application/x-rar-compressed": ["*rar"], "application/x-redhat-package-manager": ["rpm"], "application/x-research-info-systems": ["ris"], "application/x-sea": ["sea"], "application/x-sh": ["sh"], "application/x-shar": ["shar"], "application/x-shockwave-flash": ["swf"], "application/x-silverlight-app": ["xap"], "application/x-sql": ["sql"], "application/x-stuffit": ["sit"], "application/x-stuffitx": ["sitx"], "application/x-subrip": ["srt"], "application/x-sv4cpio": ["sv4cpio"], "application/x-sv4crc": ["sv4crc"], "application/x-t3vm-image": ["t3"], "application/x-tads": ["gam"], "application/x-tar": ["tar"], "application/x-tcl": ["tcl", "tk"], "application/x-tex": ["tex"], "application/x-tex-tfm": ["tfm"], "application/x-texinfo": ["texinfo", "texi"], "application/x-tgif": ["*obj"], "application/x-ustar": ["ustar"], "application/x-virtualbox-hdd": ["hdd"], "application/x-virtualbox-ova": ["ova"], "application/x-virtualbox-ovf": ["ovf"], "application/x-virtualbox-vbox": ["vbox"], "application/x-virtualbox-vbox-extpack": ["vbox-extpack"], "application/x-virtualbox-vdi": ["vdi"], "application/x-virtualbox-vhd": ["vhd"], "application/x-virtualbox-vmdk": ["vmdk"], "application/x-wais-source": ["src"], "application/x-web-app-manifest+json": ["webapp"], "application/x-x509-ca-cert": ["der", "crt", "pem"], "application/x-xfig": ["fig"], "application/x-xliff+xml": ["*xlf"], "application/x-xpinstall": ["xpi"], "application/x-xz": ["xz"], "application/x-zmachine": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"], "audio/vnd.dece.audio": ["uva", "uvva"], "audio/vnd.digital-winds": ["eol"], "audio/vnd.dra": ["dra"], "audio/vnd.dts": ["dts"], "audio/vnd.dts.hd": ["dtshd"], "audio/vnd.lucent.voice": ["lvp"], "audio/vnd.ms-playready.media.pya": ["pya"], "audio/vnd.nuera.ecelp4800": ["ecelp4800"], "audio/vnd.nuera.ecelp7470": ["ecelp7470"], "audio/vnd.nuera.ecelp9600": ["ecelp9600"], "audio/vnd.rip": ["rip"], "audio/x-aac": ["aac"], "audio/x-aiff": ["aif", "aiff", "aifc"], "audio/x-caf": ["caf"], "audio/x-flac": ["flac"], "audio/x-m4a": ["*m4a"], "audio/x-matroska": ["mka"], "audio/x-mpegurl": ["m3u"], "audio/x-ms-wax": ["wax"], "audio/x-ms-wma": ["wma"], "audio/x-pn-realaudio": ["ram", "ra"], "audio/x-pn-realaudio-plugin": ["rmp"], "audio/x-realaudio": ["*ra"], "audio/x-wav": ["*wav"], "chemical/x-cdx": ["cdx"], "chemical/x-cif": ["cif"], "chemical/x-cmdf": ["cmdf"], "chemical/x-cml": ["cml"], "chemical/x-csml": ["csml"], "chemical/x-xyz": ["xyz"], "image/prs.btif": ["btif"], "image/prs.pti": ["pti"], "image/vnd.adobe.photoshop": ["psd"], "image/vnd.airzip.accelerator.azv": ["azv"], "image/vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"], "image/vnd.djvu": ["djvu", "djv"], "image/vnd.dvb.subtitle": ["*sub"], "image/vnd.dwg": ["dwg"], "image/vnd.dxf": ["dxf"], "image/vnd.fastbidsheet": ["fbs"], "image/vnd.fpx": ["fpx"], "image/vnd.fst": ["fst"], "image/vnd.fujixerox.edmics-mmr": ["mmr"], "image/vnd.fujixerox.edmics-rlc": ["rlc"], "image/vnd.microsoft.icon": ["ico"], "image/vnd.ms-dds": ["dds"], "image/vnd.ms-modi": ["mdi"], "image/vnd.ms-photo": ["wdp"], "image/vnd.net-fpx": ["npx"], "image/vnd.pco.b16": ["b16"], "image/vnd.tencent.tap": ["tap"], "image/vnd.valve.source.texture": ["vtf"], "image/vnd.wap.wbmp": ["wbmp"], "image/vnd.xiff": ["xif"], "image/vnd.zbrush.pcx": ["pcx"], "image/x-3ds": ["3ds"], "image/x-cmu-raster": ["ras"], "image/x-cmx": ["cmx"], "image/x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"], "image/x-icon": ["*ico"], "image/x-jng": ["jng"], "image/x-mrsid-image": ["sid"], "image/x-ms-bmp": ["*bmp"], "image/x-pcx": ["*pcx"], "image/x-pict": ["pic", "pct"], "image/x-portable-anymap": ["pnm"], "image/x-portable-bitmap": ["pbm"], "image/x-portable-graymap": ["pgm"], "image/x-portable-pixmap": ["ppm"], "image/x-rgb": ["rgb"], "image/x-tga": ["tga"], "image/x-xbitmap": ["xbm"], "image/x-xpixmap": ["xpm"], "image/x-xwindowdump": ["xwd"], "message/vnd.wfa.wsc": ["wsc"], "model/vnd.collada+xml": ["dae"], "model/vnd.dwf": ["dwf"], "model/vnd.gdl": ["gdl"], "model/vnd.gtw": ["gtw"], "model/vnd.mts": ["mts"], "model/vnd.opengex": ["ogex"], "model/vnd.parasolid.transmit.binary": ["x_b"], "model/vnd.parasolid.transmit.text": ["x_t"], "model/vnd.sap.vds": ["vds"], "model/vnd.usdz+zip": ["usdz"], "model/vnd.valve.source.compiled-map": ["bsp"], "model/vnd.vtu": ["vtu"], "text/prs.lines.tag": ["dsc"], "text/vnd.curl": ["curl"], "text/vnd.curl.dcurl": ["dcurl"], "text/vnd.curl.mcurl": ["mcurl"], "text/vnd.curl.scurl": ["scurl"], "text/vnd.dvb.subtitle": ["sub"], "text/vnd.fly": ["fly"], "text/vnd.fmi.flexstor": ["flx"], "text/vnd.graphviz": ["gv"], "text/vnd.in3d.3dml": ["3dml"], "text/vnd.in3d.spot": ["spot"], "text/vnd.sun.j2me.app-descriptor": ["jad"], "text/vnd.wap.wml": ["wml"], "text/vnd.wap.wmlscript": ["wmls"], "text/x-asm": ["s", "asm"], "text/x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"], "text/x-component": ["htc"], "text/x-fortran": ["f", "for", "f77", "f90"], "text/x-handlebars-template": ["hbs"], "text/x-java-source": ["java"], "text/x-lua": ["lua"], "text/x-markdown": ["mkd"], "text/x-nfo": ["nfo"], "text/x-opml": ["opml"], "text/x-org": ["*org"], "text/x-pascal": ["p", "pas"], "text/x-processing": ["pde"], "text/x-sass": ["sass"], "text/x-scss": ["scss"], "text/x-setext": ["etx"], "text/x-sfv": ["sfv"], "text/x-suse-ymp": ["ymp"], "text/x-uuencode": ["uu"], "text/x-vcalendar": ["vcs"], "text/x-vcard": ["vcf"], "video/vnd.dece.hd": ["uvh", "uvvh"], "video/vnd.dece.mobile": ["uvm", "uvvm"], "video/vnd.dece.pd": ["uvp", "uvvp"], "video/vnd.dece.sd": ["uvs", "uvvs"], "video/vnd.dece.video": ["uvv", "uvvv"], "video/vnd.dvb.file": ["dvb"], "video/vnd.fvt": ["fvt"], "video/vnd.mpegurl": ["mxu", "m4u"], "video/vnd.ms-playready.media.pyv": ["pyv"], "video/vnd.uvvu.mp4": ["uvu", "uvvu"], "video/vnd.vivo": ["viv"], "video/x-f4v": ["f4v"], "video/x-fli": ["fli"], "video/x-flv": ["flv"], "video/x-m4v": ["m4v"], "video/x-matroska": ["mkv", "mk3d", "mks"], "video/x-mng": ["mng"], "video/x-ms-asf": ["asf", "asx"], "video/x-ms-vob": ["vob"], "video/x-ms-wm": ["wm"], "video/x-ms-wmv": ["wmv"], "video/x-ms-wmx": ["wmx"], "video/x-ms-wvx": ["wvx"], "video/x-msvideo": ["avi"], "video/x-sgi-movie": ["movie"], "video/x-smv": ["smv"], "x-conference/x-cooltalk": ["ice"] };
    }
  });

  // node_modules/mime/index.js
  var require_mime = __commonJS({
    "node_modules/mime/index.js"(exports, module) {
      "use strict";
      var Mime2 = require_Mime();
      module.exports = new Mime2(require_standard(), require_other());
    }
  });

  // node_modules/has-symbols/shams.js
  var require_shams = __commonJS({
    "node_modules/has-symbols/shams.js"(exports, module) {
      "use strict";
      module.exports = function hasSymbols3() {
        if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
          return false;
        }
        if (typeof Symbol.iterator === "symbol") {
          return true;
        }
        var obj = {};
        var sym = Symbol("test");
        var symObj = Object(sym);
        if (typeof sym === "string") {
          return false;
        }
        if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
          return false;
        }
        if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
          return false;
        }
        var symVal = 42;
        obj[sym] = symVal;
        for (sym in obj) {
          return false;
        }
        if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
          return false;
        }
        if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
          return false;
        }
        var syms = Object.getOwnPropertySymbols(obj);
        if (syms.length !== 1 || syms[0] !== sym) {
          return false;
        }
        if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
          return false;
        }
        if (typeof Object.getOwnPropertyDescriptor === "function") {
          var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
          if (descriptor.value !== symVal || descriptor.enumerable !== true) {
            return false;
          }
        }
        return true;
      };
    }
  });

  // node_modules/has-tostringtag/shams.js
  var require_shams2 = __commonJS({
    "node_modules/has-tostringtag/shams.js"(exports, module) {
      "use strict";
      var hasSymbols3 = require_shams();
      module.exports = function hasToStringTagShams2() {
        return hasSymbols3() && !!Symbol.toStringTag;
      };
    }
  });

  // node_modules/has-symbols/index.js
  var require_has_symbols = __commonJS({
    "node_modules/has-symbols/index.js"(exports, module) {
      "use strict";
      var origSymbol2 = typeof Symbol !== "undefined" && Symbol;
      var hasSymbolSham2 = require_shams();
      module.exports = function hasNativeSymbols2() {
        if (typeof origSymbol2 !== "function") {
          return false;
        }
        if (typeof Symbol !== "function") {
          return false;
        }
        if (typeof origSymbol2("foo") !== "symbol") {
          return false;
        }
        if (typeof Symbol("bar") !== "symbol") {
          return false;
        }
        return hasSymbolSham2();
      };
    }
  });

  // node_modules/function-bind/implementation.js
  var require_implementation = __commonJS({
    "node_modules/function-bind/implementation.js"(exports, module) {
      "use strict";
      var ERROR_MESSAGE2 = "Function.prototype.bind called on incompatible ";
      var slice2 = Array.prototype.slice;
      var toStr2 = Object.prototype.toString;
      var funcType2 = "[object Function]";
      module.exports = function bind3(that) {
        var target = this;
        if (typeof target !== "function" || toStr2.call(target) !== funcType2) {
          throw new TypeError(ERROR_MESSAGE2 + target);
        }
        var args = slice2.call(arguments, 1);
        var bound;
        var binder = function() {
          if (this instanceof bound) {
            var result = target.apply(this, args.concat(slice2.call(arguments)));
            if (Object(result) === result) {
              return result;
            }
            return this;
          } else {
            return target.apply(that, args.concat(slice2.call(arguments)));
          }
        };
        var boundLength = Math.max(0, target.length - args.length);
        var boundArgs = [];
        for (var i = 0; i < boundLength; i++) {
          boundArgs.push("$" + i);
        }
        bound = Function("binder", "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }")(binder);
        if (target.prototype) {
          var Empty = function Empty2() {
          };
          Empty.prototype = target.prototype;
          bound.prototype = new Empty();
          Empty.prototype = null;
        }
        return bound;
      };
    }
  });

  // node_modules/function-bind/index.js
  var require_function_bind = __commonJS({
    "node_modules/function-bind/index.js"(exports, module) {
      "use strict";
      var implementation2 = require_implementation();
      module.exports = Function.prototype.bind || implementation2;
    }
  });

  // node_modules/has/src/index.js
  var require_src = __commonJS({
    "node_modules/has/src/index.js"(exports, module) {
      "use strict";
      var bind3 = require_function_bind();
      module.exports = bind3.call(Function.call, Object.prototype.hasOwnProperty);
    }
  });

  // node_modules/get-intrinsic/index.js
  var require_get_intrinsic = __commonJS({
    "node_modules/get-intrinsic/index.js"(exports, module) {
      "use strict";
      var undefined2;
      var $SyntaxError2 = SyntaxError;
      var $Function2 = Function;
      var $TypeError2 = TypeError;
      var getEvalledConstructor2 = function(expressionSyntax) {
        try {
          return $Function2('"use strict"; return (' + expressionSyntax + ").constructor;")();
        } catch (e) {
        }
      };
      var $gOPD2 = Object.getOwnPropertyDescriptor;
      if ($gOPD2) {
        try {
          $gOPD2({}, "");
        } catch (e) {
          $gOPD2 = null;
        }
      }
      var throwTypeError2 = function() {
        throw new $TypeError2();
      };
      var ThrowTypeError2 = $gOPD2 ? function() {
        try {
          arguments.callee;
          return throwTypeError2;
        } catch (calleeThrows) {
          try {
            return $gOPD2(arguments, "callee").get;
          } catch (gOPDthrows) {
            return throwTypeError2;
          }
        }
      }() : throwTypeError2;
      var hasSymbols3 = require_has_symbols()();
      var getProto2 = Object.getPrototypeOf || function(x) {
        return x.__proto__;
      };
      var needsEval2 = {};
      var TypedArray2 = typeof Uint8Array === "undefined" ? undefined2 : getProto2(Uint8Array);
      var INTRINSICS2 = {
        "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
        "%ArrayIteratorPrototype%": hasSymbols3 ? getProto2([][Symbol.iterator]()) : undefined2,
        "%AsyncFromSyncIteratorPrototype%": undefined2,
        "%AsyncFunction%": needsEval2,
        "%AsyncGenerator%": needsEval2,
        "%AsyncGeneratorFunction%": needsEval2,
        "%AsyncIteratorPrototype%": needsEval2,
        "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
        "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
        "%Boolean%": Boolean,
        "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": Error,
        "%eval%": eval,
        "%EvalError%": EvalError,
        "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
        "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
        "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
        "%Function%": $Function2,
        "%GeneratorFunction%": needsEval2,
        "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
        "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
        "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": hasSymbols3 ? getProto2(getProto2([][Symbol.iterator]())) : undefined2,
        "%JSON%": typeof JSON === "object" ? JSON : undefined2,
        "%Map%": typeof Map === "undefined" ? undefined2 : Map,
        "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols3 ? undefined2 : getProto2((/* @__PURE__ */ new Map())[Symbol.iterator]()),
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": Object,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
        "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
        "%RangeError%": RangeError,
        "%ReferenceError%": ReferenceError,
        "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
        "%RegExp%": RegExp,
        "%Set%": typeof Set === "undefined" ? undefined2 : Set,
        "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols3 ? undefined2 : getProto2((/* @__PURE__ */ new Set())[Symbol.iterator]()),
        "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": hasSymbols3 ? getProto2(""[Symbol.iterator]()) : undefined2,
        "%Symbol%": hasSymbols3 ? Symbol : undefined2,
        "%SyntaxError%": $SyntaxError2,
        "%ThrowTypeError%": ThrowTypeError2,
        "%TypedArray%": TypedArray2,
        "%TypeError%": $TypeError2,
        "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
        "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
        "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
        "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
        "%URIError%": URIError,
        "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
        "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
        "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet
      };
      var doEval3 = function doEval4(name) {
        var value;
        if (name === "%AsyncFunction%") {
          value = getEvalledConstructor2("async function () {}");
        } else if (name === "%GeneratorFunction%") {
          value = getEvalledConstructor2("function* () {}");
        } else if (name === "%AsyncGeneratorFunction%") {
          value = getEvalledConstructor2("async function* () {}");
        } else if (name === "%AsyncGenerator%") {
          var fn = doEval4("%AsyncGeneratorFunction%");
          if (fn) {
            value = fn.prototype;
          }
        } else if (name === "%AsyncIteratorPrototype%") {
          var gen = doEval4("%AsyncGenerator%");
          if (gen) {
            value = getProto2(gen.prototype);
          }
        }
        INTRINSICS2[name] = value;
        return value;
      };
      var LEGACY_ALIASES2 = {
        "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
        "%ArrayPrototype%": ["Array", "prototype"],
        "%ArrayProto_entries%": ["Array", "prototype", "entries"],
        "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
        "%ArrayProto_keys%": ["Array", "prototype", "keys"],
        "%ArrayProto_values%": ["Array", "prototype", "values"],
        "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
        "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
        "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
        "%BooleanPrototype%": ["Boolean", "prototype"],
        "%DataViewPrototype%": ["DataView", "prototype"],
        "%DatePrototype%": ["Date", "prototype"],
        "%ErrorPrototype%": ["Error", "prototype"],
        "%EvalErrorPrototype%": ["EvalError", "prototype"],
        "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
        "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
        "%FunctionPrototype%": ["Function", "prototype"],
        "%Generator%": ["GeneratorFunction", "prototype"],
        "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
        "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
        "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
        "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
        "%JSONParse%": ["JSON", "parse"],
        "%JSONStringify%": ["JSON", "stringify"],
        "%MapPrototype%": ["Map", "prototype"],
        "%NumberPrototype%": ["Number", "prototype"],
        "%ObjectPrototype%": ["Object", "prototype"],
        "%ObjProto_toString%": ["Object", "prototype", "toString"],
        "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
        "%PromisePrototype%": ["Promise", "prototype"],
        "%PromiseProto_then%": ["Promise", "prototype", "then"],
        "%Promise_all%": ["Promise", "all"],
        "%Promise_reject%": ["Promise", "reject"],
        "%Promise_resolve%": ["Promise", "resolve"],
        "%RangeErrorPrototype%": ["RangeError", "prototype"],
        "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
        "%RegExpPrototype%": ["RegExp", "prototype"],
        "%SetPrototype%": ["Set", "prototype"],
        "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
        "%StringPrototype%": ["String", "prototype"],
        "%SymbolPrototype%": ["Symbol", "prototype"],
        "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
        "%TypedArrayPrototype%": ["TypedArray", "prototype"],
        "%TypeErrorPrototype%": ["TypeError", "prototype"],
        "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
        "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
        "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
        "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
        "%URIErrorPrototype%": ["URIError", "prototype"],
        "%WeakMapPrototype%": ["WeakMap", "prototype"],
        "%WeakSetPrototype%": ["WeakSet", "prototype"]
      };
      var bind3 = require_function_bind();
      var hasOwn2 = require_src();
      var $concat2 = bind3.call(Function.call, Array.prototype.concat);
      var $spliceApply2 = bind3.call(Function.apply, Array.prototype.splice);
      var $replace2 = bind3.call(Function.call, String.prototype.replace);
      var $strSlice2 = bind3.call(Function.call, String.prototype.slice);
      var rePropName2 = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
      var reEscapeChar2 = /\\(\\)?/g;
      var stringToPath3 = function stringToPath4(string) {
        var first = $strSlice2(string, 0, 1);
        var last = $strSlice2(string, -1);
        if (first === "%" && last !== "%") {
          throw new $SyntaxError2("invalid intrinsic syntax, expected closing `%`");
        } else if (last === "%" && first !== "%") {
          throw new $SyntaxError2("invalid intrinsic syntax, expected opening `%`");
        }
        var result = [];
        $replace2(string, rePropName2, function(match, number, quote, subString) {
          result[result.length] = quote ? $replace2(subString, reEscapeChar2, "$1") : number || match;
        });
        return result;
      };
      var getBaseIntrinsic3 = function getBaseIntrinsic4(name, allowMissing) {
        var intrinsicName = name;
        var alias;
        if (hasOwn2(LEGACY_ALIASES2, intrinsicName)) {
          alias = LEGACY_ALIASES2[intrinsicName];
          intrinsicName = "%" + alias[0] + "%";
        }
        if (hasOwn2(INTRINSICS2, intrinsicName)) {
          var value = INTRINSICS2[intrinsicName];
          if (value === needsEval2) {
            value = doEval3(intrinsicName);
          }
          if (typeof value === "undefined" && !allowMissing) {
            throw new $TypeError2("intrinsic " + name + " exists, but is not available. Please file an issue!");
          }
          return {
            alias,
            name: intrinsicName,
            value
          };
        }
        throw new $SyntaxError2("intrinsic " + name + " does not exist!");
      };
      module.exports = function GetIntrinsic3(name, allowMissing) {
        if (typeof name !== "string" || name.length === 0) {
          throw new $TypeError2("intrinsic name must be a non-empty string");
        }
        if (arguments.length > 1 && typeof allowMissing !== "boolean") {
          throw new $TypeError2('"allowMissing" argument must be a boolean');
        }
        var parts = stringToPath3(name);
        var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
        var intrinsic = getBaseIntrinsic3("%" + intrinsicBaseName + "%", allowMissing);
        var intrinsicRealName = intrinsic.name;
        var value = intrinsic.value;
        var skipFurtherCaching = false;
        var alias = intrinsic.alias;
        if (alias) {
          intrinsicBaseName = alias[0];
          $spliceApply2(parts, $concat2([0, 1], alias));
        }
        for (var i = 1, isOwn = true; i < parts.length; i += 1) {
          var part = parts[i];
          var first = $strSlice2(part, 0, 1);
          var last = $strSlice2(part, -1);
          if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
            throw new $SyntaxError2("property names with quotes must have matching quotes");
          }
          if (part === "constructor" || !isOwn) {
            skipFurtherCaching = true;
          }
          intrinsicBaseName += "." + part;
          intrinsicRealName = "%" + intrinsicBaseName + "%";
          if (hasOwn2(INTRINSICS2, intrinsicRealName)) {
            value = INTRINSICS2[intrinsicRealName];
          } else if (value != null) {
            if (!(part in value)) {
              if (!allowMissing) {
                throw new $TypeError2("base intrinsic for " + name + " exists, but the property is not available.");
              }
              return void 0;
            }
            if ($gOPD2 && i + 1 >= parts.length) {
              var desc = $gOPD2(value, part);
              isOwn = !!desc;
              if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
                value = desc.get;
              } else {
                value = value[part];
              }
            } else {
              isOwn = hasOwn2(value, part);
              value = value[part];
            }
            if (isOwn && !skipFurtherCaching) {
              INTRINSICS2[intrinsicRealName] = value;
            }
          }
        }
        return value;
      };
    }
  });

  // node_modules/call-bind/index.js
  var require_call_bind = __commonJS({
    "node_modules/call-bind/index.js"(exports, module) {
      "use strict";
      var bind3 = require_function_bind();
      var GetIntrinsic3 = require_get_intrinsic();
      var $apply = GetIntrinsic3("%Function.prototype.apply%");
      var $call = GetIntrinsic3("%Function.prototype.call%");
      var $reflectApply = GetIntrinsic3("%Reflect.apply%", true) || bind3.call($call, $apply);
      var $gOPD2 = GetIntrinsic3("%Object.getOwnPropertyDescriptor%", true);
      var $defineProperty = GetIntrinsic3("%Object.defineProperty%", true);
      var $max = GetIntrinsic3("%Math.max%");
      if ($defineProperty) {
        try {
          $defineProperty({}, "a", { value: 1 });
        } catch (e) {
          $defineProperty = null;
        }
      }
      module.exports = function callBind2(originalFunction) {
        var func = $reflectApply(bind3, $call, arguments);
        if ($gOPD2 && $defineProperty) {
          var desc = $gOPD2(func, "length");
          if (desc.configurable) {
            $defineProperty(func, "length", { value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) });
          }
        }
        return func;
      };
      var applyBind = function applyBind2() {
        return $reflectApply(bind3, $apply, arguments);
      };
      if ($defineProperty) {
        $defineProperty(module.exports, "apply", { value: applyBind });
      } else {
        module.exports.apply = applyBind;
      }
    }
  });

  // node_modules/call-bind/callBound.js
  var require_callBound = __commonJS({
    "node_modules/call-bind/callBound.js"(exports, module) {
      "use strict";
      var GetIntrinsic3 = require_get_intrinsic();
      var callBind2 = require_call_bind();
      var $indexOf2 = callBind2(GetIntrinsic3("String.prototype.indexOf"));
      module.exports = function callBoundIntrinsic2(name, allowMissing) {
        var intrinsic = GetIntrinsic3(name, !!allowMissing);
        if (typeof intrinsic === "function" && $indexOf2(name, ".prototype.") > -1) {
          return callBind2(intrinsic);
        }
        return intrinsic;
      };
    }
  });

  // node_modules/is-arguments/index.js
  var require_is_arguments = __commonJS({
    "node_modules/is-arguments/index.js"(exports, module) {
      "use strict";
      var hasToStringTag2 = require_shams2()();
      var callBound2 = require_callBound();
      var $toString2 = callBound2("Object.prototype.toString");
      var isStandardArguments2 = function isArguments4(value) {
        if (hasToStringTag2 && value && typeof value === "object" && Symbol.toStringTag in value) {
          return false;
        }
        return $toString2(value) === "[object Arguments]";
      };
      var isLegacyArguments2 = function isArguments4(value) {
        if (isStandardArguments2(value)) {
          return true;
        }
        return value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && $toString2(value) !== "[object Array]" && $toString2(value.callee) === "[object Function]";
      };
      var supportsStandardArguments2 = function() {
        return isStandardArguments2(arguments);
      }();
      isStandardArguments2.isLegacyArguments = isLegacyArguments2;
      module.exports = supportsStandardArguments2 ? isStandardArguments2 : isLegacyArguments2;
    }
  });

  // node_modules/is-generator-function/index.js
  var require_is_generator_function = __commonJS({
    "node_modules/is-generator-function/index.js"(exports, module) {
      "use strict";
      var toStr2 = Object.prototype.toString;
      var fnToStr2 = Function.prototype.toString;
      var isFnRegex2 = /^\s*(?:function)?\*/;
      var hasToStringTag2 = require_shams2()();
      var getProto2 = Object.getPrototypeOf;
      var getGeneratorFunc2 = function() {
        if (!hasToStringTag2) {
          return false;
        }
        try {
          return Function("return function*() {}")();
        } catch (e) {
        }
      };
      var GeneratorFunction2;
      module.exports = function isGeneratorFunction3(fn) {
        if (typeof fn !== "function") {
          return false;
        }
        if (isFnRegex2.test(fnToStr2.call(fn))) {
          return true;
        }
        if (!hasToStringTag2) {
          var str = toStr2.call(fn);
          return str === "[object GeneratorFunction]";
        }
        if (!getProto2) {
          return false;
        }
        if (typeof GeneratorFunction2 === "undefined") {
          var generatorFunc = getGeneratorFunc2();
          GeneratorFunction2 = generatorFunc ? getProto2(generatorFunc) : false;
        }
        return getProto2(fn) === GeneratorFunction2;
      };
    }
  });

  // node_modules/foreach/index.js
  var require_foreach = __commonJS({
    "node_modules/foreach/index.js"(exports, module) {
      var hasOwn2 = Object.prototype.hasOwnProperty;
      var toString2 = Object.prototype.toString;
      module.exports = function forEach3(obj, fn, ctx) {
        if (toString2.call(fn) !== "[object Function]") {
          throw new TypeError("iterator must be a function");
        }
        var l = obj.length;
        if (l === +l) {
          for (var i = 0; i < l; i++) {
            fn.call(ctx, obj[i], i, obj);
          }
        } else {
          for (var k in obj) {
            if (hasOwn2.call(obj, k)) {
              fn.call(ctx, obj[k], k, obj);
            }
          }
        }
      };
    }
  });

  // node_modules/available-typed-arrays/index.js
  var require_available_typed_arrays = __commonJS({
    "node_modules/available-typed-arrays/index.js"(exports, module) {
      "use strict";
      var possibleNames2 = [
        "BigInt64Array",
        "BigUint64Array",
        "Float32Array",
        "Float64Array",
        "Int16Array",
        "Int32Array",
        "Int8Array",
        "Uint16Array",
        "Uint32Array",
        "Uint8Array",
        "Uint8ClampedArray"
      ];
      var g2 = typeof globalThis === "undefined" ? global : globalThis;
      module.exports = function availableTypedArrays3() {
        var out = [];
        for (var i = 0; i < possibleNames2.length; i++) {
          if (typeof g2[possibleNames2[i]] === "function") {
            out[out.length] = possibleNames2[i];
          }
        }
        return out;
      };
    }
  });

  // node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js
  var require_getOwnPropertyDescriptor = __commonJS({
    "node_modules/es-abstract/helpers/getOwnPropertyDescriptor.js"(exports, module) {
      "use strict";
      var GetIntrinsic3 = require_get_intrinsic();
      var $gOPD2 = GetIntrinsic3("%Object.getOwnPropertyDescriptor%", true);
      if ($gOPD2) {
        try {
          $gOPD2([], "length");
        } catch (e) {
          $gOPD2 = null;
        }
      }
      module.exports = $gOPD2;
    }
  });

  // node_modules/is-typed-array/index.js
  var require_is_typed_array = __commonJS({
    "node_modules/is-typed-array/index.js"(exports, module) {
      "use strict";
      var forEach3 = require_foreach();
      var availableTypedArrays3 = require_available_typed_arrays();
      var callBound2 = require_callBound();
      var $toString2 = callBound2("Object.prototype.toString");
      var hasToStringTag2 = require_shams2()();
      var g2 = typeof globalThis === "undefined" ? global : globalThis;
      var typedArrays2 = availableTypedArrays3();
      var $indexOf2 = callBound2("Array.prototype.indexOf", true) || function indexOf2(array, value) {
        for (var i = 0; i < array.length; i += 1) {
          if (array[i] === value) {
            return i;
          }
        }
        return -1;
      };
      var $slice2 = callBound2("String.prototype.slice");
      var toStrTags2 = {};
      var gOPD2 = require_getOwnPropertyDescriptor();
      var getPrototypeOf2 = Object.getPrototypeOf;
      if (hasToStringTag2 && gOPD2 && getPrototypeOf2) {
        forEach3(typedArrays2, function(typedArray) {
          var arr = new g2[typedArray]();
          if (Symbol.toStringTag in arr) {
            var proto = getPrototypeOf2(arr);
            var descriptor = gOPD2(proto, Symbol.toStringTag);
            if (!descriptor) {
              var superProto = getPrototypeOf2(proto);
              descriptor = gOPD2(superProto, Symbol.toStringTag);
            }
            toStrTags2[typedArray] = descriptor.get;
          }
        });
      }
      var tryTypedArrays2 = function tryAllTypedArrays3(value) {
        var anyTrue = false;
        forEach3(toStrTags2, function(getter, typedArray) {
          if (!anyTrue) {
            try {
              anyTrue = getter.call(value) === typedArray;
            } catch (e) {
            }
          }
        });
        return anyTrue;
      };
      module.exports = function isTypedArray3(value) {
        if (!value || typeof value !== "object") {
          return false;
        }
        if (!hasToStringTag2 || !(Symbol.toStringTag in value)) {
          var tag = $slice2($toString2(value), 8, -1);
          return $indexOf2(typedArrays2, tag) > -1;
        }
        if (!gOPD2) {
          return false;
        }
        return tryTypedArrays2(value);
      };
    }
  });

  // node_modules/which-typed-array/index.js
  var require_which_typed_array = __commonJS({
    "node_modules/which-typed-array/index.js"(exports, module) {
      "use strict";
      var forEach3 = require_foreach();
      var availableTypedArrays3 = require_available_typed_arrays();
      var callBound2 = require_callBound();
      var $toString2 = callBound2("Object.prototype.toString");
      var hasToStringTag2 = require_shams2()();
      var g2 = typeof globalThis === "undefined" ? global : globalThis;
      var typedArrays2 = availableTypedArrays3();
      var $slice2 = callBound2("String.prototype.slice");
      var toStrTags2 = {};
      var gOPD2 = require_getOwnPropertyDescriptor();
      var getPrototypeOf2 = Object.getPrototypeOf;
      if (hasToStringTag2 && gOPD2 && getPrototypeOf2) {
        forEach3(typedArrays2, function(typedArray) {
          if (typeof g2[typedArray] === "function") {
            var arr = new g2[typedArray]();
            if (Symbol.toStringTag in arr) {
              var proto = getPrototypeOf2(arr);
              var descriptor = gOPD2(proto, Symbol.toStringTag);
              if (!descriptor) {
                var superProto = getPrototypeOf2(proto);
                descriptor = gOPD2(superProto, Symbol.toStringTag);
              }
              toStrTags2[typedArray] = descriptor.get;
            }
          }
        });
      }
      var tryTypedArrays2 = function tryAllTypedArrays3(value) {
        var foundName = false;
        forEach3(toStrTags2, function(getter, typedArray) {
          if (!foundName) {
            try {
              var name = getter.call(value);
              if (name === typedArray) {
                foundName = name;
              }
            } catch (e) {
            }
          }
        });
        return foundName;
      };
      var isTypedArray3 = require_is_typed_array();
      module.exports = function whichTypedArray3(value) {
        if (!isTypedArray3(value)) {
          return false;
        }
        if (!hasToStringTag2 || !(Symbol.toStringTag in value)) {
          return $slice2($toString2(value), 8, -1);
        }
        return tryTypedArrays2(value);
      };
    }
  });

  // node_modules/util/support/types.js
  var require_types = __commonJS({
    "node_modules/util/support/types.js"(exports) {
      "use strict";
      var isArgumentsObject = require_is_arguments();
      var isGeneratorFunction3 = require_is_generator_function();
      var whichTypedArray3 = require_which_typed_array();
      var isTypedArray3 = require_is_typed_array();
      function uncurryThis(f) {
        return f.call.bind(f);
      }
      var BigIntSupported = typeof BigInt !== "undefined";
      var SymbolSupported = typeof Symbol !== "undefined";
      var ObjectToString = uncurryThis(Object.prototype.toString);
      var numberValue = uncurryThis(Number.prototype.valueOf);
      var stringValue = uncurryThis(String.prototype.valueOf);
      var booleanValue = uncurryThis(Boolean.prototype.valueOf);
      if (BigIntSupported) {
        bigIntValue = uncurryThis(BigInt.prototype.valueOf);
      }
      var bigIntValue;
      if (SymbolSupported) {
        symbolValue = uncurryThis(Symbol.prototype.valueOf);
      }
      var symbolValue;
      function checkBoxedPrimitive(value, prototypeValueOf) {
        if (typeof value !== "object") {
          return false;
        }
        try {
          prototypeValueOf(value);
          return true;
        } catch (e) {
          return false;
        }
      }
      exports.isArgumentsObject = isArgumentsObject;
      exports.isGeneratorFunction = isGeneratorFunction3;
      exports.isTypedArray = isTypedArray3;
      function isPromise(input) {
        return typeof Promise !== "undefined" && input instanceof Promise || input !== null && typeof input === "object" && typeof input.then === "function" && typeof input.catch === "function";
      }
      exports.isPromise = isPromise;
      function isArrayBufferView(value) {
        if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
          return ArrayBuffer.isView(value);
        }
        return isTypedArray3(value) || isDataView(value);
      }
      exports.isArrayBufferView = isArrayBufferView;
      function isUint8Array(value) {
        return whichTypedArray3(value) === "Uint8Array";
      }
      exports.isUint8Array = isUint8Array;
      function isUint8ClampedArray(value) {
        return whichTypedArray3(value) === "Uint8ClampedArray";
      }
      exports.isUint8ClampedArray = isUint8ClampedArray;
      function isUint16Array(value) {
        return whichTypedArray3(value) === "Uint16Array";
      }
      exports.isUint16Array = isUint16Array;
      function isUint32Array(value) {
        return whichTypedArray3(value) === "Uint32Array";
      }
      exports.isUint32Array = isUint32Array;
      function isInt8Array(value) {
        return whichTypedArray3(value) === "Int8Array";
      }
      exports.isInt8Array = isInt8Array;
      function isInt16Array(value) {
        return whichTypedArray3(value) === "Int16Array";
      }
      exports.isInt16Array = isInt16Array;
      function isInt32Array(value) {
        return whichTypedArray3(value) === "Int32Array";
      }
      exports.isInt32Array = isInt32Array;
      function isFloat32Array(value) {
        return whichTypedArray3(value) === "Float32Array";
      }
      exports.isFloat32Array = isFloat32Array;
      function isFloat64Array(value) {
        return whichTypedArray3(value) === "Float64Array";
      }
      exports.isFloat64Array = isFloat64Array;
      function isBigInt64Array(value) {
        return whichTypedArray3(value) === "BigInt64Array";
      }
      exports.isBigInt64Array = isBigInt64Array;
      function isBigUint64Array(value) {
        return whichTypedArray3(value) === "BigUint64Array";
      }
      exports.isBigUint64Array = isBigUint64Array;
      function isMapToString(value) {
        return ObjectToString(value) === "[object Map]";
      }
      isMapToString.working = typeof Map !== "undefined" && isMapToString(/* @__PURE__ */ new Map());
      function isMap(value) {
        if (typeof Map === "undefined") {
          return false;
        }
        return isMapToString.working ? isMapToString(value) : value instanceof Map;
      }
      exports.isMap = isMap;
      function isSetToString(value) {
        return ObjectToString(value) === "[object Set]";
      }
      isSetToString.working = typeof Set !== "undefined" && isSetToString(/* @__PURE__ */ new Set());
      function isSet(value) {
        if (typeof Set === "undefined") {
          return false;
        }
        return isSetToString.working ? isSetToString(value) : value instanceof Set;
      }
      exports.isSet = isSet;
      function isWeakMapToString(value) {
        return ObjectToString(value) === "[object WeakMap]";
      }
      isWeakMapToString.working = typeof WeakMap !== "undefined" && isWeakMapToString(/* @__PURE__ */ new WeakMap());
      function isWeakMap(value) {
        if (typeof WeakMap === "undefined") {
          return false;
        }
        return isWeakMapToString.working ? isWeakMapToString(value) : value instanceof WeakMap;
      }
      exports.isWeakMap = isWeakMap;
      function isWeakSetToString(value) {
        return ObjectToString(value) === "[object WeakSet]";
      }
      isWeakSetToString.working = typeof WeakSet !== "undefined" && isWeakSetToString(/* @__PURE__ */ new WeakSet());
      function isWeakSet(value) {
        return isWeakSetToString(value);
      }
      exports.isWeakSet = isWeakSet;
      function isArrayBufferToString(value) {
        return ObjectToString(value) === "[object ArrayBuffer]";
      }
      isArrayBufferToString.working = typeof ArrayBuffer !== "undefined" && isArrayBufferToString(new ArrayBuffer());
      function isArrayBuffer(value) {
        if (typeof ArrayBuffer === "undefined") {
          return false;
        }
        return isArrayBufferToString.working ? isArrayBufferToString(value) : value instanceof ArrayBuffer;
      }
      exports.isArrayBuffer = isArrayBuffer;
      function isDataViewToString(value) {
        return ObjectToString(value) === "[object DataView]";
      }
      isDataViewToString.working = typeof ArrayBuffer !== "undefined" && typeof DataView !== "undefined" && isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
      function isDataView(value) {
        if (typeof DataView === "undefined") {
          return false;
        }
        return isDataViewToString.working ? isDataViewToString(value) : value instanceof DataView;
      }
      exports.isDataView = isDataView;
      var SharedArrayBufferCopy = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : void 0;
      function isSharedArrayBufferToString(value) {
        return ObjectToString(value) === "[object SharedArrayBuffer]";
      }
      function isSharedArrayBuffer(value) {
        if (typeof SharedArrayBufferCopy === "undefined") {
          return false;
        }
        if (typeof isSharedArrayBufferToString.working === "undefined") {
          isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy());
        }
        return isSharedArrayBufferToString.working ? isSharedArrayBufferToString(value) : value instanceof SharedArrayBufferCopy;
      }
      exports.isSharedArrayBuffer = isSharedArrayBuffer;
      function isAsyncFunction(value) {
        return ObjectToString(value) === "[object AsyncFunction]";
      }
      exports.isAsyncFunction = isAsyncFunction;
      function isMapIterator(value) {
        return ObjectToString(value) === "[object Map Iterator]";
      }
      exports.isMapIterator = isMapIterator;
      function isSetIterator(value) {
        return ObjectToString(value) === "[object Set Iterator]";
      }
      exports.isSetIterator = isSetIterator;
      function isGeneratorObject(value) {
        return ObjectToString(value) === "[object Generator]";
      }
      exports.isGeneratorObject = isGeneratorObject;
      function isWebAssemblyCompiledModule(value) {
        return ObjectToString(value) === "[object WebAssembly.Module]";
      }
      exports.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;
      function isNumberObject(value) {
        return checkBoxedPrimitive(value, numberValue);
      }
      exports.isNumberObject = isNumberObject;
      function isStringObject(value) {
        return checkBoxedPrimitive(value, stringValue);
      }
      exports.isStringObject = isStringObject;
      function isBooleanObject(value) {
        return checkBoxedPrimitive(value, booleanValue);
      }
      exports.isBooleanObject = isBooleanObject;
      function isBigIntObject(value) {
        return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
      }
      exports.isBigIntObject = isBigIntObject;
      function isSymbolObject(value) {
        return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
      }
      exports.isSymbolObject = isSymbolObject;
      function isBoxedPrimitive(value) {
        return isNumberObject(value) || isStringObject(value) || isBooleanObject(value) || isBigIntObject(value) || isSymbolObject(value);
      }
      exports.isBoxedPrimitive = isBoxedPrimitive;
      function isAnyArrayBuffer(value) {
        return typeof Uint8Array !== "undefined" && (isArrayBuffer(value) || isSharedArrayBuffer(value));
      }
      exports.isAnyArrayBuffer = isAnyArrayBuffer;
      ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(method) {
        Object.defineProperty(exports, method, {
          enumerable: false,
          value: function() {
            throw new Error(method + " is not supported in userland");
          }
        });
      });
    }
  });

  // node_modules/util/support/isBufferBrowser.js
  var require_isBufferBrowser = __commonJS({
    "node_modules/util/support/isBufferBrowser.js"(exports, module) {
      module.exports = function isBuffer3(arg) {
        return arg && typeof arg === "object" && typeof arg.copy === "function" && typeof arg.fill === "function" && typeof arg.readUInt8 === "function";
      };
    }
  });

  // node_modules/inherits/inherits_browser.js
  var require_inherits_browser = __commonJS({
    "node_modules/inherits/inherits_browser.js"(exports, module) {
      if (typeof Object.create === "function") {
        module.exports = function inherits2(ctor, superCtor) {
          if (superCtor) {
            ctor.super_ = superCtor;
            ctor.prototype = Object.create(superCtor.prototype, {
              constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
          }
        };
      } else {
        module.exports = function inherits2(ctor, superCtor) {
          if (superCtor) {
            ctor.super_ = superCtor;
            var TempCtor = function() {
            };
            TempCtor.prototype = superCtor.prototype;
            ctor.prototype = new TempCtor();
            ctor.prototype.constructor = ctor;
          }
        };
      }
    }
  });

  // node_modules/util/util.js
  var require_util = __commonJS({
    "node_modules/util/util.js"(exports) {
      var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors2(obj) {
        var keys = Object.keys(obj);
        var descriptors = {};
        for (var i = 0; i < keys.length; i++) {
          descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
        }
        return descriptors;
      };
      var formatRegExp = /%[sdj%]/g;
      exports.format = function(f) {
        if (!isString(f)) {
          var objects = [];
          for (var i = 0; i < arguments.length; i++) {
            objects.push(inspect(arguments[i]));
          }
          return objects.join(" ");
        }
        var i = 1;
        var args = arguments;
        var len = args.length;
        var str = String(f).replace(formatRegExp, function(x2) {
          if (x2 === "%%")
            return "%";
          if (i >= len)
            return x2;
          switch (x2) {
            case "%s":
              return String(args[i++]);
            case "%d":
              return Number(args[i++]);
            case "%j":
              try {
                return JSON.stringify(args[i++]);
              } catch (_) {
                return "[Circular]";
              }
            default:
              return x2;
          }
        });
        for (var x = args[i]; i < len; x = args[++i]) {
          if (isNull(x) || !isObject(x)) {
            str += " " + x;
          } else {
            str += " " + inspect(x);
          }
        }
        return str;
      };
      exports.deprecate = function(fn, msg) {
        if (typeof process !== "undefined" && process.noDeprecation === true) {
          return fn;
        }
        if (typeof process === "undefined") {
          return function() {
            return exports.deprecate(fn, msg).apply(this, arguments);
          };
        }
        var warned = false;
        function deprecated() {
          if (!warned) {
            if (process.throwDeprecation) {
              throw new Error(msg);
            } else if (process.traceDeprecation) {
              console.trace(msg);
            } else {
              console.error(msg);
            }
            warned = true;
          }
          return fn.apply(this, arguments);
        }
        return deprecated;
      };
      var debugs = {};
      var debugEnvRegex = /^$/;
      if (process.env.NODE_DEBUG) {
        debugEnv = process.env.NODE_DEBUG;
        debugEnv = debugEnv.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase();
        debugEnvRegex = new RegExp("^" + debugEnv + "$", "i");
      }
      var debugEnv;
      exports.debuglog = function(set) {
        set = set.toUpperCase();
        if (!debugs[set]) {
          if (debugEnvRegex.test(set)) {
            var pid = process.pid;
            debugs[set] = function() {
              var msg = exports.format.apply(exports, arguments);
              console.error("%s %d: %s", set, pid, msg);
            };
          } else {
            debugs[set] = function() {
            };
          }
        }
        return debugs[set];
      };
      function inspect(obj, opts) {
        var ctx = {
          seen: [],
          stylize: stylizeNoColor
        };
        if (arguments.length >= 3)
          ctx.depth = arguments[2];
        if (arguments.length >= 4)
          ctx.colors = arguments[3];
        if (isBoolean(opts)) {
          ctx.showHidden = opts;
        } else if (opts) {
          exports._extend(ctx, opts);
        }
        if (isUndefined(ctx.showHidden))
          ctx.showHidden = false;
        if (isUndefined(ctx.depth))
          ctx.depth = 2;
        if (isUndefined(ctx.colors))
          ctx.colors = false;
        if (isUndefined(ctx.customInspect))
          ctx.customInspect = true;
        if (ctx.colors)
          ctx.stylize = stylizeWithColor;
        return formatValue(ctx, obj, ctx.depth);
      }
      exports.inspect = inspect;
      inspect.colors = {
        "bold": [1, 22],
        "italic": [3, 23],
        "underline": [4, 24],
        "inverse": [7, 27],
        "white": [37, 39],
        "grey": [90, 39],
        "black": [30, 39],
        "blue": [34, 39],
        "cyan": [36, 39],
        "green": [32, 39],
        "magenta": [35, 39],
        "red": [31, 39],
        "yellow": [33, 39]
      };
      inspect.styles = {
        "special": "cyan",
        "number": "yellow",
        "boolean": "yellow",
        "undefined": "grey",
        "null": "bold",
        "string": "green",
        "date": "magenta",
        "regexp": "red"
      };
      function stylizeWithColor(str, styleType) {
        var style = inspect.styles[styleType];
        if (style) {
          return "\x1B[" + inspect.colors[style][0] + "m" + str + "\x1B[" + inspect.colors[style][1] + "m";
        } else {
          return str;
        }
      }
      function stylizeNoColor(str, styleType) {
        return str;
      }
      function arrayToHash(array) {
        var hash = {};
        array.forEach(function(val, idx) {
          hash[val] = true;
        });
        return hash;
      }
      function formatValue(ctx, value, recurseTimes) {
        if (ctx.customInspect && value && isFunction(value.inspect) && value.inspect !== exports.inspect && !(value.constructor && value.constructor.prototype === value)) {
          var ret = value.inspect(recurseTimes, ctx);
          if (!isString(ret)) {
            ret = formatValue(ctx, ret, recurseTimes);
          }
          return ret;
        }
        var primitive = formatPrimitive(ctx, value);
        if (primitive) {
          return primitive;
        }
        var keys = Object.keys(value);
        var visibleKeys = arrayToHash(keys);
        if (ctx.showHidden) {
          keys = Object.getOwnPropertyNames(value);
        }
        if (isError(value) && (keys.indexOf("message") >= 0 || keys.indexOf("description") >= 0)) {
          return formatError(value);
        }
        if (keys.length === 0) {
          if (isFunction(value)) {
            var name = value.name ? ": " + value.name : "";
            return ctx.stylize("[Function" + name + "]", "special");
          }
          if (isRegExp(value)) {
            return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
          }
          if (isDate(value)) {
            return ctx.stylize(Date.prototype.toString.call(value), "date");
          }
          if (isError(value)) {
            return formatError(value);
          }
        }
        var base = "", array = false, braces = ["{", "}"];
        if (isArray(value)) {
          array = true;
          braces = ["[", "]"];
        }
        if (isFunction(value)) {
          var n = value.name ? ": " + value.name : "";
          base = " [Function" + n + "]";
        }
        if (isRegExp(value)) {
          base = " " + RegExp.prototype.toString.call(value);
        }
        if (isDate(value)) {
          base = " " + Date.prototype.toUTCString.call(value);
        }
        if (isError(value)) {
          base = " " + formatError(value);
        }
        if (keys.length === 0 && (!array || value.length == 0)) {
          return braces[0] + base + braces[1];
        }
        if (recurseTimes < 0) {
          if (isRegExp(value)) {
            return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
          } else {
            return ctx.stylize("[Object]", "special");
          }
        }
        ctx.seen.push(value);
        var output;
        if (array) {
          output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
        } else {
          output = keys.map(function(key) {
            return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
          });
        }
        ctx.seen.pop();
        return reduceToSingleString(output, base, braces);
      }
      function formatPrimitive(ctx, value) {
        if (isUndefined(value))
          return ctx.stylize("undefined", "undefined");
        if (isString(value)) {
          var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
          return ctx.stylize(simple, "string");
        }
        if (isNumber(value))
          return ctx.stylize("" + value, "number");
        if (isBoolean(value))
          return ctx.stylize("" + value, "boolean");
        if (isNull(value))
          return ctx.stylize("null", "null");
      }
      function formatError(value) {
        return "[" + Error.prototype.toString.call(value) + "]";
      }
      function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
        var output = [];
        for (var i = 0, l = value.length; i < l; ++i) {
          if (hasOwnProperty(value, String(i))) {
            output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
          } else {
            output.push("");
          }
        }
        keys.forEach(function(key) {
          if (!key.match(/^\d+$/)) {
            output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
          }
        });
        return output;
      }
      function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
        var name, str, desc;
        desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
        if (desc.get) {
          if (desc.set) {
            str = ctx.stylize("[Getter/Setter]", "special");
          } else {
            str = ctx.stylize("[Getter]", "special");
          }
        } else {
          if (desc.set) {
            str = ctx.stylize("[Setter]", "special");
          }
        }
        if (!hasOwnProperty(visibleKeys, key)) {
          name = "[" + key + "]";
        }
        if (!str) {
          if (ctx.seen.indexOf(desc.value) < 0) {
            if (isNull(recurseTimes)) {
              str = formatValue(ctx, desc.value, null);
            } else {
              str = formatValue(ctx, desc.value, recurseTimes - 1);
            }
            if (str.indexOf("\n") > -1) {
              if (array) {
                str = str.split("\n").map(function(line) {
                  return "  " + line;
                }).join("\n").substr(2);
              } else {
                str = "\n" + str.split("\n").map(function(line) {
                  return "   " + line;
                }).join("\n");
              }
            }
          } else {
            str = ctx.stylize("[Circular]", "special");
          }
        }
        if (isUndefined(name)) {
          if (array && key.match(/^\d+$/)) {
            return str;
          }
          name = JSON.stringify("" + key);
          if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
            name = name.substr(1, name.length - 2);
            name = ctx.stylize(name, "name");
          } else {
            name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
            name = ctx.stylize(name, "string");
          }
        }
        return name + ": " + str;
      }
      function reduceToSingleString(output, base, braces) {
        var numLinesEst = 0;
        var length = output.reduce(function(prev, cur) {
          numLinesEst++;
          if (cur.indexOf("\n") >= 0)
            numLinesEst++;
          return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
        }, 0);
        if (length > 60) {
          return braces[0] + (base === "" ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
        }
        return braces[0] + base + " " + output.join(", ") + " " + braces[1];
      }
      exports.types = require_types();
      function isArray(ar) {
        return Array.isArray(ar);
      }
      exports.isArray = isArray;
      function isBoolean(arg) {
        return typeof arg === "boolean";
      }
      exports.isBoolean = isBoolean;
      function isNull(arg) {
        return arg === null;
      }
      exports.isNull = isNull;
      function isNullOrUndefined(arg) {
        return arg == null;
      }
      exports.isNullOrUndefined = isNullOrUndefined;
      function isNumber(arg) {
        return typeof arg === "number";
      }
      exports.isNumber = isNumber;
      function isString(arg) {
        return typeof arg === "string";
      }
      exports.isString = isString;
      function isSymbol(arg) {
        return typeof arg === "symbol";
      }
      exports.isSymbol = isSymbol;
      function isUndefined(arg) {
        return arg === void 0;
      }
      exports.isUndefined = isUndefined;
      function isRegExp(re) {
        return isObject(re) && objectToString(re) === "[object RegExp]";
      }
      exports.isRegExp = isRegExp;
      exports.types.isRegExp = isRegExp;
      function isObject(arg) {
        return typeof arg === "object" && arg !== null;
      }
      exports.isObject = isObject;
      function isDate(d) {
        return isObject(d) && objectToString(d) === "[object Date]";
      }
      exports.isDate = isDate;
      exports.types.isDate = isDate;
      function isError(e) {
        return isObject(e) && (objectToString(e) === "[object Error]" || e instanceof Error);
      }
      exports.isError = isError;
      exports.types.isNativeError = isError;
      function isFunction(arg) {
        return typeof arg === "function";
      }
      exports.isFunction = isFunction;
      function isPrimitive(arg) {
        return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || typeof arg === "undefined";
      }
      exports.isPrimitive = isPrimitive;
      exports.isBuffer = require_isBufferBrowser();
      function objectToString(o) {
        return Object.prototype.toString.call(o);
      }
      function pad(n) {
        return n < 10 ? "0" + n.toString(10) : n.toString(10);
      }
      var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
      function timestamp() {
        var d = new Date();
        var time = [
          pad(d.getHours()),
          pad(d.getMinutes()),
          pad(d.getSeconds())
        ].join(":");
        return [d.getDate(), months[d.getMonth()], time].join(" ");
      }
      exports.log = function() {
        console.log("%s - %s", timestamp(), exports.format.apply(exports, arguments));
      };
      exports.inherits = require_inherits_browser();
      exports._extend = function(origin, add) {
        if (!add || !isObject(add))
          return origin;
        var keys = Object.keys(add);
        var i = keys.length;
        while (i--) {
          origin[keys[i]] = add[keys[i]];
        }
        return origin;
      };
      function hasOwnProperty(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      }
      var kCustomPromisifiedSymbol = typeof Symbol !== "undefined" ? Symbol("util.promisify.custom") : void 0;
      exports.promisify = function promisify(original) {
        if (typeof original !== "function")
          throw new TypeError('The "original" argument must be of type Function');
        if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
          var fn = original[kCustomPromisifiedSymbol];
          if (typeof fn !== "function") {
            throw new TypeError('The "util.promisify.custom" argument must be of type Function');
          }
          Object.defineProperty(fn, kCustomPromisifiedSymbol, {
            value: fn,
            enumerable: false,
            writable: false,
            configurable: true
          });
          return fn;
        }
        function fn() {
          var promiseResolve, promiseReject;
          var promise = new Promise(function(resolve2, reject) {
            promiseResolve = resolve2;
            promiseReject = reject;
          });
          var args = [];
          for (var i = 0; i < arguments.length; i++) {
            args.push(arguments[i]);
          }
          args.push(function(err, value) {
            if (err) {
              promiseReject(err);
            } else {
              promiseResolve(value);
            }
          });
          try {
            original.apply(this, args);
          } catch (err) {
            promiseReject(err);
          }
          return promise;
        }
        Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
        if (kCustomPromisifiedSymbol)
          Object.defineProperty(fn, kCustomPromisifiedSymbol, {
            value: fn,
            enumerable: false,
            writable: false,
            configurable: true
          });
        return Object.defineProperties(fn, getOwnPropertyDescriptors(original));
      };
      exports.promisify.custom = kCustomPromisifiedSymbol;
      function callbackifyOnRejected(reason, cb) {
        if (!reason) {
          var newReason = new Error("Promise was rejected with a falsy value");
          newReason.reason = reason;
          reason = newReason;
        }
        return cb(reason);
      }
      function callbackify(original) {
        if (typeof original !== "function") {
          throw new TypeError('The "original" argument must be of type Function');
        }
        function callbackified() {
          var args = [];
          for (var i = 0; i < arguments.length; i++) {
            args.push(arguments[i]);
          }
          var maybeCb = args.pop();
          if (typeof maybeCb !== "function") {
            throw new TypeError("The last argument must be of type Function");
          }
          var self2 = this;
          var cb = function() {
            return maybeCb.apply(self2, arguments);
          };
          original.apply(this, args).then(function(ret) {
            process.nextTick(cb.bind(null, null, ret));
          }, function(rej) {
            process.nextTick(callbackifyOnRejected.bind(null, rej, cb));
          });
        }
        Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
        Object.defineProperties(callbackified, getOwnPropertyDescriptors(original));
        return callbackified;
      }
      exports.callbackify = callbackify;
    }
  });

  // node_modules/eastasianwidth/eastasianwidth.js
  var require_eastasianwidth = __commonJS({
    "node_modules/eastasianwidth/eastasianwidth.js"(exports, module) {
      var eaw = {};
      if (typeof module == "undefined") {
        window.eastasianwidth = eaw;
      } else {
        module.exports = eaw;
      }
      eaw.eastAsianWidth = function(character) {
        var x = character.charCodeAt(0);
        var y = character.length == 2 ? character.charCodeAt(1) : 0;
        var codePoint = x;
        if (55296 <= x && x <= 56319 && (56320 <= y && y <= 57343)) {
          x &= 1023;
          y &= 1023;
          codePoint = x << 10 | y;
          codePoint += 65536;
        }
        if (codePoint == 12288 || 65281 <= codePoint && codePoint <= 65376 || 65504 <= codePoint && codePoint <= 65510) {
          return "F";
        }
        if (codePoint == 8361 || 65377 <= codePoint && codePoint <= 65470 || 65474 <= codePoint && codePoint <= 65479 || 65482 <= codePoint && codePoint <= 65487 || 65490 <= codePoint && codePoint <= 65495 || 65498 <= codePoint && codePoint <= 65500 || 65512 <= codePoint && codePoint <= 65518) {
          return "H";
        }
        if (4352 <= codePoint && codePoint <= 4447 || 4515 <= codePoint && codePoint <= 4519 || 4602 <= codePoint && codePoint <= 4607 || 9001 <= codePoint && codePoint <= 9002 || 11904 <= codePoint && codePoint <= 11929 || 11931 <= codePoint && codePoint <= 12019 || 12032 <= codePoint && codePoint <= 12245 || 12272 <= codePoint && codePoint <= 12283 || 12289 <= codePoint && codePoint <= 12350 || 12353 <= codePoint && codePoint <= 12438 || 12441 <= codePoint && codePoint <= 12543 || 12549 <= codePoint && codePoint <= 12589 || 12593 <= codePoint && codePoint <= 12686 || 12688 <= codePoint && codePoint <= 12730 || 12736 <= codePoint && codePoint <= 12771 || 12784 <= codePoint && codePoint <= 12830 || 12832 <= codePoint && codePoint <= 12871 || 12880 <= codePoint && codePoint <= 13054 || 13056 <= codePoint && codePoint <= 19903 || 19968 <= codePoint && codePoint <= 42124 || 42128 <= codePoint && codePoint <= 42182 || 43360 <= codePoint && codePoint <= 43388 || 44032 <= codePoint && codePoint <= 55203 || 55216 <= codePoint && codePoint <= 55238 || 55243 <= codePoint && codePoint <= 55291 || 63744 <= codePoint && codePoint <= 64255 || 65040 <= codePoint && codePoint <= 65049 || 65072 <= codePoint && codePoint <= 65106 || 65108 <= codePoint && codePoint <= 65126 || 65128 <= codePoint && codePoint <= 65131 || 110592 <= codePoint && codePoint <= 110593 || 127488 <= codePoint && codePoint <= 127490 || 127504 <= codePoint && codePoint <= 127546 || 127552 <= codePoint && codePoint <= 127560 || 127568 <= codePoint && codePoint <= 127569 || 131072 <= codePoint && codePoint <= 194367 || 177984 <= codePoint && codePoint <= 196605 || 196608 <= codePoint && codePoint <= 262141) {
          return "W";
        }
        if (32 <= codePoint && codePoint <= 126 || 162 <= codePoint && codePoint <= 163 || 165 <= codePoint && codePoint <= 166 || codePoint == 172 || codePoint == 175 || 10214 <= codePoint && codePoint <= 10221 || 10629 <= codePoint && codePoint <= 10630) {
          return "Na";
        }
        if (codePoint == 161 || codePoint == 164 || 167 <= codePoint && codePoint <= 168 || codePoint == 170 || 173 <= codePoint && codePoint <= 174 || 176 <= codePoint && codePoint <= 180 || 182 <= codePoint && codePoint <= 186 || 188 <= codePoint && codePoint <= 191 || codePoint == 198 || codePoint == 208 || 215 <= codePoint && codePoint <= 216 || 222 <= codePoint && codePoint <= 225 || codePoint == 230 || 232 <= codePoint && codePoint <= 234 || 236 <= codePoint && codePoint <= 237 || codePoint == 240 || 242 <= codePoint && codePoint <= 243 || 247 <= codePoint && codePoint <= 250 || codePoint == 252 || codePoint == 254 || codePoint == 257 || codePoint == 273 || codePoint == 275 || codePoint == 283 || 294 <= codePoint && codePoint <= 295 || codePoint == 299 || 305 <= codePoint && codePoint <= 307 || codePoint == 312 || 319 <= codePoint && codePoint <= 322 || codePoint == 324 || 328 <= codePoint && codePoint <= 331 || codePoint == 333 || 338 <= codePoint && codePoint <= 339 || 358 <= codePoint && codePoint <= 359 || codePoint == 363 || codePoint == 462 || codePoint == 464 || codePoint == 466 || codePoint == 468 || codePoint == 470 || codePoint == 472 || codePoint == 474 || codePoint == 476 || codePoint == 593 || codePoint == 609 || codePoint == 708 || codePoint == 711 || 713 <= codePoint && codePoint <= 715 || codePoint == 717 || codePoint == 720 || 728 <= codePoint && codePoint <= 731 || codePoint == 733 || codePoint == 735 || 768 <= codePoint && codePoint <= 879 || 913 <= codePoint && codePoint <= 929 || 931 <= codePoint && codePoint <= 937 || 945 <= codePoint && codePoint <= 961 || 963 <= codePoint && codePoint <= 969 || codePoint == 1025 || 1040 <= codePoint && codePoint <= 1103 || codePoint == 1105 || codePoint == 8208 || 8211 <= codePoint && codePoint <= 8214 || 8216 <= codePoint && codePoint <= 8217 || 8220 <= codePoint && codePoint <= 8221 || 8224 <= codePoint && codePoint <= 8226 || 8228 <= codePoint && codePoint <= 8231 || codePoint == 8240 || 8242 <= codePoint && codePoint <= 8243 || codePoint == 8245 || codePoint == 8251 || codePoint == 8254 || codePoint == 8308 || codePoint == 8319 || 8321 <= codePoint && codePoint <= 8324 || codePoint == 8364 || codePoint == 8451 || codePoint == 8453 || codePoint == 8457 || codePoint == 8467 || codePoint == 8470 || 8481 <= codePoint && codePoint <= 8482 || codePoint == 8486 || codePoint == 8491 || 8531 <= codePoint && codePoint <= 8532 || 8539 <= codePoint && codePoint <= 8542 || 8544 <= codePoint && codePoint <= 8555 || 8560 <= codePoint && codePoint <= 8569 || codePoint == 8585 || 8592 <= codePoint && codePoint <= 8601 || 8632 <= codePoint && codePoint <= 8633 || codePoint == 8658 || codePoint == 8660 || codePoint == 8679 || codePoint == 8704 || 8706 <= codePoint && codePoint <= 8707 || 8711 <= codePoint && codePoint <= 8712 || codePoint == 8715 || codePoint == 8719 || codePoint == 8721 || codePoint == 8725 || codePoint == 8730 || 8733 <= codePoint && codePoint <= 8736 || codePoint == 8739 || codePoint == 8741 || 8743 <= codePoint && codePoint <= 8748 || codePoint == 8750 || 8756 <= codePoint && codePoint <= 8759 || 8764 <= codePoint && codePoint <= 8765 || codePoint == 8776 || codePoint == 8780 || codePoint == 8786 || 8800 <= codePoint && codePoint <= 8801 || 8804 <= codePoint && codePoint <= 8807 || 8810 <= codePoint && codePoint <= 8811 || 8814 <= codePoint && codePoint <= 8815 || 8834 <= codePoint && codePoint <= 8835 || 8838 <= codePoint && codePoint <= 8839 || codePoint == 8853 || codePoint == 8857 || codePoint == 8869 || codePoint == 8895 || codePoint == 8978 || 9312 <= codePoint && codePoint <= 9449 || 9451 <= codePoint && codePoint <= 9547 || 9552 <= codePoint && codePoint <= 9587 || 9600 <= codePoint && codePoint <= 9615 || 9618 <= codePoint && codePoint <= 9621 || 9632 <= codePoint && codePoint <= 9633 || 9635 <= codePoint && codePoint <= 9641 || 9650 <= codePoint && codePoint <= 9651 || 9654 <= codePoint && codePoint <= 9655 || 9660 <= codePoint && codePoint <= 9661 || 9664 <= codePoint && codePoint <= 9665 || 9670 <= codePoint && codePoint <= 9672 || codePoint == 9675 || 9678 <= codePoint && codePoint <= 9681 || 9698 <= codePoint && codePoint <= 9701 || codePoint == 9711 || 9733 <= codePoint && codePoint <= 9734 || codePoint == 9737 || 9742 <= codePoint && codePoint <= 9743 || 9748 <= codePoint && codePoint <= 9749 || codePoint == 9756 || codePoint == 9758 || codePoint == 9792 || codePoint == 9794 || 9824 <= codePoint && codePoint <= 9825 || 9827 <= codePoint && codePoint <= 9829 || 9831 <= codePoint && codePoint <= 9834 || 9836 <= codePoint && codePoint <= 9837 || codePoint == 9839 || 9886 <= codePoint && codePoint <= 9887 || 9918 <= codePoint && codePoint <= 9919 || 9924 <= codePoint && codePoint <= 9933 || 9935 <= codePoint && codePoint <= 9953 || codePoint == 9955 || 9960 <= codePoint && codePoint <= 9983 || codePoint == 10045 || codePoint == 10071 || 10102 <= codePoint && codePoint <= 10111 || 11093 <= codePoint && codePoint <= 11097 || 12872 <= codePoint && codePoint <= 12879 || 57344 <= codePoint && codePoint <= 63743 || 65024 <= codePoint && codePoint <= 65039 || codePoint == 65533 || 127232 <= codePoint && codePoint <= 127242 || 127248 <= codePoint && codePoint <= 127277 || 127280 <= codePoint && codePoint <= 127337 || 127344 <= codePoint && codePoint <= 127386 || 917760 <= codePoint && codePoint <= 917999 || 983040 <= codePoint && codePoint <= 1048573 || 1048576 <= codePoint && codePoint <= 1114109) {
          return "A";
        }
        return "N";
      };
      eaw.characterLength = function(character) {
        var code = this.eastAsianWidth(character);
        if (code == "F" || code == "W" || code == "A") {
          return 2;
        } else {
          return 1;
        }
      };
      function stringToArray(string) {
        return string.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || [];
      }
      eaw.length = function(string) {
        var characters = stringToArray(string);
        var len = 0;
        for (var i = 0; i < characters.length; i++) {
          len = len + this.characterLength(characters[i]);
        }
        return len;
      };
      eaw.slice = function(text, start2, end) {
        textLen = eaw.length(text);
        start2 = start2 ? start2 : 0;
        end = end ? end : 1;
        if (start2 < 0) {
          start2 = textLen + start2;
        }
        if (end < 0) {
          end = textLen + end;
        }
        var result = "";
        var eawLen = 0;
        var chars = stringToArray(text);
        for (var i = 0; i < chars.length; i++) {
          var char = chars[i];
          var charLen = eaw.length(char);
          if (eawLen >= start2 - (charLen == 2 ? 1 : 0)) {
            if (eawLen + charLen <= end) {
              result += char;
            } else {
              break;
            }
          }
          eawLen += charLen;
        }
        return result;
      };
    }
  });

  // node_modules/emoji-regex/index.js
  var require_emoji_regex = __commonJS({
    "node_modules/emoji-regex/index.js"(exports, module) {
      "use strict";
      module.exports = function() {
        return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
      };
    }
  });

  // node_modules/shorthash/shorthash.js
  var require_shorthash = __commonJS({
    "node_modules/shorthash/shorthash.js"(exports) {
      exports.bitwise = bitwise;
      exports.binaryTransfer = binaryTransfer;
      exports.unique = unique;
      exports.random = random;
      function bitwise(str) {
        var hash = 0;
        if (str.length == 0)
          return hash;
        for (var i = 0; i < str.length; i++) {
          var ch = str.charCodeAt(i);
          hash = (hash << 5) - hash + ch;
          hash = hash & hash;
        }
        return hash;
      }
      function binaryTransfer(integer, binary) {
        binary = binary || 62;
        var stack = [];
        var num;
        var result = "";
        var sign = integer < 0 ? "-" : "";
        function table(num2) {
          var t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
          return t[num2];
        }
        integer = Math.abs(integer);
        while (integer >= binary) {
          num = integer % binary;
          integer = Math.floor(integer / binary);
          stack.push(table(num));
        }
        if (integer > 0) {
          stack.push(table(integer));
        }
        for (var i = stack.length - 1; i >= 0; i--) {
          result += stack[i];
        }
        return sign + result;
      }
      function unique(text) {
        var id = binaryTransfer(bitwise(text), 61);
        return id.replace("-", "Z");
      }
      function random(_len) {
        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        var rs = "";
        var len = _len || 8;
        for (var i = 0; i < len; i++) {
          var pos = Math.floor(Math.random() * chars.length);
          rs += chars.substring(pos, pos + 1);
        }
        return rs;
      }
    }
  });

  // node_modules/shorthash/index.js
  var require_shorthash2 = __commonJS({
    "node_modules/shorthash/index.js"(exports, module) {
      module.exports = require_shorthash();
    }
  });

  // node_modules/base64-js/index.js
  var require_base64_js = __commonJS({
    "node_modules/base64-js/index.js"(exports) {
      "use strict";
      exports.byteLength = byteLength;
      exports.toByteArray = toByteArray;
      exports.fromByteArray = fromByteArray;
      var lookup = [];
      var revLookup = [];
      var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
      var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      for (i = 0, len = code.length; i < len; ++i) {
        lookup[i] = code[i];
        revLookup[code.charCodeAt(i)] = i;
      }
      var i;
      var len;
      revLookup["-".charCodeAt(0)] = 62;
      revLookup["_".charCodeAt(0)] = 63;
      function getLens(b64) {
        var len2 = b64.length;
        if (len2 % 4 > 0) {
          throw new Error("Invalid string. Length must be a multiple of 4");
        }
        var validLen = b64.indexOf("=");
        if (validLen === -1)
          validLen = len2;
        var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
        return [validLen, placeHoldersLen];
      }
      function byteLength(b64) {
        var lens = getLens(b64);
        var validLen = lens[0];
        var placeHoldersLen = lens[1];
        return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
      }
      function _byteLength(b64, validLen, placeHoldersLen) {
        return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
      }
      function toByteArray(b64) {
        var tmp;
        var lens = getLens(b64);
        var validLen = lens[0];
        var placeHoldersLen = lens[1];
        var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
        var curByte = 0;
        var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
        var i2;
        for (i2 = 0; i2 < len2; i2 += 4) {
          tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
          arr[curByte++] = tmp >> 16 & 255;
          arr[curByte++] = tmp >> 8 & 255;
          arr[curByte++] = tmp & 255;
        }
        if (placeHoldersLen === 2) {
          tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
          arr[curByte++] = tmp & 255;
        }
        if (placeHoldersLen === 1) {
          tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
          arr[curByte++] = tmp >> 8 & 255;
          arr[curByte++] = tmp & 255;
        }
        return arr;
      }
      function tripletToBase64(num) {
        return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
      }
      function encodeChunk(uint8, start2, end) {
        var tmp;
        var output = [];
        for (var i2 = start2; i2 < end; i2 += 3) {
          tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
          output.push(tripletToBase64(tmp));
        }
        return output.join("");
      }
      function fromByteArray(uint8) {
        var tmp;
        var len2 = uint8.length;
        var extraBytes = len2 % 3;
        var parts = [];
        var maxChunkLength = 16383;
        for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
          parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
        }
        if (extraBytes === 1) {
          tmp = uint8[len2 - 1];
          parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
        } else if (extraBytes === 2) {
          tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
          parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=");
        }
        return parts.join("");
      }
    }
  });

  // node_modules/ieee754/index.js
  var require_ieee754 = __commonJS({
    "node_modules/ieee754/index.js"(exports) {
      exports.read = function(buffer, offset, isLE, mLen, nBytes) {
        var e, m;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var nBits = -7;
        var i = isLE ? nBytes - 1 : 0;
        var d = isLE ? -1 : 1;
        var s = buffer[offset + i];
        i += d;
        e = s & (1 << -nBits) - 1;
        s >>= -nBits;
        nBits += eLen;
        for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
        }
        m = e & (1 << -nBits) - 1;
        e >>= -nBits;
        nBits += mLen;
        for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
        }
        if (e === 0) {
          e = 1 - eBias;
        } else if (e === eMax) {
          return m ? NaN : (s ? -1 : 1) * Infinity;
        } else {
          m = m + Math.pow(2, mLen);
          e = e - eBias;
        }
        return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
      };
      exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
        var e, m, c;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
        var i = isLE ? 0 : nBytes - 1;
        var d = isLE ? 1 : -1;
        var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
        value = Math.abs(value);
        if (isNaN(value) || value === Infinity) {
          m = isNaN(value) ? 1 : 0;
          e = eMax;
        } else {
          e = Math.floor(Math.log(value) / Math.LN2);
          if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
          }
          if (e + eBias >= 1) {
            value += rt / c;
          } else {
            value += rt * Math.pow(2, 1 - eBias);
          }
          if (value * c >= 2) {
            e++;
            c /= 2;
          }
          if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
          } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
          } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
          }
        }
        for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
        }
        e = e << mLen | m;
        eLen += mLen;
        for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
        }
        buffer[offset + i - d] |= s * 128;
      };
    }
  });

  // node_modules/buffer/index.js
  var require_buffer = __commonJS({
    "node_modules/buffer/index.js"(exports) {
      "use strict";
      var base64 = require_base64_js();
      var ieee754 = require_ieee754();
      var customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
      exports.Buffer = Buffer2;
      exports.SlowBuffer = SlowBuffer;
      exports.INSPECT_MAX_BYTES = 50;
      var K_MAX_LENGTH = 2147483647;
      exports.kMaxLength = K_MAX_LENGTH;
      Buffer2.TYPED_ARRAY_SUPPORT = typedArraySupport();
      if (!Buffer2.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
        console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
      }
      function typedArraySupport() {
        try {
          const arr = new Uint8Array(1);
          const proto = { foo: function() {
            return 42;
          } };
          Object.setPrototypeOf(proto, Uint8Array.prototype);
          Object.setPrototypeOf(arr, proto);
          return arr.foo() === 42;
        } catch (e) {
          return false;
        }
      }
      Object.defineProperty(Buffer2.prototype, "parent", {
        enumerable: true,
        get: function() {
          if (!Buffer2.isBuffer(this))
            return void 0;
          return this.buffer;
        }
      });
      Object.defineProperty(Buffer2.prototype, "offset", {
        enumerable: true,
        get: function() {
          if (!Buffer2.isBuffer(this))
            return void 0;
          return this.byteOffset;
        }
      });
      function createBuffer(length) {
        if (length > K_MAX_LENGTH) {
          throw new RangeError('The value "' + length + '" is invalid for option "size"');
        }
        const buf = new Uint8Array(length);
        Object.setPrototypeOf(buf, Buffer2.prototype);
        return buf;
      }
      function Buffer2(arg, encodingOrOffset, length) {
        if (typeof arg === "number") {
          if (typeof encodingOrOffset === "string") {
            throw new TypeError('The "string" argument must be of type string. Received type number');
          }
          return allocUnsafe(arg);
        }
        return from(arg, encodingOrOffset, length);
      }
      Buffer2.poolSize = 8192;
      function from(value, encodingOrOffset, length) {
        if (typeof value === "string") {
          return fromString(value, encodingOrOffset);
        }
        if (ArrayBuffer.isView(value)) {
          return fromArrayView(value);
        }
        if (value == null) {
          throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
        }
        if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
          return fromArrayBuffer(value, encodingOrOffset, length);
        }
        if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
          return fromArrayBuffer(value, encodingOrOffset, length);
        }
        if (typeof value === "number") {
          throw new TypeError('The "value" argument must not be of type number. Received type number');
        }
        const valueOf = value.valueOf && value.valueOf();
        if (valueOf != null && valueOf !== value) {
          return Buffer2.from(valueOf, encodingOrOffset, length);
        }
        const b = fromObject(value);
        if (b)
          return b;
        if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
          return Buffer2.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
        }
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
      }
      Buffer2.from = function(value, encodingOrOffset, length) {
        return from(value, encodingOrOffset, length);
      };
      Object.setPrototypeOf(Buffer2.prototype, Uint8Array.prototype);
      Object.setPrototypeOf(Buffer2, Uint8Array);
      function assertSize(size) {
        if (typeof size !== "number") {
          throw new TypeError('"size" argument must be of type number');
        } else if (size < 0) {
          throw new RangeError('The value "' + size + '" is invalid for option "size"');
        }
      }
      function alloc(size, fill, encoding) {
        assertSize(size);
        if (size <= 0) {
          return createBuffer(size);
        }
        if (fill !== void 0) {
          return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
        }
        return createBuffer(size);
      }
      Buffer2.alloc = function(size, fill, encoding) {
        return alloc(size, fill, encoding);
      };
      function allocUnsafe(size) {
        assertSize(size);
        return createBuffer(size < 0 ? 0 : checked(size) | 0);
      }
      Buffer2.allocUnsafe = function(size) {
        return allocUnsafe(size);
      };
      Buffer2.allocUnsafeSlow = function(size) {
        return allocUnsafe(size);
      };
      function fromString(string, encoding) {
        if (typeof encoding !== "string" || encoding === "") {
          encoding = "utf8";
        }
        if (!Buffer2.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
        const length = byteLength(string, encoding) | 0;
        let buf = createBuffer(length);
        const actual = buf.write(string, encoding);
        if (actual !== length) {
          buf = buf.slice(0, actual);
        }
        return buf;
      }
      function fromArrayLike(array) {
        const length = array.length < 0 ? 0 : checked(array.length) | 0;
        const buf = createBuffer(length);
        for (let i = 0; i < length; i += 1) {
          buf[i] = array[i] & 255;
        }
        return buf;
      }
      function fromArrayView(arrayView) {
        if (isInstance(arrayView, Uint8Array)) {
          const copy = new Uint8Array(arrayView);
          return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
        }
        return fromArrayLike(arrayView);
      }
      function fromArrayBuffer(array, byteOffset, length) {
        if (byteOffset < 0 || array.byteLength < byteOffset) {
          throw new RangeError('"offset" is outside of buffer bounds');
        }
        if (array.byteLength < byteOffset + (length || 0)) {
          throw new RangeError('"length" is outside of buffer bounds');
        }
        let buf;
        if (byteOffset === void 0 && length === void 0) {
          buf = new Uint8Array(array);
        } else if (length === void 0) {
          buf = new Uint8Array(array, byteOffset);
        } else {
          buf = new Uint8Array(array, byteOffset, length);
        }
        Object.setPrototypeOf(buf, Buffer2.prototype);
        return buf;
      }
      function fromObject(obj) {
        if (Buffer2.isBuffer(obj)) {
          const len = checked(obj.length) | 0;
          const buf = createBuffer(len);
          if (buf.length === 0) {
            return buf;
          }
          obj.copy(buf, 0, 0, len);
          return buf;
        }
        if (obj.length !== void 0) {
          if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
            return createBuffer(0);
          }
          return fromArrayLike(obj);
        }
        if (obj.type === "Buffer" && Array.isArray(obj.data)) {
          return fromArrayLike(obj.data);
        }
      }
      function checked(length) {
        if (length >= K_MAX_LENGTH) {
          throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
        }
        return length | 0;
      }
      function SlowBuffer(length) {
        if (+length != length) {
          length = 0;
        }
        return Buffer2.alloc(+length);
      }
      Buffer2.isBuffer = function isBuffer3(b) {
        return b != null && b._isBuffer === true && b !== Buffer2.prototype;
      };
      Buffer2.compare = function compare(a, b) {
        if (isInstance(a, Uint8Array))
          a = Buffer2.from(a, a.offset, a.byteLength);
        if (isInstance(b, Uint8Array))
          b = Buffer2.from(b, b.offset, b.byteLength);
        if (!Buffer2.isBuffer(a) || !Buffer2.isBuffer(b)) {
          throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        }
        if (a === b)
          return 0;
        let x = a.length;
        let y = b.length;
        for (let i = 0, len = Math.min(x, y); i < len; ++i) {
          if (a[i] !== b[i]) {
            x = a[i];
            y = b[i];
            break;
          }
        }
        if (x < y)
          return -1;
        if (y < x)
          return 1;
        return 0;
      };
      Buffer2.isEncoding = function isEncoding(encoding) {
        switch (String(encoding).toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "latin1":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return true;
          default:
            return false;
        }
      };
      Buffer2.concat = function concat(list, length) {
        if (!Array.isArray(list)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        }
        if (list.length === 0) {
          return Buffer2.alloc(0);
        }
        let i;
        if (length === void 0) {
          length = 0;
          for (i = 0; i < list.length; ++i) {
            length += list[i].length;
          }
        }
        const buffer = Buffer2.allocUnsafe(length);
        let pos = 0;
        for (i = 0; i < list.length; ++i) {
          let buf = list[i];
          if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
              if (!Buffer2.isBuffer(buf))
                buf = Buffer2.from(buf);
              buf.copy(buffer, pos);
            } else {
              Uint8Array.prototype.set.call(buffer, buf, pos);
            }
          } else if (!Buffer2.isBuffer(buf)) {
            throw new TypeError('"list" argument must be an Array of Buffers');
          } else {
            buf.copy(buffer, pos);
          }
          pos += buf.length;
        }
        return buffer;
      };
      function byteLength(string, encoding) {
        if (Buffer2.isBuffer(string)) {
          return string.length;
        }
        if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
          return string.byteLength;
        }
        if (typeof string !== "string") {
          throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
        }
        const len = string.length;
        const mustMatch = arguments.length > 2 && arguments[2] === true;
        if (!mustMatch && len === 0)
          return 0;
        let loweredCase = false;
        for (; ; ) {
          switch (encoding) {
            case "ascii":
            case "latin1":
            case "binary":
              return len;
            case "utf8":
            case "utf-8":
              return utf8ToBytes(string).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return len * 2;
            case "hex":
              return len >>> 1;
            case "base64":
              return base64ToBytes(string).length;
            default:
              if (loweredCase) {
                return mustMatch ? -1 : utf8ToBytes(string).length;
              }
              encoding = ("" + encoding).toLowerCase();
              loweredCase = true;
          }
        }
      }
      Buffer2.byteLength = byteLength;
      function slowToString(encoding, start2, end) {
        let loweredCase = false;
        if (start2 === void 0 || start2 < 0) {
          start2 = 0;
        }
        if (start2 > this.length) {
          return "";
        }
        if (end === void 0 || end > this.length) {
          end = this.length;
        }
        if (end <= 0) {
          return "";
        }
        end >>>= 0;
        start2 >>>= 0;
        if (end <= start2) {
          return "";
        }
        if (!encoding)
          encoding = "utf8";
        while (true) {
          switch (encoding) {
            case "hex":
              return hexSlice(this, start2, end);
            case "utf8":
            case "utf-8":
              return utf8Slice(this, start2, end);
            case "ascii":
              return asciiSlice(this, start2, end);
            case "latin1":
            case "binary":
              return latin1Slice(this, start2, end);
            case "base64":
              return base64Slice(this, start2, end);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return utf16leSlice(this, start2, end);
            default:
              if (loweredCase)
                throw new TypeError("Unknown encoding: " + encoding);
              encoding = (encoding + "").toLowerCase();
              loweredCase = true;
          }
        }
      }
      Buffer2.prototype._isBuffer = true;
      function swap(b, n, m) {
        const i = b[n];
        b[n] = b[m];
        b[m] = i;
      }
      Buffer2.prototype.swap16 = function swap16() {
        const len = this.length;
        if (len % 2 !== 0) {
          throw new RangeError("Buffer size must be a multiple of 16-bits");
        }
        for (let i = 0; i < len; i += 2) {
          swap(this, i, i + 1);
        }
        return this;
      };
      Buffer2.prototype.swap32 = function swap32() {
        const len = this.length;
        if (len % 4 !== 0) {
          throw new RangeError("Buffer size must be a multiple of 32-bits");
        }
        for (let i = 0; i < len; i += 4) {
          swap(this, i, i + 3);
          swap(this, i + 1, i + 2);
        }
        return this;
      };
      Buffer2.prototype.swap64 = function swap64() {
        const len = this.length;
        if (len % 8 !== 0) {
          throw new RangeError("Buffer size must be a multiple of 64-bits");
        }
        for (let i = 0; i < len; i += 8) {
          swap(this, i, i + 7);
          swap(this, i + 1, i + 6);
          swap(this, i + 2, i + 5);
          swap(this, i + 3, i + 4);
        }
        return this;
      };
      Buffer2.prototype.toString = function toString2() {
        const length = this.length;
        if (length === 0)
          return "";
        if (arguments.length === 0)
          return utf8Slice(this, 0, length);
        return slowToString.apply(this, arguments);
      };
      Buffer2.prototype.toLocaleString = Buffer2.prototype.toString;
      Buffer2.prototype.equals = function equals(b) {
        if (!Buffer2.isBuffer(b))
          throw new TypeError("Argument must be a Buffer");
        if (this === b)
          return true;
        return Buffer2.compare(this, b) === 0;
      };
      Buffer2.prototype.inspect = function inspect() {
        let str = "";
        const max = exports.INSPECT_MAX_BYTES;
        str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
        if (this.length > max)
          str += " ... ";
        return "<Buffer " + str + ">";
      };
      if (customInspectSymbol) {
        Buffer2.prototype[customInspectSymbol] = Buffer2.prototype.inspect;
      }
      Buffer2.prototype.compare = function compare(target, start2, end, thisStart, thisEnd) {
        if (isInstance(target, Uint8Array)) {
          target = Buffer2.from(target, target.offset, target.byteLength);
        }
        if (!Buffer2.isBuffer(target)) {
          throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
        }
        if (start2 === void 0) {
          start2 = 0;
        }
        if (end === void 0) {
          end = target ? target.length : 0;
        }
        if (thisStart === void 0) {
          thisStart = 0;
        }
        if (thisEnd === void 0) {
          thisEnd = this.length;
        }
        if (start2 < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
          throw new RangeError("out of range index");
        }
        if (thisStart >= thisEnd && start2 >= end) {
          return 0;
        }
        if (thisStart >= thisEnd) {
          return -1;
        }
        if (start2 >= end) {
          return 1;
        }
        start2 >>>= 0;
        end >>>= 0;
        thisStart >>>= 0;
        thisEnd >>>= 0;
        if (this === target)
          return 0;
        let x = thisEnd - thisStart;
        let y = end - start2;
        const len = Math.min(x, y);
        const thisCopy = this.slice(thisStart, thisEnd);
        const targetCopy = target.slice(start2, end);
        for (let i = 0; i < len; ++i) {
          if (thisCopy[i] !== targetCopy[i]) {
            x = thisCopy[i];
            y = targetCopy[i];
            break;
          }
        }
        if (x < y)
          return -1;
        if (y < x)
          return 1;
        return 0;
      };
      function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
        if (buffer.length === 0)
          return -1;
        if (typeof byteOffset === "string") {
          encoding = byteOffset;
          byteOffset = 0;
        } else if (byteOffset > 2147483647) {
          byteOffset = 2147483647;
        } else if (byteOffset < -2147483648) {
          byteOffset = -2147483648;
        }
        byteOffset = +byteOffset;
        if (numberIsNaN(byteOffset)) {
          byteOffset = dir ? 0 : buffer.length - 1;
        }
        if (byteOffset < 0)
          byteOffset = buffer.length + byteOffset;
        if (byteOffset >= buffer.length) {
          if (dir)
            return -1;
          else
            byteOffset = buffer.length - 1;
        } else if (byteOffset < 0) {
          if (dir)
            byteOffset = 0;
          else
            return -1;
        }
        if (typeof val === "string") {
          val = Buffer2.from(val, encoding);
        }
        if (Buffer2.isBuffer(val)) {
          if (val.length === 0) {
            return -1;
          }
          return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
        } else if (typeof val === "number") {
          val = val & 255;
          if (typeof Uint8Array.prototype.indexOf === "function") {
            if (dir) {
              return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            } else {
              return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
            }
          }
          return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
        }
        throw new TypeError("val must be string, number or Buffer");
      }
      function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
        let indexSize = 1;
        let arrLength = arr.length;
        let valLength = val.length;
        if (encoding !== void 0) {
          encoding = String(encoding).toLowerCase();
          if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
            if (arr.length < 2 || val.length < 2) {
              return -1;
            }
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
          }
        }
        function read(buf, i2) {
          if (indexSize === 1) {
            return buf[i2];
          } else {
            return buf.readUInt16BE(i2 * indexSize);
          }
        }
        let i;
        if (dir) {
          let foundIndex = -1;
          for (i = byteOffset; i < arrLength; i++) {
            if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
              if (foundIndex === -1)
                foundIndex = i;
              if (i - foundIndex + 1 === valLength)
                return foundIndex * indexSize;
            } else {
              if (foundIndex !== -1)
                i -= i - foundIndex;
              foundIndex = -1;
            }
          }
        } else {
          if (byteOffset + valLength > arrLength)
            byteOffset = arrLength - valLength;
          for (i = byteOffset; i >= 0; i--) {
            let found = true;
            for (let j = 0; j < valLength; j++) {
              if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
              }
            }
            if (found)
              return i;
          }
        }
        return -1;
      }
      Buffer2.prototype.includes = function includes(val, byteOffset, encoding) {
        return this.indexOf(val, byteOffset, encoding) !== -1;
      };
      Buffer2.prototype.indexOf = function indexOf2(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
      };
      Buffer2.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
      };
      function hexWrite(buf, string, offset, length) {
        offset = Number(offset) || 0;
        const remaining = buf.length - offset;
        if (!length) {
          length = remaining;
        } else {
          length = Number(length);
          if (length > remaining) {
            length = remaining;
          }
        }
        const strLen = string.length;
        if (length > strLen / 2) {
          length = strLen / 2;
        }
        let i;
        for (i = 0; i < length; ++i) {
          const parsed = parseInt(string.substr(i * 2, 2), 16);
          if (numberIsNaN(parsed))
            return i;
          buf[offset + i] = parsed;
        }
        return i;
      }
      function utf8Write(buf, string, offset, length) {
        return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
      }
      function asciiWrite(buf, string, offset, length) {
        return blitBuffer(asciiToBytes(string), buf, offset, length);
      }
      function base64Write(buf, string, offset, length) {
        return blitBuffer(base64ToBytes(string), buf, offset, length);
      }
      function ucs2Write(buf, string, offset, length) {
        return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
      }
      Buffer2.prototype.write = function write(string, offset, length, encoding) {
        if (offset === void 0) {
          encoding = "utf8";
          length = this.length;
          offset = 0;
        } else if (length === void 0 && typeof offset === "string") {
          encoding = offset;
          length = this.length;
          offset = 0;
        } else if (isFinite(offset)) {
          offset = offset >>> 0;
          if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === void 0)
              encoding = "utf8";
          } else {
            encoding = length;
            length = void 0;
          }
        } else {
          throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        }
        const remaining = this.length - offset;
        if (length === void 0 || length > remaining)
          length = remaining;
        if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
          throw new RangeError("Attempt to write outside buffer bounds");
        }
        if (!encoding)
          encoding = "utf8";
        let loweredCase = false;
        for (; ; ) {
          switch (encoding) {
            case "hex":
              return hexWrite(this, string, offset, length);
            case "utf8":
            case "utf-8":
              return utf8Write(this, string, offset, length);
            case "ascii":
            case "latin1":
            case "binary":
              return asciiWrite(this, string, offset, length);
            case "base64":
              return base64Write(this, string, offset, length);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return ucs2Write(this, string, offset, length);
            default:
              if (loweredCase)
                throw new TypeError("Unknown encoding: " + encoding);
              encoding = ("" + encoding).toLowerCase();
              loweredCase = true;
          }
        }
      };
      Buffer2.prototype.toJSON = function toJSON() {
        return {
          type: "Buffer",
          data: Array.prototype.slice.call(this._arr || this, 0)
        };
      };
      function base64Slice(buf, start2, end) {
        if (start2 === 0 && end === buf.length) {
          return base64.fromByteArray(buf);
        } else {
          return base64.fromByteArray(buf.slice(start2, end));
        }
      }
      function utf8Slice(buf, start2, end) {
        end = Math.min(buf.length, end);
        const res = [];
        let i = start2;
        while (i < end) {
          const firstByte = buf[i];
          let codePoint = null;
          let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
          if (i + bytesPerSequence <= end) {
            let secondByte, thirdByte, fourthByte, tempCodePoint;
            switch (bytesPerSequence) {
              case 1:
                if (firstByte < 128) {
                  codePoint = firstByte;
                }
                break;
              case 2:
                secondByte = buf[i + 1];
                if ((secondByte & 192) === 128) {
                  tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                  if (tempCodePoint > 127) {
                    codePoint = tempCodePoint;
                  }
                }
                break;
              case 3:
                secondByte = buf[i + 1];
                thirdByte = buf[i + 2];
                if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                  tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                  if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                    codePoint = tempCodePoint;
                  }
                }
                break;
              case 4:
                secondByte = buf[i + 1];
                thirdByte = buf[i + 2];
                fourthByte = buf[i + 3];
                if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                  tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                  if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                    codePoint = tempCodePoint;
                  }
                }
            }
          }
          if (codePoint === null) {
            codePoint = 65533;
            bytesPerSequence = 1;
          } else if (codePoint > 65535) {
            codePoint -= 65536;
            res.push(codePoint >>> 10 & 1023 | 55296);
            codePoint = 56320 | codePoint & 1023;
          }
          res.push(codePoint);
          i += bytesPerSequence;
        }
        return decodeCodePointsArray(res);
      }
      var MAX_ARGUMENTS_LENGTH = 4096;
      function decodeCodePointsArray(codePoints) {
        const len = codePoints.length;
        if (len <= MAX_ARGUMENTS_LENGTH) {
          return String.fromCharCode.apply(String, codePoints);
        }
        let res = "";
        let i = 0;
        while (i < len) {
          res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
        }
        return res;
      }
      function asciiSlice(buf, start2, end) {
        let ret = "";
        end = Math.min(buf.length, end);
        for (let i = start2; i < end; ++i) {
          ret += String.fromCharCode(buf[i] & 127);
        }
        return ret;
      }
      function latin1Slice(buf, start2, end) {
        let ret = "";
        end = Math.min(buf.length, end);
        for (let i = start2; i < end; ++i) {
          ret += String.fromCharCode(buf[i]);
        }
        return ret;
      }
      function hexSlice(buf, start2, end) {
        const len = buf.length;
        if (!start2 || start2 < 0)
          start2 = 0;
        if (!end || end < 0 || end > len)
          end = len;
        let out = "";
        for (let i = start2; i < end; ++i) {
          out += hexSliceLookupTable[buf[i]];
        }
        return out;
      }
      function utf16leSlice(buf, start2, end) {
        const bytes = buf.slice(start2, end);
        let res = "";
        for (let i = 0; i < bytes.length - 1; i += 2) {
          res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
        }
        return res;
      }
      Buffer2.prototype.slice = function slice2(start2, end) {
        const len = this.length;
        start2 = ~~start2;
        end = end === void 0 ? len : ~~end;
        if (start2 < 0) {
          start2 += len;
          if (start2 < 0)
            start2 = 0;
        } else if (start2 > len) {
          start2 = len;
        }
        if (end < 0) {
          end += len;
          if (end < 0)
            end = 0;
        } else if (end > len) {
          end = len;
        }
        if (end < start2)
          end = start2;
        const newBuf = this.subarray(start2, end);
        Object.setPrototypeOf(newBuf, Buffer2.prototype);
        return newBuf;
      };
      function checkOffset(offset, ext, length) {
        if (offset % 1 !== 0 || offset < 0)
          throw new RangeError("offset is not uint");
        if (offset + ext > length)
          throw new RangeError("Trying to access beyond buffer length");
      }
      Buffer2.prototype.readUintLE = Buffer2.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert)
          checkOffset(offset, byteLength2, this.length);
        let val = this[offset];
        let mul = 1;
        let i = 0;
        while (++i < byteLength2 && (mul *= 256)) {
          val += this[offset + i] * mul;
        }
        return val;
      };
      Buffer2.prototype.readUintBE = Buffer2.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) {
          checkOffset(offset, byteLength2, this.length);
        }
        let val = this[offset + --byteLength2];
        let mul = 1;
        while (byteLength2 > 0 && (mul *= 256)) {
          val += this[offset + --byteLength2] * mul;
        }
        return val;
      };
      Buffer2.prototype.readUint8 = Buffer2.prototype.readUInt8 = function readUInt8(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 1, this.length);
        return this[offset];
      };
      Buffer2.prototype.readUint16LE = Buffer2.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 2, this.length);
        return this[offset] | this[offset + 1] << 8;
      };
      Buffer2.prototype.readUint16BE = Buffer2.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 2, this.length);
        return this[offset] << 8 | this[offset + 1];
      };
      Buffer2.prototype.readUint32LE = Buffer2.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 4, this.length);
        return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
      };
      Buffer2.prototype.readUint32BE = Buffer2.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 4, this.length);
        return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
      };
      Buffer2.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === void 0 || last === void 0) {
          boundsError(offset, this.length - 8);
        }
        const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
        const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
        return BigInt(lo) + (BigInt(hi) << BigInt(32));
      });
      Buffer2.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === void 0 || last === void 0) {
          boundsError(offset, this.length - 8);
        }
        const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
        const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
        return (BigInt(hi) << BigInt(32)) + BigInt(lo);
      });
      Buffer2.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert)
          checkOffset(offset, byteLength2, this.length);
        let val = this[offset];
        let mul = 1;
        let i = 0;
        while (++i < byteLength2 && (mul *= 256)) {
          val += this[offset + i] * mul;
        }
        mul *= 128;
        if (val >= mul)
          val -= Math.pow(2, 8 * byteLength2);
        return val;
      };
      Buffer2.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert)
          checkOffset(offset, byteLength2, this.length);
        let i = byteLength2;
        let mul = 1;
        let val = this[offset + --i];
        while (i > 0 && (mul *= 256)) {
          val += this[offset + --i] * mul;
        }
        mul *= 128;
        if (val >= mul)
          val -= Math.pow(2, 8 * byteLength2);
        return val;
      };
      Buffer2.prototype.readInt8 = function readInt8(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 1, this.length);
        if (!(this[offset] & 128))
          return this[offset];
        return (255 - this[offset] + 1) * -1;
      };
      Buffer2.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 2, this.length);
        const val = this[offset] | this[offset + 1] << 8;
        return val & 32768 ? val | 4294901760 : val;
      };
      Buffer2.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 2, this.length);
        const val = this[offset + 1] | this[offset] << 8;
        return val & 32768 ? val | 4294901760 : val;
      };
      Buffer2.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 4, this.length);
        return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
      };
      Buffer2.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 4, this.length);
        return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
      };
      Buffer2.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === void 0 || last === void 0) {
          boundsError(offset, this.length - 8);
        }
        const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
        return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
      });
      Buffer2.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
        offset = offset >>> 0;
        validateNumber(offset, "offset");
        const first = this[offset];
        const last = this[offset + 7];
        if (first === void 0 || last === void 0) {
          boundsError(offset, this.length - 8);
        }
        const val = (first << 24) + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
        return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
      });
      Buffer2.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, true, 23, 4);
      };
      Buffer2.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, false, 23, 4);
      };
      Buffer2.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, true, 52, 8);
      };
      Buffer2.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
        offset = offset >>> 0;
        if (!noAssert)
          checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, false, 52, 8);
      };
      function checkInt(buf, value, offset, ext, max, min) {
        if (!Buffer2.isBuffer(buf))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (value > max || value < min)
          throw new RangeError('"value" argument is out of bounds');
        if (offset + ext > buf.length)
          throw new RangeError("Index out of range");
      }
      Buffer2.prototype.writeUintLE = Buffer2.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) {
          const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
          checkInt(this, value, offset, byteLength2, maxBytes, 0);
        }
        let mul = 1;
        let i = 0;
        this[offset] = value & 255;
        while (++i < byteLength2 && (mul *= 256)) {
          this[offset + i] = value / mul & 255;
        }
        return offset + byteLength2;
      };
      Buffer2.prototype.writeUintBE = Buffer2.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset >>> 0;
        byteLength2 = byteLength2 >>> 0;
        if (!noAssert) {
          const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
          checkInt(this, value, offset, byteLength2, maxBytes, 0);
        }
        let i = byteLength2 - 1;
        let mul = 1;
        this[offset + i] = value & 255;
        while (--i >= 0 && (mul *= 256)) {
          this[offset + i] = value / mul & 255;
        }
        return offset + byteLength2;
      };
      Buffer2.prototype.writeUint8 = Buffer2.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 1, 255, 0);
        this[offset] = value & 255;
        return offset + 1;
      };
      Buffer2.prototype.writeUint16LE = Buffer2.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 2, 65535, 0);
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        return offset + 2;
      };
      Buffer2.prototype.writeUint16BE = Buffer2.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 2, 65535, 0);
        this[offset] = value >>> 8;
        this[offset + 1] = value & 255;
        return offset + 2;
      };
      Buffer2.prototype.writeUint32LE = Buffer2.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 4, 4294967295, 0);
        this[offset + 3] = value >>> 24;
        this[offset + 2] = value >>> 16;
        this[offset + 1] = value >>> 8;
        this[offset] = value & 255;
        return offset + 4;
      };
      Buffer2.prototype.writeUint32BE = Buffer2.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 4, 4294967295, 0);
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 255;
        return offset + 4;
      };
      function wrtBigUInt64LE(buf, value, offset, min, max) {
        checkIntBI(value, min, max, buf, offset, 7);
        let lo = Number(value & BigInt(4294967295));
        buf[offset++] = lo;
        lo = lo >> 8;
        buf[offset++] = lo;
        lo = lo >> 8;
        buf[offset++] = lo;
        lo = lo >> 8;
        buf[offset++] = lo;
        let hi = Number(value >> BigInt(32) & BigInt(4294967295));
        buf[offset++] = hi;
        hi = hi >> 8;
        buf[offset++] = hi;
        hi = hi >> 8;
        buf[offset++] = hi;
        hi = hi >> 8;
        buf[offset++] = hi;
        return offset;
      }
      function wrtBigUInt64BE(buf, value, offset, min, max) {
        checkIntBI(value, min, max, buf, offset, 7);
        let lo = Number(value & BigInt(4294967295));
        buf[offset + 7] = lo;
        lo = lo >> 8;
        buf[offset + 6] = lo;
        lo = lo >> 8;
        buf[offset + 5] = lo;
        lo = lo >> 8;
        buf[offset + 4] = lo;
        let hi = Number(value >> BigInt(32) & BigInt(4294967295));
        buf[offset + 3] = hi;
        hi = hi >> 8;
        buf[offset + 2] = hi;
        hi = hi >> 8;
        buf[offset + 1] = hi;
        hi = hi >> 8;
        buf[offset] = hi;
        return offset + 8;
      }
      Buffer2.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
        return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
      });
      Buffer2.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
        return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
      });
      Buffer2.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          const limit = Math.pow(2, 8 * byteLength2 - 1);
          checkInt(this, value, offset, byteLength2, limit - 1, -limit);
        }
        let i = 0;
        let mul = 1;
        let sub = 0;
        this[offset] = value & 255;
        while (++i < byteLength2 && (mul *= 256)) {
          if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
            sub = 1;
          }
          this[offset + i] = (value / mul >> 0) - sub & 255;
        }
        return offset + byteLength2;
      };
      Buffer2.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          const limit = Math.pow(2, 8 * byteLength2 - 1);
          checkInt(this, value, offset, byteLength2, limit - 1, -limit);
        }
        let i = byteLength2 - 1;
        let mul = 1;
        let sub = 0;
        this[offset + i] = value & 255;
        while (--i >= 0 && (mul *= 256)) {
          if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
            sub = 1;
          }
          this[offset + i] = (value / mul >> 0) - sub & 255;
        }
        return offset + byteLength2;
      };
      Buffer2.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 1, 127, -128);
        if (value < 0)
          value = 255 + value + 1;
        this[offset] = value & 255;
        return offset + 1;
      };
      Buffer2.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 2, 32767, -32768);
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        return offset + 2;
      };
      Buffer2.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 2, 32767, -32768);
        this[offset] = value >>> 8;
        this[offset + 1] = value & 255;
        return offset + 2;
      };
      Buffer2.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 4, 2147483647, -2147483648);
        this[offset] = value & 255;
        this[offset + 1] = value >>> 8;
        this[offset + 2] = value >>> 16;
        this[offset + 3] = value >>> 24;
        return offset + 4;
      };
      Buffer2.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert)
          checkInt(this, value, offset, 4, 2147483647, -2147483648);
        if (value < 0)
          value = 4294967295 + value + 1;
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 255;
        return offset + 4;
      };
      Buffer2.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
        return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      });
      Buffer2.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
        return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      });
      function checkIEEE754(buf, value, offset, ext, max, min) {
        if (offset + ext > buf.length)
          throw new RangeError("Index out of range");
        if (offset < 0)
          throw new RangeError("Index out of range");
      }
      function writeFloat(buf, value, offset, littleEndian, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          checkIEEE754(buf, value, offset, 4, 34028234663852886e22, -34028234663852886e22);
        }
        ieee754.write(buf, value, offset, littleEndian, 23, 4);
        return offset + 4;
      }
      Buffer2.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
        return writeFloat(this, value, offset, true, noAssert);
      };
      Buffer2.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
        return writeFloat(this, value, offset, false, noAssert);
      };
      function writeDouble(buf, value, offset, littleEndian, noAssert) {
        value = +value;
        offset = offset >>> 0;
        if (!noAssert) {
          checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292);
        }
        ieee754.write(buf, value, offset, littleEndian, 52, 8);
        return offset + 8;
      }
      Buffer2.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
        return writeDouble(this, value, offset, true, noAssert);
      };
      Buffer2.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
        return writeDouble(this, value, offset, false, noAssert);
      };
      Buffer2.prototype.copy = function copy(target, targetStart, start2, end) {
        if (!Buffer2.isBuffer(target))
          throw new TypeError("argument should be a Buffer");
        if (!start2)
          start2 = 0;
        if (!end && end !== 0)
          end = this.length;
        if (targetStart >= target.length)
          targetStart = target.length;
        if (!targetStart)
          targetStart = 0;
        if (end > 0 && end < start2)
          end = start2;
        if (end === start2)
          return 0;
        if (target.length === 0 || this.length === 0)
          return 0;
        if (targetStart < 0) {
          throw new RangeError("targetStart out of bounds");
        }
        if (start2 < 0 || start2 >= this.length)
          throw new RangeError("Index out of range");
        if (end < 0)
          throw new RangeError("sourceEnd out of bounds");
        if (end > this.length)
          end = this.length;
        if (target.length - targetStart < end - start2) {
          end = target.length - targetStart + start2;
        }
        const len = end - start2;
        if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
          this.copyWithin(targetStart, start2, end);
        } else {
          Uint8Array.prototype.set.call(target, this.subarray(start2, end), targetStart);
        }
        return len;
      };
      Buffer2.prototype.fill = function fill(val, start2, end, encoding) {
        if (typeof val === "string") {
          if (typeof start2 === "string") {
            encoding = start2;
            start2 = 0;
            end = this.length;
          } else if (typeof end === "string") {
            encoding = end;
            end = this.length;
          }
          if (encoding !== void 0 && typeof encoding !== "string") {
            throw new TypeError("encoding must be a string");
          }
          if (typeof encoding === "string" && !Buffer2.isEncoding(encoding)) {
            throw new TypeError("Unknown encoding: " + encoding);
          }
          if (val.length === 1) {
            const code = val.charCodeAt(0);
            if (encoding === "utf8" && code < 128 || encoding === "latin1") {
              val = code;
            }
          }
        } else if (typeof val === "number") {
          val = val & 255;
        } else if (typeof val === "boolean") {
          val = Number(val);
        }
        if (start2 < 0 || this.length < start2 || this.length < end) {
          throw new RangeError("Out of range index");
        }
        if (end <= start2) {
          return this;
        }
        start2 = start2 >>> 0;
        end = end === void 0 ? this.length : end >>> 0;
        if (!val)
          val = 0;
        let i;
        if (typeof val === "number") {
          for (i = start2; i < end; ++i) {
            this[i] = val;
          }
        } else {
          const bytes = Buffer2.isBuffer(val) ? val : Buffer2.from(val, encoding);
          const len = bytes.length;
          if (len === 0) {
            throw new TypeError('The value "' + val + '" is invalid for argument "value"');
          }
          for (i = 0; i < end - start2; ++i) {
            this[i + start2] = bytes[i % len];
          }
        }
        return this;
      };
      var errors = {};
      function E(sym, getMessage, Base) {
        errors[sym] = class NodeError extends Base {
          constructor() {
            super();
            Object.defineProperty(this, "message", {
              value: getMessage.apply(this, arguments),
              writable: true,
              configurable: true
            });
            this.name = `${this.name} [${sym}]`;
            this.stack;
            delete this.name;
          }
          get code() {
            return sym;
          }
          set code(value) {
            Object.defineProperty(this, "code", {
              configurable: true,
              enumerable: true,
              value,
              writable: true
            });
          }
          toString() {
            return `${this.name} [${sym}]: ${this.message}`;
          }
        };
      }
      E("ERR_BUFFER_OUT_OF_BOUNDS", function(name) {
        if (name) {
          return `${name} is outside of buffer bounds`;
        }
        return "Attempt to access memory outside buffer bounds";
      }, RangeError);
      E("ERR_INVALID_ARG_TYPE", function(name, actual) {
        return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
      }, TypeError);
      E("ERR_OUT_OF_RANGE", function(str, range, input) {
        let msg = `The value of "${str}" is out of range.`;
        let received = input;
        if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
          received = addNumericalSeparator(String(input));
        } else if (typeof input === "bigint") {
          received = String(input);
          if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
            received = addNumericalSeparator(received);
          }
          received += "n";
        }
        msg += ` It must be ${range}. Received ${received}`;
        return msg;
      }, RangeError);
      function addNumericalSeparator(val) {
        let res = "";
        let i = val.length;
        const start2 = val[0] === "-" ? 1 : 0;
        for (; i >= start2 + 4; i -= 3) {
          res = `_${val.slice(i - 3, i)}${res}`;
        }
        return `${val.slice(0, i)}${res}`;
      }
      function checkBounds(buf, offset, byteLength2) {
        validateNumber(offset, "offset");
        if (buf[offset] === void 0 || buf[offset + byteLength2] === void 0) {
          boundsError(offset, buf.length - (byteLength2 + 1));
        }
      }
      function checkIntBI(value, min, max, buf, offset, byteLength2) {
        if (value > max || value < min) {
          const n = typeof min === "bigint" ? "n" : "";
          let range;
          if (byteLength2 > 3) {
            if (min === 0 || min === BigInt(0)) {
              range = `>= 0${n} and < 2${n} ** ${(byteLength2 + 1) * 8}${n}`;
            } else {
              range = `>= -(2${n} ** ${(byteLength2 + 1) * 8 - 1}${n}) and < 2 ** ${(byteLength2 + 1) * 8 - 1}${n}`;
            }
          } else {
            range = `>= ${min}${n} and <= ${max}${n}`;
          }
          throw new errors.ERR_OUT_OF_RANGE("value", range, value);
        }
        checkBounds(buf, offset, byteLength2);
      }
      function validateNumber(value, name) {
        if (typeof value !== "number") {
          throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
        }
      }
      function boundsError(value, length, type) {
        if (Math.floor(value) !== value) {
          validateNumber(value, type);
          throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
        }
        if (length < 0) {
          throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
        }
        throw new errors.ERR_OUT_OF_RANGE(type || "offset", `>= ${type ? 1 : 0} and <= ${length}`, value);
      }
      var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
      function base64clean(str) {
        str = str.split("=")[0];
        str = str.trim().replace(INVALID_BASE64_RE, "");
        if (str.length < 2)
          return "";
        while (str.length % 4 !== 0) {
          str = str + "=";
        }
        return str;
      }
      function utf8ToBytes(string, units) {
        units = units || Infinity;
        let codePoint;
        const length = string.length;
        let leadSurrogate = null;
        const bytes = [];
        for (let i = 0; i < length; ++i) {
          codePoint = string.charCodeAt(i);
          if (codePoint > 55295 && codePoint < 57344) {
            if (!leadSurrogate) {
              if (codePoint > 56319) {
                if ((units -= 3) > -1)
                  bytes.push(239, 191, 189);
                continue;
              } else if (i + 1 === length) {
                if ((units -= 3) > -1)
                  bytes.push(239, 191, 189);
                continue;
              }
              leadSurrogate = codePoint;
              continue;
            }
            if (codePoint < 56320) {
              if ((units -= 3) > -1)
                bytes.push(239, 191, 189);
              leadSurrogate = codePoint;
              continue;
            }
            codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
          } else if (leadSurrogate) {
            if ((units -= 3) > -1)
              bytes.push(239, 191, 189);
          }
          leadSurrogate = null;
          if (codePoint < 128) {
            if ((units -= 1) < 0)
              break;
            bytes.push(codePoint);
          } else if (codePoint < 2048) {
            if ((units -= 2) < 0)
              break;
            bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
          } else if (codePoint < 65536) {
            if ((units -= 3) < 0)
              break;
            bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
          } else if (codePoint < 1114112) {
            if ((units -= 4) < 0)
              break;
            bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
          } else {
            throw new Error("Invalid code point");
          }
        }
        return bytes;
      }
      function asciiToBytes(str) {
        const byteArray = [];
        for (let i = 0; i < str.length; ++i) {
          byteArray.push(str.charCodeAt(i) & 255);
        }
        return byteArray;
      }
      function utf16leToBytes(str, units) {
        let c, hi, lo;
        const byteArray = [];
        for (let i = 0; i < str.length; ++i) {
          if ((units -= 2) < 0)
            break;
          c = str.charCodeAt(i);
          hi = c >> 8;
          lo = c % 256;
          byteArray.push(lo);
          byteArray.push(hi);
        }
        return byteArray;
      }
      function base64ToBytes(str) {
        return base64.toByteArray(base64clean(str));
      }
      function blitBuffer(src2, dst, offset, length) {
        let i;
        for (i = 0; i < length; ++i) {
          if (i + offset >= dst.length || i >= src2.length)
            break;
          dst[i + offset] = src2[i];
        }
        return i;
      }
      function isInstance(obj, type) {
        return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
      }
      function numberIsNaN(obj) {
        return obj !== obj;
      }
      var hexSliceLookupTable = function() {
        const alphabet = "0123456789abcdef";
        const table = new Array(256);
        for (let i = 0; i < 16; ++i) {
          const i16 = i * 16;
          for (let j = 0; j < 16; ++j) {
            table[i16 + j] = alphabet[i] + alphabet[j];
          }
        }
        return table;
      }();
      function defineBigIntMethod(fn) {
        return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
      }
      function BufferBigIntNotDefined() {
        throw new Error("BigInt not supported");
      }
    }
  });

  // node_modules/safe-buffer/index.js
  var require_safe_buffer = __commonJS({
    "node_modules/safe-buffer/index.js"(exports, module) {
      var buffer = require_buffer();
      var Buffer2 = buffer.Buffer;
      function copyProps(src2, dst) {
        for (var key in src2) {
          dst[key] = src2[key];
        }
      }
      if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
        module.exports = buffer;
      } else {
        copyProps(buffer, exports);
        exports.Buffer = SafeBuffer;
      }
      function SafeBuffer(arg, encodingOrOffset, length) {
        return Buffer2(arg, encodingOrOffset, length);
      }
      copyProps(Buffer2, SafeBuffer);
      SafeBuffer.from = function(arg, encodingOrOffset, length) {
        if (typeof arg === "number") {
          throw new TypeError("Argument must not be a number");
        }
        return Buffer2(arg, encodingOrOffset, length);
      };
      SafeBuffer.alloc = function(size, fill, encoding) {
        if (typeof size !== "number") {
          throw new TypeError("Argument must be a number");
        }
        var buf = Buffer2(size);
        if (fill !== void 0) {
          if (typeof encoding === "string") {
            buf.fill(fill, encoding);
          } else {
            buf.fill(fill);
          }
        } else {
          buf.fill(0);
        }
        return buf;
      };
      SafeBuffer.allocUnsafe = function(size) {
        if (typeof size !== "number") {
          throw new TypeError("Argument must be a number");
        }
        return Buffer2(size);
      };
      SafeBuffer.allocUnsafeSlow = function(size) {
        if (typeof size !== "number") {
          throw new TypeError("Argument must be a number");
        }
        return buffer.SlowBuffer(size);
      };
    }
  });

  // node_modules/randombytes/browser.js
  var require_browser = __commonJS({
    "node_modules/randombytes/browser.js"(exports, module) {
      "use strict";
      var MAX_BYTES = 65536;
      var MAX_UINT32 = 4294967295;
      function oldBrowser() {
        throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11");
      }
      var Buffer2 = require_safe_buffer().Buffer;
      var crypto = global.crypto || global.msCrypto;
      if (crypto && crypto.getRandomValues) {
        module.exports = randomBytes;
      } else {
        module.exports = oldBrowser;
      }
      function randomBytes(size, cb) {
        if (size > MAX_UINT32)
          throw new RangeError("requested too many random bytes");
        var bytes = Buffer2.allocUnsafe(size);
        if (size > 0) {
          if (size > MAX_BYTES) {
            for (var generated = 0; generated < size; generated += MAX_BYTES) {
              crypto.getRandomValues(bytes.slice(generated, generated + MAX_BYTES));
            }
          } else {
            crypto.getRandomValues(bytes);
          }
        }
        if (typeof cb === "function") {
          return process.nextTick(function() {
            cb(null, bytes);
          });
        }
        return bytes;
      }
    }
  });

  // node_modules/serialize-javascript/index.js
  var require_serialize_javascript = __commonJS({
    "node_modules/serialize-javascript/index.js"(exports, module) {
      "use strict";
      var randomBytes = require_browser();
      var UID_LENGTH = 16;
      var UID = generateUID();
      var PLACE_HOLDER_REGEXP = new RegExp('(\\\\)?"@__(F|R|D|M|S|A|U|I|B|L)-' + UID + '-(\\d+)__@"', "g");
      var IS_NATIVE_CODE_REGEXP = /\{\s*\[native code\]\s*\}/g;
      var IS_PURE_FUNCTION = /function.*?\(/;
      var IS_ARROW_FUNCTION = /.*?=>.*?/;
      var UNSAFE_CHARS_REGEXP = /[<>\/\u2028\u2029]/g;
      var RESERVED_SYMBOLS = ["*", "async"];
      var ESCAPED_CHARS = {
        "<": "\\u003C",
        ">": "\\u003E",
        "/": "\\u002F",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029"
      };
      function escapeUnsafeChars(unsafeChar) {
        return ESCAPED_CHARS[unsafeChar];
      }
      function generateUID() {
        var bytes = randomBytes(UID_LENGTH);
        var result = "";
        for (var i = 0; i < UID_LENGTH; ++i) {
          result += bytes[i].toString(16);
        }
        return result;
      }
      function deleteFunctions(obj) {
        var functionKeys = [];
        for (var key in obj) {
          if (typeof obj[key] === "function") {
            functionKeys.push(key);
          }
        }
        for (var i = 0; i < functionKeys.length; i++) {
          delete obj[functionKeys[i]];
        }
      }
      module.exports = function serialize(obj, options) {
        options || (options = {});
        if (typeof options === "number" || typeof options === "string") {
          options = { space: options };
        }
        var functions = [];
        var regexps = [];
        var dates = [];
        var maps = [];
        var sets = [];
        var arrays = [];
        var undefs = [];
        var infinities = [];
        var bigInts = [];
        var urls = [];
        function replacer(key, value) {
          if (options.ignoreFunction) {
            deleteFunctions(value);
          }
          if (!value && value !== void 0) {
            return value;
          }
          var origValue = this[key];
          var type = typeof origValue;
          if (type === "object") {
            if (origValue instanceof RegExp) {
              return "@__R-" + UID + "-" + (regexps.push(origValue) - 1) + "__@";
            }
            if (origValue instanceof Date) {
              return "@__D-" + UID + "-" + (dates.push(origValue) - 1) + "__@";
            }
            if (origValue instanceof Map) {
              return "@__M-" + UID + "-" + (maps.push(origValue) - 1) + "__@";
            }
            if (origValue instanceof Set) {
              return "@__S-" + UID + "-" + (sets.push(origValue) - 1) + "__@";
            }
            if (origValue instanceof Array) {
              var isSparse = origValue.filter(function() {
                return true;
              }).length !== origValue.length;
              if (isSparse) {
                return "@__A-" + UID + "-" + (arrays.push(origValue) - 1) + "__@";
              }
            }
            if (origValue instanceof URL) {
              return "@__L-" + UID + "-" + (urls.push(origValue) - 1) + "__@";
            }
          }
          if (type === "function") {
            return "@__F-" + UID + "-" + (functions.push(origValue) - 1) + "__@";
          }
          if (type === "undefined") {
            return "@__U-" + UID + "-" + (undefs.push(origValue) - 1) + "__@";
          }
          if (type === "number" && !isNaN(origValue) && !isFinite(origValue)) {
            return "@__I-" + UID + "-" + (infinities.push(origValue) - 1) + "__@";
          }
          if (type === "bigint") {
            return "@__B-" + UID + "-" + (bigInts.push(origValue) - 1) + "__@";
          }
          return value;
        }
        function serializeFunc(fn) {
          var serializedFn = fn.toString();
          if (IS_NATIVE_CODE_REGEXP.test(serializedFn)) {
            throw new TypeError("Serializing native function: " + fn.name);
          }
          if (IS_PURE_FUNCTION.test(serializedFn)) {
            return serializedFn;
          }
          if (IS_ARROW_FUNCTION.test(serializedFn)) {
            return serializedFn;
          }
          var argsStartsAt = serializedFn.indexOf("(");
          var def = serializedFn.substr(0, argsStartsAt).trim().split(" ").filter(function(val) {
            return val.length > 0;
          });
          var nonReservedSymbols = def.filter(function(val) {
            return RESERVED_SYMBOLS.indexOf(val) === -1;
          });
          if (nonReservedSymbols.length > 0) {
            return (def.indexOf("async") > -1 ? "async " : "") + "function" + (def.join("").indexOf("*") > -1 ? "*" : "") + serializedFn.substr(argsStartsAt);
          }
          return serializedFn;
        }
        if (options.ignoreFunction && typeof obj === "function") {
          obj = void 0;
        }
        if (obj === void 0) {
          return String(obj);
        }
        var str;
        if (options.isJSON && !options.space) {
          str = JSON.stringify(obj);
        } else {
          str = JSON.stringify(obj, options.isJSON ? null : replacer, options.space);
        }
        if (typeof str !== "string") {
          return String(str);
        }
        if (options.unsafe !== true) {
          str = str.replace(UNSAFE_CHARS_REGEXP, escapeUnsafeChars);
        }
        if (functions.length === 0 && regexps.length === 0 && dates.length === 0 && maps.length === 0 && sets.length === 0 && arrays.length === 0 && undefs.length === 0 && infinities.length === 0 && bigInts.length === 0 && urls.length === 0) {
          return str;
        }
        return str.replace(PLACE_HOLDER_REGEXP, function(match, backSlash, type, valueIndex) {
          if (backSlash) {
            return match;
          }
          if (type === "D") {
            return 'new Date("' + dates[valueIndex].toISOString() + '")';
          }
          if (type === "R") {
            return "new RegExp(" + serialize(regexps[valueIndex].source) + ', "' + regexps[valueIndex].flags + '")';
          }
          if (type === "M") {
            return "new Map(" + serialize(Array.from(maps[valueIndex].entries()), options) + ")";
          }
          if (type === "S") {
            return "new Set(" + serialize(Array.from(sets[valueIndex].values()), options) + ")";
          }
          if (type === "A") {
            return "Array.prototype.slice.call(" + serialize(Object.assign({ length: arrays[valueIndex].length }, arrays[valueIndex]), options) + ")";
          }
          if (type === "U") {
            return "undefined";
          }
          if (type === "I") {
            return infinities[valueIndex];
          }
          if (type === "B") {
            return 'BigInt("' + bigInts[valueIndex] + '")';
          }
          if (type === "L") {
            return 'new URL("' + urls[valueIndex].toString() + '")';
          }
          var fn = functions[valueIndex];
          return serializeFunc(fn);
        });
      };
    }
  });

  // node_modules/path-browserify/index.js
  var require_path_browserify = __commonJS({
    "node_modules/path-browserify/index.js"(exports, module) {
      "use strict";
      function assertPath2(path) {
        if (typeof path !== "string") {
          throw new TypeError("Path must be a string. Received " + JSON.stringify(path));
        }
      }
      function normalizeStringPosix2(path, allowAboveRoot) {
        var res = "";
        var lastSegmentLength = 0;
        var lastSlash = -1;
        var dots = 0;
        var code;
        for (var i = 0; i <= path.length; ++i) {
          if (i < path.length)
            code = path.charCodeAt(i);
          else if (code === 47)
            break;
          else
            code = 47;
          if (code === 47) {
            if (lastSlash === i - 1 || dots === 1) {
            } else if (lastSlash !== i - 1 && dots === 2) {
              if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 || res.charCodeAt(res.length - 2) !== 46) {
                if (res.length > 2) {
                  var lastSlashIndex = res.lastIndexOf("/");
                  if (lastSlashIndex !== res.length - 1) {
                    if (lastSlashIndex === -1) {
                      res = "";
                      lastSegmentLength = 0;
                    } else {
                      res = res.slice(0, lastSlashIndex);
                      lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
                    }
                    lastSlash = i;
                    dots = 0;
                    continue;
                  }
                } else if (res.length === 2 || res.length === 1) {
                  res = "";
                  lastSegmentLength = 0;
                  lastSlash = i;
                  dots = 0;
                  continue;
                }
              }
              if (allowAboveRoot) {
                if (res.length > 0)
                  res += "/..";
                else
                  res = "..";
                lastSegmentLength = 2;
              }
            } else {
              if (res.length > 0)
                res += "/" + path.slice(lastSlash + 1, i);
              else
                res = path.slice(lastSlash + 1, i);
              lastSegmentLength = i - lastSlash - 1;
            }
            lastSlash = i;
            dots = 0;
          } else if (code === 46 && dots !== -1) {
            ++dots;
          } else {
            dots = -1;
          }
        }
        return res;
      }
      function _format2(sep, pathObject) {
        var dir = pathObject.dir || pathObject.root;
        var base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
        if (!dir) {
          return base;
        }
        if (dir === pathObject.root) {
          return dir + base;
        }
        return dir + sep + base;
      }
      var posix2 = {
        resolve: function resolve2() {
          var resolvedPath = "";
          var resolvedAbsolute = false;
          var cwd;
          for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
            var path;
            if (i >= 0)
              path = arguments[i];
            else {
              if (cwd === void 0)
                cwd = process.cwd();
              path = cwd;
            }
            assertPath2(path);
            if (path.length === 0) {
              continue;
            }
            resolvedPath = path + "/" + resolvedPath;
            resolvedAbsolute = path.charCodeAt(0) === 47;
          }
          resolvedPath = normalizeStringPosix2(resolvedPath, !resolvedAbsolute);
          if (resolvedAbsolute) {
            if (resolvedPath.length > 0)
              return "/" + resolvedPath;
            else
              return "/";
          } else if (resolvedPath.length > 0) {
            return resolvedPath;
          } else {
            return ".";
          }
        },
        normalize: function normalize2(path) {
          assertPath2(path);
          if (path.length === 0)
            return ".";
          var isAbsolute2 = path.charCodeAt(0) === 47;
          var trailingSeparator = path.charCodeAt(path.length - 1) === 47;
          path = normalizeStringPosix2(path, !isAbsolute2);
          if (path.length === 0 && !isAbsolute2)
            path = ".";
          if (path.length > 0 && trailingSeparator)
            path += "/";
          if (isAbsolute2)
            return "/" + path;
          return path;
        },
        isAbsolute: function isAbsolute2(path) {
          assertPath2(path);
          return path.length > 0 && path.charCodeAt(0) === 47;
        },
        join: function join2() {
          if (arguments.length === 0)
            return ".";
          var joined;
          for (var i = 0; i < arguments.length; ++i) {
            var arg = arguments[i];
            assertPath2(arg);
            if (arg.length > 0) {
              if (joined === void 0)
                joined = arg;
              else
                joined += "/" + arg;
            }
          }
          if (joined === void 0)
            return ".";
          return posix2.normalize(joined);
        },
        relative: function relative2(from, to) {
          assertPath2(from);
          assertPath2(to);
          if (from === to)
            return "";
          from = posix2.resolve(from);
          to = posix2.resolve(to);
          if (from === to)
            return "";
          var fromStart = 1;
          for (; fromStart < from.length; ++fromStart) {
            if (from.charCodeAt(fromStart) !== 47)
              break;
          }
          var fromEnd = from.length;
          var fromLen = fromEnd - fromStart;
          var toStart = 1;
          for (; toStart < to.length; ++toStart) {
            if (to.charCodeAt(toStart) !== 47)
              break;
          }
          var toEnd = to.length;
          var toLen = toEnd - toStart;
          var length = fromLen < toLen ? fromLen : toLen;
          var lastCommonSep = -1;
          var i = 0;
          for (; i <= length; ++i) {
            if (i === length) {
              if (toLen > length) {
                if (to.charCodeAt(toStart + i) === 47) {
                  return to.slice(toStart + i + 1);
                } else if (i === 0) {
                  return to.slice(toStart + i);
                }
              } else if (fromLen > length) {
                if (from.charCodeAt(fromStart + i) === 47) {
                  lastCommonSep = i;
                } else if (i === 0) {
                  lastCommonSep = 0;
                }
              }
              break;
            }
            var fromCode = from.charCodeAt(fromStart + i);
            var toCode = to.charCodeAt(toStart + i);
            if (fromCode !== toCode)
              break;
            else if (fromCode === 47)
              lastCommonSep = i;
          }
          var out = "";
          for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
            if (i === fromEnd || from.charCodeAt(i) === 47) {
              if (out.length === 0)
                out += "..";
              else
                out += "/..";
            }
          }
          if (out.length > 0)
            return out + to.slice(toStart + lastCommonSep);
          else {
            toStart += lastCommonSep;
            if (to.charCodeAt(toStart) === 47)
              ++toStart;
            return to.slice(toStart);
          }
        },
        _makeLong: function _makeLong2(path) {
          return path;
        },
        dirname: function dirname2(path) {
          assertPath2(path);
          if (path.length === 0)
            return ".";
          var code = path.charCodeAt(0);
          var hasRoot = code === 47;
          var end = -1;
          var matchedSlash = true;
          for (var i = path.length - 1; i >= 1; --i) {
            code = path.charCodeAt(i);
            if (code === 47) {
              if (!matchedSlash) {
                end = i;
                break;
              }
            } else {
              matchedSlash = false;
            }
          }
          if (end === -1)
            return hasRoot ? "/" : ".";
          if (hasRoot && end === 1)
            return "//";
          return path.slice(0, end);
        },
        basename: function basename2(path, ext) {
          if (ext !== void 0 && typeof ext !== "string")
            throw new TypeError('"ext" argument must be a string');
          assertPath2(path);
          var start2 = 0;
          var end = -1;
          var matchedSlash = true;
          var i;
          if (ext !== void 0 && ext.length > 0 && ext.length <= path.length) {
            if (ext.length === path.length && ext === path)
              return "";
            var extIdx = ext.length - 1;
            var firstNonSlashEnd = -1;
            for (i = path.length - 1; i >= 0; --i) {
              var code = path.charCodeAt(i);
              if (code === 47) {
                if (!matchedSlash) {
                  start2 = i + 1;
                  break;
                }
              } else {
                if (firstNonSlashEnd === -1) {
                  matchedSlash = false;
                  firstNonSlashEnd = i + 1;
                }
                if (extIdx >= 0) {
                  if (code === ext.charCodeAt(extIdx)) {
                    if (--extIdx === -1) {
                      end = i;
                    }
                  } else {
                    extIdx = -1;
                    end = firstNonSlashEnd;
                  }
                }
              }
            }
            if (start2 === end)
              end = firstNonSlashEnd;
            else if (end === -1)
              end = path.length;
            return path.slice(start2, end);
          } else {
            for (i = path.length - 1; i >= 0; --i) {
              if (path.charCodeAt(i) === 47) {
                if (!matchedSlash) {
                  start2 = i + 1;
                  break;
                }
              } else if (end === -1) {
                matchedSlash = false;
                end = i + 1;
              }
            }
            if (end === -1)
              return "";
            return path.slice(start2, end);
          }
        },
        extname: function extname2(path) {
          assertPath2(path);
          var startDot = -1;
          var startPart = 0;
          var end = -1;
          var matchedSlash = true;
          var preDotState = 0;
          for (var i = path.length - 1; i >= 0; --i) {
            var code = path.charCodeAt(i);
            if (code === 47) {
              if (!matchedSlash) {
                startPart = i + 1;
                break;
              }
              continue;
            }
            if (end === -1) {
              matchedSlash = false;
              end = i + 1;
            }
            if (code === 46) {
              if (startDot === -1)
                startDot = i;
              else if (preDotState !== 1)
                preDotState = 1;
            } else if (startDot !== -1) {
              preDotState = -1;
            }
          }
          if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
            return "";
          }
          return path.slice(startDot, end);
        },
        format: function format2(pathObject) {
          if (pathObject === null || typeof pathObject !== "object") {
            throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
          }
          return _format2("/", pathObject);
        },
        parse: function parse2(path) {
          assertPath2(path);
          var ret = { root: "", dir: "", base: "", ext: "", name: "" };
          if (path.length === 0)
            return ret;
          var code = path.charCodeAt(0);
          var isAbsolute2 = code === 47;
          var start2;
          if (isAbsolute2) {
            ret.root = "/";
            start2 = 1;
          } else {
            start2 = 0;
          }
          var startDot = -1;
          var startPart = 0;
          var end = -1;
          var matchedSlash = true;
          var i = path.length - 1;
          var preDotState = 0;
          for (; i >= start2; --i) {
            code = path.charCodeAt(i);
            if (code === 47) {
              if (!matchedSlash) {
                startPart = i + 1;
                break;
              }
              continue;
            }
            if (end === -1) {
              matchedSlash = false;
              end = i + 1;
            }
            if (code === 46) {
              if (startDot === -1)
                startDot = i;
              else if (preDotState !== 1)
                preDotState = 1;
            } else if (startDot !== -1) {
              preDotState = -1;
            }
          }
          if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
            if (end !== -1) {
              if (startPart === 0 && isAbsolute2)
                ret.base = ret.name = path.slice(1, end);
              else
                ret.base = ret.name = path.slice(startPart, end);
            }
          } else {
            if (startPart === 0 && isAbsolute2) {
              ret.name = path.slice(1, startDot);
              ret.base = path.slice(1, end);
            } else {
              ret.name = path.slice(startPart, startDot);
              ret.base = path.slice(startPart, end);
            }
            ret.ext = path.slice(startDot, end);
          }
          if (startPart > 0)
            ret.dir = path.slice(0, startPart - 1);
          else if (isAbsolute2)
            ret.dir = "/";
          return ret;
        },
        sep: "/",
        delimiter: ":",
        win32: null,
        posix: null
      };
      posix2.posix = posix2;
      module.exports = posix2;
    }
  });

  // node_modules/@astrojs/node/dist/server.js
  var server_exports = {};
  __export(server_exports, {
    createExports: () => createExports,
    start: () => start
  });

  // node_modules/astro/dist/core/app/index.js
  var import_mime = __toESM(require_mime(), 1);

  // node_modules/kleur/colors.mjs
  var FORCE_COLOR;
  var NODE_DISABLE_COLORS;
  var NO_COLOR;
  var TERM;
  var isTTY = true;
  if (typeof process !== "undefined") {
    ({ FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM } = process.env);
    isTTY = process.stdout && process.stdout.isTTY;
  }
  var $ = {
    enabled: !NODE_DISABLE_COLORS && NO_COLOR == null && TERM !== "dumb" && (FORCE_COLOR != null && FORCE_COLOR !== "0" || isTTY)
  };
  function init(x, y) {
    let rgx = new RegExp(`\\x1b\\[${y}m`, "g");
    let open = `\x1B[${x}m`, close = `\x1B[${y}m`;
    return function(txt) {
      if (!$.enabled || txt == null)
        return txt;
      return open + (!!~("" + txt).indexOf(close) ? txt.replace(rgx, close + open) : txt) + close;
    };
  }
  var reset = init(0, 0);
  var bold = init(1, 22);
  var dim = init(2, 22);
  var italic = init(3, 23);
  var underline = init(4, 24);
  var inverse = init(7, 27);
  var hidden = init(8, 28);
  var strikethrough = init(9, 29);
  var black = init(30, 39);
  var red = init(31, 39);
  var green = init(32, 39);
  var yellow = init(33, 39);
  var blue = init(34, 39);
  var magenta = init(35, 39);
  var cyan = init(36, 39);
  var white = init(37, 39);
  var gray = init(90, 39);
  var grey = init(90, 39);
  var bgBlack = init(40, 49);
  var bgRed = init(41, 49);
  var bgGreen = init(42, 49);
  var bgYellow = init(43, 49);
  var bgBlue = init(44, 49);
  var bgMagenta = init(45, 49);
  var bgCyan = init(46, 49);
  var bgWhite = init(47, 49);

  // node_modules/astro/dist/core/logger/console.js
  var import_util = __toESM(require_util(), 1);

  // node_modules/string-width/index.js
  var import_eastasianwidth = __toESM(require_eastasianwidth(), 1);
  var import_emoji_regex = __toESM(require_emoji_regex(), 1);

  // node_modules/astro/dist/core/logger/core.js
  function getLoggerLocale() {
    const defaultLocale = "en-US";
    if (process.env.LANG) {
      const extractedLocale = process.env.LANG.split(".")[0].replace(/_/g, "-");
      if (extractedLocale.length < 2)
        return defaultLocale;
      else
        return extractedLocale.substring(0, 5);
    } else
      return defaultLocale;
  }
  var dateTimeFormat = new Intl.DateTimeFormat(getLoggerLocale(), {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
  var levels = {
    debug: 20,
    info: 30,
    warn: 40,
    error: 50,
    silent: 90
  };
  function log(opts, level, type, ...args) {
    const logLevel = opts.level;
    const dest = opts.dest;
    const event = {
      type,
      level,
      args,
      message: ""
    };
    if (levels[logLevel] > levels[level]) {
      return;
    }
    dest.write(event);
  }
  function warn(opts, type, ...messages) {
    return log(opts, "warn", type, ...messages);
  }
  function debug(...args) {
    if ("_astroGlobalDebug" in globalThis) {
      globalThis._astroGlobalDebug(...args);
    }
  }
  var defaultLogLevel;
  if (typeof process !== "undefined") {
    if (process.argv.includes("--verbose")) {
      defaultLogLevel = "debug";
    } else if (process.argv.includes("--silent")) {
      defaultLogLevel = "silent";
    } else {
      defaultLogLevel = "info";
    }
  } else {
    defaultLogLevel = "info";
  }

  // node_modules/astro/dist/core/logger/console.js
  var lastMessage;
  var lastMessageCount = 1;
  var consoleLogDestination = {
    write(event) {
      let dest = console.error;
      if (levels[event.level] < levels["error"]) {
        dest = console.log;
      }
      function getPrefix() {
        let prefix = "";
        let type = event.type;
        if (type) {
          prefix += dim(dateTimeFormat.format(new Date()) + " ");
          if (event.level === "info") {
            type = bold(cyan(`[${type}]`));
          } else if (event.level === "warn") {
            type = bold(yellow(`[${type}]`));
          } else if (event.level === "error") {
            type = bold(red(`[${type}]`));
          }
          prefix += `${type} `;
        }
        return reset(prefix);
      }
      let message = (0, import_util.format)(...event.args);
      if (message === lastMessage) {
        lastMessageCount++;
        message = `${message} ${yellow(`(x${lastMessageCount})`)}`;
      } else {
        lastMessage = message;
        lastMessageCount = 1;
      }
      const outMessage = getPrefix() + message;
      dest(outMessage);
      return true;
    }
  };

  // node_modules/astro/dist/core/routing/match.js
  function matchRoute(pathname, manifest) {
    return manifest.routes.find((route) => route.pattern.test(pathname));
  }

  // node_modules/astro/dist/runtime/server/index.js
  var import_shorthash = __toESM(require_shorthash2(), 1);

  // node_modules/html-escaper/esm/index.js
  var { replace } = "";
  var ca = /[&<>'"]/g;
  var esca = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  };
  var pe = (m) => esca[m];
  var escape = (es) => replace.call(es, ca, pe);

  // node_modules/astro/dist/runtime/server/escape.js
  var escapeHTML = escape;
  var HTMLString = class extends String {
  };
  var markHTMLString = (value) => {
    if (value instanceof HTMLString) {
      return value;
    }
    if (typeof value === "string") {
      return new HTMLString(value);
    }
    return value;
  };

  // node_modules/astro/dist/runtime/server/util.js
  function serializeListValue(value) {
    const hash = {};
    push(value);
    return Object.keys(hash).join(" ");
    function push(item) {
      if (item && typeof item.forEach === "function")
        item.forEach(push);
      else if (item === Object(item))
        Object.keys(item).forEach((name) => {
          if (item[name])
            push(name);
        });
      else {
        item = item == null ? "" : String(item).trim();
        if (item) {
          item.split(/\s+/).forEach((name) => {
            hash[name] = true;
          });
        }
      }
    }
  }

  // node_modules/astro/dist/runtime/server/hydration.js
  var import_serialize_javascript = __toESM(require_serialize_javascript(), 1);

  // node_modules/astro/dist/runtime/server/index.js
  var __defProp2 = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp2.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp2.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var htmlBooleanAttributes = /^(allowfullscreen|async|autofocus|autoplay|controls|default|defer|disabled|disablepictureinpicture|disableremoteplayback|formnovalidate|hidden|loop|nomodule|novalidate|open|playsinline|readonly|required|reversed|scoped|seamless|itemscope)$/i;
  var htmlEnumAttributes = /^(contenteditable|draggable|spellcheck|value)$/i;
  var svgEnumAttributes = /^(autoReverse|externalResourcesRequired|focusable|preserveAlpha)$/i;
  async function _render(child) {
    child = await child;
    if (child instanceof HTMLString) {
      return child;
    } else if (Array.isArray(child)) {
      return markHTMLString((await Promise.all(child.map((value) => _render(value)))).join(""));
    } else if (typeof child === "function") {
      return _render(child());
    } else if (typeof child === "string") {
      return markHTMLString(escapeHTML(child));
    } else if (!child && child !== 0) {
    } else if (child instanceof AstroComponent || Object.prototype.toString.call(child) === "[object AstroComponent]") {
      return markHTMLString(await renderAstroComponent(child));
    } else {
      return child;
    }
  }
  var AstroComponent = class {
    constructor(htmlParts, expressions) {
      this.htmlParts = htmlParts;
      this.expressions = expressions;
    }
    get [Symbol.toStringTag]() {
      return "AstroComponent";
    }
    *[Symbol.iterator]() {
      const { htmlParts, expressions } = this;
      for (let i = 0; i < htmlParts.length; i++) {
        const html = htmlParts[i];
        const expression = expressions[i];
        yield markHTMLString(html);
        yield _render(expression);
      }
    }
  };
  function isAstroComponent(obj) {
    return typeof obj === "object" && Object.prototype.toString.call(obj) === "[object AstroComponent]";
  }
  async function renderSlot(_result2, slotted, fallback) {
    if (slotted) {
      return await _render(slotted);
    }
    return fallback;
  }
  var Fragment = Symbol("Astro.Fragment");
  var toAttributeString = (value, shouldEscape = true) => shouldEscape ? String(value).replace(/&/g, "&#38;").replace(/"/g, "&#34;") : value;
  var STATIC_DIRECTIVES = /* @__PURE__ */ new Set(["set:html", "set:text"]);
  function addAttribute(value, key, shouldEscape = true) {
    if (value == null) {
      return "";
    }
    if (value === false) {
      if (htmlEnumAttributes.test(key) || svgEnumAttributes.test(key)) {
        return markHTMLString(` ${key}="false"`);
      }
      return "";
    }
    if (STATIC_DIRECTIVES.has(key)) {
      console.warn(`[astro] The "${key}" directive cannot be applied dynamically at runtime. It will not be rendered as an attribute.

Make sure to use the static attribute syntax (\`${key}={value}\`) instead of the dynamic spread syntax (\`{...{ "${key}": value }}\`).`);
      return "";
    }
    if (key === "class:list") {
      return markHTMLString(` ${key.slice(0, -5)}="${toAttributeString(serializeListValue(value))}"`);
    }
    if (value === true && (key.startsWith("data-") || htmlBooleanAttributes.test(key))) {
      return markHTMLString(` ${key}`);
    } else {
      return markHTMLString(` ${key}="${toAttributeString(value, shouldEscape)}"`);
    }
  }
  function spreadAttributes(values, shouldEscape = true) {
    let output = "";
    for (const [key, value] of Object.entries(values)) {
      output += addAttribute(value, key, shouldEscape);
    }
    return markHTMLString(output);
  }
  function defineStyleVars(selector, vars) {
    let output = "\n";
    for (const [key, value] of Object.entries(vars)) {
      output += `  --${key}: ${value};
`;
    }
    return markHTMLString(`${selector} {${output}}`);
  }
  function defineScriptVars(vars) {
    let output = "";
    for (const [key, value] of Object.entries(vars)) {
      output += `let ${key} = ${JSON.stringify(value)};
`;
    }
    return markHTMLString(output);
  }
  function getHandlerFromModule(mod, method) {
    if (mod[method]) {
      return mod[method];
    }
    if (method === "delete" && mod["del"]) {
      return mod["del"];
    }
    if (mod["all"]) {
      return mod["all"];
    }
    return void 0;
  }
  async function renderEndpoint(mod, request, params) {
    var _a;
    const chosenMethod = (_a = request.method) == null ? void 0 : _a.toLowerCase();
    const handler2 = getHandlerFromModule(mod, chosenMethod);
    if (!handler2 || typeof handler2 !== "function") {
      throw new Error(`Endpoint handler not found! Expected an exported function for "${chosenMethod}"`);
    }
    return await handler2.call(mod, params, request);
  }
  async function replaceHeadInjection(result, html) {
    let template = html;
    if (template.indexOf("<!--astro:head-->") > -1) {
      template = template.replace("<!--astro:head-->", await renderHead(result));
    }
    return template;
  }
  async function renderPage(result, componentFactory, props, children) {
    try {
      const response = await componentFactory(result, props, children);
      if (isAstroComponent(response)) {
        let template = await renderAstroComponent(response);
        const html = await replaceHeadInjection(result, template);
        return {
          type: "html",
          html
        };
      } else {
        return {
          type: "response",
          response
        };
      }
    } catch (err) {
      if (err instanceof Response) {
        return {
          type: "response",
          response: err
        };
      } else {
        throw err;
      }
    }
  }
  var uniqueElements = (item, index, all) => {
    const props = JSON.stringify(item.props);
    const children = item.children;
    return index === all.findIndex((i) => JSON.stringify(i.props) === props && i.children == children);
  };
  async function renderHead(result) {
    const styles = Array.from(result.styles).filter(uniqueElements).map((style) => renderElement("style", style));
    let needsHydrationStyles = false;
    const scripts = Array.from(result.scripts).filter(uniqueElements).map((script, i) => {
      if ("data-astro-component-hydration" in script.props) {
        needsHydrationStyles = true;
      }
      return renderElement("script", __spreadProps(__spreadValues({}, script), {
        props: __spreadProps(__spreadValues({}, script.props), { "astro-script": result._metadata.pathname + "/script-" + i })
      }));
    });
    if (needsHydrationStyles) {
      styles.push(renderElement("style", {
        props: {},
        children: "astro-root, astro-fragment { display: contents; }"
      }));
    }
    const links = Array.from(result.links).filter(uniqueElements).map((link) => renderElement("link", link, false));
    return markHTMLString(links.join("\n") + styles.join("\n") + scripts.join("\n") + "\n<!--astro:head:injected-->");
  }
  async function renderAstroComponent(component) {
    let template = [];
    for await (const value of component) {
      if (value || value === 0) {
        template.push(value);
      }
    }
    return markHTMLString(await _render(template));
  }
  function renderElement(name, { props: _props, children = "" }, shouldEscape = true) {
    const _a = _props, { lang: _, "data-astro-id": astroId, "define:vars": defineVars } = _a, props = __objRest(_a, ["lang", "data-astro-id", "define:vars"]);
    if (defineVars) {
      if (name === "style") {
        if (props["is:global"]) {
          children = defineStyleVars(`:root`, defineVars) + "\n" + children;
        } else {
          children = defineStyleVars(`.astro-${astroId}`, defineVars) + "\n" + children;
        }
        delete props["is:global"];
        delete props["is:scoped"];
      }
      if (name === "script") {
        delete props.hoist;
        children = defineScriptVars(defineVars) + "\n" + children;
      }
    }
    return `<${name}${spreadAttributes(props, shouldEscape)}>${children}</${name}>`;
  }

  // node_modules/astro/dist/core/routing/validation.js
  var VALID_PARAM_TYPES = ["string", "number", "undefined"];
  function validateGetStaticPathsParameter([key, value]) {
    if (!VALID_PARAM_TYPES.includes(typeof value)) {
      throw new Error(`[getStaticPaths] invalid route parameter for "${key}". Expected a string or number, received \`${value}\` ("${typeof value}")`);
    }
  }
  function validateGetStaticPathsModule(mod, { ssr }) {
    if (mod.createCollection) {
      throw new Error(`[createCollection] deprecated. Please use getStaticPaths() instead.`);
    }
    if (!mod.getStaticPaths && !ssr) {
      throw new Error(`[getStaticPaths] getStaticPaths() function is required. Make sure that you \`export\` the function from your component.`);
    }
  }
  function validateGetStaticPathsResult(result, logging) {
    if (!Array.isArray(result)) {
      throw new Error(`[getStaticPaths] invalid return value. Expected an array of path objects, but got \`${JSON.stringify(result)}\`.`);
    }
    result.forEach((pathObject) => {
      if (!pathObject.params) {
        warn(logging, "getStaticPaths", `invalid path object. Expected an object with key \`params\`, but got \`${JSON.stringify(pathObject)}\`. Skipped.`);
        return;
      }
      for (const [key, val] of Object.entries(pathObject.params)) {
        if (!(typeof val === "undefined" || typeof val === "string")) {
          warn(logging, "getStaticPaths", `invalid path param: ${key}. A string value was expected, but got \`${JSON.stringify(val)}\`.`);
        }
        if (val === "") {
          warn(logging, "getStaticPaths", `invalid path param: ${key}. \`undefined\` expected for an optional param, but got empty string.`);
        }
      }
    });
  }

  // node_modules/astro/dist/core/routing/params.js
  function getParams(array) {
    const fn = (match) => {
      const params = {};
      array.forEach((key, i) => {
        if (key.startsWith("...")) {
          params[key.slice(3)] = match[i + 1] ? decodeURIComponent(match[i + 1]) : void 0;
        } else {
          params[key] = decodeURIComponent(match[i + 1]);
        }
      });
      return params;
    };
    return fn;
  }
  function stringifyParams(params) {
    const validatedParams = Object.entries(params).reduce((acc, next) => {
      validateGetStaticPathsParameter(next);
      const [key, value] = next;
      acc[key] = `${value}`;
      return acc;
    }, {});
    return JSON.stringify(validatedParams, Object.keys(params).sort());
  }

  // node_modules/astro/dist/core/render/util.js
  var import_path_browserify = __toESM(require_path_browserify(), 1);
  function createCanonicalURL(url, base) {
    let pathname = url.replace(/\/index.html$/, "");
    pathname = pathname.replace(/\/1\/?$/, "");
    if (!import_path_browserify.default.extname(pathname))
      pathname = pathname.replace(/(\/+)?$/, "/");
    pathname = pathname.replace(/\/+/g, "/");
    return new URL(pathname, base);
  }
  var STYLE_EXTENSIONS = /* @__PURE__ */ new Set([
    ".css",
    ".pcss",
    ".postcss",
    ".scss",
    ".sass",
    ".styl",
    ".stylus",
    ".less"
  ]);
  var cssRe = new RegExp(`\\.(${Array.from(STYLE_EXTENSIONS).map((s) => s.slice(1)).join("|")})($|\\?)`);
  var isCSSRequest = (request) => cssRe.test(request);

  // node_modules/astro/dist/core/render/script.js
  var SCRIPT_EXTENSIONS = /* @__PURE__ */ new Set([".js", ".ts"]);
  var scriptRe = new RegExp(`\\.(${Array.from(SCRIPT_EXTENSIONS).map((s) => s.slice(1)).join("|")})($|\\?)`);
  var isScriptRequest = (request) => scriptRe.test(request);

  // node_modules/astro/dist/core/render/result.js
  var __defProp3 = Object.defineProperty;
  var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
  var __hasOwnProp3 = Object.prototype.hasOwnProperty;
  var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues2 = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp3.call(b, prop))
        __defNormalProp2(a, prop, b[prop]);
    if (__getOwnPropSymbols2)
      for (var prop of __getOwnPropSymbols2(b)) {
        if (__propIsEnum2.call(b, prop))
          __defNormalProp2(a, prop, b[prop]);
      }
    return a;
  };
  var __accessCheck = (obj, member, msg) => {
    if (!member.has(obj))
      throw TypeError("Cannot " + msg);
  };
  var __privateGet = (obj, member, getter) => {
    __accessCheck(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
  };
  var __privateAdd = (obj, member, value) => {
    if (member.has(obj))
      throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  };
  var __privateSet = (obj, member, value, setter) => {
    __accessCheck(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
  };
  var _cache;
  var _result;
  var _slots;
  function onlyAvailableInSSR(name) {
    return function() {
      throw new Error(`Oops, you are trying to use ${name}, which is only available with SSR.`);
    };
  }
  function getFunctionExpression(slot) {
    var _a;
    if (!slot)
      return;
    if (((_a = slot.expressions) == null ? void 0 : _a.length) !== 1)
      return;
    return slot.expressions[0];
  }
  var Slots = class {
    constructor(result, slots) {
      __privateAdd(this, _cache, /* @__PURE__ */ new Map());
      __privateAdd(this, _result, void 0);
      __privateAdd(this, _slots, void 0);
      __privateSet(this, _result, result);
      __privateSet(this, _slots, slots);
      if (slots) {
        for (const key of Object.keys(slots)) {
          if (this[key] !== void 0) {
            throw new Error(`Unable to create a slot named "${key}". "${key}" is a reserved slot name!
Please update the name of this slot.`);
          }
          Object.defineProperty(this, key, {
            get() {
              return true;
            },
            enumerable: true
          });
        }
      }
    }
    has(name) {
      if (!__privateGet(this, _slots))
        return false;
      return Boolean(__privateGet(this, _slots)[name]);
    }
    async render(name, args = []) {
      const cacheable = args.length === 0;
      if (!__privateGet(this, _slots))
        return void 0;
      if (cacheable && __privateGet(this, _cache).has(name)) {
        const result = __privateGet(this, _cache).get(name);
        return result;
      }
      if (!this.has(name))
        return void 0;
      if (!cacheable) {
        const component = await __privateGet(this, _slots)[name]();
        const expression = getFunctionExpression(component);
        if (expression) {
          const slot = expression(...args);
          return await renderSlot(__privateGet(this, _result), slot).then((res) => res != null ? String(res) : res);
        }
      }
      const content = await renderSlot(__privateGet(this, _result), __privateGet(this, _slots)[name]).then((res) => res != null ? String(res) : res);
      if (cacheable)
        __privateGet(this, _cache).set(name, content);
      return content;
    }
  };
  _cache = /* @__PURE__ */ new WeakMap();
  _result = /* @__PURE__ */ new WeakMap();
  _slots = /* @__PURE__ */ new WeakMap();
  var renderMarkdown = null;
  function createResult(args) {
    const { markdown, params, pathname, renderers: renderers2, request, resolve: resolve2, site } = args;
    const url = new URL(request.url);
    const canonicalURL = createCanonicalURL("." + pathname, site ?? url.origin);
    const result = {
      styles: /* @__PURE__ */ new Set(),
      scripts: args.scripts ?? /* @__PURE__ */ new Set(),
      links: args.links ?? /* @__PURE__ */ new Set(),
      createAstro(astroGlobal, props, slots) {
        const astroSlots = new Slots(result, slots);
        const Astro = {
          __proto__: astroGlobal,
          canonicalURL,
          params,
          props,
          request,
          redirect: args.ssr ? (path) => {
            return new Response(null, {
              status: 301,
              headers: {
                Location: path
              }
            });
          } : onlyAvailableInSSR("Astro.redirect"),
          resolve(path) {
            let extra = `This can be replaced with a dynamic import like so: await import("${path}")`;
            if (isCSSRequest(path)) {
              extra = `It looks like you are resolving styles. If you are adding a link tag, replace with this:
---
import "${path}";
---
`;
            } else if (isScriptRequest(path)) {
              extra = `It looks like you are resolving scripts. If you are adding a script tag, replace with this:

<script type="module" src={(await import("${path}?url")).default}><\/script>

or consider make it a module like so:

<script>
	import MyModule from "${path}";
<\/script>
`;
            }
            warn(args.logging, `deprecation`, `${bold("Astro.resolve()")} is deprecated. We see that you are trying to resolve ${path}.
${extra}`);
            return "";
          },
          slots: astroSlots
        };
        Object.defineProperty(Astro, "__renderMarkdown", {
          enumerable: false,
          writable: false,
          value: async function(content, opts) {
            if (typeof Deno !== "undefined") {
              throw new Error("Markdown is not supported in Deno SSR");
            }
            if (!renderMarkdown) {
              let astroRemark = "@astrojs/markdown-remark";
              renderMarkdown = (await import(astroRemark)).renderMarkdown;
            }
            const { code } = await renderMarkdown(content, __spreadValues2(__spreadValues2({}, markdown), opts ?? {}));
            return code;
          }
        });
        return Astro;
      },
      resolve: resolve2,
      _metadata: {
        renderers: renderers2,
        pathname
      }
    };
    return result;
  }

  // node_modules/astro/dist/core/render/paginate.js
  var __defProp4 = Object.defineProperty;
  var __defProps2 = Object.defineProperties;
  var __getOwnPropDescs2 = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols3 = Object.getOwnPropertySymbols;
  var __hasOwnProp4 = Object.prototype.hasOwnProperty;
  var __propIsEnum3 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp3 = (obj, key, value) => key in obj ? __defProp4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues3 = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp4.call(b, prop))
        __defNormalProp3(a, prop, b[prop]);
    if (__getOwnPropSymbols3)
      for (var prop of __getOwnPropSymbols3(b)) {
        if (__propIsEnum3.call(b, prop))
          __defNormalProp3(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps2 = (a, b) => __defProps2(a, __getOwnPropDescs2(b));
  function generatePaginateFunction(routeMatch) {
    return function paginateUtility(data, args = {}) {
      let { pageSize: _pageSize, params: _params, props: _props } = args;
      const pageSize = _pageSize || 10;
      const paramName = "page";
      const additionalParams = _params || {};
      const additionalProps = _props || {};
      let includesFirstPageNumber;
      if (routeMatch.params.includes(`...${paramName}`)) {
        includesFirstPageNumber = false;
      } else if (routeMatch.params.includes(`${paramName}`)) {
        includesFirstPageNumber = true;
      } else {
        throw new Error(`[paginate()] page number param \`${paramName}\` not found in your filepath.
Rename your file to \`[...page].astro\` or customize the param name via the \`paginate([], {param: '...'}\` option.`);
      }
      const lastPage = Math.max(1, Math.ceil(data.length / pageSize));
      const result = [...Array(lastPage).keys()].map((num) => {
        const pageNum = num + 1;
        const start2 = pageSize === Infinity ? 0 : (pageNum - 1) * pageSize;
        const end = Math.min(start2 + pageSize, data.length);
        const params = __spreadProps2(__spreadValues3({}, additionalParams), {
          [paramName]: includesFirstPageNumber || pageNum > 1 ? String(pageNum) : void 0
        });
        return {
          params,
          props: __spreadProps2(__spreadValues3({}, additionalProps), {
            page: {
              data: data.slice(start2, end),
              start: start2,
              end: end - 1,
              size: pageSize,
              total: data.length,
              currentPage: pageNum,
              lastPage,
              url: {
                current: routeMatch.generate(__spreadValues3({}, params)),
                next: pageNum === lastPage ? void 0 : routeMatch.generate(__spreadProps2(__spreadValues3({}, params), { page: String(pageNum + 1) })),
                prev: pageNum === 1 ? void 0 : routeMatch.generate(__spreadProps2(__spreadValues3({}, params), {
                  page: !includesFirstPageNumber && pageNum - 1 === 1 ? void 0 : String(pageNum - 1)
                }))
              }
            }
          })
        };
      });
      return result;
    };
  }

  // node_modules/astro/dist/core/render/route-cache.js
  async function callGetStaticPaths({
    isValidate,
    logging,
    mod,
    route,
    ssr
  }) {
    validateGetStaticPathsModule(mod, { ssr });
    const resultInProgress = {
      rss: []
    };
    let staticPaths = [];
    if (mod.getStaticPaths) {
      staticPaths = (await mod.getStaticPaths({
        paginate: generatePaginateFunction(route),
        rss: (data) => {
          resultInProgress.rss.push(data);
        }
      })).flat();
    }
    const keyedStaticPaths = staticPaths;
    keyedStaticPaths.keyed = /* @__PURE__ */ new Map();
    for (const sp of keyedStaticPaths) {
      const paramsKey = stringifyParams(sp.params);
      keyedStaticPaths.keyed.set(paramsKey, sp);
    }
    if (isValidate) {
      validateGetStaticPathsResult(keyedStaticPaths, logging);
    }
    return {
      rss: resultInProgress.rss,
      staticPaths: keyedStaticPaths
    };
  }
  var RouteCache = class {
    constructor(logging) {
      this.cache = {};
      this.logging = logging;
    }
    clearAll() {
      this.cache = {};
    }
    set(route, entry) {
      if (this.cache[route.component]) {
        warn(this.logging, "routeCache", `Internal Warning: route cache overwritten. (${route.component})`);
      }
      this.cache[route.component] = entry;
    }
    get(route) {
      return this.cache[route.component];
    }
  };
  function findPathItemByKey(staticPaths, params) {
    const paramsKey = stringifyParams(params);
    let matchedStaticPath = staticPaths.keyed.get(paramsKey);
    if (matchedStaticPath) {
      return matchedStaticPath;
    }
    debug("findPathItemByKey", `Unexpected cache miss looking for ${paramsKey}`);
    matchedStaticPath = staticPaths.find(({ params: _params }) => JSON.stringify(_params) === paramsKey);
  }

  // node_modules/astro/dist/core/render/core.js
  var __defProp5 = Object.defineProperty;
  var __getOwnPropSymbols4 = Object.getOwnPropertySymbols;
  var __hasOwnProp5 = Object.prototype.hasOwnProperty;
  var __propIsEnum4 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp4 = (obj, key, value) => key in obj ? __defProp5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues4 = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp5.call(b, prop))
        __defNormalProp4(a, prop, b[prop]);
    if (__getOwnPropSymbols4)
      for (var prop of __getOwnPropSymbols4(b)) {
        if (__propIsEnum4.call(b, prop))
          __defNormalProp4(a, prop, b[prop]);
      }
    return a;
  };
  var GetParamsAndPropsError = /* @__PURE__ */ ((GetParamsAndPropsError2) => {
    GetParamsAndPropsError2[GetParamsAndPropsError2["NoMatchingStaticPath"] = 0] = "NoMatchingStaticPath";
    return GetParamsAndPropsError2;
  })(GetParamsAndPropsError || {});
  async function getParamsAndProps(opts) {
    const { logging, mod, route, routeCache, pathname, ssr } = opts;
    let params = {};
    let pageProps;
    if (route && !route.pathname) {
      if (route.params.length) {
        const paramsMatch = route.pattern.exec(pathname);
        if (paramsMatch) {
          params = getParams(route.params)(paramsMatch);
        }
      }
      let routeCacheEntry = routeCache.get(route);
      if (!routeCacheEntry) {
        routeCacheEntry = await callGetStaticPaths({ mod, route, isValidate: true, logging, ssr });
        routeCache.set(route, routeCacheEntry);
      }
      const matchedStaticPath = findPathItemByKey(routeCacheEntry.staticPaths, params);
      if (!matchedStaticPath && !ssr) {
        return 0;
      }
      pageProps = (matchedStaticPath == null ? void 0 : matchedStaticPath.props) ? __spreadValues4({}, matchedStaticPath.props) : {};
    } else {
      pageProps = {};
    }
    return [params, pageProps];
  }
  async function render(opts) {
    const {
      links,
      logging,
      origin,
      markdown,
      mod,
      pathname,
      scripts,
      renderers: renderers2,
      request,
      resolve: resolve2,
      route,
      routeCache,
      site,
      ssr
    } = opts;
    const paramsAndPropsRes = await getParamsAndProps({
      logging,
      mod,
      route,
      routeCache,
      pathname,
      ssr
    });
    if (paramsAndPropsRes === 0) {
      throw new Error(`[getStaticPath] route pattern matched, but no matching static path found. (${pathname})`);
    }
    const [params, pageProps] = paramsAndPropsRes;
    const Component = await mod.default;
    if (!Component)
      throw new Error(`Expected an exported Astro component but received typeof ${typeof Component}`);
    if (!Component.isAstroComponentFactory)
      throw new Error(`Unable to SSR non-Astro component (${route == null ? void 0 : route.component})`);
    const result = createResult({
      links,
      logging,
      markdown,
      origin,
      params,
      pathname,
      resolve: resolve2,
      renderers: renderers2,
      request,
      site,
      scripts,
      ssr
    });
    let page = await renderPage(result, Component, pageProps, null);
    if (page.type === "response") {
      return page;
    }
    let html = page.html;
    if (html.indexOf("<!--astro:head:injected-->") == -1) {
      html = await renderHead(result) + html;
    }
    html = html.replace("<!--astro:head:injected-->", "");
    if (!/<!doctype html/i.test(html)) {
      html = "<!DOCTYPE html>\n" + html;
    }
    return {
      type: "html",
      html
    };
  }

  // node_modules/astro/dist/core/endpoint/index.js
  var __defProp6 = Object.defineProperty;
  var __defProps3 = Object.defineProperties;
  var __getOwnPropDescs3 = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols5 = Object.getOwnPropertySymbols;
  var __hasOwnProp6 = Object.prototype.hasOwnProperty;
  var __propIsEnum5 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp5 = (obj, key, value) => key in obj ? __defProp6(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues5 = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp6.call(b, prop))
        __defNormalProp5(a, prop, b[prop]);
    if (__getOwnPropSymbols5)
      for (var prop of __getOwnPropSymbols5(b)) {
        if (__propIsEnum5.call(b, prop))
          __defNormalProp5(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps3 = (a, b) => __defProps3(a, __getOwnPropDescs3(b));
  async function call(mod, opts) {
    const paramsAndPropsResp = await getParamsAndProps(__spreadProps3(__spreadValues5({}, opts), { mod }));
    if (paramsAndPropsResp === GetParamsAndPropsError.NoMatchingStaticPath) {
      throw new Error(`[getStaticPath] route pattern matched, but no matching static path found. (${opts.pathname})`);
    }
    const [params] = paramsAndPropsResp;
    const response = await renderEndpoint(mod, opts.request, params);
    if (response instanceof Response) {
      return {
        type: "response",
        response
      };
    }
    return {
      type: "simple",
      body: response.body
    };
  }

  // node_modules/astro/dist/core/render/ssr-element.js
  var import_path_browserify2 = __toESM(require_path_browserify(), 1);

  // node_modules/astro/dist/core/path.js
  function appendForwardSlash(path) {
    return path.endsWith("/") ? path : path + "/";
  }
  function prependForwardSlash(path) {
    return path[0] === "/" ? path : "/" + path;
  }

  // node_modules/astro/dist/core/render/ssr-element.js
  function getRootPath(site) {
    return appendForwardSlash(new URL(site || "http://localhost/").pathname);
  }
  function joinToRoot(href, site) {
    return import_path_browserify2.default.posix.join(getRootPath(site), href);
  }
  function createLinkStylesheetElement(href, site) {
    return {
      props: {
        rel: "stylesheet",
        href: joinToRoot(href, site)
      },
      children: ""
    };
  }
  function createLinkStylesheetElementSet(hrefs, site) {
    return new Set(hrefs.map((href) => createLinkStylesheetElement(href, site)));
  }
  function createModuleScriptElementWithSrc(src2, site) {
    return {
      props: {
        type: "module",
        src: joinToRoot(src2, site)
      },
      children: ""
    };
  }
  function createModuleScriptElementWithSrcSet(srces, site) {
    return new Set(srces.map((src2) => createModuleScriptElementWithSrc(src2, site)));
  }

  // node_modules/astro/dist/core/app/index.js
  var __accessCheck2 = (obj, member, msg) => {
    if (!member.has(obj))
      throw TypeError("Cannot " + msg);
  };
  var __privateGet2 = (obj, member, getter) => {
    __accessCheck2(obj, member, "read from private field");
    return getter ? getter.call(obj) : member.get(obj);
  };
  var __privateAdd2 = (obj, member, value) => {
    if (member.has(obj))
      throw TypeError("Cannot add the same private member more than once");
    member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  };
  var __privateSet2 = (obj, member, value, setter) => {
    __accessCheck2(obj, member, "write to private field");
    setter ? setter.call(obj, value) : member.set(obj, value);
    return value;
  };
  var __privateMethod = (obj, member, method) => {
    __accessCheck2(obj, member, "access private method");
    return method;
  };
  var _manifest;
  var _manifestData;
  var _routeDataToRouteInfo;
  var _routeCache;
  var _encoder;
  var _logging;
  var _renderPage;
  var renderPage_fn;
  var _callEndpoint;
  var callEndpoint_fn;
  var App = class {
    constructor(manifest) {
      __privateAdd2(this, _renderPage);
      __privateAdd2(this, _callEndpoint);
      __privateAdd2(this, _manifest, void 0);
      __privateAdd2(this, _manifestData, void 0);
      __privateAdd2(this, _routeDataToRouteInfo, void 0);
      __privateAdd2(this, _routeCache, void 0);
      __privateAdd2(this, _encoder, new TextEncoder());
      __privateAdd2(this, _logging, {
        dest: consoleLogDestination,
        level: "info"
      });
      __privateSet2(this, _manifest, manifest);
      __privateSet2(this, _manifestData, {
        routes: manifest.routes.map((route) => route.routeData)
      });
      __privateSet2(this, _routeDataToRouteInfo, new Map(manifest.routes.map((route) => [route.routeData, route])));
      __privateSet2(this, _routeCache, new RouteCache(__privateGet2(this, _logging)));
    }
    match(request) {
      const url = new URL(request.url);
      return matchRoute(url.pathname, __privateGet2(this, _manifestData));
    }
    async render(request, routeData) {
      if (!routeData) {
        routeData = this.match(request);
        if (!routeData) {
          return new Response(null, {
            status: 404,
            statusText: "Not found"
          });
        }
      }
      const mod = __privateGet2(this, _manifest).pageMap.get(routeData.component);
      if (routeData.type === "page") {
        return __privateMethod(this, _renderPage, renderPage_fn).call(this, request, routeData, mod);
      } else if (routeData.type === "endpoint") {
        return __privateMethod(this, _callEndpoint, callEndpoint_fn).call(this, request, routeData, mod);
      } else {
        throw new Error(`Unsupported route type [${routeData.type}].`);
      }
    }
  };
  _manifest = /* @__PURE__ */ new WeakMap();
  _manifestData = /* @__PURE__ */ new WeakMap();
  _routeDataToRouteInfo = /* @__PURE__ */ new WeakMap();
  _routeCache = /* @__PURE__ */ new WeakMap();
  _encoder = /* @__PURE__ */ new WeakMap();
  _logging = /* @__PURE__ */ new WeakMap();
  _renderPage = /* @__PURE__ */ new WeakSet();
  renderPage_fn = async function(request, routeData, mod) {
    const url = new URL(request.url);
    const manifest = __privateGet2(this, _manifest);
    const renderers2 = manifest.renderers;
    const info = __privateGet2(this, _routeDataToRouteInfo).get(routeData);
    const links = createLinkStylesheetElementSet(info.links, manifest.site);
    const scripts = createModuleScriptElementWithSrcSet(info.scripts, manifest.site);
    const result = await render({
      links,
      logging: __privateGet2(this, _logging),
      markdown: manifest.markdown,
      mod,
      origin: url.origin,
      pathname: url.pathname,
      scripts,
      renderers: renderers2,
      async resolve(specifier) {
        if (!(specifier in manifest.entryModules)) {
          throw new Error(`Unable to resolve [${specifier}]`);
        }
        const bundlePath = manifest.entryModules[specifier];
        return bundlePath.startsWith("data:") ? bundlePath : prependForwardSlash(bundlePath);
      },
      route: routeData,
      routeCache: __privateGet2(this, _routeCache),
      site: __privateGet2(this, _manifest).site,
      ssr: true,
      request
    });
    if (result.type === "response") {
      return result.response;
    }
    let html = result.html;
    let bytes = __privateGet2(this, _encoder).encode(html);
    return new Response(bytes, {
      status: 200,
      headers: {
        "Content-Type": "text/html",
        "Content-Length": bytes.byteLength.toString()
      }
    });
  };
  _callEndpoint = /* @__PURE__ */ new WeakSet();
  callEndpoint_fn = async function(request, routeData, mod) {
    const url = new URL(request.url);
    const handler2 = mod;
    const result = await call(handler2, {
      logging: __privateGet2(this, _logging),
      origin: url.origin,
      pathname: url.pathname,
      request,
      route: routeData,
      routeCache: __privateGet2(this, _routeCache),
      ssr: true
    });
    if (result.type === "response") {
      return result.response;
    } else {
      const body = result.body;
      const headers = new Headers();
      const mimeType = import_mime.default.getType(url.pathname);
      if (mimeType) {
        headers.set("Content-Type", mimeType);
      }
      const bytes = __privateGet2(this, _encoder).encode(body);
      headers.set("Content-Length", bytes.byteLength.toString());
      return new Response(bytes, {
        status: 200,
        headers
      });
    }
  };

  // node_modules/@astrojs/node/dist/shim.js
  self.process = {
    env: {},
    argv: []
  };
  self.global = globalThis;

  // node_modules/@astrojs/node/dist/server.js
  self.addEventListener("install", (event) => {
    console.log("sw install");
  });
  self.addEventListener("activate", () => {
    console.log("sw activate");
    clients.claim();
  });
  var app;
  function createExports(manifest) {
    app = new App(manifest);
    return {
      async handler(req, res, next) {
        const route = app.match(req);
        if (route) {
          try {
            const response = await app.render(req);
          } catch (err) {
            if (next) {
              next(err);
            } else {
              throw err;
            }
          }
        } else if (next) {
          return next();
        }
      }
    };
  }
  async function start(manifest, args) {
    self.addEventListener("fetch", async (event) => {
      const match = app.match(event.request);
      if (event.request.mode === "navigate") {
        console.log(1, { manifest, match, event });
        if (match) {
          for (const route of args.networkOnly) {
            const pattern = new URLPattern({ pathname: route });
            const match2 = pattern.exec(event.request.url);
            if (match2) {
              return event.respondWith(fetch(event.request));
            }
          }
          const response = await app.render(event.request);
          return event.respondWith(response);
        }
      }
    });
  }

  // dist/index.js
  var import_shorthash2 = __toESM(require_shorthash2(), 1);
  var import_serialize_javascript2 = __toESM(require_serialize_javascript(), 1);
  var { replace: replace2 } = "";
  var ca2 = /[&<>'"]/g;
  var esca2 = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  };
  var pe2 = (m) => esca2[m];
  var escape2 = (es) => replace2.call(es, ca2, pe2);
  var escapeHTML2 = escape2;
  var HTMLString2 = class extends String {
  };
  var markHTMLString2 = (value) => {
    if (value instanceof HTMLString2) {
      return value;
    }
    if (typeof value === "string") {
      return new HTMLString2(value);
    }
    return value;
  };
  function hydrationSpecifier2(hydrate) {
    return `astro/client/${hydrate}.js`;
  }
  var Metadata = class {
    constructor(filePathname, opts) {
      this.modules = opts.modules;
      this.hoisted = opts.hoisted;
      this.hydratedComponents = opts.hydratedComponents;
      this.clientOnlyComponents = opts.clientOnlyComponents;
      this.hydrationDirectives = opts.hydrationDirectives;
      this.mockURL = new URL(filePathname, "http://example.com");
      this.metadataCache = /* @__PURE__ */ new Map();
    }
    resolvePath(specifier) {
      return specifier.startsWith(".") ? new URL(specifier, this.mockURL).pathname : specifier;
    }
    getPath(Component) {
      const metadata = this.getComponentMetadata(Component);
      return (metadata == null ? void 0 : metadata.componentUrl) || null;
    }
    getExport(Component) {
      const metadata = this.getComponentMetadata(Component);
      return (metadata == null ? void 0 : metadata.componentExport) || null;
    }
    *hydratedComponentPaths() {
      const found = /* @__PURE__ */ new Set();
      for (const metadata of this.deepMetadata()) {
        for (const component of metadata.hydratedComponents) {
          const path = metadata.getPath(component);
          if (path && !found.has(path)) {
            found.add(path);
            yield path;
          }
        }
      }
    }
    *clientOnlyComponentPaths() {
      const found = /* @__PURE__ */ new Set();
      for (const metadata of this.deepMetadata()) {
        for (const component of metadata.clientOnlyComponents) {
          const path = metadata.resolvePath(component);
          if (path && !found.has(path)) {
            found.add(path);
            yield path;
          }
        }
      }
    }
    *hydrationDirectiveSpecifiers() {
      const found = /* @__PURE__ */ new Set();
      for (const metadata of this.deepMetadata()) {
        for (const directive of metadata.hydrationDirectives) {
          if (!found.has(directive)) {
            found.add(directive);
            yield hydrationSpecifier2(directive);
          }
        }
      }
    }
    *hoistedScriptPaths() {
      for (const metadata of this.deepMetadata()) {
        let i = 0, pathname = metadata.mockURL.pathname;
        while (i < metadata.hoisted.length) {
          yield `${pathname}?astro&type=script&index=${i}`;
          i++;
        }
      }
    }
    *deepMetadata() {
      yield this;
      const seen = /* @__PURE__ */ new Set();
      for (const { module: mod } of this.modules) {
        if (typeof mod.$$metadata !== "undefined") {
          const md = mod.$$metadata;
          for (const childMetdata of md.deepMetadata()) {
            if (!seen.has(childMetdata)) {
              seen.add(childMetdata);
              yield childMetdata;
            }
          }
        }
      }
    }
    getComponentMetadata(Component) {
      if (this.metadataCache.has(Component)) {
        return this.metadataCache.get(Component);
      }
      const metadata = this.findComponentMetadata(Component);
      this.metadataCache.set(Component, metadata);
      return metadata;
    }
    findComponentMetadata(Component) {
      const isCustomElement = typeof Component === "string";
      for (const { module, specifier } of this.modules) {
        const id = this.resolvePath(specifier);
        for (const [key, value] of Object.entries(module)) {
          if (isCustomElement) {
            if (key === "tagName" && Component === value) {
              return {
                componentExport: key,
                componentUrl: id
              };
            }
          } else if (Component === value) {
            return {
              componentExport: key,
              componentUrl: id
            };
          }
        }
      }
      return null;
    }
  };
  function createMetadata2(filePathname, options) {
    return new Metadata(filePathname, options);
  }
  async function _render2(child) {
    child = await child;
    if (child instanceof HTMLString2) {
      return child;
    } else if (Array.isArray(child)) {
      return markHTMLString2((await Promise.all(child.map((value) => _render2(value)))).join(""));
    } else if (typeof child === "function") {
      return _render2(child());
    } else if (typeof child === "string") {
      return markHTMLString2(escapeHTML2(child));
    } else if (!child && child !== 0)
      ;
    else if (child instanceof AstroComponent2 || Object.prototype.toString.call(child) === "[object AstroComponent]") {
      return markHTMLString2(await renderAstroComponent2(child));
    } else {
      return child;
    }
  }
  var AstroComponent2 = class {
    constructor(htmlParts, expressions) {
      this.htmlParts = htmlParts;
      this.expressions = expressions;
    }
    get [Symbol.toStringTag]() {
      return "AstroComponent";
    }
    *[Symbol.iterator]() {
      const { htmlParts, expressions } = this;
      for (let i = 0; i < htmlParts.length; i++) {
        const html = htmlParts[i];
        const expression = expressions[i];
        yield markHTMLString2(html);
        yield _render2(expression);
      }
    }
  };
  async function render2(htmlParts, ...expressions) {
    return new AstroComponent2(htmlParts, expressions);
  }
  function createComponent(cb) {
    cb.isAstroComponentFactory = true;
    return cb;
  }
  function createDeprecatedFetchContentFn() {
    return () => {
      throw new Error("Deprecated: Astro.fetchContent() has been replaced with Astro.glob().");
    };
  }
  function createAstroGlobFn() {
    const globHandler = (importMetaGlobResult, globValue) => {
      let allEntries = [...Object.values(importMetaGlobResult)];
      if (allEntries.length === 0) {
        throw new Error(`Astro.glob(${JSON.stringify(globValue())}) - no matches found.`);
      }
      return Promise.all(allEntries.map((fn) => fn()));
    };
    return globHandler;
  }
  function createAstro(filePathname, _site, projectRootStr) {
    const site = new URL(_site);
    const url = new URL(filePathname, site);
    const projectRoot = new URL(projectRootStr);
    return {
      site,
      fetchContent: createDeprecatedFetchContentFn(),
      glob: createAstroGlobFn(),
      resolve(...segments) {
        let resolved = segments.reduce((u, segment) => new URL(segment, u), url).pathname;
        if (resolved.startsWith(projectRoot.pathname)) {
          resolved = "/" + resolved.slice(projectRoot.pathname.length);
        }
        return resolved;
      }
    };
  }
  async function renderAstroComponent2(component) {
    let template = [];
    for await (const value of component) {
      if (value || value === 0) {
        template.push(value);
      }
    }
    return markHTMLString2(await _render2(template));
  }
  var $$metadata$2 = createMetadata2("/src/pages/index.astro", { modules: [], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [{ type: "inline", value: `
		navigator.serviceWorker.register('/sw.js');
	` }] });
  var $$Astro$2 = createAstro("/src/pages/index.astro", "https://astro.build", "file:///Users/au87xu/astro-service-worker/");
  var $$Index = createComponent(async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
    Astro2.self = $$Index;
    return render2`<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width">
		<title>Astro</title>
	<!--astro:head--></head>
	<body>
		<h1>Astro</h1>
		<p>⚙️ I am rendered in a service worker</p>
		<ul>
			<a href="/about"><li>about</li></a>
			<a href="/networkonly"><li>network only route</li></a>
		</ul>
	
</body></html>`;
  });
  var _page0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    $$metadata: $$metadata$2,
    "default": $$Index
  }, Symbol.toStringTag, { value: "Module" }));
  var $$metadata$1 = createMetadata2("/src/pages/networkonly.astro", { modules: [], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [{ type: "inline", value: `
		navigator.serviceWorker.register('/sw.js');
	` }] });
  var $$Astro$1 = createAstro("/src/pages/networkonly.astro", "https://astro.build", "file:///Users/au87xu/astro-service-worker/");
  var $$Networkonly = createComponent(async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
    Astro2.self = $$Networkonly;
    return render2`<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width">
		<title>Astro</title>
	<!--astro:head--></head>
	<body>
		<a href="/">home</a>
		<h1>Network only route</h1>
		<p>Hello i am rendered on the server only</p>
	
</body></html>`;
  });
  var _page1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    $$metadata: $$metadata$1,
    "default": $$Networkonly
  }, Symbol.toStringTag, { value: "Module" }));
  var $$metadata = createMetadata2("/src/pages/about.astro", { modules: [], hydratedComponents: [], clientOnlyComponents: [], hydrationDirectives: /* @__PURE__ */ new Set([]), hoisted: [{ type: "inline", value: `
		navigator.serviceWorker.register('/sw.js');
	` }] });
  var $$Astro = createAstro("/src/pages/about.astro", "https://astro.build", "file:///Users/au87xu/astro-service-worker/");
  var $$About = createComponent(async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
    Astro2.self = $$About;
    return render2`<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width">
		<title>Astro</title>
	<!--astro:head--></head>
	<body>
		<a href="/">home</a>
		<h1>About</h1>
		<p>Hello i am also rendered in a service worker</p>
	
</body></html>`;
  });
  var _page2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    $$metadata,
    "default": $$About
  }, Symbol.toStringTag, { value: "Module" }));
  var pageMap = /* @__PURE__ */ new Map([["src/pages/index.astro", _page0], ["src/pages/networkonly.astro", _page1], ["src/pages/about.astro", _page2]]);
  var renderers = [];
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function Mime$1() {
    this._types = /* @__PURE__ */ Object.create(null);
    this._extensions = /* @__PURE__ */ Object.create(null);
    for (let i = 0; i < arguments.length; i++) {
      this.define(arguments[i]);
    }
    this.define = this.define.bind(this);
    this.getType = this.getType.bind(this);
    this.getExtension = this.getExtension.bind(this);
  }
  Mime$1.prototype.define = function(typeMap, force) {
    for (let type in typeMap) {
      let extensions = typeMap[type].map(function(t) {
        return t.toLowerCase();
      });
      type = type.toLowerCase();
      for (let i = 0; i < extensions.length; i++) {
        const ext = extensions[i];
        if (ext[0] === "*") {
          continue;
        }
        if (!force && ext in this._types) {
          throw new Error('Attempt to change mapping for "' + ext + '" extension from "' + this._types[ext] + '" to "' + type + '". Pass `force=true` to allow this, otherwise remove "' + ext + '" from the list of extensions for "' + type + '".');
        }
        this._types[ext] = type;
      }
      if (force || !this._extensions[type]) {
        const ext = extensions[0];
        this._extensions[type] = ext[0] !== "*" ? ext : ext.substr(1);
      }
    }
  };
  Mime$1.prototype.getType = function(path) {
    path = String(path);
    let last = path.replace(/^.*[/\\]/, "").toLowerCase();
    let ext = last.replace(/^.*\./, "").toLowerCase();
    let hasPath = last.length < path.length;
    let hasDot = ext.length < last.length - 1;
    return (hasDot || !hasPath) && this._types[ext] || null;
  };
  Mime$1.prototype.getExtension = function(type) {
    type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
    return type && this._extensions[type.toLowerCase()] || null;
  };
  var Mime_1 = Mime$1;
  var standard = { "application/andrew-inset": ["ez"], "application/applixware": ["aw"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cu-seeme": ["cu"], "application/dash+xml": ["mpd"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["es", "ecma"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/express": ["exp"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["js", "mjs"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["mp4s", "m4p"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-signature": ["asc", "sig"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/trig": ["trig"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avif": ["avif"], "image/bmp": ["bmp"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/step+xml": ["stpx"], "model/step+zip": ["stpz"], "model/step-xml+zip": ["stpxz"], "model/stl": ["stl"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["markdown", "md"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"] };
  var other = { "application/prs.cww": ["cww"], "application/vnd.1000minds.decision-model+xml": ["1km"], "application/vnd.3gpp.pic-bw-large": ["plb"], "application/vnd.3gpp.pic-bw-small": ["psb"], "application/vnd.3gpp.pic-bw-var": ["pvb"], "application/vnd.3gpp2.tcap": ["tcap"], "application/vnd.3m.post-it-notes": ["pwn"], "application/vnd.accpac.simply.aso": ["aso"], "application/vnd.accpac.simply.imp": ["imp"], "application/vnd.acucobol": ["acu"], "application/vnd.acucorp": ["atc", "acutc"], "application/vnd.adobe.air-application-installer-package+zip": ["air"], "application/vnd.adobe.formscentral.fcdt": ["fcdt"], "application/vnd.adobe.fxp": ["fxp", "fxpl"], "application/vnd.adobe.xdp+xml": ["xdp"], "application/vnd.adobe.xfdf": ["xfdf"], "application/vnd.ahead.space": ["ahead"], "application/vnd.airzip.filesecure.azf": ["azf"], "application/vnd.airzip.filesecure.azs": ["azs"], "application/vnd.amazon.ebook": ["azw"], "application/vnd.americandynamics.acc": ["acc"], "application/vnd.amiga.ami": ["ami"], "application/vnd.android.package-archive": ["apk"], "application/vnd.anser-web-certificate-issue-initiation": ["cii"], "application/vnd.anser-web-funds-transfer-initiation": ["fti"], "application/vnd.antix.game-component": ["atx"], "application/vnd.apple.installer+xml": ["mpkg"], "application/vnd.apple.keynote": ["key"], "application/vnd.apple.mpegurl": ["m3u8"], "application/vnd.apple.numbers": ["numbers"], "application/vnd.apple.pages": ["pages"], "application/vnd.apple.pkpass": ["pkpass"], "application/vnd.aristanetworks.swi": ["swi"], "application/vnd.astraea-software.iota": ["iota"], "application/vnd.audiograph": ["aep"], "application/vnd.balsamiq.bmml+xml": ["bmml"], "application/vnd.blueice.multipass": ["mpm"], "application/vnd.bmi": ["bmi"], "application/vnd.businessobjects": ["rep"], "application/vnd.chemdraw+xml": ["cdxml"], "application/vnd.chipnuts.karaoke-mmd": ["mmd"], "application/vnd.cinderella": ["cdy"], "application/vnd.citationstyles.style+xml": ["csl"], "application/vnd.claymore": ["cla"], "application/vnd.cloanto.rp9": ["rp9"], "application/vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"], "application/vnd.cluetrust.cartomobile-config": ["c11amc"], "application/vnd.cluetrust.cartomobile-config-pkg": ["c11amz"], "application/vnd.commonspace": ["csp"], "application/vnd.contact.cmsg": ["cdbcmsg"], "application/vnd.cosmocaller": ["cmc"], "application/vnd.crick.clicker": ["clkx"], "application/vnd.crick.clicker.keyboard": ["clkk"], "application/vnd.crick.clicker.palette": ["clkp"], "application/vnd.crick.clicker.template": ["clkt"], "application/vnd.crick.clicker.wordbank": ["clkw"], "application/vnd.criticaltools.wbs+xml": ["wbs"], "application/vnd.ctc-posml": ["pml"], "application/vnd.cups-ppd": ["ppd"], "application/vnd.curl.car": ["car"], "application/vnd.curl.pcurl": ["pcurl"], "application/vnd.dart": ["dart"], "application/vnd.data-vision.rdz": ["rdz"], "application/vnd.dbf": ["dbf"], "application/vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"], "application/vnd.dece.ttml+xml": ["uvt", "uvvt"], "application/vnd.dece.unspecified": ["uvx", "uvvx"], "application/vnd.dece.zip": ["uvz", "uvvz"], "application/vnd.denovo.fcselayout-link": ["fe_launch"], "application/vnd.dna": ["dna"], "application/vnd.dolby.mlp": ["mlp"], "application/vnd.dpgraph": ["dpg"], "application/vnd.dreamfactory": ["dfac"], "application/vnd.ds-keypoint": ["kpxx"], "application/vnd.dvb.ait": ["ait"], "application/vnd.dvb.service": ["svc"], "application/vnd.dynageo": ["geo"], "application/vnd.ecowin.chart": ["mag"], "application/vnd.enliven": ["nml"], "application/vnd.epson.esf": ["esf"], "application/vnd.epson.msf": ["msf"], "application/vnd.epson.quickanime": ["qam"], "application/vnd.epson.salt": ["slt"], "application/vnd.epson.ssf": ["ssf"], "application/vnd.eszigno3+xml": ["es3", "et3"], "application/vnd.ezpix-album": ["ez2"], "application/vnd.ezpix-package": ["ez3"], "application/vnd.fdf": ["fdf"], "application/vnd.fdsn.mseed": ["mseed"], "application/vnd.fdsn.seed": ["seed", "dataless"], "application/vnd.flographit": ["gph"], "application/vnd.fluxtime.clip": ["ftc"], "application/vnd.framemaker": ["fm", "frame", "maker", "book"], "application/vnd.frogans.fnc": ["fnc"], "application/vnd.frogans.ltf": ["ltf"], "application/vnd.fsc.weblaunch": ["fsc"], "application/vnd.fujitsu.oasys": ["oas"], "application/vnd.fujitsu.oasys2": ["oa2"], "application/vnd.fujitsu.oasys3": ["oa3"], "application/vnd.fujitsu.oasysgp": ["fg5"], "application/vnd.fujitsu.oasysprs": ["bh2"], "application/vnd.fujixerox.ddd": ["ddd"], "application/vnd.fujixerox.docuworks": ["xdw"], "application/vnd.fujixerox.docuworks.binder": ["xbd"], "application/vnd.fuzzysheet": ["fzs"], "application/vnd.genomatix.tuxedo": ["txd"], "application/vnd.geogebra.file": ["ggb"], "application/vnd.geogebra.tool": ["ggt"], "application/vnd.geometry-explorer": ["gex", "gre"], "application/vnd.geonext": ["gxt"], "application/vnd.geoplan": ["g2w"], "application/vnd.geospace": ["g3w"], "application/vnd.gmx": ["gmx"], "application/vnd.google-apps.document": ["gdoc"], "application/vnd.google-apps.presentation": ["gslides"], "application/vnd.google-apps.spreadsheet": ["gsheet"], "application/vnd.google-earth.kml+xml": ["kml"], "application/vnd.google-earth.kmz": ["kmz"], "application/vnd.grafeq": ["gqf", "gqs"], "application/vnd.groove-account": ["gac"], "application/vnd.groove-help": ["ghf"], "application/vnd.groove-identity-message": ["gim"], "application/vnd.groove-injector": ["grv"], "application/vnd.groove-tool-message": ["gtm"], "application/vnd.groove-tool-template": ["tpl"], "application/vnd.groove-vcard": ["vcg"], "application/vnd.hal+xml": ["hal"], "application/vnd.handheld-entertainment+xml": ["zmm"], "application/vnd.hbci": ["hbci"], "application/vnd.hhe.lesson-player": ["les"], "application/vnd.hp-hpgl": ["hpgl"], "application/vnd.hp-hpid": ["hpid"], "application/vnd.hp-hps": ["hps"], "application/vnd.hp-jlyt": ["jlt"], "application/vnd.hp-pcl": ["pcl"], "application/vnd.hp-pclxl": ["pclxl"], "application/vnd.hydrostatix.sof-data": ["sfd-hdstx"], "application/vnd.ibm.minipay": ["mpy"], "application/vnd.ibm.modcap": ["afp", "listafp", "list3820"], "application/vnd.ibm.rights-management": ["irm"], "application/vnd.ibm.secure-container": ["sc"], "application/vnd.iccprofile": ["icc", "icm"], "application/vnd.igloader": ["igl"], "application/vnd.immervision-ivp": ["ivp"], "application/vnd.immervision-ivu": ["ivu"], "application/vnd.insors.igm": ["igm"], "application/vnd.intercon.formnet": ["xpw", "xpx"], "application/vnd.intergeo": ["i2g"], "application/vnd.intu.qbo": ["qbo"], "application/vnd.intu.qfx": ["qfx"], "application/vnd.ipunplugged.rcprofile": ["rcprofile"], "application/vnd.irepository.package+xml": ["irp"], "application/vnd.is-xpr": ["xpr"], "application/vnd.isac.fcs": ["fcs"], "application/vnd.jam": ["jam"], "application/vnd.jcp.javame.midlet-rms": ["rms"], "application/vnd.jisp": ["jisp"], "application/vnd.joost.joda-archive": ["joda"], "application/vnd.kahootz": ["ktz", "ktr"], "application/vnd.kde.karbon": ["karbon"], "application/vnd.kde.kchart": ["chrt"], "application/vnd.kde.kformula": ["kfo"], "application/vnd.kde.kivio": ["flw"], "application/vnd.kde.kontour": ["kon"], "application/vnd.kde.kpresenter": ["kpr", "kpt"], "application/vnd.kde.kspread": ["ksp"], "application/vnd.kde.kword": ["kwd", "kwt"], "application/vnd.kenameaapp": ["htke"], "application/vnd.kidspiration": ["kia"], "application/vnd.kinar": ["kne", "knp"], "application/vnd.koan": ["skp", "skd", "skt", "skm"], "application/vnd.kodak-descriptor": ["sse"], "application/vnd.las.las+xml": ["lasxml"], "application/vnd.llamagraphics.life-balance.desktop": ["lbd"], "application/vnd.llamagraphics.life-balance.exchange+xml": ["lbe"], "application/vnd.lotus-1-2-3": ["123"], "application/vnd.lotus-approach": ["apr"], "application/vnd.lotus-freelance": ["pre"], "application/vnd.lotus-notes": ["nsf"], "application/vnd.lotus-organizer": ["org"], "application/vnd.lotus-screencam": ["scm"], "application/vnd.lotus-wordpro": ["lwp"], "application/vnd.macports.portpkg": ["portpkg"], "application/vnd.mapbox-vector-tile": ["mvt"], "application/vnd.mcd": ["mcd"], "application/vnd.medcalcdata": ["mc1"], "application/vnd.mediastation.cdkey": ["cdkey"], "application/vnd.mfer": ["mwf"], "application/vnd.mfmp": ["mfm"], "application/vnd.micrografx.flo": ["flo"], "application/vnd.micrografx.igx": ["igx"], "application/vnd.mif": ["mif"], "application/vnd.mobius.daf": ["daf"], "application/vnd.mobius.dis": ["dis"], "application/vnd.mobius.mbk": ["mbk"], "application/vnd.mobius.mqy": ["mqy"], "application/vnd.mobius.msl": ["msl"], "application/vnd.mobius.plc": ["plc"], "application/vnd.mobius.txf": ["txf"], "application/vnd.mophun.application": ["mpn"], "application/vnd.mophun.certificate": ["mpc"], "application/vnd.mozilla.xul+xml": ["xul"], "application/vnd.ms-artgalry": ["cil"], "application/vnd.ms-cab-compressed": ["cab"], "application/vnd.ms-excel": ["xls", "xlm", "xla", "xlc", "xlt", "xlw"], "application/vnd.ms-excel.addin.macroenabled.12": ["xlam"], "application/vnd.ms-excel.sheet.binary.macroenabled.12": ["xlsb"], "application/vnd.ms-excel.sheet.macroenabled.12": ["xlsm"], "application/vnd.ms-excel.template.macroenabled.12": ["xltm"], "application/vnd.ms-fontobject": ["eot"], "application/vnd.ms-htmlhelp": ["chm"], "application/vnd.ms-ims": ["ims"], "application/vnd.ms-lrm": ["lrm"], "application/vnd.ms-officetheme": ["thmx"], "application/vnd.ms-outlook": ["msg"], "application/vnd.ms-pki.seccat": ["cat"], "application/vnd.ms-pki.stl": ["*stl"], "application/vnd.ms-powerpoint": ["ppt", "pps", "pot"], "application/vnd.ms-powerpoint.addin.macroenabled.12": ["ppam"], "application/vnd.ms-powerpoint.presentation.macroenabled.12": ["pptm"], "application/vnd.ms-powerpoint.slide.macroenabled.12": ["sldm"], "application/vnd.ms-powerpoint.slideshow.macroenabled.12": ["ppsm"], "application/vnd.ms-powerpoint.template.macroenabled.12": ["potm"], "application/vnd.ms-project": ["mpp", "mpt"], "application/vnd.ms-word.document.macroenabled.12": ["docm"], "application/vnd.ms-word.template.macroenabled.12": ["dotm"], "application/vnd.ms-works": ["wps", "wks", "wcm", "wdb"], "application/vnd.ms-wpl": ["wpl"], "application/vnd.ms-xpsdocument": ["xps"], "application/vnd.mseq": ["mseq"], "application/vnd.musician": ["mus"], "application/vnd.muvee.style": ["msty"], "application/vnd.mynfc": ["taglet"], "application/vnd.neurolanguage.nlu": ["nlu"], "application/vnd.nitf": ["ntf", "nitf"], "application/vnd.noblenet-directory": ["nnd"], "application/vnd.noblenet-sealer": ["nns"], "application/vnd.noblenet-web": ["nnw"], "application/vnd.nokia.n-gage.ac+xml": ["*ac"], "application/vnd.nokia.n-gage.data": ["ngdat"], "application/vnd.nokia.n-gage.symbian.install": ["n-gage"], "application/vnd.nokia.radio-preset": ["rpst"], "application/vnd.nokia.radio-presets": ["rpss"], "application/vnd.novadigm.edm": ["edm"], "application/vnd.novadigm.edx": ["edx"], "application/vnd.novadigm.ext": ["ext"], "application/vnd.oasis.opendocument.chart": ["odc"], "application/vnd.oasis.opendocument.chart-template": ["otc"], "application/vnd.oasis.opendocument.database": ["odb"], "application/vnd.oasis.opendocument.formula": ["odf"], "application/vnd.oasis.opendocument.formula-template": ["odft"], "application/vnd.oasis.opendocument.graphics": ["odg"], "application/vnd.oasis.opendocument.graphics-template": ["otg"], "application/vnd.oasis.opendocument.image": ["odi"], "application/vnd.oasis.opendocument.image-template": ["oti"], "application/vnd.oasis.opendocument.presentation": ["odp"], "application/vnd.oasis.opendocument.presentation-template": ["otp"], "application/vnd.oasis.opendocument.spreadsheet": ["ods"], "application/vnd.oasis.opendocument.spreadsheet-template": ["ots"], "application/vnd.oasis.opendocument.text": ["odt"], "application/vnd.oasis.opendocument.text-master": ["odm"], "application/vnd.oasis.opendocument.text-template": ["ott"], "application/vnd.oasis.opendocument.text-web": ["oth"], "application/vnd.olpc-sugar": ["xo"], "application/vnd.oma.dd2+xml": ["dd2"], "application/vnd.openblox.game+xml": ["obgx"], "application/vnd.openofficeorg.extension": ["oxt"], "application/vnd.openstreetmap.data+xml": ["osm"], "application/vnd.openxmlformats-officedocument.presentationml.presentation": ["pptx"], "application/vnd.openxmlformats-officedocument.presentationml.slide": ["sldx"], "application/vnd.openxmlformats-officedocument.presentationml.slideshow": ["ppsx"], "application/vnd.openxmlformats-officedocument.presentationml.template": ["potx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ["xlsx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.template": ["xltx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ["docx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.template": ["dotx"], "application/vnd.osgeo.mapguide.package": ["mgp"], "application/vnd.osgi.dp": ["dp"], "application/vnd.osgi.subsystem": ["esa"], "application/vnd.palm": ["pdb", "pqa", "oprc"], "application/vnd.pawaafile": ["paw"], "application/vnd.pg.format": ["str"], "application/vnd.pg.osasli": ["ei6"], "application/vnd.picsel": ["efif"], "application/vnd.pmi.widget": ["wg"], "application/vnd.pocketlearn": ["plf"], "application/vnd.powerbuilder6": ["pbd"], "application/vnd.previewsystems.box": ["box"], "application/vnd.proteus.magazine": ["mgz"], "application/vnd.publishare-delta-tree": ["qps"], "application/vnd.pvi.ptid1": ["ptid"], "application/vnd.quark.quarkxpress": ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"], "application/vnd.rar": ["rar"], "application/vnd.realvnc.bed": ["bed"], "application/vnd.recordare.musicxml": ["mxl"], "application/vnd.recordare.musicxml+xml": ["musicxml"], "application/vnd.rig.cryptonote": ["cryptonote"], "application/vnd.rim.cod": ["cod"], "application/vnd.rn-realmedia": ["rm"], "application/vnd.rn-realmedia-vbr": ["rmvb"], "application/vnd.route66.link66+xml": ["link66"], "application/vnd.sailingtracker.track": ["st"], "application/vnd.seemail": ["see"], "application/vnd.sema": ["sema"], "application/vnd.semd": ["semd"], "application/vnd.semf": ["semf"], "application/vnd.shana.informed.formdata": ["ifm"], "application/vnd.shana.informed.formtemplate": ["itp"], "application/vnd.shana.informed.interchange": ["iif"], "application/vnd.shana.informed.package": ["ipk"], "application/vnd.simtech-mindmapper": ["twd", "twds"], "application/vnd.smaf": ["mmf"], "application/vnd.smart.teacher": ["teacher"], "application/vnd.software602.filler.form+xml": ["fo"], "application/vnd.solent.sdkm+xml": ["sdkm", "sdkd"], "application/vnd.spotfire.dxp": ["dxp"], "application/vnd.spotfire.sfs": ["sfs"], "application/vnd.stardivision.calc": ["sdc"], "application/vnd.stardivision.draw": ["sda"], "application/vnd.stardivision.impress": ["sdd"], "application/vnd.stardivision.math": ["smf"], "application/vnd.stardivision.writer": ["sdw", "vor"], "application/vnd.stardivision.writer-global": ["sgl"], "application/vnd.stepmania.package": ["smzip"], "application/vnd.stepmania.stepchart": ["sm"], "application/vnd.sun.wadl+xml": ["wadl"], "application/vnd.sun.xml.calc": ["sxc"], "application/vnd.sun.xml.calc.template": ["stc"], "application/vnd.sun.xml.draw": ["sxd"], "application/vnd.sun.xml.draw.template": ["std"], "application/vnd.sun.xml.impress": ["sxi"], "application/vnd.sun.xml.impress.template": ["sti"], "application/vnd.sun.xml.math": ["sxm"], "application/vnd.sun.xml.writer": ["sxw"], "application/vnd.sun.xml.writer.global": ["sxg"], "application/vnd.sun.xml.writer.template": ["stw"], "application/vnd.sus-calendar": ["sus", "susp"], "application/vnd.svd": ["svd"], "application/vnd.symbian.install": ["sis", "sisx"], "application/vnd.syncml+xml": ["xsm"], "application/vnd.syncml.dm+wbxml": ["bdm"], "application/vnd.syncml.dm+xml": ["xdm"], "application/vnd.syncml.dmddf+xml": ["ddf"], "application/vnd.tao.intent-module-archive": ["tao"], "application/vnd.tcpdump.pcap": ["pcap", "cap", "dmp"], "application/vnd.tmobile-livetv": ["tmo"], "application/vnd.trid.tpt": ["tpt"], "application/vnd.triscape.mxs": ["mxs"], "application/vnd.trueapp": ["tra"], "application/vnd.ufdl": ["ufd", "ufdl"], "application/vnd.uiq.theme": ["utz"], "application/vnd.umajin": ["umj"], "application/vnd.unity": ["unityweb"], "application/vnd.uoml+xml": ["uoml"], "application/vnd.vcx": ["vcx"], "application/vnd.visio": ["vsd", "vst", "vss", "vsw"], "application/vnd.visionary": ["vis"], "application/vnd.vsf": ["vsf"], "application/vnd.wap.wbxml": ["wbxml"], "application/vnd.wap.wmlc": ["wmlc"], "application/vnd.wap.wmlscriptc": ["wmlsc"], "application/vnd.webturbo": ["wtb"], "application/vnd.wolfram.player": ["nbp"], "application/vnd.wordperfect": ["wpd"], "application/vnd.wqd": ["wqd"], "application/vnd.wt.stf": ["stf"], "application/vnd.xara": ["xar"], "application/vnd.xfdl": ["xfdl"], "application/vnd.yamaha.hv-dic": ["hvd"], "application/vnd.yamaha.hv-script": ["hvs"], "application/vnd.yamaha.hv-voice": ["hvp"], "application/vnd.yamaha.openscoreformat": ["osf"], "application/vnd.yamaha.openscoreformat.osfpvg+xml": ["osfpvg"], "application/vnd.yamaha.smaf-audio": ["saf"], "application/vnd.yamaha.smaf-phrase": ["spf"], "application/vnd.yellowriver-custom-menu": ["cmp"], "application/vnd.zul": ["zir", "zirz"], "application/vnd.zzazz.deck+xml": ["zaz"], "application/x-7z-compressed": ["7z"], "application/x-abiword": ["abw"], "application/x-ace-compressed": ["ace"], "application/x-apple-diskimage": ["*dmg"], "application/x-arj": ["arj"], "application/x-authorware-bin": ["aab", "x32", "u32", "vox"], "application/x-authorware-map": ["aam"], "application/x-authorware-seg": ["aas"], "application/x-bcpio": ["bcpio"], "application/x-bdoc": ["*bdoc"], "application/x-bittorrent": ["torrent"], "application/x-blorb": ["blb", "blorb"], "application/x-bzip": ["bz"], "application/x-bzip2": ["bz2", "boz"], "application/x-cbr": ["cbr", "cba", "cbt", "cbz", "cb7"], "application/x-cdlink": ["vcd"], "application/x-cfs-compressed": ["cfs"], "application/x-chat": ["chat"], "application/x-chess-pgn": ["pgn"], "application/x-chrome-extension": ["crx"], "application/x-cocoa": ["cco"], "application/x-conference": ["nsc"], "application/x-cpio": ["cpio"], "application/x-csh": ["csh"], "application/x-debian-package": ["*deb", "udeb"], "application/x-dgc-compressed": ["dgc"], "application/x-director": ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"], "application/x-doom": ["wad"], "application/x-dtbncx+xml": ["ncx"], "application/x-dtbook+xml": ["dtb"], "application/x-dtbresource+xml": ["res"], "application/x-dvi": ["dvi"], "application/x-envoy": ["evy"], "application/x-eva": ["eva"], "application/x-font-bdf": ["bdf"], "application/x-font-ghostscript": ["gsf"], "application/x-font-linux-psf": ["psf"], "application/x-font-pcf": ["pcf"], "application/x-font-snf": ["snf"], "application/x-font-type1": ["pfa", "pfb", "pfm", "afm"], "application/x-freearc": ["arc"], "application/x-futuresplash": ["spl"], "application/x-gca-compressed": ["gca"], "application/x-glulx": ["ulx"], "application/x-gnumeric": ["gnumeric"], "application/x-gramps-xml": ["gramps"], "application/x-gtar": ["gtar"], "application/x-hdf": ["hdf"], "application/x-httpd-php": ["php"], "application/x-install-instructions": ["install"], "application/x-iso9660-image": ["*iso"], "application/x-iwork-keynote-sffkey": ["*key"], "application/x-iwork-numbers-sffnumbers": ["*numbers"], "application/x-iwork-pages-sffpages": ["*pages"], "application/x-java-archive-diff": ["jardiff"], "application/x-java-jnlp-file": ["jnlp"], "application/x-keepass2": ["kdbx"], "application/x-latex": ["latex"], "application/x-lua-bytecode": ["luac"], "application/x-lzh-compressed": ["lzh", "lha"], "application/x-makeself": ["run"], "application/x-mie": ["mie"], "application/x-mobipocket-ebook": ["prc", "mobi"], "application/x-ms-application": ["application"], "application/x-ms-shortcut": ["lnk"], "application/x-ms-wmd": ["wmd"], "application/x-ms-wmz": ["wmz"], "application/x-ms-xbap": ["xbap"], "application/x-msaccess": ["mdb"], "application/x-msbinder": ["obd"], "application/x-mscardfile": ["crd"], "application/x-msclip": ["clp"], "application/x-msdos-program": ["*exe"], "application/x-msdownload": ["*exe", "*dll", "com", "bat", "*msi"], "application/x-msmediaview": ["mvb", "m13", "m14"], "application/x-msmetafile": ["*wmf", "*wmz", "*emf", "emz"], "application/x-msmoney": ["mny"], "application/x-mspublisher": ["pub"], "application/x-msschedule": ["scd"], "application/x-msterminal": ["trm"], "application/x-mswrite": ["wri"], "application/x-netcdf": ["nc", "cdf"], "application/x-ns-proxy-autoconfig": ["pac"], "application/x-nzb": ["nzb"], "application/x-perl": ["pl", "pm"], "application/x-pilot": ["*prc", "*pdb"], "application/x-pkcs12": ["p12", "pfx"], "application/x-pkcs7-certificates": ["p7b", "spc"], "application/x-pkcs7-certreqresp": ["p7r"], "application/x-rar-compressed": ["*rar"], "application/x-redhat-package-manager": ["rpm"], "application/x-research-info-systems": ["ris"], "application/x-sea": ["sea"], "application/x-sh": ["sh"], "application/x-shar": ["shar"], "application/x-shockwave-flash": ["swf"], "application/x-silverlight-app": ["xap"], "application/x-sql": ["sql"], "application/x-stuffit": ["sit"], "application/x-stuffitx": ["sitx"], "application/x-subrip": ["srt"], "application/x-sv4cpio": ["sv4cpio"], "application/x-sv4crc": ["sv4crc"], "application/x-t3vm-image": ["t3"], "application/x-tads": ["gam"], "application/x-tar": ["tar"], "application/x-tcl": ["tcl", "tk"], "application/x-tex": ["tex"], "application/x-tex-tfm": ["tfm"], "application/x-texinfo": ["texinfo", "texi"], "application/x-tgif": ["*obj"], "application/x-ustar": ["ustar"], "application/x-virtualbox-hdd": ["hdd"], "application/x-virtualbox-ova": ["ova"], "application/x-virtualbox-ovf": ["ovf"], "application/x-virtualbox-vbox": ["vbox"], "application/x-virtualbox-vbox-extpack": ["vbox-extpack"], "application/x-virtualbox-vdi": ["vdi"], "application/x-virtualbox-vhd": ["vhd"], "application/x-virtualbox-vmdk": ["vmdk"], "application/x-wais-source": ["src"], "application/x-web-app-manifest+json": ["webapp"], "application/x-x509-ca-cert": ["der", "crt", "pem"], "application/x-xfig": ["fig"], "application/x-xliff+xml": ["*xlf"], "application/x-xpinstall": ["xpi"], "application/x-xz": ["xz"], "application/x-zmachine": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"], "audio/vnd.dece.audio": ["uva", "uvva"], "audio/vnd.digital-winds": ["eol"], "audio/vnd.dra": ["dra"], "audio/vnd.dts": ["dts"], "audio/vnd.dts.hd": ["dtshd"], "audio/vnd.lucent.voice": ["lvp"], "audio/vnd.ms-playready.media.pya": ["pya"], "audio/vnd.nuera.ecelp4800": ["ecelp4800"], "audio/vnd.nuera.ecelp7470": ["ecelp7470"], "audio/vnd.nuera.ecelp9600": ["ecelp9600"], "audio/vnd.rip": ["rip"], "audio/x-aac": ["aac"], "audio/x-aiff": ["aif", "aiff", "aifc"], "audio/x-caf": ["caf"], "audio/x-flac": ["flac"], "audio/x-m4a": ["*m4a"], "audio/x-matroska": ["mka"], "audio/x-mpegurl": ["m3u"], "audio/x-ms-wax": ["wax"], "audio/x-ms-wma": ["wma"], "audio/x-pn-realaudio": ["ram", "ra"], "audio/x-pn-realaudio-plugin": ["rmp"], "audio/x-realaudio": ["*ra"], "audio/x-wav": ["*wav"], "chemical/x-cdx": ["cdx"], "chemical/x-cif": ["cif"], "chemical/x-cmdf": ["cmdf"], "chemical/x-cml": ["cml"], "chemical/x-csml": ["csml"], "chemical/x-xyz": ["xyz"], "image/prs.btif": ["btif"], "image/prs.pti": ["pti"], "image/vnd.adobe.photoshop": ["psd"], "image/vnd.airzip.accelerator.azv": ["azv"], "image/vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"], "image/vnd.djvu": ["djvu", "djv"], "image/vnd.dvb.subtitle": ["*sub"], "image/vnd.dwg": ["dwg"], "image/vnd.dxf": ["dxf"], "image/vnd.fastbidsheet": ["fbs"], "image/vnd.fpx": ["fpx"], "image/vnd.fst": ["fst"], "image/vnd.fujixerox.edmics-mmr": ["mmr"], "image/vnd.fujixerox.edmics-rlc": ["rlc"], "image/vnd.microsoft.icon": ["ico"], "image/vnd.ms-dds": ["dds"], "image/vnd.ms-modi": ["mdi"], "image/vnd.ms-photo": ["wdp"], "image/vnd.net-fpx": ["npx"], "image/vnd.pco.b16": ["b16"], "image/vnd.tencent.tap": ["tap"], "image/vnd.valve.source.texture": ["vtf"], "image/vnd.wap.wbmp": ["wbmp"], "image/vnd.xiff": ["xif"], "image/vnd.zbrush.pcx": ["pcx"], "image/x-3ds": ["3ds"], "image/x-cmu-raster": ["ras"], "image/x-cmx": ["cmx"], "image/x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"], "image/x-icon": ["*ico"], "image/x-jng": ["jng"], "image/x-mrsid-image": ["sid"], "image/x-ms-bmp": ["*bmp"], "image/x-pcx": ["*pcx"], "image/x-pict": ["pic", "pct"], "image/x-portable-anymap": ["pnm"], "image/x-portable-bitmap": ["pbm"], "image/x-portable-graymap": ["pgm"], "image/x-portable-pixmap": ["ppm"], "image/x-rgb": ["rgb"], "image/x-tga": ["tga"], "image/x-xbitmap": ["xbm"], "image/x-xpixmap": ["xpm"], "image/x-xwindowdump": ["xwd"], "message/vnd.wfa.wsc": ["wsc"], "model/vnd.collada+xml": ["dae"], "model/vnd.dwf": ["dwf"], "model/vnd.gdl": ["gdl"], "model/vnd.gtw": ["gtw"], "model/vnd.mts": ["mts"], "model/vnd.opengex": ["ogex"], "model/vnd.parasolid.transmit.binary": ["x_b"], "model/vnd.parasolid.transmit.text": ["x_t"], "model/vnd.sap.vds": ["vds"], "model/vnd.usdz+zip": ["usdz"], "model/vnd.valve.source.compiled-map": ["bsp"], "model/vnd.vtu": ["vtu"], "text/prs.lines.tag": ["dsc"], "text/vnd.curl": ["curl"], "text/vnd.curl.dcurl": ["dcurl"], "text/vnd.curl.mcurl": ["mcurl"], "text/vnd.curl.scurl": ["scurl"], "text/vnd.dvb.subtitle": ["sub"], "text/vnd.fly": ["fly"], "text/vnd.fmi.flexstor": ["flx"], "text/vnd.graphviz": ["gv"], "text/vnd.in3d.3dml": ["3dml"], "text/vnd.in3d.spot": ["spot"], "text/vnd.sun.j2me.app-descriptor": ["jad"], "text/vnd.wap.wml": ["wml"], "text/vnd.wap.wmlscript": ["wmls"], "text/x-asm": ["s", "asm"], "text/x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"], "text/x-component": ["htc"], "text/x-fortran": ["f", "for", "f77", "f90"], "text/x-handlebars-template": ["hbs"], "text/x-java-source": ["java"], "text/x-lua": ["lua"], "text/x-markdown": ["mkd"], "text/x-nfo": ["nfo"], "text/x-opml": ["opml"], "text/x-org": ["*org"], "text/x-pascal": ["p", "pas"], "text/x-processing": ["pde"], "text/x-sass": ["sass"], "text/x-scss": ["scss"], "text/x-setext": ["etx"], "text/x-sfv": ["sfv"], "text/x-suse-ymp": ["ymp"], "text/x-uuencode": ["uu"], "text/x-vcalendar": ["vcs"], "text/x-vcard": ["vcf"], "video/vnd.dece.hd": ["uvh", "uvvh"], "video/vnd.dece.mobile": ["uvm", "uvvm"], "video/vnd.dece.pd": ["uvp", "uvvp"], "video/vnd.dece.sd": ["uvs", "uvvs"], "video/vnd.dece.video": ["uvv", "uvvv"], "video/vnd.dvb.file": ["dvb"], "video/vnd.fvt": ["fvt"], "video/vnd.mpegurl": ["mxu", "m4u"], "video/vnd.ms-playready.media.pyv": ["pyv"], "video/vnd.uvvu.mp4": ["uvu", "uvvu"], "video/vnd.vivo": ["viv"], "video/x-f4v": ["f4v"], "video/x-fli": ["fli"], "video/x-flv": ["flv"], "video/x-m4v": ["m4v"], "video/x-matroska": ["mkv", "mk3d", "mks"], "video/x-mng": ["mng"], "video/x-ms-asf": ["asf", "asx"], "video/x-ms-vob": ["vob"], "video/x-ms-wm": ["wm"], "video/x-ms-wmv": ["wmv"], "video/x-ms-wmx": ["wmx"], "video/x-ms-wvx": ["wvx"], "video/x-msvideo": ["avi"], "video/x-sgi-movie": ["movie"], "video/x-smv": ["smv"], "x-conference/x-cooltalk": ["ice"] };
  var Mime = Mime_1;
  new Mime(standard, other);
  if (typeof process !== "undefined") {
    process.env;
    process.stdout && process.stdout.isTTY;
  }
  var util$1 = {};
  var types = {};
  var shams$1 = function hasSymbols() {
    if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
      return false;
    }
    if (typeof Symbol.iterator === "symbol") {
      return true;
    }
    var obj = {};
    var sym = Symbol("test");
    var symObj = Object(sym);
    if (typeof sym === "string") {
      return false;
    }
    if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
      return false;
    }
    if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
      return false;
    }
    var symVal = 42;
    obj[sym] = symVal;
    for (sym in obj) {
      return false;
    }
    if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
      return false;
    }
    if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
      return false;
    }
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) {
      return false;
    }
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
      return false;
    }
    if (typeof Object.getOwnPropertyDescriptor === "function") {
      var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
      if (descriptor.value !== symVal || descriptor.enumerable !== true) {
        return false;
      }
    }
    return true;
  };
  var hasSymbols$2 = shams$1;
  var shams = function hasToStringTagShams() {
    return hasSymbols$2() && !!Symbol.toStringTag;
  };
  var origSymbol = typeof Symbol !== "undefined" && Symbol;
  var hasSymbolSham = shams$1;
  var hasSymbols$1 = function hasNativeSymbols() {
    if (typeof origSymbol !== "function") {
      return false;
    }
    if (typeof Symbol !== "function") {
      return false;
    }
    if (typeof origSymbol("foo") !== "symbol") {
      return false;
    }
    if (typeof Symbol("bar") !== "symbol") {
      return false;
    }
    return hasSymbolSham();
  };
  var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
  var slice = Array.prototype.slice;
  var toStr$1 = Object.prototype.toString;
  var funcType = "[object Function]";
  var implementation$1 = function bind(that) {
    var target = this;
    if (typeof target !== "function" || toStr$1.call(target) !== funcType) {
      throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);
    var bound;
    var binder = function() {
      if (this instanceof bound) {
        var result = target.apply(this, args.concat(slice.call(arguments)));
        if (Object(result) === result) {
          return result;
        }
        return this;
      } else {
        return target.apply(that, args.concat(slice.call(arguments)));
      }
    };
    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
      boundArgs.push("$" + i);
    }
    bound = Function("binder", "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }")(binder);
    if (target.prototype) {
      var Empty = function Empty2() {
      };
      Empty.prototype = target.prototype;
      bound.prototype = new Empty();
      Empty.prototype = null;
    }
    return bound;
  };
  var implementation = implementation$1;
  var functionBind = Function.prototype.bind || implementation;
  var bind$1 = functionBind;
  var src = bind$1.call(Function.call, Object.prototype.hasOwnProperty);
  var undefined$1;
  var $SyntaxError = SyntaxError;
  var $Function = Function;
  var $TypeError = TypeError;
  var getEvalledConstructor = function(expressionSyntax) {
    try {
      return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
    } catch (e) {
    }
  };
  var $gOPD$1 = Object.getOwnPropertyDescriptor;
  if ($gOPD$1) {
    try {
      $gOPD$1({}, "");
    } catch (e) {
      $gOPD$1 = null;
    }
  }
  var throwTypeError = function() {
    throw new $TypeError();
  };
  var ThrowTypeError = $gOPD$1 ? function() {
    try {
      arguments.callee;
      return throwTypeError;
    } catch (calleeThrows) {
      try {
        return $gOPD$1(arguments, "callee").get;
      } catch (gOPDthrows) {
        return throwTypeError;
      }
    }
  }() : throwTypeError;
  var hasSymbols2 = hasSymbols$1();
  var getProto$1 = Object.getPrototypeOf || function(x) {
    return x.__proto__;
  };
  var needsEval = {};
  var TypedArray = typeof Uint8Array === "undefined" ? undefined$1 : getProto$1(Uint8Array);
  var INTRINSICS = {
    "%AggregateError%": typeof AggregateError === "undefined" ? undefined$1 : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined$1 : ArrayBuffer,
    "%ArrayIteratorPrototype%": hasSymbols2 ? getProto$1([][Symbol.iterator]()) : undefined$1,
    "%AsyncFromSyncIteratorPrototype%": undefined$1,
    "%AsyncFunction%": needsEval,
    "%AsyncGenerator%": needsEval,
    "%AsyncGeneratorFunction%": needsEval,
    "%AsyncIteratorPrototype%": needsEval,
    "%Atomics%": typeof Atomics === "undefined" ? undefined$1 : Atomics,
    "%BigInt%": typeof BigInt === "undefined" ? undefined$1 : BigInt,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView === "undefined" ? undefined$1 : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": Error,
    "%eval%": eval,
    "%EvalError%": EvalError,
    "%Float32Array%": typeof Float32Array === "undefined" ? undefined$1 : Float32Array,
    "%Float64Array%": typeof Float64Array === "undefined" ? undefined$1 : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined$1 : FinalizationRegistry,
    "%Function%": $Function,
    "%GeneratorFunction%": needsEval,
    "%Int8Array%": typeof Int8Array === "undefined" ? undefined$1 : Int8Array,
    "%Int16Array%": typeof Int16Array === "undefined" ? undefined$1 : Int16Array,
    "%Int32Array%": typeof Int32Array === "undefined" ? undefined$1 : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": hasSymbols2 ? getProto$1(getProto$1([][Symbol.iterator]())) : undefined$1,
    "%JSON%": typeof JSON === "object" ? JSON : undefined$1,
    "%Map%": typeof Map === "undefined" ? undefined$1 : Map,
    "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols2 ? undefined$1 : getProto$1((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise === "undefined" ? undefined$1 : Promise,
    "%Proxy%": typeof Proxy === "undefined" ? undefined$1 : Proxy,
    "%RangeError%": RangeError,
    "%ReferenceError%": ReferenceError,
    "%Reflect%": typeof Reflect === "undefined" ? undefined$1 : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set === "undefined" ? undefined$1 : Set,
    "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols2 ? undefined$1 : getProto$1((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined$1 : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": hasSymbols2 ? getProto$1(""[Symbol.iterator]()) : undefined$1,
    "%Symbol%": hasSymbols2 ? Symbol : undefined$1,
    "%SyntaxError%": $SyntaxError,
    "%ThrowTypeError%": ThrowTypeError,
    "%TypedArray%": TypedArray,
    "%TypeError%": $TypeError,
    "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined$1 : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined$1 : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined$1 : Uint16Array,
    "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined$1 : Uint32Array,
    "%URIError%": URIError,
    "%WeakMap%": typeof WeakMap === "undefined" ? undefined$1 : WeakMap,
    "%WeakRef%": typeof WeakRef === "undefined" ? undefined$1 : WeakRef,
    "%WeakSet%": typeof WeakSet === "undefined" ? undefined$1 : WeakSet
  };
  var doEval = function doEval2(name) {
    var value;
    if (name === "%AsyncFunction%") {
      value = getEvalledConstructor("async function () {}");
    } else if (name === "%GeneratorFunction%") {
      value = getEvalledConstructor("function* () {}");
    } else if (name === "%AsyncGeneratorFunction%") {
      value = getEvalledConstructor("async function* () {}");
    } else if (name === "%AsyncGenerator%") {
      var fn = doEval2("%AsyncGeneratorFunction%");
      if (fn) {
        value = fn.prototype;
      }
    } else if (name === "%AsyncIteratorPrototype%") {
      var gen = doEval2("%AsyncGenerator%");
      if (gen) {
        value = getProto$1(gen.prototype);
      }
    }
    INTRINSICS[name] = value;
    return value;
  };
  var LEGACY_ALIASES = {
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  };
  var bind2 = functionBind;
  var hasOwn$1 = src;
  var $concat = bind2.call(Function.call, Array.prototype.concat);
  var $spliceApply = bind2.call(Function.apply, Array.prototype.splice);
  var $replace = bind2.call(Function.call, String.prototype.replace);
  var $strSlice = bind2.call(Function.call, String.prototype.slice);
  var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
  var reEscapeChar = /\\(\\)?/g;
  var stringToPath = function stringToPath2(string) {
    var first = $strSlice(string, 0, 1);
    var last = $strSlice(string, -1);
    if (first === "%" && last !== "%") {
      throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
    } else if (last === "%" && first !== "%") {
      throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
    }
    var result = [];
    $replace(string, rePropName, function(match, number, quote, subString) {
      result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
    });
    return result;
  };
  var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if (hasOwn$1(LEGACY_ALIASES, intrinsicName)) {
      alias = LEGACY_ALIASES[intrinsicName];
      intrinsicName = "%" + alias[0] + "%";
    }
    if (hasOwn$1(INTRINSICS, intrinsicName)) {
      var value = INTRINSICS[intrinsicName];
      if (value === needsEval) {
        value = doEval(intrinsicName);
      }
      if (typeof value === "undefined" && !allowMissing) {
        throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
      }
      return {
        alias,
        name: intrinsicName,
        value
      };
    }
    throw new $SyntaxError("intrinsic " + name + " does not exist!");
  };
  var getIntrinsic = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== "string" || name.length === 0) {
      throw new $TypeError("intrinsic name must be a non-empty string");
    }
    if (arguments.length > 1 && typeof allowMissing !== "boolean") {
      throw new $TypeError('"allowMissing" argument must be a boolean');
    }
    var parts = stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
    var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
      intrinsicBaseName = alias[0];
      $spliceApply(parts, $concat([0, 1], alias));
    }
    for (var i = 1, isOwn = true; i < parts.length; i += 1) {
      var part = parts[i];
      var first = $strSlice(part, 0, 1);
      var last = $strSlice(part, -1);
      if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
        throw new $SyntaxError("property names with quotes must have matching quotes");
      }
      if (part === "constructor" || !isOwn) {
        skipFurtherCaching = true;
      }
      intrinsicBaseName += "." + part;
      intrinsicRealName = "%" + intrinsicBaseName + "%";
      if (hasOwn$1(INTRINSICS, intrinsicRealName)) {
        value = INTRINSICS[intrinsicRealName];
      } else if (value != null) {
        if (!(part in value)) {
          if (!allowMissing) {
            throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
          }
          return void 0;
        }
        if ($gOPD$1 && i + 1 >= parts.length) {
          var desc = $gOPD$1(value, part);
          isOwn = !!desc;
          if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
            value = desc.get;
          } else {
            value = value[part];
          }
        } else {
          isOwn = hasOwn$1(value, part);
          value = value[part];
        }
        if (isOwn && !skipFurtherCaching) {
          INTRINSICS[intrinsicRealName] = value;
        }
      }
    }
    return value;
  };
  var callBind$1 = { exports: {} };
  (function(module) {
    var bind3 = functionBind;
    var GetIntrinsic3 = getIntrinsic;
    var $apply = GetIntrinsic3("%Function.prototype.apply%");
    var $call = GetIntrinsic3("%Function.prototype.call%");
    var $reflectApply = GetIntrinsic3("%Reflect.apply%", true) || bind3.call($call, $apply);
    var $gOPD2 = GetIntrinsic3("%Object.getOwnPropertyDescriptor%", true);
    var $defineProperty = GetIntrinsic3("%Object.defineProperty%", true);
    var $max = GetIntrinsic3("%Math.max%");
    if ($defineProperty) {
      try {
        $defineProperty({}, "a", { value: 1 });
      } catch (e) {
        $defineProperty = null;
      }
    }
    module.exports = function callBind2(originalFunction) {
      var func = $reflectApply(bind3, $call, arguments);
      if ($gOPD2 && $defineProperty) {
        var desc = $gOPD2(func, "length");
        if (desc.configurable) {
          $defineProperty(func, "length", { value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) });
        }
      }
      return func;
    };
    var applyBind = function applyBind2() {
      return $reflectApply(bind3, $apply, arguments);
    };
    if ($defineProperty) {
      $defineProperty(module.exports, "apply", { value: applyBind });
    } else {
      module.exports.apply = applyBind;
    }
  })(callBind$1);
  var GetIntrinsic$1 = getIntrinsic;
  var callBind = callBind$1.exports;
  var $indexOf$1 = callBind(GetIntrinsic$1("String.prototype.indexOf"));
  var callBound$3 = function callBoundIntrinsic(name, allowMissing) {
    var intrinsic = GetIntrinsic$1(name, !!allowMissing);
    if (typeof intrinsic === "function" && $indexOf$1(name, ".prototype.") > -1) {
      return callBind(intrinsic);
    }
    return intrinsic;
  };
  var hasToStringTag$3 = shams();
  var callBound$2 = callBound$3;
  var $toString$2 = callBound$2("Object.prototype.toString");
  var isStandardArguments = function isArguments(value) {
    if (hasToStringTag$3 && value && typeof value === "object" && Symbol.toStringTag in value) {
      return false;
    }
    return $toString$2(value) === "[object Arguments]";
  };
  var isLegacyArguments = function isArguments2(value) {
    if (isStandardArguments(value)) {
      return true;
    }
    return value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && $toString$2(value) !== "[object Array]" && $toString$2(value.callee) === "[object Function]";
  };
  var supportsStandardArguments = function() {
    return isStandardArguments(arguments);
  }();
  isStandardArguments.isLegacyArguments = isLegacyArguments;
  var isArguments3 = supportsStandardArguments ? isStandardArguments : isLegacyArguments;
  var toStr = Object.prototype.toString;
  var fnToStr = Function.prototype.toString;
  var isFnRegex = /^\s*(?:function)?\*/;
  var hasToStringTag$2 = shams();
  var getProto = Object.getPrototypeOf;
  var getGeneratorFunc = function() {
    if (!hasToStringTag$2) {
      return false;
    }
    try {
      return Function("return function*() {}")();
    } catch (e) {
    }
  };
  var GeneratorFunction;
  var isGeneratorFunction = function isGeneratorFunction2(fn) {
    if (typeof fn !== "function") {
      return false;
    }
    if (isFnRegex.test(fnToStr.call(fn))) {
      return true;
    }
    if (!hasToStringTag$2) {
      var str = toStr.call(fn);
      return str === "[object GeneratorFunction]";
    }
    if (!getProto) {
      return false;
    }
    if (typeof GeneratorFunction === "undefined") {
      var generatorFunc = getGeneratorFunc();
      GeneratorFunction = generatorFunc ? getProto(generatorFunc) : false;
    }
    return getProto(fn) === GeneratorFunction;
  };
  var hasOwn = Object.prototype.hasOwnProperty;
  var toString = Object.prototype.toString;
  var foreach = function forEach(obj, fn, ctx) {
    if (toString.call(fn) !== "[object Function]") {
      throw new TypeError("iterator must be a function");
    }
    var l = obj.length;
    if (l === +l) {
      for (var i = 0; i < l; i++) {
        fn.call(ctx, obj[i], i, obj);
      }
    } else {
      for (var k in obj) {
        if (hasOwn.call(obj, k)) {
          fn.call(ctx, obj[k], k, obj);
        }
      }
    }
  };
  var possibleNames = [
    "BigInt64Array",
    "BigUint64Array",
    "Float32Array",
    "Float64Array",
    "Int16Array",
    "Int32Array",
    "Int8Array",
    "Uint16Array",
    "Uint32Array",
    "Uint8Array",
    "Uint8ClampedArray"
  ];
  var g$2 = typeof globalThis === "undefined" ? commonjsGlobal : globalThis;
  var availableTypedArrays$2 = function availableTypedArrays() {
    var out = [];
    for (var i = 0; i < possibleNames.length; i++) {
      if (typeof g$2[possibleNames[i]] === "function") {
        out[out.length] = possibleNames[i];
      }
    }
    return out;
  };
  var GetIntrinsic2 = getIntrinsic;
  var $gOPD = GetIntrinsic2("%Object.getOwnPropertyDescriptor%", true);
  if ($gOPD) {
    try {
      $gOPD([], "length");
    } catch (e) {
      $gOPD = null;
    }
  }
  var getOwnPropertyDescriptor = $gOPD;
  var forEach$1 = foreach;
  var availableTypedArrays$1 = availableTypedArrays$2;
  var callBound$1 = callBound$3;
  var $toString$1 = callBound$1("Object.prototype.toString");
  var hasToStringTag$1 = shams();
  var g$1 = typeof globalThis === "undefined" ? commonjsGlobal : globalThis;
  var typedArrays$1 = availableTypedArrays$1();
  var $indexOf = callBound$1("Array.prototype.indexOf", true) || function indexOf(array, value) {
    for (var i = 0; i < array.length; i += 1) {
      if (array[i] === value) {
        return i;
      }
    }
    return -1;
  };
  var $slice$1 = callBound$1("String.prototype.slice");
  var toStrTags$1 = {};
  var gOPD$1 = getOwnPropertyDescriptor;
  var getPrototypeOf$1 = Object.getPrototypeOf;
  if (hasToStringTag$1 && gOPD$1 && getPrototypeOf$1) {
    forEach$1(typedArrays$1, function(typedArray) {
      var arr = new g$1[typedArray]();
      if (Symbol.toStringTag in arr) {
        var proto = getPrototypeOf$1(arr);
        var descriptor = gOPD$1(proto, Symbol.toStringTag);
        if (!descriptor) {
          var superProto = getPrototypeOf$1(proto);
          descriptor = gOPD$1(superProto, Symbol.toStringTag);
        }
        toStrTags$1[typedArray] = descriptor.get;
      }
    });
  }
  var tryTypedArrays$1 = function tryAllTypedArrays(value) {
    var anyTrue = false;
    forEach$1(toStrTags$1, function(getter, typedArray) {
      if (!anyTrue) {
        try {
          anyTrue = getter.call(value) === typedArray;
        } catch (e) {
        }
      }
    });
    return anyTrue;
  };
  var isTypedArray$1 = function isTypedArray(value) {
    if (!value || typeof value !== "object") {
      return false;
    }
    if (!hasToStringTag$1 || !(Symbol.toStringTag in value)) {
      var tag = $slice$1($toString$1(value), 8, -1);
      return $indexOf(typedArrays$1, tag) > -1;
    }
    if (!gOPD$1) {
      return false;
    }
    return tryTypedArrays$1(value);
  };
  var forEach2 = foreach;
  var availableTypedArrays2 = availableTypedArrays$2;
  var callBound = callBound$3;
  var $toString = callBound("Object.prototype.toString");
  var hasToStringTag = shams();
  var g = typeof globalThis === "undefined" ? commonjsGlobal : globalThis;
  var typedArrays = availableTypedArrays2();
  var $slice = callBound("String.prototype.slice");
  var toStrTags = {};
  var gOPD = getOwnPropertyDescriptor;
  var getPrototypeOf = Object.getPrototypeOf;
  if (hasToStringTag && gOPD && getPrototypeOf) {
    forEach2(typedArrays, function(typedArray) {
      if (typeof g[typedArray] === "function") {
        var arr = new g[typedArray]();
        if (Symbol.toStringTag in arr) {
          var proto = getPrototypeOf(arr);
          var descriptor = gOPD(proto, Symbol.toStringTag);
          if (!descriptor) {
            var superProto = getPrototypeOf(proto);
            descriptor = gOPD(superProto, Symbol.toStringTag);
          }
          toStrTags[typedArray] = descriptor.get;
        }
      }
    });
  }
  var tryTypedArrays = function tryAllTypedArrays2(value) {
    var foundName = false;
    forEach2(toStrTags, function(getter, typedArray) {
      if (!foundName) {
        try {
          var name = getter.call(value);
          if (name === typedArray) {
            foundName = name;
          }
        } catch (e) {
        }
      }
    });
    return foundName;
  };
  var isTypedArray2 = isTypedArray$1;
  var whichTypedArray = function whichTypedArray2(value) {
    if (!isTypedArray2(value)) {
      return false;
    }
    if (!hasToStringTag || !(Symbol.toStringTag in value)) {
      return $slice($toString(value), 8, -1);
    }
    return tryTypedArrays(value);
  };
  (function(exports) {
    var isArgumentsObject = isArguments3;
    var isGeneratorFunction$1 = isGeneratorFunction;
    var whichTypedArray$1 = whichTypedArray;
    var isTypedArray3 = isTypedArray$1;
    function uncurryThis(f) {
      return f.call.bind(f);
    }
    var BigIntSupported = typeof BigInt !== "undefined";
    var SymbolSupported = typeof Symbol !== "undefined";
    var ObjectToString = uncurryThis(Object.prototype.toString);
    var numberValue = uncurryThis(Number.prototype.valueOf);
    var stringValue = uncurryThis(String.prototype.valueOf);
    var booleanValue = uncurryThis(Boolean.prototype.valueOf);
    if (BigIntSupported) {
      var bigIntValue = uncurryThis(BigInt.prototype.valueOf);
    }
    if (SymbolSupported) {
      var symbolValue = uncurryThis(Symbol.prototype.valueOf);
    }
    function checkBoxedPrimitive(value, prototypeValueOf) {
      if (typeof value !== "object") {
        return false;
      }
      try {
        prototypeValueOf(value);
        return true;
      } catch (e) {
        return false;
      }
    }
    exports.isArgumentsObject = isArgumentsObject;
    exports.isGeneratorFunction = isGeneratorFunction$1;
    exports.isTypedArray = isTypedArray3;
    function isPromise(input) {
      return typeof Promise !== "undefined" && input instanceof Promise || input !== null && typeof input === "object" && typeof input.then === "function" && typeof input.catch === "function";
    }
    exports.isPromise = isPromise;
    function isArrayBufferView(value) {
      if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
        return ArrayBuffer.isView(value);
      }
      return isTypedArray3(value) || isDataView(value);
    }
    exports.isArrayBufferView = isArrayBufferView;
    function isUint8Array(value) {
      return whichTypedArray$1(value) === "Uint8Array";
    }
    exports.isUint8Array = isUint8Array;
    function isUint8ClampedArray(value) {
      return whichTypedArray$1(value) === "Uint8ClampedArray";
    }
    exports.isUint8ClampedArray = isUint8ClampedArray;
    function isUint16Array(value) {
      return whichTypedArray$1(value) === "Uint16Array";
    }
    exports.isUint16Array = isUint16Array;
    function isUint32Array(value) {
      return whichTypedArray$1(value) === "Uint32Array";
    }
    exports.isUint32Array = isUint32Array;
    function isInt8Array(value) {
      return whichTypedArray$1(value) === "Int8Array";
    }
    exports.isInt8Array = isInt8Array;
    function isInt16Array(value) {
      return whichTypedArray$1(value) === "Int16Array";
    }
    exports.isInt16Array = isInt16Array;
    function isInt32Array(value) {
      return whichTypedArray$1(value) === "Int32Array";
    }
    exports.isInt32Array = isInt32Array;
    function isFloat32Array(value) {
      return whichTypedArray$1(value) === "Float32Array";
    }
    exports.isFloat32Array = isFloat32Array;
    function isFloat64Array(value) {
      return whichTypedArray$1(value) === "Float64Array";
    }
    exports.isFloat64Array = isFloat64Array;
    function isBigInt64Array(value) {
      return whichTypedArray$1(value) === "BigInt64Array";
    }
    exports.isBigInt64Array = isBigInt64Array;
    function isBigUint64Array(value) {
      return whichTypedArray$1(value) === "BigUint64Array";
    }
    exports.isBigUint64Array = isBigUint64Array;
    function isMapToString(value) {
      return ObjectToString(value) === "[object Map]";
    }
    isMapToString.working = typeof Map !== "undefined" && isMapToString(/* @__PURE__ */ new Map());
    function isMap(value) {
      if (typeof Map === "undefined") {
        return false;
      }
      return isMapToString.working ? isMapToString(value) : value instanceof Map;
    }
    exports.isMap = isMap;
    function isSetToString(value) {
      return ObjectToString(value) === "[object Set]";
    }
    isSetToString.working = typeof Set !== "undefined" && isSetToString(/* @__PURE__ */ new Set());
    function isSet(value) {
      if (typeof Set === "undefined") {
        return false;
      }
      return isSetToString.working ? isSetToString(value) : value instanceof Set;
    }
    exports.isSet = isSet;
    function isWeakMapToString(value) {
      return ObjectToString(value) === "[object WeakMap]";
    }
    isWeakMapToString.working = typeof WeakMap !== "undefined" && isWeakMapToString(/* @__PURE__ */ new WeakMap());
    function isWeakMap(value) {
      if (typeof WeakMap === "undefined") {
        return false;
      }
      return isWeakMapToString.working ? isWeakMapToString(value) : value instanceof WeakMap;
    }
    exports.isWeakMap = isWeakMap;
    function isWeakSetToString(value) {
      return ObjectToString(value) === "[object WeakSet]";
    }
    isWeakSetToString.working = typeof WeakSet !== "undefined" && isWeakSetToString(/* @__PURE__ */ new WeakSet());
    function isWeakSet(value) {
      return isWeakSetToString(value);
    }
    exports.isWeakSet = isWeakSet;
    function isArrayBufferToString(value) {
      return ObjectToString(value) === "[object ArrayBuffer]";
    }
    isArrayBufferToString.working = typeof ArrayBuffer !== "undefined" && isArrayBufferToString(new ArrayBuffer());
    function isArrayBuffer(value) {
      if (typeof ArrayBuffer === "undefined") {
        return false;
      }
      return isArrayBufferToString.working ? isArrayBufferToString(value) : value instanceof ArrayBuffer;
    }
    exports.isArrayBuffer = isArrayBuffer;
    function isDataViewToString(value) {
      return ObjectToString(value) === "[object DataView]";
    }
    isDataViewToString.working = typeof ArrayBuffer !== "undefined" && typeof DataView !== "undefined" && isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
    function isDataView(value) {
      if (typeof DataView === "undefined") {
        return false;
      }
      return isDataViewToString.working ? isDataViewToString(value) : value instanceof DataView;
    }
    exports.isDataView = isDataView;
    var SharedArrayBufferCopy = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : void 0;
    function isSharedArrayBufferToString(value) {
      return ObjectToString(value) === "[object SharedArrayBuffer]";
    }
    function isSharedArrayBuffer(value) {
      if (typeof SharedArrayBufferCopy === "undefined") {
        return false;
      }
      if (typeof isSharedArrayBufferToString.working === "undefined") {
        isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy());
      }
      return isSharedArrayBufferToString.working ? isSharedArrayBufferToString(value) : value instanceof SharedArrayBufferCopy;
    }
    exports.isSharedArrayBuffer = isSharedArrayBuffer;
    function isAsyncFunction(value) {
      return ObjectToString(value) === "[object AsyncFunction]";
    }
    exports.isAsyncFunction = isAsyncFunction;
    function isMapIterator(value) {
      return ObjectToString(value) === "[object Map Iterator]";
    }
    exports.isMapIterator = isMapIterator;
    function isSetIterator(value) {
      return ObjectToString(value) === "[object Set Iterator]";
    }
    exports.isSetIterator = isSetIterator;
    function isGeneratorObject(value) {
      return ObjectToString(value) === "[object Generator]";
    }
    exports.isGeneratorObject = isGeneratorObject;
    function isWebAssemblyCompiledModule(value) {
      return ObjectToString(value) === "[object WebAssembly.Module]";
    }
    exports.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;
    function isNumberObject(value) {
      return checkBoxedPrimitive(value, numberValue);
    }
    exports.isNumberObject = isNumberObject;
    function isStringObject(value) {
      return checkBoxedPrimitive(value, stringValue);
    }
    exports.isStringObject = isStringObject;
    function isBooleanObject(value) {
      return checkBoxedPrimitive(value, booleanValue);
    }
    exports.isBooleanObject = isBooleanObject;
    function isBigIntObject(value) {
      return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
    }
    exports.isBigIntObject = isBigIntObject;
    function isSymbolObject(value) {
      return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
    }
    exports.isSymbolObject = isSymbolObject;
    function isBoxedPrimitive(value) {
      return isNumberObject(value) || isStringObject(value) || isBooleanObject(value) || isBigIntObject(value) || isSymbolObject(value);
    }
    exports.isBoxedPrimitive = isBoxedPrimitive;
    function isAnyArrayBuffer(value) {
      return typeof Uint8Array !== "undefined" && (isArrayBuffer(value) || isSharedArrayBuffer(value));
    }
    exports.isAnyArrayBuffer = isAnyArrayBuffer;
    ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(method) {
      Object.defineProperty(exports, method, {
        enumerable: false,
        value: function() {
          throw new Error(method + " is not supported in userland");
        }
      });
    });
  })(types);
  var isBuffer = function isBuffer2(arg) {
    return arg instanceof Buffer;
  };
  var inherits = { exports: {} };
  var inherits_browser = { exports: {} };
  if (typeof Object.create === "function") {
    inherits_browser.exports = function inherits2(ctor, superCtor) {
      if (superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
          constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
      }
    };
  } else {
    inherits_browser.exports = function inherits2(ctor, superCtor) {
      if (superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {
        };
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
      }
    };
  }
  try {
    util = require_util();
    if (typeof util.inherits !== "function")
      throw "";
    inherits.exports = util.inherits;
  } catch (e) {
    inherits.exports = inherits_browser.exports;
  }
  var util;
  (function(exports) {
    var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors2(obj) {
      var keys = Object.keys(obj);
      var descriptors = {};
      for (var i = 0; i < keys.length; i++) {
        descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
      }
      return descriptors;
    };
    var formatRegExp = /%[sdj%]/g;
    exports.format = function(f) {
      if (!isString(f)) {
        var objects = [];
        for (var i = 0; i < arguments.length; i++) {
          objects.push(inspect(arguments[i]));
        }
        return objects.join(" ");
      }
      var i = 1;
      var args = arguments;
      var len = args.length;
      var str = String(f).replace(formatRegExp, function(x2) {
        if (x2 === "%%")
          return "%";
        if (i >= len)
          return x2;
        switch (x2) {
          case "%s":
            return String(args[i++]);
          case "%d":
            return Number(args[i++]);
          case "%j":
            try {
              return JSON.stringify(args[i++]);
            } catch (_) {
              return "[Circular]";
            }
          default:
            return x2;
        }
      });
      for (var x = args[i]; i < len; x = args[++i]) {
        if (isNull(x) || !isObject(x)) {
          str += " " + x;
        } else {
          str += " " + inspect(x);
        }
      }
      return str;
    };
    exports.deprecate = function(fn, msg) {
      if (typeof process !== "undefined" && process.noDeprecation === true) {
        return fn;
      }
      if (typeof process === "undefined") {
        return function() {
          return exports.deprecate(fn, msg).apply(this, arguments);
        };
      }
      var warned = false;
      function deprecated() {
        if (!warned) {
          if (process.throwDeprecation) {
            throw new Error(msg);
          } else if (process.traceDeprecation) {
            console.trace(msg);
          } else {
            console.error(msg);
          }
          warned = true;
        }
        return fn.apply(this, arguments);
      }
      return deprecated;
    };
    var debugs = {};
    var debugEnvRegex = /^$/;
    if (process.env.NODE_DEBUG) {
      var debugEnv = process.env.NODE_DEBUG;
      debugEnv = debugEnv.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase();
      debugEnvRegex = new RegExp("^" + debugEnv + "$", "i");
    }
    exports.debuglog = function(set) {
      set = set.toUpperCase();
      if (!debugs[set]) {
        if (debugEnvRegex.test(set)) {
          var pid = process.pid;
          debugs[set] = function() {
            var msg = exports.format.apply(exports, arguments);
            console.error("%s %d: %s", set, pid, msg);
          };
        } else {
          debugs[set] = function() {
          };
        }
      }
      return debugs[set];
    };
    function inspect(obj, opts) {
      var ctx = {
        seen: [],
        stylize: stylizeNoColor
      };
      if (arguments.length >= 3)
        ctx.depth = arguments[2];
      if (arguments.length >= 4)
        ctx.colors = arguments[3];
      if (isBoolean(opts)) {
        ctx.showHidden = opts;
      } else if (opts) {
        exports._extend(ctx, opts);
      }
      if (isUndefined(ctx.showHidden))
        ctx.showHidden = false;
      if (isUndefined(ctx.depth))
        ctx.depth = 2;
      if (isUndefined(ctx.colors))
        ctx.colors = false;
      if (isUndefined(ctx.customInspect))
        ctx.customInspect = true;
      if (ctx.colors)
        ctx.stylize = stylizeWithColor;
      return formatValue(ctx, obj, ctx.depth);
    }
    exports.inspect = inspect;
    inspect.colors = {
      "bold": [1, 22],
      "italic": [3, 23],
      "underline": [4, 24],
      "inverse": [7, 27],
      "white": [37, 39],
      "grey": [90, 39],
      "black": [30, 39],
      "blue": [34, 39],
      "cyan": [36, 39],
      "green": [32, 39],
      "magenta": [35, 39],
      "red": [31, 39],
      "yellow": [33, 39]
    };
    inspect.styles = {
      "special": "cyan",
      "number": "yellow",
      "boolean": "yellow",
      "undefined": "grey",
      "null": "bold",
      "string": "green",
      "date": "magenta",
      "regexp": "red"
    };
    function stylizeWithColor(str, styleType) {
      var style = inspect.styles[styleType];
      if (style) {
        return "\x1B[" + inspect.colors[style][0] + "m" + str + "\x1B[" + inspect.colors[style][1] + "m";
      } else {
        return str;
      }
    }
    function stylizeNoColor(str, styleType) {
      return str;
    }
    function arrayToHash(array) {
      var hash = {};
      array.forEach(function(val, idx) {
        hash[val] = true;
      });
      return hash;
    }
    function formatValue(ctx, value, recurseTimes) {
      if (ctx.customInspect && value && isFunction(value.inspect) && value.inspect !== exports.inspect && !(value.constructor && value.constructor.prototype === value)) {
        var ret = value.inspect(recurseTimes, ctx);
        if (!isString(ret)) {
          ret = formatValue(ctx, ret, recurseTimes);
        }
        return ret;
      }
      var primitive = formatPrimitive(ctx, value);
      if (primitive) {
        return primitive;
      }
      var keys = Object.keys(value);
      var visibleKeys = arrayToHash(keys);
      if (ctx.showHidden) {
        keys = Object.getOwnPropertyNames(value);
      }
      if (isError(value) && (keys.indexOf("message") >= 0 || keys.indexOf("description") >= 0)) {
        return formatError(value);
      }
      if (keys.length === 0) {
        if (isFunction(value)) {
          var name = value.name ? ": " + value.name : "";
          return ctx.stylize("[Function" + name + "]", "special");
        }
        if (isRegExp(value)) {
          return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
        }
        if (isDate(value)) {
          return ctx.stylize(Date.prototype.toString.call(value), "date");
        }
        if (isError(value)) {
          return formatError(value);
        }
      }
      var base = "", array = false, braces = ["{", "}"];
      if (isArray(value)) {
        array = true;
        braces = ["[", "]"];
      }
      if (isFunction(value)) {
        var n = value.name ? ": " + value.name : "";
        base = " [Function" + n + "]";
      }
      if (isRegExp(value)) {
        base = " " + RegExp.prototype.toString.call(value);
      }
      if (isDate(value)) {
        base = " " + Date.prototype.toUTCString.call(value);
      }
      if (isError(value)) {
        base = " " + formatError(value);
      }
      if (keys.length === 0 && (!array || value.length == 0)) {
        return braces[0] + base + braces[1];
      }
      if (recurseTimes < 0) {
        if (isRegExp(value)) {
          return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
        } else {
          return ctx.stylize("[Object]", "special");
        }
      }
      ctx.seen.push(value);
      var output;
      if (array) {
        output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
      } else {
        output = keys.map(function(key) {
          return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
        });
      }
      ctx.seen.pop();
      return reduceToSingleString(output, base, braces);
    }
    function formatPrimitive(ctx, value) {
      if (isUndefined(value))
        return ctx.stylize("undefined", "undefined");
      if (isString(value)) {
        var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return ctx.stylize(simple, "string");
      }
      if (isNumber(value))
        return ctx.stylize("" + value, "number");
      if (isBoolean(value))
        return ctx.stylize("" + value, "boolean");
      if (isNull(value))
        return ctx.stylize("null", "null");
    }
    function formatError(value) {
      return "[" + Error.prototype.toString.call(value) + "]";
    }
    function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
      var output = [];
      for (var i = 0, l = value.length; i < l; ++i) {
        if (hasOwnProperty(value, String(i))) {
          output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
        } else {
          output.push("");
        }
      }
      keys.forEach(function(key) {
        if (!key.match(/^\d+$/)) {
          output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
        }
      });
      return output;
    }
    function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
      var name, str, desc;
      desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
      if (desc.get) {
        if (desc.set) {
          str = ctx.stylize("[Getter/Setter]", "special");
        } else {
          str = ctx.stylize("[Getter]", "special");
        }
      } else {
        if (desc.set) {
          str = ctx.stylize("[Setter]", "special");
        }
      }
      if (!hasOwnProperty(visibleKeys, key)) {
        name = "[" + key + "]";
      }
      if (!str) {
        if (ctx.seen.indexOf(desc.value) < 0) {
          if (isNull(recurseTimes)) {
            str = formatValue(ctx, desc.value, null);
          } else {
            str = formatValue(ctx, desc.value, recurseTimes - 1);
          }
          if (str.indexOf("\n") > -1) {
            if (array) {
              str = str.split("\n").map(function(line) {
                return "  " + line;
              }).join("\n").substr(2);
            } else {
              str = "\n" + str.split("\n").map(function(line) {
                return "   " + line;
              }).join("\n");
            }
          }
        } else {
          str = ctx.stylize("[Circular]", "special");
        }
      }
      if (isUndefined(name)) {
        if (array && key.match(/^\d+$/)) {
          return str;
        }
        name = JSON.stringify("" + key);
        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
          name = name.substr(1, name.length - 2);
          name = ctx.stylize(name, "name");
        } else {
          name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
          name = ctx.stylize(name, "string");
        }
      }
      return name + ": " + str;
    }
    function reduceToSingleString(output, base, braces) {
      var length = output.reduce(function(prev, cur) {
        if (cur.indexOf("\n") >= 0)
          ;
        return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
      }, 0);
      if (length > 60) {
        return braces[0] + (base === "" ? "" : base + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
      }
      return braces[0] + base + " " + output.join(", ") + " " + braces[1];
    }
    exports.types = types;
    function isArray(ar) {
      return Array.isArray(ar);
    }
    exports.isArray = isArray;
    function isBoolean(arg) {
      return typeof arg === "boolean";
    }
    exports.isBoolean = isBoolean;
    function isNull(arg) {
      return arg === null;
    }
    exports.isNull = isNull;
    function isNullOrUndefined(arg) {
      return arg == null;
    }
    exports.isNullOrUndefined = isNullOrUndefined;
    function isNumber(arg) {
      return typeof arg === "number";
    }
    exports.isNumber = isNumber;
    function isString(arg) {
      return typeof arg === "string";
    }
    exports.isString = isString;
    function isSymbol(arg) {
      return typeof arg === "symbol";
    }
    exports.isSymbol = isSymbol;
    function isUndefined(arg) {
      return arg === void 0;
    }
    exports.isUndefined = isUndefined;
    function isRegExp(re) {
      return isObject(re) && objectToString(re) === "[object RegExp]";
    }
    exports.isRegExp = isRegExp;
    exports.types.isRegExp = isRegExp;
    function isObject(arg) {
      return typeof arg === "object" && arg !== null;
    }
    exports.isObject = isObject;
    function isDate(d) {
      return isObject(d) && objectToString(d) === "[object Date]";
    }
    exports.isDate = isDate;
    exports.types.isDate = isDate;
    function isError(e) {
      return isObject(e) && (objectToString(e) === "[object Error]" || e instanceof Error);
    }
    exports.isError = isError;
    exports.types.isNativeError = isError;
    function isFunction(arg) {
      return typeof arg === "function";
    }
    exports.isFunction = isFunction;
    function isPrimitive(arg) {
      return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || typeof arg === "undefined";
    }
    exports.isPrimitive = isPrimitive;
    exports.isBuffer = isBuffer;
    function objectToString(o) {
      return Object.prototype.toString.call(o);
    }
    function pad(n) {
      return n < 10 ? "0" + n.toString(10) : n.toString(10);
    }
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    function timestamp() {
      var d = new Date();
      var time = [
        pad(d.getHours()),
        pad(d.getMinutes()),
        pad(d.getSeconds())
      ].join(":");
      return [d.getDate(), months[d.getMonth()], time].join(" ");
    }
    exports.log = function() {
      console.log("%s - %s", timestamp(), exports.format.apply(exports, arguments));
    };
    exports.inherits = inherits.exports;
    exports._extend = function(origin, add) {
      if (!add || !isObject(add))
        return origin;
      var keys = Object.keys(add);
      var i = keys.length;
      while (i--) {
        origin[keys[i]] = add[keys[i]];
      }
      return origin;
    };
    function hasOwnProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }
    var kCustomPromisifiedSymbol = typeof Symbol !== "undefined" ? Symbol("util.promisify.custom") : void 0;
    exports.promisify = function promisify(original) {
      if (typeof original !== "function")
        throw new TypeError('The "original" argument must be of type Function');
      if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
        var fn = original[kCustomPromisifiedSymbol];
        if (typeof fn !== "function") {
          throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        }
        Object.defineProperty(fn, kCustomPromisifiedSymbol, {
          value: fn,
          enumerable: false,
          writable: false,
          configurable: true
        });
        return fn;
      }
      function fn() {
        var promiseResolve, promiseReject;
        var promise = new Promise(function(resolve2, reject) {
          promiseResolve = resolve2;
          promiseReject = reject;
        });
        var args = [];
        for (var i = 0; i < arguments.length; i++) {
          args.push(arguments[i]);
        }
        args.push(function(err, value) {
          if (err) {
            promiseReject(err);
          } else {
            promiseResolve(value);
          }
        });
        try {
          original.apply(this, args);
        } catch (err) {
          promiseReject(err);
        }
        return promise;
      }
      Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
      if (kCustomPromisifiedSymbol)
        Object.defineProperty(fn, kCustomPromisifiedSymbol, {
          value: fn,
          enumerable: false,
          writable: false,
          configurable: true
        });
      return Object.defineProperties(fn, getOwnPropertyDescriptors(original));
    };
    exports.promisify.custom = kCustomPromisifiedSymbol;
    function callbackifyOnRejected(reason, cb) {
      if (!reason) {
        var newReason = new Error("Promise was rejected with a falsy value");
        newReason.reason = reason;
        reason = newReason;
      }
      return cb(reason);
    }
    function callbackify(original) {
      if (typeof original !== "function") {
        throw new TypeError('The "original" argument must be of type Function');
      }
      function callbackified() {
        var args = [];
        for (var i = 0; i < arguments.length; i++) {
          args.push(arguments[i]);
        }
        var maybeCb = args.pop();
        if (typeof maybeCb !== "function") {
          throw new TypeError("The last argument must be of type Function");
        }
        var self2 = this;
        var cb = function() {
          return maybeCb.apply(self2, arguments);
        };
        original.apply(this, args).then(function(ret) {
          process.nextTick(cb.bind(null, null, ret));
        }, function(rej) {
          process.nextTick(callbackifyOnRejected.bind(null, rej, cb));
        });
      }
      Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
      Object.defineProperties(callbackified, getOwnPropertyDescriptors(original));
      return callbackified;
    }
    exports.callbackify = callbackify;
  })(util$1);
  var eastasianwidth = { exports: {} };
  (function(module) {
    var eaw = {};
    {
      module.exports = eaw;
    }
    eaw.eastAsianWidth = function(character) {
      var x = character.charCodeAt(0);
      var y = character.length == 2 ? character.charCodeAt(1) : 0;
      var codePoint = x;
      if (55296 <= x && x <= 56319 && (56320 <= y && y <= 57343)) {
        x &= 1023;
        y &= 1023;
        codePoint = x << 10 | y;
        codePoint += 65536;
      }
      if (codePoint == 12288 || 65281 <= codePoint && codePoint <= 65376 || 65504 <= codePoint && codePoint <= 65510) {
        return "F";
      }
      if (codePoint == 8361 || 65377 <= codePoint && codePoint <= 65470 || 65474 <= codePoint && codePoint <= 65479 || 65482 <= codePoint && codePoint <= 65487 || 65490 <= codePoint && codePoint <= 65495 || 65498 <= codePoint && codePoint <= 65500 || 65512 <= codePoint && codePoint <= 65518) {
        return "H";
      }
      if (4352 <= codePoint && codePoint <= 4447 || 4515 <= codePoint && codePoint <= 4519 || 4602 <= codePoint && codePoint <= 4607 || 9001 <= codePoint && codePoint <= 9002 || 11904 <= codePoint && codePoint <= 11929 || 11931 <= codePoint && codePoint <= 12019 || 12032 <= codePoint && codePoint <= 12245 || 12272 <= codePoint && codePoint <= 12283 || 12289 <= codePoint && codePoint <= 12350 || 12353 <= codePoint && codePoint <= 12438 || 12441 <= codePoint && codePoint <= 12543 || 12549 <= codePoint && codePoint <= 12589 || 12593 <= codePoint && codePoint <= 12686 || 12688 <= codePoint && codePoint <= 12730 || 12736 <= codePoint && codePoint <= 12771 || 12784 <= codePoint && codePoint <= 12830 || 12832 <= codePoint && codePoint <= 12871 || 12880 <= codePoint && codePoint <= 13054 || 13056 <= codePoint && codePoint <= 19903 || 19968 <= codePoint && codePoint <= 42124 || 42128 <= codePoint && codePoint <= 42182 || 43360 <= codePoint && codePoint <= 43388 || 44032 <= codePoint && codePoint <= 55203 || 55216 <= codePoint && codePoint <= 55238 || 55243 <= codePoint && codePoint <= 55291 || 63744 <= codePoint && codePoint <= 64255 || 65040 <= codePoint && codePoint <= 65049 || 65072 <= codePoint && codePoint <= 65106 || 65108 <= codePoint && codePoint <= 65126 || 65128 <= codePoint && codePoint <= 65131 || 110592 <= codePoint && codePoint <= 110593 || 127488 <= codePoint && codePoint <= 127490 || 127504 <= codePoint && codePoint <= 127546 || 127552 <= codePoint && codePoint <= 127560 || 127568 <= codePoint && codePoint <= 127569 || 131072 <= codePoint && codePoint <= 194367 || 177984 <= codePoint && codePoint <= 196605 || 196608 <= codePoint && codePoint <= 262141) {
        return "W";
      }
      if (32 <= codePoint && codePoint <= 126 || 162 <= codePoint && codePoint <= 163 || 165 <= codePoint && codePoint <= 166 || codePoint == 172 || codePoint == 175 || 10214 <= codePoint && codePoint <= 10221 || 10629 <= codePoint && codePoint <= 10630) {
        return "Na";
      }
      if (codePoint == 161 || codePoint == 164 || 167 <= codePoint && codePoint <= 168 || codePoint == 170 || 173 <= codePoint && codePoint <= 174 || 176 <= codePoint && codePoint <= 180 || 182 <= codePoint && codePoint <= 186 || 188 <= codePoint && codePoint <= 191 || codePoint == 198 || codePoint == 208 || 215 <= codePoint && codePoint <= 216 || 222 <= codePoint && codePoint <= 225 || codePoint == 230 || 232 <= codePoint && codePoint <= 234 || 236 <= codePoint && codePoint <= 237 || codePoint == 240 || 242 <= codePoint && codePoint <= 243 || 247 <= codePoint && codePoint <= 250 || codePoint == 252 || codePoint == 254 || codePoint == 257 || codePoint == 273 || codePoint == 275 || codePoint == 283 || 294 <= codePoint && codePoint <= 295 || codePoint == 299 || 305 <= codePoint && codePoint <= 307 || codePoint == 312 || 319 <= codePoint && codePoint <= 322 || codePoint == 324 || 328 <= codePoint && codePoint <= 331 || codePoint == 333 || 338 <= codePoint && codePoint <= 339 || 358 <= codePoint && codePoint <= 359 || codePoint == 363 || codePoint == 462 || codePoint == 464 || codePoint == 466 || codePoint == 468 || codePoint == 470 || codePoint == 472 || codePoint == 474 || codePoint == 476 || codePoint == 593 || codePoint == 609 || codePoint == 708 || codePoint == 711 || 713 <= codePoint && codePoint <= 715 || codePoint == 717 || codePoint == 720 || 728 <= codePoint && codePoint <= 731 || codePoint == 733 || codePoint == 735 || 768 <= codePoint && codePoint <= 879 || 913 <= codePoint && codePoint <= 929 || 931 <= codePoint && codePoint <= 937 || 945 <= codePoint && codePoint <= 961 || 963 <= codePoint && codePoint <= 969 || codePoint == 1025 || 1040 <= codePoint && codePoint <= 1103 || codePoint == 1105 || codePoint == 8208 || 8211 <= codePoint && codePoint <= 8214 || 8216 <= codePoint && codePoint <= 8217 || 8220 <= codePoint && codePoint <= 8221 || 8224 <= codePoint && codePoint <= 8226 || 8228 <= codePoint && codePoint <= 8231 || codePoint == 8240 || 8242 <= codePoint && codePoint <= 8243 || codePoint == 8245 || codePoint == 8251 || codePoint == 8254 || codePoint == 8308 || codePoint == 8319 || 8321 <= codePoint && codePoint <= 8324 || codePoint == 8364 || codePoint == 8451 || codePoint == 8453 || codePoint == 8457 || codePoint == 8467 || codePoint == 8470 || 8481 <= codePoint && codePoint <= 8482 || codePoint == 8486 || codePoint == 8491 || 8531 <= codePoint && codePoint <= 8532 || 8539 <= codePoint && codePoint <= 8542 || 8544 <= codePoint && codePoint <= 8555 || 8560 <= codePoint && codePoint <= 8569 || codePoint == 8585 || 8592 <= codePoint && codePoint <= 8601 || 8632 <= codePoint && codePoint <= 8633 || codePoint == 8658 || codePoint == 8660 || codePoint == 8679 || codePoint == 8704 || 8706 <= codePoint && codePoint <= 8707 || 8711 <= codePoint && codePoint <= 8712 || codePoint == 8715 || codePoint == 8719 || codePoint == 8721 || codePoint == 8725 || codePoint == 8730 || 8733 <= codePoint && codePoint <= 8736 || codePoint == 8739 || codePoint == 8741 || 8743 <= codePoint && codePoint <= 8748 || codePoint == 8750 || 8756 <= codePoint && codePoint <= 8759 || 8764 <= codePoint && codePoint <= 8765 || codePoint == 8776 || codePoint == 8780 || codePoint == 8786 || 8800 <= codePoint && codePoint <= 8801 || 8804 <= codePoint && codePoint <= 8807 || 8810 <= codePoint && codePoint <= 8811 || 8814 <= codePoint && codePoint <= 8815 || 8834 <= codePoint && codePoint <= 8835 || 8838 <= codePoint && codePoint <= 8839 || codePoint == 8853 || codePoint == 8857 || codePoint == 8869 || codePoint == 8895 || codePoint == 8978 || 9312 <= codePoint && codePoint <= 9449 || 9451 <= codePoint && codePoint <= 9547 || 9552 <= codePoint && codePoint <= 9587 || 9600 <= codePoint && codePoint <= 9615 || 9618 <= codePoint && codePoint <= 9621 || 9632 <= codePoint && codePoint <= 9633 || 9635 <= codePoint && codePoint <= 9641 || 9650 <= codePoint && codePoint <= 9651 || 9654 <= codePoint && codePoint <= 9655 || 9660 <= codePoint && codePoint <= 9661 || 9664 <= codePoint && codePoint <= 9665 || 9670 <= codePoint && codePoint <= 9672 || codePoint == 9675 || 9678 <= codePoint && codePoint <= 9681 || 9698 <= codePoint && codePoint <= 9701 || codePoint == 9711 || 9733 <= codePoint && codePoint <= 9734 || codePoint == 9737 || 9742 <= codePoint && codePoint <= 9743 || 9748 <= codePoint && codePoint <= 9749 || codePoint == 9756 || codePoint == 9758 || codePoint == 9792 || codePoint == 9794 || 9824 <= codePoint && codePoint <= 9825 || 9827 <= codePoint && codePoint <= 9829 || 9831 <= codePoint && codePoint <= 9834 || 9836 <= codePoint && codePoint <= 9837 || codePoint == 9839 || 9886 <= codePoint && codePoint <= 9887 || 9918 <= codePoint && codePoint <= 9919 || 9924 <= codePoint && codePoint <= 9933 || 9935 <= codePoint && codePoint <= 9953 || codePoint == 9955 || 9960 <= codePoint && codePoint <= 9983 || codePoint == 10045 || codePoint == 10071 || 10102 <= codePoint && codePoint <= 10111 || 11093 <= codePoint && codePoint <= 11097 || 12872 <= codePoint && codePoint <= 12879 || 57344 <= codePoint && codePoint <= 63743 || 65024 <= codePoint && codePoint <= 65039 || codePoint == 65533 || 127232 <= codePoint && codePoint <= 127242 || 127248 <= codePoint && codePoint <= 127277 || 127280 <= codePoint && codePoint <= 127337 || 127344 <= codePoint && codePoint <= 127386 || 917760 <= codePoint && codePoint <= 917999 || 983040 <= codePoint && codePoint <= 1048573 || 1048576 <= codePoint && codePoint <= 1114109) {
        return "A";
      }
      return "N";
    };
    eaw.characterLength = function(character) {
      var code = this.eastAsianWidth(character);
      if (code == "F" || code == "W" || code == "A") {
        return 2;
      } else {
        return 1;
      }
    };
    function stringToArray(string) {
      return string.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || [];
    }
    eaw.length = function(string) {
      var characters = stringToArray(string);
      var len = 0;
      for (var i = 0; i < characters.length; i++) {
        len = len + this.characterLength(characters[i]);
      }
      return len;
    };
    eaw.slice = function(text, start2, end) {
      textLen = eaw.length(text);
      start2 = start2 ? start2 : 0;
      end = end ? end : 1;
      if (start2 < 0) {
        start2 = textLen + start2;
      }
      if (end < 0) {
        end = textLen + end;
      }
      var result = "";
      var eawLen = 0;
      var chars = stringToArray(text);
      for (var i = 0; i < chars.length; i++) {
        var char = chars[i];
        var charLen = eaw.length(char);
        if (eawLen >= start2 - (charLen == 2 ? 1 : 0)) {
          if (eawLen + charLen <= end) {
            result += char;
          } else {
            break;
          }
        }
        eawLen += charLen;
      }
      return result;
    };
  })(eastasianwidth);
  function getLoggerLocale2() {
    const defaultLocale = "en-US";
    if (process.env.LANG) {
      const extractedLocale = process.env.LANG.split(".")[0].replace(/_/g, "-");
      if (extractedLocale.length < 2)
        return defaultLocale;
      else
        return extractedLocale.substring(0, 5);
    } else
      return defaultLocale;
  }
  new Intl.DateTimeFormat(getLoggerLocale2(), {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
  if (typeof process !== "undefined") {
    if (process.argv.includes("--verbose"))
      ;
    else if (process.argv.includes("--silent"))
      ;
    else
      ;
  }
  function createRouteData(pattern, params, component, pathname, type, segments) {
    return {
      type,
      pattern,
      params,
      component,
      generate: () => "",
      pathname: pathname || void 0,
      segments
    };
  }
  function deserializeRouteData2(rawRouteData) {
    const { component, params, pathname, type, segments } = rawRouteData;
    const pattern = new RegExp(rawRouteData.pattern);
    return createRouteData(pattern, params, component, pathname, type, segments);
  }
  var __defProp7 = Object.defineProperty;
  var __defProps4 = Object.defineProperties;
  var __getOwnPropDescs4 = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols6 = Object.getOwnPropertySymbols;
  var __hasOwnProp7 = Object.prototype.hasOwnProperty;
  var __propIsEnum6 = Object.prototype.propertyIsEnumerable;
  var __defNormalProp6 = (obj, key, value) => key in obj ? __defProp7(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues6 = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp7.call(b, prop))
        __defNormalProp6(a, prop, b[prop]);
    if (__getOwnPropSymbols6)
      for (var prop of __getOwnPropSymbols6(b)) {
        if (__propIsEnum6.call(b, prop))
          __defNormalProp6(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps4 = (a, b) => __defProps4(a, __getOwnPropDescs4(b));
  function deserializeManifest2(serializedManifest) {
    const routes = [];
    for (const serializedRoute of serializedManifest.routes) {
      routes.push(__spreadProps4(__spreadValues6({}, serializedRoute), {
        routeData: deserializeRouteData2(serializedRoute.routeData)
      }));
      const route = serializedRoute;
      route.routeData = deserializeRouteData2(serializedRoute.routeData);
    }
    const assets = new Set(serializedManifest.assets);
    return __spreadProps4(__spreadValues6({}, serializedManifest), {
      assets,
      routes
    });
  }
  function assertPath(path) {
    if (typeof path !== "string") {
      throw new TypeError("Path must be a string. Received " + JSON.stringify(path));
    }
  }
  function normalizeStringPosix(path, allowAboveRoot) {
    var res = "";
    var lastSegmentLength = 0;
    var lastSlash = -1;
    var dots = 0;
    var code;
    for (var i = 0; i <= path.length; ++i) {
      if (i < path.length)
        code = path.charCodeAt(i);
      else if (code === 47)
        break;
      else
        code = 47;
      if (code === 47) {
        if (lastSlash === i - 1 || dots === 1)
          ;
        else if (lastSlash !== i - 1 && dots === 2) {
          if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 || res.charCodeAt(res.length - 2) !== 46) {
            if (res.length > 2) {
              var lastSlashIndex = res.lastIndexOf("/");
              if (lastSlashIndex !== res.length - 1) {
                if (lastSlashIndex === -1) {
                  res = "";
                  lastSegmentLength = 0;
                } else {
                  res = res.slice(0, lastSlashIndex);
                  lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
                }
                lastSlash = i;
                dots = 0;
                continue;
              }
            } else if (res.length === 2 || res.length === 1) {
              res = "";
              lastSegmentLength = 0;
              lastSlash = i;
              dots = 0;
              continue;
            }
          }
          if (allowAboveRoot) {
            if (res.length > 0)
              res += "/..";
            else
              res = "..";
            lastSegmentLength = 2;
          }
        } else {
          if (res.length > 0)
            res += "/" + path.slice(lastSlash + 1, i);
          else
            res = path.slice(lastSlash + 1, i);
          lastSegmentLength = i - lastSlash - 1;
        }
        lastSlash = i;
        dots = 0;
      } else if (code === 46 && dots !== -1) {
        ++dots;
      } else {
        dots = -1;
      }
    }
    return res;
  }
  function _format(sep, pathObject) {
    var dir = pathObject.dir || pathObject.root;
    var base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
    if (!dir) {
      return base;
    }
    if (dir === pathObject.root) {
      return dir + base;
    }
    return dir + sep + base;
  }
  var posix = {
    resolve: function resolve() {
      var resolvedPath = "";
      var resolvedAbsolute = false;
      var cwd;
      for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
        var path;
        if (i >= 0)
          path = arguments[i];
        else {
          if (cwd === void 0)
            cwd = process.cwd();
          path = cwd;
        }
        assertPath(path);
        if (path.length === 0) {
          continue;
        }
        resolvedPath = path + "/" + resolvedPath;
        resolvedAbsolute = path.charCodeAt(0) === 47;
      }
      resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);
      if (resolvedAbsolute) {
        if (resolvedPath.length > 0)
          return "/" + resolvedPath;
        else
          return "/";
      } else if (resolvedPath.length > 0) {
        return resolvedPath;
      } else {
        return ".";
      }
    },
    normalize: function normalize(path) {
      assertPath(path);
      if (path.length === 0)
        return ".";
      var isAbsolute2 = path.charCodeAt(0) === 47;
      var trailingSeparator = path.charCodeAt(path.length - 1) === 47;
      path = normalizeStringPosix(path, !isAbsolute2);
      if (path.length === 0 && !isAbsolute2)
        path = ".";
      if (path.length > 0 && trailingSeparator)
        path += "/";
      if (isAbsolute2)
        return "/" + path;
      return path;
    },
    isAbsolute: function isAbsolute(path) {
      assertPath(path);
      return path.length > 0 && path.charCodeAt(0) === 47;
    },
    join: function join() {
      if (arguments.length === 0)
        return ".";
      var joined;
      for (var i = 0; i < arguments.length; ++i) {
        var arg = arguments[i];
        assertPath(arg);
        if (arg.length > 0) {
          if (joined === void 0)
            joined = arg;
          else
            joined += "/" + arg;
        }
      }
      if (joined === void 0)
        return ".";
      return posix.normalize(joined);
    },
    relative: function relative(from, to) {
      assertPath(from);
      assertPath(to);
      if (from === to)
        return "";
      from = posix.resolve(from);
      to = posix.resolve(to);
      if (from === to)
        return "";
      var fromStart = 1;
      for (; fromStart < from.length; ++fromStart) {
        if (from.charCodeAt(fromStart) !== 47)
          break;
      }
      var fromEnd = from.length;
      var fromLen = fromEnd - fromStart;
      var toStart = 1;
      for (; toStart < to.length; ++toStart) {
        if (to.charCodeAt(toStart) !== 47)
          break;
      }
      var toEnd = to.length;
      var toLen = toEnd - toStart;
      var length = fromLen < toLen ? fromLen : toLen;
      var lastCommonSep = -1;
      var i = 0;
      for (; i <= length; ++i) {
        if (i === length) {
          if (toLen > length) {
            if (to.charCodeAt(toStart + i) === 47) {
              return to.slice(toStart + i + 1);
            } else if (i === 0) {
              return to.slice(toStart + i);
            }
          } else if (fromLen > length) {
            if (from.charCodeAt(fromStart + i) === 47) {
              lastCommonSep = i;
            } else if (i === 0) {
              lastCommonSep = 0;
            }
          }
          break;
        }
        var fromCode = from.charCodeAt(fromStart + i);
        var toCode = to.charCodeAt(toStart + i);
        if (fromCode !== toCode)
          break;
        else if (fromCode === 47)
          lastCommonSep = i;
      }
      var out = "";
      for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
        if (i === fromEnd || from.charCodeAt(i) === 47) {
          if (out.length === 0)
            out += "..";
          else
            out += "/..";
        }
      }
      if (out.length > 0)
        return out + to.slice(toStart + lastCommonSep);
      else {
        toStart += lastCommonSep;
        if (to.charCodeAt(toStart) === 47)
          ++toStart;
        return to.slice(toStart);
      }
    },
    _makeLong: function _makeLong(path) {
      return path;
    },
    dirname: function dirname(path) {
      assertPath(path);
      if (path.length === 0)
        return ".";
      var code = path.charCodeAt(0);
      var hasRoot = code === 47;
      var end = -1;
      var matchedSlash = true;
      for (var i = path.length - 1; i >= 1; --i) {
        code = path.charCodeAt(i);
        if (code === 47) {
          if (!matchedSlash) {
            end = i;
            break;
          }
        } else {
          matchedSlash = false;
        }
      }
      if (end === -1)
        return hasRoot ? "/" : ".";
      if (hasRoot && end === 1)
        return "//";
      return path.slice(0, end);
    },
    basename: function basename(path, ext) {
      if (ext !== void 0 && typeof ext !== "string")
        throw new TypeError('"ext" argument must be a string');
      assertPath(path);
      var start2 = 0;
      var end = -1;
      var matchedSlash = true;
      var i;
      if (ext !== void 0 && ext.length > 0 && ext.length <= path.length) {
        if (ext.length === path.length && ext === path)
          return "";
        var extIdx = ext.length - 1;
        var firstNonSlashEnd = -1;
        for (i = path.length - 1; i >= 0; --i) {
          var code = path.charCodeAt(i);
          if (code === 47) {
            if (!matchedSlash) {
              start2 = i + 1;
              break;
            }
          } else {
            if (firstNonSlashEnd === -1) {
              matchedSlash = false;
              firstNonSlashEnd = i + 1;
            }
            if (extIdx >= 0) {
              if (code === ext.charCodeAt(extIdx)) {
                if (--extIdx === -1) {
                  end = i;
                }
              } else {
                extIdx = -1;
                end = firstNonSlashEnd;
              }
            }
          }
        }
        if (start2 === end)
          end = firstNonSlashEnd;
        else if (end === -1)
          end = path.length;
        return path.slice(start2, end);
      } else {
        for (i = path.length - 1; i >= 0; --i) {
          if (path.charCodeAt(i) === 47) {
            if (!matchedSlash) {
              start2 = i + 1;
              break;
            }
          } else if (end === -1) {
            matchedSlash = false;
            end = i + 1;
          }
        }
        if (end === -1)
          return "";
        return path.slice(start2, end);
      }
    },
    extname: function extname(path) {
      assertPath(path);
      var startDot = -1;
      var startPart = 0;
      var end = -1;
      var matchedSlash = true;
      var preDotState = 0;
      for (var i = path.length - 1; i >= 0; --i) {
        var code = path.charCodeAt(i);
        if (code === 47) {
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }
          continue;
        }
        if (end === -1) {
          matchedSlash = false;
          end = i + 1;
        }
        if (code === 46) {
          if (startDot === -1)
            startDot = i;
          else if (preDotState !== 1)
            preDotState = 1;
        } else if (startDot !== -1) {
          preDotState = -1;
        }
      }
      if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
        return "";
      }
      return path.slice(startDot, end);
    },
    format: function format(pathObject) {
      if (pathObject === null || typeof pathObject !== "object") {
        throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
      }
      return _format("/", pathObject);
    },
    parse: function parse(path) {
      assertPath(path);
      var ret = { root: "", dir: "", base: "", ext: "", name: "" };
      if (path.length === 0)
        return ret;
      var code = path.charCodeAt(0);
      var isAbsolute2 = code === 47;
      var start2;
      if (isAbsolute2) {
        ret.root = "/";
        start2 = 1;
      } else {
        start2 = 0;
      }
      var startDot = -1;
      var startPart = 0;
      var end = -1;
      var matchedSlash = true;
      var i = path.length - 1;
      var preDotState = 0;
      for (; i >= start2; --i) {
        code = path.charCodeAt(i);
        if (code === 47) {
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }
          continue;
        }
        if (end === -1) {
          matchedSlash = false;
          end = i + 1;
        }
        if (code === 46) {
          if (startDot === -1)
            startDot = i;
          else if (preDotState !== 1)
            preDotState = 1;
        } else if (startDot !== -1) {
          preDotState = -1;
        }
      }
      if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
        if (end !== -1) {
          if (startPart === 0 && isAbsolute2)
            ret.base = ret.name = path.slice(1, end);
          else
            ret.base = ret.name = path.slice(startPart, end);
        }
      } else {
        if (startPart === 0 && isAbsolute2) {
          ret.name = path.slice(1, startDot);
          ret.base = path.slice(1, end);
        } else {
          ret.name = path.slice(startPart, startDot);
          ret.base = path.slice(startPart, end);
        }
        ret.ext = path.slice(startDot, end);
      }
      if (startPart > 0)
        ret.dir = path.slice(0, startPart - 1);
      else if (isAbsolute2)
        ret.dir = "/";
      return ret;
    },
    sep: "/",
    delimiter: ":",
    win32: null,
    posix: null
  };
  posix.posix = posix;
  var STYLE_EXTENSIONS2 = /* @__PURE__ */ new Set([
    ".css",
    ".pcss",
    ".postcss",
    ".scss",
    ".sass",
    ".styl",
    ".stylus",
    ".less"
  ]);
  new RegExp(`\\.(${Array.from(STYLE_EXTENSIONS2).map((s) => s.slice(1)).join("|")})($|\\?)`);
  var SCRIPT_EXTENSIONS2 = /* @__PURE__ */ new Set([".js", ".ts"]);
  new RegExp(`\\.(${Array.from(SCRIPT_EXTENSIONS2).map((s) => s.slice(1)).join("|")})($|\\?)`);
  var _manifest2 = Object.assign(deserializeManifest2({ "routes": [{ "file": "", "links": [], "scripts": ["entry.86981a80.js"], "routeData": { "type": "page", "pattern": "^\\/$", "segments": [], "params": [], "component": "src/pages/index.astro", "pathname": "/" } }, { "file": "", "links": [], "scripts": ["entry.86981a802.js"], "routeData": { "type": "page", "pattern": "^\\/networkonly\\/?$", "segments": [[{ "content": "networkonly", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/networkonly.astro", "pathname": "/networkonly" } }, { "file": "", "links": [], "scripts": ["entry.86981a803.js"], "routeData": { "type": "page", "pattern": "^\\/about\\/?$", "segments": [[{ "content": "about", "dynamic": false, "spread": false }]], "params": [], "component": "src/pages/about.astro", "pathname": "/about" } }], "markdown": { "mode": "mdx", "drafts": false, "syntaxHighlight": "shiki", "shikiConfig": { "langs": [], "theme": "github-dark", "wrap": false }, "remarkPlugins": [], "rehypePlugins": [] }, "pageMap": null, "renderers": [], "entryModules": { "/src/pages/index.astro/hoisted.js": "entry.86981a80.js", "/src/pages/networkonly.astro/hoisted.js": "entry.86981a802.js", "/src/pages/about.astro/hoisted.js": "entry.86981a803.js", "\0@astrojs-ssr-virtual-entry": "index.js", "astro:scripts/before-hydration.js": "data:text/javascript;charset=utf-8,//[no before-hydration script]" }, "assets": ["/entry.86981a80.js", "/entry.86981a802.js", "/entry.86981a803.js", "/favicon.ico"] }), {
    pageMap,
    renderers
  });
  var _args = { "networkOnly": ["/networkonly"] };
  var _exports = createExports(_manifest2, _args);
  var handler = _exports["handler"];
  var _start = "start";
  if (_start in server_exports) {
    server_exports[_start](_manifest2, _args);
  }
})();
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */

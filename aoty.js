var aoty = (() => {
  var y,
    k,
    v = Object.create,
    M = Object.defineProperty,
    H = Object.getOwnPropertyDescriptor,
    G = Object.getOwnPropertyNames,
    q = Object.getPrototypeOf,
    Y = Object.prototype.hasOwnProperty,
    V = (e, t) => {
      for (var r in t) M(e, r, { get: t[r], enumerable: !0 });
    },
    e = (e, t, r) => {
      r = null != e ? v(q(e)) : {};
      var n =
          !t && e && e.__esModule
            ? r
            : M(r, "default", { value: e, enumerable: !0 }),
        a = e,
        s = void 0,
        i = void 0;
      if ((a && "object" == typeof a) || "function" == typeof a)
        for (let e of G(a))
          Y.call(n, e) ||
            e === s ||
            M(n, e, {
              get: () => a[e],
              enumerable: !(i = H(a, e)) || i.enumerable,
            });
      return n;
    },
    t = function () {
      return k || (0, y[G(y)[0]])((k = { exports: {} }).exports, k), k.exports;
    },
    Q = {
      xml: !(y = {
        "node_modules/boolbase/index.js"(e, t) {
          t.exports = {
            trueFunc: function () {
              return !0;
            },
            falseFunc: function () {
              return !1;
            },
          };
        },
      }),
      decodeEntities: !0,
    },
    j = { _useHtmlParser2: !0, xmlMode: !0 };
  function W(e) {
    return null != e && e.xml
      ? "boolean" == typeof e.xml
        ? j
        : { ...j, ...e.xml }
      : null != e
      ? e
      : void 0;
  }
  var a,
    X = {},
    K =
      (V(X, {
        contains: () => St,
        html: () =>
          function (e, t) {
            (e = (function (e, t) {
              return !(
                t ||
                "object" != typeof e ||
                null == e ||
                "length" in e ||
                "type" in e
              );
            })(e)
              ? void (t = e)
              : e),
              (t = {
                ...Q,
                ...(null == this ? void 0 : this._options),
                ...W(null != t ? t : {}),
              });
            return Nt(this, e, t);
          },
        merge: () =>
          function (r, n) {
            if (bt(r) && bt(n)) {
              let t = r.length;
              var a = +n.length;
              for (let e = 0; e < a; e++) r[t++] = n[e];
              return (r.length = t), r;
            }
          },
        parseHTML: () => It,
        root: () =>
          function () {
            return this(this._root);
          },
        text: () => Ct,
        xml: () =>
          function (e) {
            var t = { ...this._options, xmlMode: !0 };
            return Nt(this, e, t);
          },
      }),
      {});
  V(K, {
    DocumentPosition: () => d,
    append: () =>
      function (e, t) {
        at(t);
        var r = e["parent"],
          n = e.next;
        (t.next = n),
          (((t.prev = e).next = t).parent = r),
          n
            ? ((n.prev = t),
              r && (e = r.children).splice(e.lastIndexOf(n), 0, t))
            : r && r.children.push(t);
      },
    appendChild: () =>
      function (e, t) {
        at(t),
          (t.next = null),
          1 < (t.parent = e).children.push(t)
            ? (((e = e.children[e.children.length - 2]).next = t).prev = e)
            : (t.prev = null);
      },
    compareDocumentPosition: () => Et,
    existsOne: () =>
      function t(r, e) {
        return e.some((e) => h(e) && (r(e) || t(r, e.children)));
      },
    filter: () => st,
    find: () => it,
    findAll: () =>
      function (e, t) {
        var r = [],
          n = [t],
          a = [0];
        for (;;)
          if (a[0] >= n[0].length) {
            if (1 === n.length) return r;
            n.shift(), a.shift();
          } else {
            var s = n[0][a[0]++];
            h(s) &&
              (e(s) && r.push(s), 0 < s.children.length) &&
              (a.unshift(0), n.unshift(s.children));
          }
      },
    findOne: () => ot,
    findOneChild: () =>
      function (e, t) {
        return t.find(e);
      },
    getAttributeValue: () =>
      function (e, t) {
        return null == (e = e.attribs) ? void 0 : e[t];
      },
    getChildren: () => Ze,
    getElementById: () =>
      function (e, t, r = !0) {
        Array.isArray(t) || (t = [t]);
        return ot(lt("id", e), t, r);
      },
    getElements: () =>
      function (e, t, r, n = 1 / 0) {
        e = ut(e);
        return e ? st(e, t, r, n) : [];
      },
    getElementsByTagName: () => dt,
    getElementsByTagType: () =>
      function (e, t, r = !0, n = 1 / 0) {
        return st(ct.tag_type(e), t, r, n);
      },
    getFeed: () =>
      function (e) {
        e = At(gt, e);
        return e
          ? ("feed" === e.name
              ? function (e) {
                  var e = e.children,
                    t = {
                      type: "atom",
                      items: dt("entry", e).map((e) => {
                        var e = e["children"],
                          t = { media: ft(e) },
                          r =
                            (o(t, "id", "id", e),
                            o(t, "title", "title", e),
                            null == (r = At("link", e))
                              ? void 0
                              : r.attribs.href),
                          r =
                            (r && (t.link = r),
                            _t("summary", e) || _t("content", e)),
                          r = (r && (t.description = r), _t("updated", e));
                        return r && (t.pubDate = new Date(r)), t;
                      }),
                    },
                    r =
                      (o(t, "id", "id", e),
                      o(t, "title", "title", e),
                      null == (r = At("link", e)) ? void 0 : r.attribs.href);
                  r && (t.link = r);
                  o(t, "description", "subtitle", e);
                  r = _t("updated", e);
                  r && (t.updated = new Date(r));
                  return o(t, "author", "email", e, !0), t;
                }
              : function (e) {
                  var t =
                      null !=
                      (t =
                        null == (t = At("channel", e.children))
                          ? void 0
                          : t.children)
                        ? t
                        : [],
                    e = {
                      type: e.name.substr(0, 3),
                      id: "",
                      items: dt("item", e.children).map((e) => {
                        var e = e["children"],
                          t = { media: ft(e) },
                          e =
                            (o(t, "id", "guid", e),
                            o(t, "title", "title", e),
                            o(t, "link", "link", e),
                            o(t, "description", "description", e),
                            _t("pubDate", e) || _t("dc:date", e));
                        return e && (t.pubDate = new Date(e)), t;
                      }),
                    },
                    r =
                      (o(e, "title", "title", t),
                      o(e, "link", "link", t),
                      o(e, "description", "description", t),
                      _t("lastBuildDate", t));
                  r && (e.updated = new Date(r));
                  return o(e, "author", "managingEditor", t, !0), e;
                })(e)
          : null;
      },
    getInnerHTML: () =>
      function (e, t) {
        return u(e) ? e.children.map((e) => Ke(e, t)).join("") : "";
      },
    getName: () =>
      function (e) {
        return e.name;
      },
    getOuterHTML: () => Ke,
    getParent: () => et,
    getSiblings: () => tt,
    getText: () => ze,
    hasAttrib: () =>
      function (e, t) {
        return (
          null != e.attribs &&
          Object.prototype.hasOwnProperty.call(e.attribs, t) &&
          null != e.attribs[t]
        );
      },
    hasChildren: () => u,
    innerText: () => Je,
    isCDATA: () => ue,
    isComment: () => Ee,
    isDocument: () => Te,
    isTag: () => h,
    isText: () => de,
    nextElementSibling: () => rt,
    prepend: () =>
      function (e, t) {
        at(t);
        var r = e["parent"];
        {
          var n;
          r && (n = r.children).splice(n.indexOf(e), 0, t);
        }
        e.prev && (e.prev.next = t);
        (t.parent = r), (t.prev = e.prev), ((t.next = e).prev = t);
      },
    prependChild: () =>
      function (e, t) {
        at(t),
          (t.parent = e),
          (t.prev = null),
          1 !== e.children.unshift(t)
            ? (((e = e.children[1]).prev = t).next = e)
            : (t.next = null);
      },
    prevElementSibling: () => nt,
    removeElement: () => at,
    removeSubsets: () =>
      function (t) {
        let r = t.length;
        for (; 0 <= --r; ) {
          var n = t[r];
          if (0 < r && 0 <= t.lastIndexOf(n, r - 1)) t.splice(r, 1);
          else
            for (let e = n.parent; e; e = e.parent)
              if (t.includes(e)) {
                t.splice(r, 1);
                break;
              }
        }
        return t;
      },
    replaceElement: () =>
      function (e, t) {
        var r = (t.prev = e.prev);
        r && (r.next = t);
        r = t.next = e.next;
        r && (r.prev = t);
        r = t.parent = e.parent;
        r && (((r = r.children)[r.lastIndexOf(e)] = t), (e.parent = null));
      },
    testElement: () =>
      function (e, t) {
        e = ut(e);
        return !e || e(t);
      },
    textContent: () => $e,
    uniqueSort: () => pt,
  }),
    ((r = a = a || {}).Root = "root"),
    (r.Text = "text"),
    (r.Directive = "directive"),
    (r.Comment = "comment"),
    (r.Script = "script"),
    (r.Style = "style"),
    (r.Tag = "tag"),
    (r.CDATA = "cdata"),
    (r.Doctype = "doctype");
  var z = a.Root,
    $ = a.Text,
    J = a.Directive,
    Z = a.Comment,
    ee = a.Script,
    te = a.Style,
    re = a.Tag,
    ne = a.CDATA,
    ae = a.Doctype,
    r = class {
      constructor() {
        (this.parent = null),
          (this.prev = null),
          (this.next = null),
          (this.startIndex = null),
          (this.endIndex = null);
      }
      get parentNode() {
        return this.parent;
      }
      set parentNode(e) {
        this.parent = e;
      }
      get previousSibling() {
        return this.prev;
      }
      set previousSibling(e) {
        this.prev = e;
      }
      get nextSibling() {
        return this.next;
      }
      set nextSibling(e) {
        this.next = e;
      }
      cloneNode(e = !1) {
        return me(this, e);
      }
    },
    n = class extends r {
      constructor(e) {
        super(), (this.data = e);
      }
      get nodeValue() {
        return this.data;
      }
      set nodeValue(e) {
        this.data = e;
      }
    },
    se = class extends n {
      constructor() {
        super(...arguments), (this.type = a.Text);
      }
      get nodeType() {
        return 3;
      }
    },
    ie = class extends n {
      constructor() {
        super(...arguments), (this.type = a.Comment);
      }
      get nodeType() {
        return 8;
      }
    },
    oe = class extends n {
      constructor(e, t) {
        super(t), (this.name = e), (this.type = a.Directive);
      }
      get nodeType() {
        return 1;
      }
    },
    n = class extends r {
      constructor(e) {
        super(), (this.children = e);
      }
      get firstChild() {
        var e;
        return null != (e = this.children[0]) ? e : null;
      }
      get lastChild() {
        return 0 < this.children.length
          ? this.children[this.children.length - 1]
          : null;
      }
      get childNodes() {
        return this.children;
      }
      set childNodes(e) {
        this.children = e;
      }
    },
    ce = class extends n {
      constructor() {
        super(...arguments), (this.type = a.CDATA);
      }
      get nodeType() {
        return 4;
      }
    },
    le = class extends n {
      constructor() {
        super(...arguments), (this.type = a.Root);
      }
      get nodeType() {
        return 9;
      }
    },
    he = class extends n {
      constructor(
        e,
        t,
        r = [],
        n = "script" === e ? a.Script : "style" === e ? a.Style : a.Tag
      ) {
        super(r), (this.name = e), (this.attribs = t), (this.type = n);
      }
      get nodeType() {
        return 1;
      }
      get tagName() {
        return this.name;
      }
      set tagName(e) {
        this.name = e;
      }
      get attributes() {
        return Object.keys(this.attribs).map((e) => {
          var t;
          return {
            name: e,
            value: this.attribs[e],
            namespace: null == (t = this["x-attribsNamespace"]) ? void 0 : t[e],
            prefix: null == (t = this["x-attribsPrefix"]) ? void 0 : t[e],
          };
        });
      }
    };
  function h(e) {
    return (e = e).type === a.Tag || e.type === a.Script || e.type === a.Style;
  }
  function ue(e) {
    return e.type === a.CDATA;
  }
  function de(e) {
    return e.type === a.Text;
  }
  function Ee(e) {
    return e.type === a.Comment;
  }
  function pe(e) {
    return e.type === a.Directive;
  }
  function Te(e) {
    return e.type === a.Root;
  }
  function u(e) {
    return Object.prototype.hasOwnProperty.call(e, "children");
  }
  function me(e, t = !1) {
    let r;
    if (de(e)) r = new se(e.data);
    else if (Ee(e)) r = new ie(e.data);
    else if (h(e)) {
      var n = t ? fe(e.children) : [];
      const a = new he(e.name, { ...e.attribs }, n);
      n.forEach((e) => (e.parent = a)),
        null != e.namespace && (a.namespace = e.namespace),
        e["x-attribsNamespace"] &&
          (a["x-attribsNamespace"] = { ...e["x-attribsNamespace"] }),
        e["x-attribsPrefix"] &&
          (a["x-attribsPrefix"] = { ...e["x-attribsPrefix"] }),
        (r = a);
    } else if (ue(e)) {
      n = t ? fe(e.children) : [];
      const s = new ce(n);
      n.forEach((e) => (e.parent = s)), (r = s);
    } else if (Te(e)) {
      n = t ? fe(e.children) : [];
      const i = new le(n);
      n.forEach((e) => (e.parent = i)),
        e["x-mode"] && (i["x-mode"] = e["x-mode"]),
        (r = i);
    } else {
      if (!pe(e)) throw new Error("Not implemented yet: " + e.type);
      t = new oe(e.name, e.data);
      null != e["x-name"] &&
        ((t["x-name"] = e["x-name"]),
        (t["x-publicId"] = e["x-publicId"]),
        (t["x-systemId"] = e["x-systemId"])),
        (r = t);
    }
    return (
      (r.startIndex = e.startIndex),
      (r.endIndex = e.endIndex),
      null != e.sourceCodeLocation &&
        (r.sourceCodeLocation = e.sourceCodeLocation),
      r
    );
  }
  function fe(e) {
    var t = e.map((e) => me(e, !0));
    for (let e = 1; e < t.length; e++)
      (t[e].prev = t[e - 1]), (t[e - 1].next = t[e]);
    return t;
  }
  var i,
    Ae = { withStartIndices: !1, withEndIndices: !1, xmlMode: !1 },
    _e = class {
      constructor(e, t, r) {
        (this.dom = []),
          (this.root = new le(this.dom)),
          (this.done = !1),
          (this.tagStack = [this.root]),
          (this.lastNode = null),
          (this.parser = null),
          "function" == typeof t && ((r = t), (t = Ae)),
          "object" == typeof e && ((t = e), (e = void 0)),
          (this.callback = null != e ? e : null),
          (this.options = null != t ? t : Ae),
          (this.elementCB = null != r ? r : null);
      }
      onparserinit(e) {
        this.parser = e;
      }
      onreset() {
        (this.dom = []),
          (this.root = new le(this.dom)),
          (this.done = !1),
          (this.tagStack = [this.root]),
          (this.lastNode = null),
          (this.parser = null);
      }
      onend() {
        this.done ||
          ((this.done = !0), (this.parser = null), this.handleCallback(null));
      }
      onerror(e) {
        this.handleCallback(e);
      }
      onclosetag() {
        this.lastNode = null;
        var e = this.tagStack.pop();
        this.options.withEndIndices && (e.endIndex = this.parser.endIndex),
          this.elementCB && this.elementCB(e);
      }
      onopentag(e, t) {
        var r = this.options.xmlMode ? a.Tag : void 0,
          e = new he(e, t, void 0, r);
        this.addNode(e), this.tagStack.push(e);
      }
      ontext(e) {
        var t = this["lastNode"];
        t && t.type === a.Text
          ? ((t.data += e),
            this.options.withEndIndices && (t.endIndex = this.parser.endIndex))
          : ((t = new se(e)), this.addNode(t), (this.lastNode = t));
      }
      oncomment(e) {
        this.lastNode && this.lastNode.type === a.Comment
          ? (this.lastNode.data += e)
          : ((e = new ie(e)), this.addNode(e), (this.lastNode = e));
      }
      oncommentend() {
        this.lastNode = null;
      }
      oncdatastart() {
        var e = new se(""),
          t = new ce([e]);
        this.addNode(t), (e.parent = t), (this.lastNode = e);
      }
      oncdataend() {
        this.lastNode = null;
      }
      onprocessinginstruction(e, t) {
        e = new oe(e, t);
        this.addNode(e);
      }
      handleCallback(e) {
        if ("function" == typeof this.callback) this.callback(e, this.dom);
        else if (e) throw e;
      }
      addNode(e) {
        var t = this.tagStack[this.tagStack.length - 1],
          r = t.children[t.children.length - 1];
        this.options.withStartIndices &&
          (e.startIndex = this.parser.startIndex),
          this.options.withEndIndices && (e.endIndex = this.parser.endIndex),
          t.children.push(e),
          r && ((e.prev = r).next = e),
          (e.parent = t),
          (this.lastNode = null);
      }
    },
    ge = new Uint16Array(
      'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'
        .split("")
        .map((e) => e.charCodeAt(0))
    ),
    Ne = new Uint16Array(
      "Ȁaglq\tɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢"
        .split("")
        .map((e) => e.charCodeAt(0))
    ),
    Ce = new Map([
      [0, 65533],
      [128, 8364],
      [130, 8218],
      [131, 402],
      [132, 8222],
      [133, 8230],
      [134, 8224],
      [135, 8225],
      [136, 710],
      [137, 8240],
      [138, 352],
      [139, 8249],
      [140, 338],
      [142, 381],
      [145, 8216],
      [146, 8217],
      [147, 8220],
      [148, 8221],
      [149, 8226],
      [150, 8211],
      [151, 8212],
      [152, 732],
      [153, 8482],
      [154, 353],
      [155, 8250],
      [156, 339],
      [158, 382],
      [159, 376],
    ]),
    Ie =
      null != (r = String.fromCodePoint)
        ? r
        : function (e) {
            let t = "";
            return (
              65535 < e &&
                ((e -= 65536),
                (t += String.fromCharCode(((e >>> 10) & 1023) | 55296)),
                (e = 56320 | (1023 & e))),
              (t += String.fromCharCode(e))
            );
          };
  function Se(e) {
    var t;
    return (55296 <= e && e <= 57343) || 1114111 < e
      ? 65533
      : null != (t = Ce.get(e))
      ? t
      : e;
  }
  ((n = i = i || {})[(n.NUM = 35)] = "NUM"),
    (n[(n.SEMI = 59)] = "SEMI"),
    (n[(n.EQUALS = 61)] = "EQUALS"),
    (n[(n.ZERO = 48)] = "ZERO"),
    (n[(n.NINE = 57)] = "NINE"),
    (n[(n.LOWER_A = 97)] = "LOWER_A"),
    (n[(n.LOWER_F = 102)] = "LOWER_F"),
    (n[(n.LOWER_X = 120)] = "LOWER_X"),
    (n[(n.LOWER_Z = 122)] = "LOWER_Z"),
    (n[(n.UPPER_A = 65)] = "UPPER_A"),
    (n[(n.UPPER_F = 70)] = "UPPER_F"),
    (n[(n.UPPER_Z = 90)] = "UPPER_Z");
  var l, s, be;
  function Re(e) {
    return e >= i.ZERO && e <= i.NINE;
  }
  function De(e) {
    return (
      (e >= i.UPPER_A && e <= i.UPPER_F) || (e >= i.LOWER_A && e <= i.LOWER_F)
    );
  }
  function Oe(e) {
    return (
      e === i.EQUALS ||
      ((e = e) >= i.UPPER_A && e <= i.UPPER_Z) ||
      (e >= i.LOWER_A && e <= i.LOWER_Z) ||
      Re(e)
    );
  }
  ((r = l = l || {})[(r.VALUE_LENGTH = 49152)] = "VALUE_LENGTH"),
    (r[(r.BRANCH_LENGTH = 16256)] = "BRANCH_LENGTH"),
    (r[(r.JUMP_TABLE = 127)] = "JUMP_TABLE"),
    ((n = s = s || {})[(n.EntityStart = 0)] = "EntityStart"),
    (n[(n.NumericStart = 1)] = "NumericStart"),
    (n[(n.NumericDecimal = 2)] = "NumericDecimal"),
    (n[(n.NumericHex = 3)] = "NumericHex"),
    (n[(n.NamedEntity = 4)] = "NamedEntity"),
    ((r = be = be || {})[(r.Legacy = 0)] = "Legacy"),
    (r[(r.Strict = 1)] = "Strict"),
    (r[(r.Attribute = 2)] = "Attribute");
  var Le = class {
    constructor(e, t, r) {
      (this.decodeTree = e),
        (this.emitCodePoint = t),
        (this.errors = r),
        (this.state = s.EntityStart),
        (this.consumed = 1),
        (this.result = 0),
        (this.treeIndex = 0),
        (this.excess = 1),
        (this.decodeMode = be.Strict);
    }
    startEntity(e) {
      (this.decodeMode = e),
        (this.state = s.EntityStart),
        (this.result = 0),
        (this.treeIndex = 0),
        (this.excess = 1),
        (this.consumed = 1);
    }
    write(e, t) {
      switch (this.state) {
        case s.EntityStart:
          return e.charCodeAt(t) === i.NUM
            ? ((this.state = s.NumericStart),
              (this.consumed += 1),
              this.stateNumericStart(e, t + 1))
            : ((this.state = s.NamedEntity), this.stateNamedEntity(e, t));
        case s.NumericStart:
          return this.stateNumericStart(e, t);
        case s.NumericDecimal:
          return this.stateNumericDecimal(e, t);
        case s.NumericHex:
          return this.stateNumericHex(e, t);
        case s.NamedEntity:
          return this.stateNamedEntity(e, t);
      }
    }
    stateNumericStart(e, t) {
      return t >= e.length
        ? -1
        : (32 | e.charCodeAt(t)) === i.LOWER_X
        ? ((this.state = s.NumericHex),
          (this.consumed += 1),
          this.stateNumericHex(e, t + 1))
        : ((this.state = s.NumericDecimal), this.stateNumericDecimal(e, t));
    }
    addToNumericResult(e, t, r, n) {
      t !== r &&
        ((r = r - t),
        (this.result =
          this.result * Math.pow(n, r) + parseInt(e.substr(t, r), n)),
        (this.consumed += r));
    }
    stateNumericHex(e, t) {
      for (var r = t; t < e.length; ) {
        var n = e.charCodeAt(t);
        if (!Re(n) && !De(n))
          return (
            this.addToNumericResult(e, r, t, 16), this.emitNumericEntity(n, 3)
          );
        t += 1;
      }
      return this.addToNumericResult(e, r, t, 16), -1;
    }
    stateNumericDecimal(e, t) {
      for (var r = t; t < e.length; ) {
        var n = e.charCodeAt(t);
        if (!Re(n))
          return (
            this.addToNumericResult(e, r, t, 10), this.emitNumericEntity(n, 2)
          );
        t += 1;
      }
      return this.addToNumericResult(e, r, t, 10), -1;
    }
    emitNumericEntity(e, t) {
      if (this.consumed <= t)
        return (
          null != (t = this.errors) &&
            t.absenceOfDigitsInNumericCharacterReference(this.consumed),
          0
        );
      if (e === i.SEMI) this.consumed += 1;
      else if (this.decodeMode === be.Strict) return 0;
      return (
        this.emitCodePoint(Se(this.result), this.consumed),
        this.errors &&
          (e !== i.SEMI &&
            this.errors.missingSemicolonAfterCharacterReference(),
          this.errors.validateNumericCharacterReference(this.result)),
        this.consumed
      );
    }
    stateNamedEntity(e, t) {
      var r = this["decodeTree"];
      let n = r[this.treeIndex],
        a = (n & l.VALUE_LENGTH) >> 14;
      for (; t < e.length; t++, this.excess++) {
        var s = e.charCodeAt(t);
        if (
          ((this.treeIndex = ke(r, n, this.treeIndex + Math.max(1, a), s)),
          this.treeIndex < 0)
        )
          return 0 === this.result ||
            (this.decodeMode === be.Attribute && (0 === a || Oe(s)))
            ? 0
            : this.emitNotTerminatedNamedEntity();
        if (((n = r[this.treeIndex]), 0 !== (a = (n & l.VALUE_LENGTH) >> 14))) {
          if (s === i.SEMI)
            return this.emitNamedEntityData(
              this.treeIndex,
              a,
              this.consumed + this.excess
            );
          this.decodeMode !== be.Strict &&
            ((this.result = this.treeIndex),
            (this.consumed += this.excess),
            (this.excess = 0));
        }
      }
      return -1;
    }
    emitNotTerminatedNamedEntity() {
      var { result: e, decodeTree: t } = this,
        t = (t[e] & l.VALUE_LENGTH) >> 14;
      return (
        this.emitNamedEntityData(e, t, this.consumed),
        null != (e = this.errors) &&
          e.missingSemicolonAfterCharacterReference(),
        this.consumed
      );
    }
    emitNamedEntityData(e, t, r) {
      var n = this["decodeTree"];
      return (
        this.emitCodePoint(1 === t ? n[e] & ~l.VALUE_LENGTH : n[e + 1], r),
        3 === t && this.emitCodePoint(n[e + 2], r),
        r
      );
    }
    end() {
      var e;
      switch (this.state) {
        case s.NamedEntity:
          return 0 === this.result ||
            (this.decodeMode === be.Attribute && this.result !== this.treeIndex)
            ? 0
            : this.emitNotTerminatedNamedEntity();
        case s.NumericDecimal:
          return this.emitNumericEntity(0, 2);
        case s.NumericHex:
          return this.emitNumericEntity(0, 3);
        case s.NumericStart:
          return (
            null != (e = this.errors) &&
              e.absenceOfDigitsInNumericCharacterReference(this.consumed),
            0
          );
        case s.EntityStart:
          return 0;
      }
    }
  };
  function ye(e) {
    let i = "";
    const o = new Le(e, (e) => (i += Ie(e)));
    return function (e, t) {
      let r = 0,
        n = 0;
      for (; 0 <= (n = e.indexOf("&", n)); ) {
        (i += e.slice(r, n)), o.startEntity(t);
        var a = o.write(e, n + 1);
        if (a < 0) {
          r = n + o.end();
          break;
        }
        (r = n + a), (n = 0 === a ? r + 1 : r);
      }
      var s = i + e.slice(r);
      return (i = ""), s;
    };
  }
  function ke(e, t, r, n) {
    var a = (t & l.BRANCH_LENGTH) >> 7,
      t = t & l.JUMP_TABLE;
    if (0 == a) return 0 != t && n === t ? r : -1;
    if (t) return (t = n - t) < 0 || a <= t ? -1 : e[r + t] - 1;
    let s = r,
      i = s + a - 1;
    for (; s <= i; ) {
      var o = (s + i) >>> 1,
        c = e[o];
      if (c < n) s = 1 + o;
      else {
        if (!(n < c)) return e[o + a];
        i = o - 1;
      }
    }
    return -1;
  }
  ye(ge), ye(Ne);
  function ve(t) {
    for (let e = 1; e < t.length; e++) t[e][0] += t[e - 1][0] + 1;
    return t;
  }
  new Map(
    ve([
      [9, "&Tab;"],
      [0, "&NewLine;"],
      [22, "&excl;"],
      [0, "&quot;"],
      [0, "&num;"],
      [0, "&dollar;"],
      [0, "&percnt;"],
      [0, "&amp;"],
      [0, "&apos;"],
      [0, "&lpar;"],
      [0, "&rpar;"],
      [0, "&ast;"],
      [0, "&plus;"],
      [0, "&comma;"],
      [1, "&period;"],
      [0, "&sol;"],
      [10, "&colon;"],
      [0, "&semi;"],
      [0, { v: "&lt;", n: 8402, o: "&nvlt;" }],
      [0, { v: "&equals;", n: 8421, o: "&bne;" }],
      [0, { v: "&gt;", n: 8402, o: "&nvgt;" }],
      [0, "&quest;"],
      [0, "&commat;"],
      [26, "&lbrack;"],
      [0, "&bsol;"],
      [0, "&rbrack;"],
      [0, "&Hat;"],
      [0, "&lowbar;"],
      [0, "&DiacriticalGrave;"],
      [5, { n: 106, o: "&fjlig;" }],
      [20, "&lbrace;"],
      [0, "&verbar;"],
      [0, "&rbrace;"],
      [34, "&nbsp;"],
      [0, "&iexcl;"],
      [0, "&cent;"],
      [0, "&pound;"],
      [0, "&curren;"],
      [0, "&yen;"],
      [0, "&brvbar;"],
      [0, "&sect;"],
      [0, "&die;"],
      [0, "&copy;"],
      [0, "&ordf;"],
      [0, "&laquo;"],
      [0, "&not;"],
      [0, "&shy;"],
      [0, "&circledR;"],
      [0, "&macr;"],
      [0, "&deg;"],
      [0, "&PlusMinus;"],
      [0, "&sup2;"],
      [0, "&sup3;"],
      [0, "&acute;"],
      [0, "&micro;"],
      [0, "&para;"],
      [0, "&centerdot;"],
      [0, "&cedil;"],
      [0, "&sup1;"],
      [0, "&ordm;"],
      [0, "&raquo;"],
      [0, "&frac14;"],
      [0, "&frac12;"],
      [0, "&frac34;"],
      [0, "&iquest;"],
      [0, "&Agrave;"],
      [0, "&Aacute;"],
      [0, "&Acirc;"],
      [0, "&Atilde;"],
      [0, "&Auml;"],
      [0, "&angst;"],
      [0, "&AElig;"],
      [0, "&Ccedil;"],
      [0, "&Egrave;"],
      [0, "&Eacute;"],
      [0, "&Ecirc;"],
      [0, "&Euml;"],
      [0, "&Igrave;"],
      [0, "&Iacute;"],
      [0, "&Icirc;"],
      [0, "&Iuml;"],
      [0, "&ETH;"],
      [0, "&Ntilde;"],
      [0, "&Ograve;"],
      [0, "&Oacute;"],
      [0, "&Ocirc;"],
      [0, "&Otilde;"],
      [0, "&Ouml;"],
      [0, "&times;"],
      [0, "&Oslash;"],
      [0, "&Ugrave;"],
      [0, "&Uacute;"],
      [0, "&Ucirc;"],
      [0, "&Uuml;"],
      [0, "&Yacute;"],
      [0, "&THORN;"],
      [0, "&szlig;"],
      [0, "&agrave;"],
      [0, "&aacute;"],
      [0, "&acirc;"],
      [0, "&atilde;"],
      [0, "&auml;"],
      [0, "&aring;"],
      [0, "&aelig;"],
      [0, "&ccedil;"],
      [0, "&egrave;"],
      [0, "&eacute;"],
      [0, "&ecirc;"],
      [0, "&euml;"],
      [0, "&igrave;"],
      [0, "&iacute;"],
      [0, "&icirc;"],
      [0, "&iuml;"],
      [0, "&eth;"],
      [0, "&ntilde;"],
      [0, "&ograve;"],
      [0, "&oacute;"],
      [0, "&ocirc;"],
      [0, "&otilde;"],
      [0, "&ouml;"],
      [0, "&div;"],
      [0, "&oslash;"],
      [0, "&ugrave;"],
      [0, "&uacute;"],
      [0, "&ucirc;"],
      [0, "&uuml;"],
      [0, "&yacute;"],
      [0, "&thorn;"],
      [0, "&yuml;"],
      [0, "&Amacr;"],
      [0, "&amacr;"],
      [0, "&Abreve;"],
      [0, "&abreve;"],
      [0, "&Aogon;"],
      [0, "&aogon;"],
      [0, "&Cacute;"],
      [0, "&cacute;"],
      [0, "&Ccirc;"],
      [0, "&ccirc;"],
      [0, "&Cdot;"],
      [0, "&cdot;"],
      [0, "&Ccaron;"],
      [0, "&ccaron;"],
      [0, "&Dcaron;"],
      [0, "&dcaron;"],
      [0, "&Dstrok;"],
      [0, "&dstrok;"],
      [0, "&Emacr;"],
      [0, "&emacr;"],
      [2, "&Edot;"],
      [0, "&edot;"],
      [0, "&Eogon;"],
      [0, "&eogon;"],
      [0, "&Ecaron;"],
      [0, "&ecaron;"],
      [0, "&Gcirc;"],
      [0, "&gcirc;"],
      [0, "&Gbreve;"],
      [0, "&gbreve;"],
      [0, "&Gdot;"],
      [0, "&gdot;"],
      [0, "&Gcedil;"],
      [1, "&Hcirc;"],
      [0, "&hcirc;"],
      [0, "&Hstrok;"],
      [0, "&hstrok;"],
      [0, "&Itilde;"],
      [0, "&itilde;"],
      [0, "&Imacr;"],
      [0, "&imacr;"],
      [2, "&Iogon;"],
      [0, "&iogon;"],
      [0, "&Idot;"],
      [0, "&imath;"],
      [0, "&IJlig;"],
      [0, "&ijlig;"],
      [0, "&Jcirc;"],
      [0, "&jcirc;"],
      [0, "&Kcedil;"],
      [0, "&kcedil;"],
      [0, "&kgreen;"],
      [0, "&Lacute;"],
      [0, "&lacute;"],
      [0, "&Lcedil;"],
      [0, "&lcedil;"],
      [0, "&Lcaron;"],
      [0, "&lcaron;"],
      [0, "&Lmidot;"],
      [0, "&lmidot;"],
      [0, "&Lstrok;"],
      [0, "&lstrok;"],
      [0, "&Nacute;"],
      [0, "&nacute;"],
      [0, "&Ncedil;"],
      [0, "&ncedil;"],
      [0, "&Ncaron;"],
      [0, "&ncaron;"],
      [0, "&napos;"],
      [0, "&ENG;"],
      [0, "&eng;"],
      [0, "&Omacr;"],
      [0, "&omacr;"],
      [2, "&Odblac;"],
      [0, "&odblac;"],
      [0, "&OElig;"],
      [0, "&oelig;"],
      [0, "&Racute;"],
      [0, "&racute;"],
      [0, "&Rcedil;"],
      [0, "&rcedil;"],
      [0, "&Rcaron;"],
      [0, "&rcaron;"],
      [0, "&Sacute;"],
      [0, "&sacute;"],
      [0, "&Scirc;"],
      [0, "&scirc;"],
      [0, "&Scedil;"],
      [0, "&scedil;"],
      [0, "&Scaron;"],
      [0, "&scaron;"],
      [0, "&Tcedil;"],
      [0, "&tcedil;"],
      [0, "&Tcaron;"],
      [0, "&tcaron;"],
      [0, "&Tstrok;"],
      [0, "&tstrok;"],
      [0, "&Utilde;"],
      [0, "&utilde;"],
      [0, "&Umacr;"],
      [0, "&umacr;"],
      [0, "&Ubreve;"],
      [0, "&ubreve;"],
      [0, "&Uring;"],
      [0, "&uring;"],
      [0, "&Udblac;"],
      [0, "&udblac;"],
      [0, "&Uogon;"],
      [0, "&uogon;"],
      [0, "&Wcirc;"],
      [0, "&wcirc;"],
      [0, "&Ycirc;"],
      [0, "&ycirc;"],
      [0, "&Yuml;"],
      [0, "&Zacute;"],
      [0, "&zacute;"],
      [0, "&Zdot;"],
      [0, "&zdot;"],
      [0, "&Zcaron;"],
      [0, "&zcaron;"],
      [19, "&fnof;"],
      [34, "&imped;"],
      [63, "&gacute;"],
      [65, "&jmath;"],
      [142, "&circ;"],
      [0, "&caron;"],
      [16, "&breve;"],
      [0, "&DiacriticalDot;"],
      [0, "&ring;"],
      [0, "&ogon;"],
      [0, "&DiacriticalTilde;"],
      [0, "&dblac;"],
      [51, "&DownBreve;"],
      [127, "&Alpha;"],
      [0, "&Beta;"],
      [0, "&Gamma;"],
      [0, "&Delta;"],
      [0, "&Epsilon;"],
      [0, "&Zeta;"],
      [0, "&Eta;"],
      [0, "&Theta;"],
      [0, "&Iota;"],
      [0, "&Kappa;"],
      [0, "&Lambda;"],
      [0, "&Mu;"],
      [0, "&Nu;"],
      [0, "&Xi;"],
      [0, "&Omicron;"],
      [0, "&Pi;"],
      [0, "&Rho;"],
      [1, "&Sigma;"],
      [0, "&Tau;"],
      [0, "&Upsilon;"],
      [0, "&Phi;"],
      [0, "&Chi;"],
      [0, "&Psi;"],
      [0, "&ohm;"],
      [7, "&alpha;"],
      [0, "&beta;"],
      [0, "&gamma;"],
      [0, "&delta;"],
      [0, "&epsi;"],
      [0, "&zeta;"],
      [0, "&eta;"],
      [0, "&theta;"],
      [0, "&iota;"],
      [0, "&kappa;"],
      [0, "&lambda;"],
      [0, "&mu;"],
      [0, "&nu;"],
      [0, "&xi;"],
      [0, "&omicron;"],
      [0, "&pi;"],
      [0, "&rho;"],
      [0, "&sigmaf;"],
      [0, "&sigma;"],
      [0, "&tau;"],
      [0, "&upsi;"],
      [0, "&phi;"],
      [0, "&chi;"],
      [0, "&psi;"],
      [0, "&omega;"],
      [7, "&thetasym;"],
      [0, "&Upsi;"],
      [2, "&phiv;"],
      [0, "&piv;"],
      [5, "&Gammad;"],
      [0, "&digamma;"],
      [18, "&kappav;"],
      [0, "&rhov;"],
      [3, "&epsiv;"],
      [0, "&backepsilon;"],
      [10, "&IOcy;"],
      [0, "&DJcy;"],
      [0, "&GJcy;"],
      [0, "&Jukcy;"],
      [0, "&DScy;"],
      [0, "&Iukcy;"],
      [0, "&YIcy;"],
      [0, "&Jsercy;"],
      [0, "&LJcy;"],
      [0, "&NJcy;"],
      [0, "&TSHcy;"],
      [0, "&KJcy;"],
      [1, "&Ubrcy;"],
      [0, "&DZcy;"],
      [0, "&Acy;"],
      [0, "&Bcy;"],
      [0, "&Vcy;"],
      [0, "&Gcy;"],
      [0, "&Dcy;"],
      [0, "&IEcy;"],
      [0, "&ZHcy;"],
      [0, "&Zcy;"],
      [0, "&Icy;"],
      [0, "&Jcy;"],
      [0, "&Kcy;"],
      [0, "&Lcy;"],
      [0, "&Mcy;"],
      [0, "&Ncy;"],
      [0, "&Ocy;"],
      [0, "&Pcy;"],
      [0, "&Rcy;"],
      [0, "&Scy;"],
      [0, "&Tcy;"],
      [0, "&Ucy;"],
      [0, "&Fcy;"],
      [0, "&KHcy;"],
      [0, "&TScy;"],
      [0, "&CHcy;"],
      [0, "&SHcy;"],
      [0, "&SHCHcy;"],
      [0, "&HARDcy;"],
      [0, "&Ycy;"],
      [0, "&SOFTcy;"],
      [0, "&Ecy;"],
      [0, "&YUcy;"],
      [0, "&YAcy;"],
      [0, "&acy;"],
      [0, "&bcy;"],
      [0, "&vcy;"],
      [0, "&gcy;"],
      [0, "&dcy;"],
      [0, "&iecy;"],
      [0, "&zhcy;"],
      [0, "&zcy;"],
      [0, "&icy;"],
      [0, "&jcy;"],
      [0, "&kcy;"],
      [0, "&lcy;"],
      [0, "&mcy;"],
      [0, "&ncy;"],
      [0, "&ocy;"],
      [0, "&pcy;"],
      [0, "&rcy;"],
      [0, "&scy;"],
      [0, "&tcy;"],
      [0, "&ucy;"],
      [0, "&fcy;"],
      [0, "&khcy;"],
      [0, "&tscy;"],
      [0, "&chcy;"],
      [0, "&shcy;"],
      [0, "&shchcy;"],
      [0, "&hardcy;"],
      [0, "&ycy;"],
      [0, "&softcy;"],
      [0, "&ecy;"],
      [0, "&yucy;"],
      [0, "&yacy;"],
      [1, "&iocy;"],
      [0, "&djcy;"],
      [0, "&gjcy;"],
      [0, "&jukcy;"],
      [0, "&dscy;"],
      [0, "&iukcy;"],
      [0, "&yicy;"],
      [0, "&jsercy;"],
      [0, "&ljcy;"],
      [0, "&njcy;"],
      [0, "&tshcy;"],
      [0, "&kjcy;"],
      [1, "&ubrcy;"],
      [0, "&dzcy;"],
      [7074, "&ensp;"],
      [0, "&emsp;"],
      [0, "&emsp13;"],
      [0, "&emsp14;"],
      [1, "&numsp;"],
      [0, "&puncsp;"],
      [0, "&ThinSpace;"],
      [0, "&hairsp;"],
      [0, "&NegativeMediumSpace;"],
      [0, "&zwnj;"],
      [0, "&zwj;"],
      [0, "&lrm;"],
      [0, "&rlm;"],
      [0, "&dash;"],
      [2, "&ndash;"],
      [0, "&mdash;"],
      [0, "&horbar;"],
      [0, "&Verbar;"],
      [1, "&lsquo;"],
      [0, "&CloseCurlyQuote;"],
      [0, "&lsquor;"],
      [1, "&ldquo;"],
      [0, "&CloseCurlyDoubleQuote;"],
      [0, "&bdquo;"],
      [1, "&dagger;"],
      [0, "&Dagger;"],
      [0, "&bull;"],
      [2, "&nldr;"],
      [0, "&hellip;"],
      [9, "&permil;"],
      [0, "&pertenk;"],
      [0, "&prime;"],
      [0, "&Prime;"],
      [0, "&tprime;"],
      [0, "&backprime;"],
      [3, "&lsaquo;"],
      [0, "&rsaquo;"],
      [3, "&oline;"],
      [2, "&caret;"],
      [1, "&hybull;"],
      [0, "&frasl;"],
      [10, "&bsemi;"],
      [7, "&qprime;"],
      [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }],
      [0, "&NoBreak;"],
      [0, "&af;"],
      [0, "&InvisibleTimes;"],
      [0, "&ic;"],
      [72, "&euro;"],
      [46, "&tdot;"],
      [0, "&DotDot;"],
      [37, "&complexes;"],
      [2, "&incare;"],
      [4, "&gscr;"],
      [0, "&hamilt;"],
      [0, "&Hfr;"],
      [0, "&Hopf;"],
      [0, "&planckh;"],
      [0, "&hbar;"],
      [0, "&imagline;"],
      [0, "&Ifr;"],
      [0, "&lagran;"],
      [0, "&ell;"],
      [1, "&naturals;"],
      [0, "&numero;"],
      [0, "&copysr;"],
      [0, "&weierp;"],
      [0, "&Popf;"],
      [0, "&Qopf;"],
      [0, "&realine;"],
      [0, "&real;"],
      [0, "&reals;"],
      [0, "&rx;"],
      [3, "&trade;"],
      [1, "&integers;"],
      [2, "&mho;"],
      [0, "&zeetrf;"],
      [0, "&iiota;"],
      [2, "&bernou;"],
      [0, "&Cayleys;"],
      [1, "&escr;"],
      [0, "&Escr;"],
      [0, "&Fouriertrf;"],
      [1, "&Mellintrf;"],
      [0, "&order;"],
      [0, "&alefsym;"],
      [0, "&beth;"],
      [0, "&gimel;"],
      [0, "&daleth;"],
      [12, "&CapitalDifferentialD;"],
      [0, "&dd;"],
      [0, "&ee;"],
      [0, "&ii;"],
      [10, "&frac13;"],
      [0, "&frac23;"],
      [0, "&frac15;"],
      [0, "&frac25;"],
      [0, "&frac35;"],
      [0, "&frac45;"],
      [0, "&frac16;"],
      [0, "&frac56;"],
      [0, "&frac18;"],
      [0, "&frac38;"],
      [0, "&frac58;"],
      [0, "&frac78;"],
      [49, "&larr;"],
      [0, "&ShortUpArrow;"],
      [0, "&rarr;"],
      [0, "&darr;"],
      [0, "&harr;"],
      [0, "&updownarrow;"],
      [0, "&nwarr;"],
      [0, "&nearr;"],
      [0, "&LowerRightArrow;"],
      [0, "&LowerLeftArrow;"],
      [0, "&nlarr;"],
      [0, "&nrarr;"],
      [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }],
      [0, "&Larr;"],
      [0, "&Uarr;"],
      [0, "&Rarr;"],
      [0, "&Darr;"],
      [0, "&larrtl;"],
      [0, "&rarrtl;"],
      [0, "&LeftTeeArrow;"],
      [0, "&mapstoup;"],
      [0, "&map;"],
      [0, "&DownTeeArrow;"],
      [1, "&hookleftarrow;"],
      [0, "&hookrightarrow;"],
      [0, "&larrlp;"],
      [0, "&looparrowright;"],
      [0, "&harrw;"],
      [0, "&nharr;"],
      [1, "&lsh;"],
      [0, "&rsh;"],
      [0, "&ldsh;"],
      [0, "&rdsh;"],
      [1, "&crarr;"],
      [0, "&cularr;"],
      [0, "&curarr;"],
      [2, "&circlearrowleft;"],
      [0, "&circlearrowright;"],
      [0, "&leftharpoonup;"],
      [0, "&DownLeftVector;"],
      [0, "&RightUpVector;"],
      [0, "&LeftUpVector;"],
      [0, "&rharu;"],
      [0, "&DownRightVector;"],
      [0, "&dharr;"],
      [0, "&dharl;"],
      [0, "&RightArrowLeftArrow;"],
      [0, "&udarr;"],
      [0, "&LeftArrowRightArrow;"],
      [0, "&leftleftarrows;"],
      [0, "&upuparrows;"],
      [0, "&rightrightarrows;"],
      [0, "&ddarr;"],
      [0, "&leftrightharpoons;"],
      [0, "&Equilibrium;"],
      [0, "&nlArr;"],
      [0, "&nhArr;"],
      [0, "&nrArr;"],
      [0, "&DoubleLeftArrow;"],
      [0, "&DoubleUpArrow;"],
      [0, "&DoubleRightArrow;"],
      [0, "&dArr;"],
      [0, "&DoubleLeftRightArrow;"],
      [0, "&DoubleUpDownArrow;"],
      [0, "&nwArr;"],
      [0, "&neArr;"],
      [0, "&seArr;"],
      [0, "&swArr;"],
      [0, "&lAarr;"],
      [0, "&rAarr;"],
      [1, "&zigrarr;"],
      [6, "&larrb;"],
      [0, "&rarrb;"],
      [15, "&DownArrowUpArrow;"],
      [7, "&loarr;"],
      [0, "&roarr;"],
      [0, "&hoarr;"],
      [0, "&forall;"],
      [0, "&comp;"],
      [0, { v: "&part;", n: 824, o: "&npart;" }],
      [0, "&exist;"],
      [0, "&nexist;"],
      [0, "&empty;"],
      [1, "&Del;"],
      [0, "&Element;"],
      [0, "&NotElement;"],
      [1, "&ni;"],
      [0, "&notni;"],
      [2, "&prod;"],
      [0, "&coprod;"],
      [0, "&sum;"],
      [0, "&minus;"],
      [0, "&MinusPlus;"],
      [0, "&dotplus;"],
      [1, "&Backslash;"],
      [0, "&lowast;"],
      [0, "&compfn;"],
      [1, "&radic;"],
      [2, "&prop;"],
      [0, "&infin;"],
      [0, "&angrt;"],
      [0, { v: "&ang;", n: 8402, o: "&nang;" }],
      [0, "&angmsd;"],
      [0, "&angsph;"],
      [0, "&mid;"],
      [0, "&nmid;"],
      [0, "&DoubleVerticalBar;"],
      [0, "&NotDoubleVerticalBar;"],
      [0, "&and;"],
      [0, "&or;"],
      [0, { v: "&cap;", n: 65024, o: "&caps;" }],
      [0, { v: "&cup;", n: 65024, o: "&cups;" }],
      [0, "&int;"],
      [0, "&Int;"],
      [0, "&iiint;"],
      [0, "&conint;"],
      [0, "&Conint;"],
      [0, "&Cconint;"],
      [0, "&cwint;"],
      [0, "&ClockwiseContourIntegral;"],
      [0, "&awconint;"],
      [0, "&there4;"],
      [0, "&becaus;"],
      [0, "&ratio;"],
      [0, "&Colon;"],
      [0, "&dotminus;"],
      [1, "&mDDot;"],
      [0, "&homtht;"],
      [0, { v: "&sim;", n: 8402, o: "&nvsim;" }],
      [0, { v: "&backsim;", n: 817, o: "&race;" }],
      [0, { v: "&ac;", n: 819, o: "&acE;" }],
      [0, "&acd;"],
      [0, "&VerticalTilde;"],
      [0, "&NotTilde;"],
      [0, { v: "&eqsim;", n: 824, o: "&nesim;" }],
      [0, "&sime;"],
      [0, "&NotTildeEqual;"],
      [0, "&cong;"],
      [0, "&simne;"],
      [0, "&ncong;"],
      [0, "&ap;"],
      [0, "&nap;"],
      [0, "&ape;"],
      [0, { v: "&apid;", n: 824, o: "&napid;" }],
      [0, "&backcong;"],
      [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }],
      [0, { v: "&bump;", n: 824, o: "&nbump;" }],
      [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }],
      [0, { v: "&doteq;", n: 824, o: "&nedot;" }],
      [0, "&doteqdot;"],
      [0, "&efDot;"],
      [0, "&erDot;"],
      [0, "&Assign;"],
      [0, "&ecolon;"],
      [0, "&ecir;"],
      [0, "&circeq;"],
      [1, "&wedgeq;"],
      [0, "&veeeq;"],
      [1, "&triangleq;"],
      [2, "&equest;"],
      [0, "&ne;"],
      [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }],
      [0, "&nequiv;"],
      [1, { v: "&le;", n: 8402, o: "&nvle;" }],
      [0, { v: "&ge;", n: 8402, o: "&nvge;" }],
      [0, { v: "&lE;", n: 824, o: "&nlE;" }],
      [0, { v: "&gE;", n: 824, o: "&ngE;" }],
      [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }],
      [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }],
      [
        0,
        {
          v: "&ll;",
          n: new Map(
            ve([
              [824, "&nLtv;"],
              [7577, "&nLt;"],
            ])
          ),
        },
      ],
      [
        0,
        {
          v: "&gg;",
          n: new Map(
            ve([
              [824, "&nGtv;"],
              [7577, "&nGt;"],
            ])
          ),
        },
      ],
      [0, "&between;"],
      [0, "&NotCupCap;"],
      [0, "&nless;"],
      [0, "&ngt;"],
      [0, "&nle;"],
      [0, "&nge;"],
      [0, "&lesssim;"],
      [0, "&GreaterTilde;"],
      [0, "&nlsim;"],
      [0, "&ngsim;"],
      [0, "&LessGreater;"],
      [0, "&gl;"],
      [0, "&NotLessGreater;"],
      [0, "&NotGreaterLess;"],
      [0, "&pr;"],
      [0, "&sc;"],
      [0, "&prcue;"],
      [0, "&sccue;"],
      [0, "&PrecedesTilde;"],
      [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }],
      [0, "&NotPrecedes;"],
      [0, "&NotSucceeds;"],
      [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }],
      [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }],
      [0, "&nsub;"],
      [0, "&nsup;"],
      [0, "&sube;"],
      [0, "&supe;"],
      [0, "&NotSubsetEqual;"],
      [0, "&NotSupersetEqual;"],
      [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }],
      [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }],
      [1, "&cupdot;"],
      [0, "&UnionPlus;"],
      [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }],
      [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }],
      [0, "&sqsube;"],
      [0, "&sqsupe;"],
      [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }],
      [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }],
      [0, "&CirclePlus;"],
      [0, "&CircleMinus;"],
      [0, "&CircleTimes;"],
      [0, "&osol;"],
      [0, "&CircleDot;"],
      [0, "&circledcirc;"],
      [0, "&circledast;"],
      [1, "&circleddash;"],
      [0, "&boxplus;"],
      [0, "&boxminus;"],
      [0, "&boxtimes;"],
      [0, "&dotsquare;"],
      [0, "&RightTee;"],
      [0, "&dashv;"],
      [0, "&DownTee;"],
      [0, "&bot;"],
      [1, "&models;"],
      [0, "&DoubleRightTee;"],
      [0, "&Vdash;"],
      [0, "&Vvdash;"],
      [0, "&VDash;"],
      [0, "&nvdash;"],
      [0, "&nvDash;"],
      [0, "&nVdash;"],
      [0, "&nVDash;"],
      [0, "&prurel;"],
      [1, "&LeftTriangle;"],
      [0, "&RightTriangle;"],
      [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }],
      [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }],
      [0, "&origof;"],
      [0, "&imof;"],
      [0, "&multimap;"],
      [0, "&hercon;"],
      [0, "&intcal;"],
      [0, "&veebar;"],
      [1, "&barvee;"],
      [0, "&angrtvb;"],
      [0, "&lrtri;"],
      [0, "&bigwedge;"],
      [0, "&bigvee;"],
      [0, "&bigcap;"],
      [0, "&bigcup;"],
      [0, "&diam;"],
      [0, "&sdot;"],
      [0, "&sstarf;"],
      [0, "&divideontimes;"],
      [0, "&bowtie;"],
      [0, "&ltimes;"],
      [0, "&rtimes;"],
      [0, "&leftthreetimes;"],
      [0, "&rightthreetimes;"],
      [0, "&backsimeq;"],
      [0, "&curlyvee;"],
      [0, "&curlywedge;"],
      [0, "&Sub;"],
      [0, "&Sup;"],
      [0, "&Cap;"],
      [0, "&Cup;"],
      [0, "&fork;"],
      [0, "&epar;"],
      [0, "&lessdot;"],
      [0, "&gtdot;"],
      [0, { v: "&Ll;", n: 824, o: "&nLl;" }],
      [0, { v: "&Gg;", n: 824, o: "&nGg;" }],
      [0, { v: "&leg;", n: 65024, o: "&lesg;" }],
      [0, { v: "&gel;", n: 65024, o: "&gesl;" }],
      [2, "&cuepr;"],
      [0, "&cuesc;"],
      [0, "&NotPrecedesSlantEqual;"],
      [0, "&NotSucceedsSlantEqual;"],
      [0, "&NotSquareSubsetEqual;"],
      [0, "&NotSquareSupersetEqual;"],
      [2, "&lnsim;"],
      [0, "&gnsim;"],
      [0, "&precnsim;"],
      [0, "&scnsim;"],
      [0, "&nltri;"],
      [0, "&NotRightTriangle;"],
      [0, "&nltrie;"],
      [0, "&NotRightTriangleEqual;"],
      [0, "&vellip;"],
      [0, "&ctdot;"],
      [0, "&utdot;"],
      [0, "&dtdot;"],
      [0, "&disin;"],
      [0, "&isinsv;"],
      [0, "&isins;"],
      [0, { v: "&isindot;", n: 824, o: "&notindot;" }],
      [0, "&notinvc;"],
      [0, "&notinvb;"],
      [1, { v: "&isinE;", n: 824, o: "&notinE;" }],
      [0, "&nisd;"],
      [0, "&xnis;"],
      [0, "&nis;"],
      [0, "&notnivc;"],
      [0, "&notnivb;"],
      [6, "&barwed;"],
      [0, "&Barwed;"],
      [1, "&lceil;"],
      [0, "&rceil;"],
      [0, "&LeftFloor;"],
      [0, "&rfloor;"],
      [0, "&drcrop;"],
      [0, "&dlcrop;"],
      [0, "&urcrop;"],
      [0, "&ulcrop;"],
      [0, "&bnot;"],
      [1, "&profline;"],
      [0, "&profsurf;"],
      [1, "&telrec;"],
      [0, "&target;"],
      [5, "&ulcorn;"],
      [0, "&urcorn;"],
      [0, "&dlcorn;"],
      [0, "&drcorn;"],
      [2, "&frown;"],
      [0, "&smile;"],
      [9, "&cylcty;"],
      [0, "&profalar;"],
      [7, "&topbot;"],
      [6, "&ovbar;"],
      [1, "&solbar;"],
      [60, "&angzarr;"],
      [51, "&lmoustache;"],
      [0, "&rmoustache;"],
      [2, "&OverBracket;"],
      [0, "&bbrk;"],
      [0, "&bbrktbrk;"],
      [37, "&OverParenthesis;"],
      [0, "&UnderParenthesis;"],
      [0, "&OverBrace;"],
      [0, "&UnderBrace;"],
      [2, "&trpezium;"],
      [4, "&elinters;"],
      [59, "&blank;"],
      [164, "&circledS;"],
      [55, "&boxh;"],
      [1, "&boxv;"],
      [9, "&boxdr;"],
      [3, "&boxdl;"],
      [3, "&boxur;"],
      [3, "&boxul;"],
      [3, "&boxvr;"],
      [7, "&boxvl;"],
      [7, "&boxhd;"],
      [7, "&boxhu;"],
      [7, "&boxvh;"],
      [19, "&boxH;"],
      [0, "&boxV;"],
      [0, "&boxdR;"],
      [0, "&boxDr;"],
      [0, "&boxDR;"],
      [0, "&boxdL;"],
      [0, "&boxDl;"],
      [0, "&boxDL;"],
      [0, "&boxuR;"],
      [0, "&boxUr;"],
      [0, "&boxUR;"],
      [0, "&boxuL;"],
      [0, "&boxUl;"],
      [0, "&boxUL;"],
      [0, "&boxvR;"],
      [0, "&boxVr;"],
      [0, "&boxVR;"],
      [0, "&boxvL;"],
      [0, "&boxVl;"],
      [0, "&boxVL;"],
      [0, "&boxHd;"],
      [0, "&boxhD;"],
      [0, "&boxHD;"],
      [0, "&boxHu;"],
      [0, "&boxhU;"],
      [0, "&boxHU;"],
      [0, "&boxvH;"],
      [0, "&boxVh;"],
      [0, "&boxVH;"],
      [19, "&uhblk;"],
      [3, "&lhblk;"],
      [3, "&block;"],
      [8, "&blk14;"],
      [0, "&blk12;"],
      [0, "&blk34;"],
      [13, "&square;"],
      [8, "&blacksquare;"],
      [0, "&EmptyVerySmallSquare;"],
      [1, "&rect;"],
      [0, "&marker;"],
      [2, "&fltns;"],
      [1, "&bigtriangleup;"],
      [0, "&blacktriangle;"],
      [0, "&triangle;"],
      [2, "&blacktriangleright;"],
      [0, "&rtri;"],
      [3, "&bigtriangledown;"],
      [0, "&blacktriangledown;"],
      [0, "&dtri;"],
      [2, "&blacktriangleleft;"],
      [0, "&ltri;"],
      [6, "&loz;"],
      [0, "&cir;"],
      [32, "&tridot;"],
      [2, "&bigcirc;"],
      [8, "&ultri;"],
      [0, "&urtri;"],
      [0, "&lltri;"],
      [0, "&EmptySmallSquare;"],
      [0, "&FilledSmallSquare;"],
      [8, "&bigstar;"],
      [0, "&star;"],
      [7, "&phone;"],
      [49, "&female;"],
      [1, "&male;"],
      [29, "&spades;"],
      [2, "&clubs;"],
      [1, "&hearts;"],
      [0, "&diamondsuit;"],
      [3, "&sung;"],
      [2, "&flat;"],
      [0, "&natural;"],
      [0, "&sharp;"],
      [163, "&check;"],
      [3, "&cross;"],
      [8, "&malt;"],
      [21, "&sext;"],
      [33, "&VerticalSeparator;"],
      [25, "&lbbrk;"],
      [0, "&rbbrk;"],
      [84, "&bsolhsub;"],
      [0, "&suphsol;"],
      [28, "&LeftDoubleBracket;"],
      [0, "&RightDoubleBracket;"],
      [0, "&lang;"],
      [0, "&rang;"],
      [0, "&Lang;"],
      [0, "&Rang;"],
      [0, "&loang;"],
      [0, "&roang;"],
      [7, "&longleftarrow;"],
      [0, "&longrightarrow;"],
      [0, "&longleftrightarrow;"],
      [0, "&DoubleLongLeftArrow;"],
      [0, "&DoubleLongRightArrow;"],
      [0, "&DoubleLongLeftRightArrow;"],
      [1, "&longmapsto;"],
      [2, "&dzigrarr;"],
      [258, "&nvlArr;"],
      [0, "&nvrArr;"],
      [0, "&nvHarr;"],
      [0, "&Map;"],
      [6, "&lbarr;"],
      [0, "&bkarow;"],
      [0, "&lBarr;"],
      [0, "&dbkarow;"],
      [0, "&drbkarow;"],
      [0, "&DDotrahd;"],
      [0, "&UpArrowBar;"],
      [0, "&DownArrowBar;"],
      [2, "&Rarrtl;"],
      [2, "&latail;"],
      [0, "&ratail;"],
      [0, "&lAtail;"],
      [0, "&rAtail;"],
      [0, "&larrfs;"],
      [0, "&rarrfs;"],
      [0, "&larrbfs;"],
      [0, "&rarrbfs;"],
      [2, "&nwarhk;"],
      [0, "&nearhk;"],
      [0, "&hksearow;"],
      [0, "&hkswarow;"],
      [0, "&nwnear;"],
      [0, "&nesear;"],
      [0, "&seswar;"],
      [0, "&swnwar;"],
      [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }],
      [1, "&cudarrr;"],
      [0, "&ldca;"],
      [0, "&rdca;"],
      [0, "&cudarrl;"],
      [0, "&larrpl;"],
      [2, "&curarrm;"],
      [0, "&cularrp;"],
      [7, "&rarrpl;"],
      [2, "&harrcir;"],
      [0, "&Uarrocir;"],
      [0, "&lurdshar;"],
      [0, "&ldrushar;"],
      [2, "&LeftRightVector;"],
      [0, "&RightUpDownVector;"],
      [0, "&DownLeftRightVector;"],
      [0, "&LeftUpDownVector;"],
      [0, "&LeftVectorBar;"],
      [0, "&RightVectorBar;"],
      [0, "&RightUpVectorBar;"],
      [0, "&RightDownVectorBar;"],
      [0, "&DownLeftVectorBar;"],
      [0, "&DownRightVectorBar;"],
      [0, "&LeftUpVectorBar;"],
      [0, "&LeftDownVectorBar;"],
      [0, "&LeftTeeVector;"],
      [0, "&RightTeeVector;"],
      [0, "&RightUpTeeVector;"],
      [0, "&RightDownTeeVector;"],
      [0, "&DownLeftTeeVector;"],
      [0, "&DownRightTeeVector;"],
      [0, "&LeftUpTeeVector;"],
      [0, "&LeftDownTeeVector;"],
      [0, "&lHar;"],
      [0, "&uHar;"],
      [0, "&rHar;"],
      [0, "&dHar;"],
      [0, "&luruhar;"],
      [0, "&ldrdhar;"],
      [0, "&ruluhar;"],
      [0, "&rdldhar;"],
      [0, "&lharul;"],
      [0, "&llhard;"],
      [0, "&rharul;"],
      [0, "&lrhard;"],
      [0, "&udhar;"],
      [0, "&duhar;"],
      [0, "&RoundImplies;"],
      [0, "&erarr;"],
      [0, "&simrarr;"],
      [0, "&larrsim;"],
      [0, "&rarrsim;"],
      [0, "&rarrap;"],
      [0, "&ltlarr;"],
      [1, "&gtrarr;"],
      [0, "&subrarr;"],
      [1, "&suplarr;"],
      [0, "&lfisht;"],
      [0, "&rfisht;"],
      [0, "&ufisht;"],
      [0, "&dfisht;"],
      [5, "&lopar;"],
      [0, "&ropar;"],
      [4, "&lbrke;"],
      [0, "&rbrke;"],
      [0, "&lbrkslu;"],
      [0, "&rbrksld;"],
      [0, "&lbrksld;"],
      [0, "&rbrkslu;"],
      [0, "&langd;"],
      [0, "&rangd;"],
      [0, "&lparlt;"],
      [0, "&rpargt;"],
      [0, "&gtlPar;"],
      [0, "&ltrPar;"],
      [3, "&vzigzag;"],
      [1, "&vangrt;"],
      [0, "&angrtvbd;"],
      [6, "&ange;"],
      [0, "&range;"],
      [0, "&dwangle;"],
      [0, "&uwangle;"],
      [0, "&angmsdaa;"],
      [0, "&angmsdab;"],
      [0, "&angmsdac;"],
      [0, "&angmsdad;"],
      [0, "&angmsdae;"],
      [0, "&angmsdaf;"],
      [0, "&angmsdag;"],
      [0, "&angmsdah;"],
      [0, "&bemptyv;"],
      [0, "&demptyv;"],
      [0, "&cemptyv;"],
      [0, "&raemptyv;"],
      [0, "&laemptyv;"],
      [0, "&ohbar;"],
      [0, "&omid;"],
      [0, "&opar;"],
      [1, "&operp;"],
      [1, "&olcross;"],
      [0, "&odsold;"],
      [1, "&olcir;"],
      [0, "&ofcir;"],
      [0, "&olt;"],
      [0, "&ogt;"],
      [0, "&cirscir;"],
      [0, "&cirE;"],
      [0, "&solb;"],
      [0, "&bsolb;"],
      [3, "&boxbox;"],
      [3, "&trisb;"],
      [0, "&rtriltri;"],
      [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }],
      [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }],
      [11, "&iinfin;"],
      [0, "&infintie;"],
      [0, "&nvinfin;"],
      [4, "&eparsl;"],
      [0, "&smeparsl;"],
      [0, "&eqvparsl;"],
      [5, "&blacklozenge;"],
      [8, "&RuleDelayed;"],
      [1, "&dsol;"],
      [9, "&bigodot;"],
      [0, "&bigoplus;"],
      [0, "&bigotimes;"],
      [1, "&biguplus;"],
      [1, "&bigsqcup;"],
      [5, "&iiiint;"],
      [0, "&fpartint;"],
      [2, "&cirfnint;"],
      [0, "&awint;"],
      [0, "&rppolint;"],
      [0, "&scpolint;"],
      [0, "&npolint;"],
      [0, "&pointint;"],
      [0, "&quatint;"],
      [0, "&intlarhk;"],
      [10, "&pluscir;"],
      [0, "&plusacir;"],
      [0, "&simplus;"],
      [0, "&plusdu;"],
      [0, "&plussim;"],
      [0, "&plustwo;"],
      [1, "&mcomma;"],
      [0, "&minusdu;"],
      [2, "&loplus;"],
      [0, "&roplus;"],
      [0, "&Cross;"],
      [0, "&timesd;"],
      [0, "&timesbar;"],
      [1, "&smashp;"],
      [0, "&lotimes;"],
      [0, "&rotimes;"],
      [0, "&otimesas;"],
      [0, "&Otimes;"],
      [0, "&odiv;"],
      [0, "&triplus;"],
      [0, "&triminus;"],
      [0, "&tritime;"],
      [0, "&intprod;"],
      [2, "&amalg;"],
      [0, "&capdot;"],
      [1, "&ncup;"],
      [0, "&ncap;"],
      [0, "&capand;"],
      [0, "&cupor;"],
      [0, "&cupcap;"],
      [0, "&capcup;"],
      [0, "&cupbrcap;"],
      [0, "&capbrcup;"],
      [0, "&cupcup;"],
      [0, "&capcap;"],
      [0, "&ccups;"],
      [0, "&ccaps;"],
      [2, "&ccupssm;"],
      [2, "&And;"],
      [0, "&Or;"],
      [0, "&andand;"],
      [0, "&oror;"],
      [0, "&orslope;"],
      [0, "&andslope;"],
      [1, "&andv;"],
      [0, "&orv;"],
      [0, "&andd;"],
      [0, "&ord;"],
      [1, "&wedbar;"],
      [6, "&sdote;"],
      [3, "&simdot;"],
      [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }],
      [0, "&easter;"],
      [0, "&apacir;"],
      [0, { v: "&apE;", n: 824, o: "&napE;" }],
      [0, "&eplus;"],
      [0, "&pluse;"],
      [0, "&Esim;"],
      [0, "&Colone;"],
      [0, "&Equal;"],
      [1, "&ddotseq;"],
      [0, "&equivDD;"],
      [0, "&ltcir;"],
      [0, "&gtcir;"],
      [0, "&ltquest;"],
      [0, "&gtquest;"],
      [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }],
      [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }],
      [0, "&lesdot;"],
      [0, "&gesdot;"],
      [0, "&lesdoto;"],
      [0, "&gesdoto;"],
      [0, "&lesdotor;"],
      [0, "&gesdotol;"],
      [0, "&lap;"],
      [0, "&gap;"],
      [0, "&lne;"],
      [0, "&gne;"],
      [0, "&lnap;"],
      [0, "&gnap;"],
      [0, "&lEg;"],
      [0, "&gEl;"],
      [0, "&lsime;"],
      [0, "&gsime;"],
      [0, "&lsimg;"],
      [0, "&gsiml;"],
      [0, "&lgE;"],
      [0, "&glE;"],
      [0, "&lesges;"],
      [0, "&gesles;"],
      [0, "&els;"],
      [0, "&egs;"],
      [0, "&elsdot;"],
      [0, "&egsdot;"],
      [0, "&el;"],
      [0, "&eg;"],
      [2, "&siml;"],
      [0, "&simg;"],
      [0, "&simlE;"],
      [0, "&simgE;"],
      [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }],
      [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }],
      [1, "&glj;"],
      [0, "&gla;"],
      [0, "&ltcc;"],
      [0, "&gtcc;"],
      [0, "&lescc;"],
      [0, "&gescc;"],
      [0, "&smt;"],
      [0, "&lat;"],
      [0, { v: "&smte;", n: 65024, o: "&smtes;" }],
      [0, { v: "&late;", n: 65024, o: "&lates;" }],
      [0, "&bumpE;"],
      [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }],
      [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }],
      [2, "&prE;"],
      [0, "&scE;"],
      [0, "&precneqq;"],
      [0, "&scnE;"],
      [0, "&prap;"],
      [0, "&scap;"],
      [0, "&precnapprox;"],
      [0, "&scnap;"],
      [0, "&Pr;"],
      [0, "&Sc;"],
      [0, "&subdot;"],
      [0, "&supdot;"],
      [0, "&subplus;"],
      [0, "&supplus;"],
      [0, "&submult;"],
      [0, "&supmult;"],
      [0, "&subedot;"],
      [0, "&supedot;"],
      [0, { v: "&subE;", n: 824, o: "&nsubE;" }],
      [0, { v: "&supE;", n: 824, o: "&nsupE;" }],
      [0, "&subsim;"],
      [0, "&supsim;"],
      [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }],
      [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }],
      [2, "&csub;"],
      [0, "&csup;"],
      [0, "&csube;"],
      [0, "&csupe;"],
      [0, "&subsup;"],
      [0, "&supsub;"],
      [0, "&subsub;"],
      [0, "&supsup;"],
      [0, "&suphsub;"],
      [0, "&supdsub;"],
      [0, "&forkv;"],
      [0, "&topfork;"],
      [0, "&mlcp;"],
      [8, "&Dashv;"],
      [1, "&Vdashl;"],
      [0, "&Barv;"],
      [0, "&vBar;"],
      [0, "&vBarv;"],
      [1, "&Vbar;"],
      [0, "&Not;"],
      [0, "&bNot;"],
      [0, "&rnmid;"],
      [0, "&cirmid;"],
      [0, "&midcir;"],
      [0, "&topcir;"],
      [0, "&nhpar;"],
      [0, "&parsim;"],
      [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }],
      [
        44343,
        {
          n: new Map(
            ve([
              [56476, "&Ascr;"],
              [1, "&Cscr;"],
              [0, "&Dscr;"],
              [2, "&Gscr;"],
              [2, "&Jscr;"],
              [0, "&Kscr;"],
              [2, "&Nscr;"],
              [0, "&Oscr;"],
              [0, "&Pscr;"],
              [0, "&Qscr;"],
              [1, "&Sscr;"],
              [0, "&Tscr;"],
              [0, "&Uscr;"],
              [0, "&Vscr;"],
              [0, "&Wscr;"],
              [0, "&Xscr;"],
              [0, "&Yscr;"],
              [0, "&Zscr;"],
              [0, "&ascr;"],
              [0, "&bscr;"],
              [0, "&cscr;"],
              [0, "&dscr;"],
              [1, "&fscr;"],
              [1, "&hscr;"],
              [0, "&iscr;"],
              [0, "&jscr;"],
              [0, "&kscr;"],
              [0, "&lscr;"],
              [0, "&mscr;"],
              [0, "&nscr;"],
              [1, "&pscr;"],
              [0, "&qscr;"],
              [0, "&rscr;"],
              [0, "&sscr;"],
              [0, "&tscr;"],
              [0, "&uscr;"],
              [0, "&vscr;"],
              [0, "&wscr;"],
              [0, "&xscr;"],
              [0, "&yscr;"],
              [0, "&zscr;"],
              [52, "&Afr;"],
              [0, "&Bfr;"],
              [1, "&Dfr;"],
              [0, "&Efr;"],
              [0, "&Ffr;"],
              [0, "&Gfr;"],
              [2, "&Jfr;"],
              [0, "&Kfr;"],
              [0, "&Lfr;"],
              [0, "&Mfr;"],
              [0, "&Nfr;"],
              [0, "&Ofr;"],
              [0, "&Pfr;"],
              [0, "&Qfr;"],
              [1, "&Sfr;"],
              [0, "&Tfr;"],
              [0, "&Ufr;"],
              [0, "&Vfr;"],
              [0, "&Wfr;"],
              [0, "&Xfr;"],
              [0, "&Yfr;"],
              [1, "&afr;"],
              [0, "&bfr;"],
              [0, "&cfr;"],
              [0, "&dfr;"],
              [0, "&efr;"],
              [0, "&ffr;"],
              [0, "&gfr;"],
              [0, "&hfr;"],
              [0, "&ifr;"],
              [0, "&jfr;"],
              [0, "&kfr;"],
              [0, "&lfr;"],
              [0, "&mfr;"],
              [0, "&nfr;"],
              [0, "&ofr;"],
              [0, "&pfr;"],
              [0, "&qfr;"],
              [0, "&rfr;"],
              [0, "&sfr;"],
              [0, "&tfr;"],
              [0, "&ufr;"],
              [0, "&vfr;"],
              [0, "&wfr;"],
              [0, "&xfr;"],
              [0, "&yfr;"],
              [0, "&zfr;"],
              [0, "&Aopf;"],
              [0, "&Bopf;"],
              [1, "&Dopf;"],
              [0, "&Eopf;"],
              [0, "&Fopf;"],
              [0, "&Gopf;"],
              [1, "&Iopf;"],
              [0, "&Jopf;"],
              [0, "&Kopf;"],
              [0, "&Lopf;"],
              [0, "&Mopf;"],
              [1, "&Oopf;"],
              [3, "&Sopf;"],
              [0, "&Topf;"],
              [0, "&Uopf;"],
              [0, "&Vopf;"],
              [0, "&Wopf;"],
              [0, "&Xopf;"],
              [0, "&Yopf;"],
              [1, "&aopf;"],
              [0, "&bopf;"],
              [0, "&copf;"],
              [0, "&dopf;"],
              [0, "&eopf;"],
              [0, "&fopf;"],
              [0, "&gopf;"],
              [0, "&hopf;"],
              [0, "&iopf;"],
              [0, "&jopf;"],
              [0, "&kopf;"],
              [0, "&lopf;"],
              [0, "&mopf;"],
              [0, "&nopf;"],
              [0, "&oopf;"],
              [0, "&popf;"],
              [0, "&qopf;"],
              [0, "&ropf;"],
              [0, "&sopf;"],
              [0, "&topf;"],
              [0, "&uopf;"],
              [0, "&vopf;"],
              [0, "&wopf;"],
              [0, "&xopf;"],
              [0, "&yopf;"],
              [0, "&zopf;"],
            ])
          ),
        },
      ],
      [8906, "&fflig;"],
      [0, "&filig;"],
      [0, "&fllig;"],
      [0, "&ffilig;"],
      [0, "&ffllig;"],
    ])
  );
  var Me = /["&'<>$\x80-\uFFFF]/g,
    Pe = new Map([
      [34, "&quot;"],
      [38, "&amp;"],
      [39, "&apos;"],
      [60, "&lt;"],
      [62, "&gt;"],
    ]),
    we =
      null != String.prototype.codePointAt
        ? (e, t) => e.codePointAt(t)
        : (e, t) =>
            55296 == (64512 & e.charCodeAt(t))
              ? 1024 * (e.charCodeAt(t) - 55296) +
                e.charCodeAt(t + 1) -
                56320 +
                65536
              : e.charCodeAt(t);
  function Be(e) {
    let t = "",
      r = 0;
    for (; null !== (n = Me.exec(e)); ) {
      var n = n.index,
        a = e.charCodeAt(n),
        s = Pe.get(a);
      r =
        void 0 !== s
          ? ((t += e.substring(r, n) + s), n + 1)
          : ((t += `${e.substring(r, n)}&#x${we(e, n).toString(16)};`),
            (Me.lastIndex += Number(55296 == (64512 & a))));
    }
    return t + e.substr(r);
  }
  function xe(a, s) {
    return function (e) {
      var t;
      let r = 0,
        n = "";
      for (; (t = a.exec(e)); )
        r !== t.index && (n += e.substring(r, t.index)),
          (n += s.get(t[0].charCodeAt(0))),
          (r = t.index + 1);
      return n + e.substring(r);
    };
  }
  xe(/[&<>'"]/g, Pe);
  var Fe = xe(
      /["&\u00A0]/g,
      new Map([
        [34, "&quot;"],
        [38, "&amp;"],
        [160, "&nbsp;"],
      ])
    ),
    Ue = xe(
      /[&<>\u00A0]/g,
      new Map([
        [38, "&amp;"],
        [60, "&lt;"],
        [62, "&gt;"],
        [160, "&nbsp;"],
      ])
    ),
    He =
      (0,
      0,
      new Map(
        [
          "altGlyph",
          "altGlyphDef",
          "altGlyphItem",
          "animateColor",
          "animateMotion",
          "animateTransform",
          "clipPath",
          "feBlend",
          "feColorMatrix",
          "feComponentTransfer",
          "feComposite",
          "feConvolveMatrix",
          "feDiffuseLighting",
          "feDisplacementMap",
          "feDistantLight",
          "feDropShadow",
          "feFlood",
          "feFuncA",
          "feFuncB",
          "feFuncG",
          "feFuncR",
          "feGaussianBlur",
          "feImage",
          "feMerge",
          "feMergeNode",
          "feMorphology",
          "feOffset",
          "fePointLight",
          "feSpecularLighting",
          "feSpotLight",
          "feTile",
          "feTurbulence",
          "foreignObject",
          "glyphRef",
          "linearGradient",
          "radialGradient",
          "textPath",
        ].map((e) => [e.toLowerCase(), e])
      )),
    Ge = new Map(
      [
        "definitionURL",
        "attributeName",
        "attributeType",
        "baseFrequency",
        "baseProfile",
        "calcMode",
        "clipPathUnits",
        "diffuseConstant",
        "edgeMode",
        "filterUnits",
        "glyphRef",
        "gradientTransform",
        "gradientUnits",
        "kernelMatrix",
        "kernelUnitLength",
        "keyPoints",
        "keySplines",
        "keyTimes",
        "lengthAdjust",
        "limitingConeAngle",
        "markerHeight",
        "markerUnits",
        "markerWidth",
        "maskContentUnits",
        "maskUnits",
        "numOctaves",
        "pathLength",
        "patternContentUnits",
        "patternTransform",
        "patternUnits",
        "pointsAtX",
        "pointsAtY",
        "pointsAtZ",
        "preserveAlpha",
        "preserveAspectRatio",
        "primitiveUnits",
        "refX",
        "refY",
        "repeatCount",
        "repeatDur",
        "requiredExtensions",
        "requiredFeatures",
        "specularConstant",
        "specularExponent",
        "spreadMethod",
        "startOffset",
        "stdDeviation",
        "stitchTiles",
        "surfaceScale",
        "systemLanguage",
        "tableValues",
        "targetX",
        "targetY",
        "textLength",
        "viewBox",
        "viewTarget",
        "xChannelSelector",
        "yChannelSelector",
        "zoomAndPan",
      ].map((e) => [e.toLowerCase(), e])
    ),
    qe = new Set([
      "style",
      "script",
      "xmp",
      "iframe",
      "noembed",
      "noframes",
      "plaintext",
      "noscript",
    ]);
  function Ye(e) {
    return e.replace(/"/g, "&quot;");
  }
  var Ve = new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
  ]);
  function Qe(e, t = {}) {
    var r = "length" in e ? e : [e];
    let n = "";
    for (let e = 0; e < r.length; e++)
      n += (function (e, t) {
        switch (e.type) {
          case z:
            return Qe(e.children, t);
          case ae:
          case J:
            return `<${e.data}>`;
          case Z:
            return `<!--${e.data}-->`;
          case ne:
            return `<![CDATA[${e.children[0].data}]]>`;
          case ee:
          case te:
          case re:
            return (function (e, t) {
              "foreign" === t.xmlMode &&
                ((e.name = null != (n = He.get(e.name)) ? n : e.name),
                e.parent) &&
                We.has(e.parent.name) &&
                (t = { ...t, xmlMode: !1 });
              !t.xmlMode &&
                Xe.has(e.name) &&
                (t = { ...t, xmlMode: "foreign" });
              let r = "<" + e.name;
              var n = (function (n, a) {
                var e;
                if (n) {
                  const s =
                    !1 ===
                    (null != (e = a.encodeEntities) ? e : a.decodeEntities)
                      ? Ye
                      : a.xmlMode || "utf8" !== a.encodeEntities
                      ? Be
                      : Fe;
                  return Object.keys(n)
                    .map((e) => {
                      var t,
                        r = null != (r = n[e]) ? r : "";
                      return (
                        "foreign" === a.xmlMode &&
                          (e = null != (t = Ge.get(e)) ? t : e),
                        a.emptyAttrs || a.xmlMode || "" !== r
                          ? `${e}="${s(r)}"`
                          : e
                      );
                    })
                    .join(" ");
                }
              })(e.attribs, t);
              n && (r += " " + n);
              0 === e.children.length &&
              (t.xmlMode
                ? !1 !== t.selfClosingTags
                : t.selfClosingTags && Ve.has(e.name))
                ? (t.xmlMode || (r += " "), (r += "/>"))
                : ((r += ">"),
                  0 < e.children.length && (r += Qe(e.children, t)),
                  (!t.xmlMode && Ve.has(e.name)) || (r += `</${e.name}>`));
              return r;
            })(e, t);
          case $:
            return (function (e, t) {
              var r;
              let n = e.data || "";
              !1 === (null != (r = t.encodeEntities) ? r : t.decodeEntities) ||
                (!t.xmlMode && e.parent && qe.has(e.parent.name)) ||
                (n = (t.xmlMode || "utf8" !== t.encodeEntities ? Be : Ue)(n));
              return n;
            })(e, t);
        }
      })(r[e], t);
    return n;
  }
  var je = Qe;
  var We = new Set([
      "mi",
      "mo",
      "mn",
      "ms",
      "mtext",
      "annotation-xml",
      "foreignObject",
      "desc",
      "title",
    ]),
    Xe = new Set(["svg", "math"]);
  function Ke(e, t) {
    return je(e, t);
  }
  function ze(e) {
    return Array.isArray(e)
      ? e.map(ze).join("")
      : h(e)
      ? "br" === e.name
        ? "\n"
        : ze(e.children)
      : ue(e)
      ? ze(e.children)
      : de(e)
      ? e.data
      : "";
  }
  function $e(e) {
    return Array.isArray(e)
      ? e.map($e).join("")
      : u(e) && !Ee(e)
      ? $e(e.children)
      : de(e)
      ? e.data
      : "";
  }
  function Je(e) {
    return Array.isArray(e)
      ? e.map(Je).join("")
      : u(e) && (e.type === a.Tag || ue(e))
      ? Je(e.children)
      : de(e)
      ? e.data
      : "";
  }
  function Ze(e) {
    return u(e) ? e.children : [];
  }
  function et(e) {
    return e.parent || null;
  }
  function tt(e) {
    var t = et(e);
    if (null != t) return Ze(t);
    var r = [e];
    let { prev: n, next: a } = e;
    for (; null != n; ) r.unshift(n), ({ prev: n } = n);
    for (; null != a; ) r.push(a), ({ next: a } = a);
    return r;
  }
  function rt(e) {
    let t = e["next"];
    for (; null !== t && !h(t); ) ({ next: t } = t);
    return t;
  }
  function nt(e) {
    let t = e["prev"];
    for (; null !== t && !h(t); ) ({ prev: t } = t);
    return t;
  }
  function at(e) {
    var t, r;
    e.prev && (e.prev.next = e.next),
      e.next && (e.next.prev = e.prev),
      e.parent &&
        0 <= (r = (t = e.parent.children).lastIndexOf(e)) &&
        t.splice(r, 1),
      (e.next = null),
      (e.prev = null),
      (e.parent = null);
  }
  function st(e, t, r = !0, n = 1 / 0) {
    return it(e, Array.isArray(t) ? t : [t], r, n);
  }
  function it(e, t, r, n) {
    for (var a = [], s = [t], i = [0]; ; )
      if (i[0] >= s[0].length) {
        if (1 === i.length) return a;
        s.shift(), i.shift();
      } else {
        var o = s[0][i[0]++];
        if (e(o) && (a.push(o), --n <= 0)) return a;
        r &&
          u(o) &&
          0 < o.children.length &&
          (i.unshift(0), s.unshift(o.children));
      }
  }
  function ot(t, r, n = !0) {
    let a = null;
    for (let e = 0; e < r.length && !a; e++) {
      var s = r[e];
      h(s) &&
        (t(s)
          ? (a = s)
          : n && 0 < s.children.length && (a = ot(t, s.children, !0)));
    }
    return a;
  }
  var d,
    ct = {
      tag_name(t) {
        return "function" == typeof t
          ? (e) => h(e) && t(e.name)
          : "*" === t
          ? h
          : (e) => h(e) && e.name === t;
      },
      tag_type(t) {
        return "function" == typeof t ? (e) => t(e.type) : (e) => e.type === t;
      },
      tag_contains(t) {
        return "function" == typeof t
          ? (e) => de(e) && t(e.data)
          : (e) => de(e) && e.data === t;
      },
    };
  function lt(t, r) {
    return "function" == typeof r
      ? (e) => h(e) && r(e.attribs[t])
      : (e) => h(e) && e.attribs[t] === r;
  }
  function ht(t, r) {
    return (e) => t(e) || r(e);
  }
  function ut(r) {
    var e = Object.keys(r).map((e) => {
      var t = r[e];
      return Object.prototype.hasOwnProperty.call(ct, e) ? ct[e](t) : lt(e, t);
    });
    return 0 === e.length ? null : e.reduce(ht);
  }
  function dt(e, t, r = !0, n = 1 / 0) {
    return st(ct.tag_name(e), t, r, n);
  }
  function Et(e, t) {
    var r = [],
      n = [];
    if (e === t) return 0;
    let a = u(e) ? e : e.parent;
    for (; a; ) r.unshift(a), (a = a.parent);
    for (a = u(t) ? t : t.parent; a; ) n.unshift(a), (a = a.parent);
    var s,
      i,
      o,
      c,
      l = Math.min(r.length, n.length);
    let h = 0;
    for (; h < l && r[h] === n[h]; ) h++;
    return 0 === h
      ? d.DISCONNECTED
      : ((i = (s = r[h - 1]).children),
        (o = r[h]),
        (c = n[h]),
        i.indexOf(o) > i.indexOf(c)
          ? s === t
            ? d.FOLLOWING | d.CONTAINED_BY
            : d.FOLLOWING
          : s === e
          ? d.PRECEDING | d.CONTAINS
          : d.PRECEDING);
  }
  function pt(e) {
    return (
      (e = e.filter((e, t, r) => !r.includes(e, t + 1))).sort((e, t) => {
        e = Et(e, t);
        return e & d.PRECEDING ? -1 : e & d.FOLLOWING ? 1 : 0;
      }),
      e
    );
  }
  ((n = d = d || {})[(n.DISCONNECTED = 1)] = "DISCONNECTED"),
    (n[(n.PRECEDING = 2)] = "PRECEDING"),
    (n[(n.FOLLOWING = 4)] = "FOLLOWING"),
    (n[(n.CONTAINS = 8)] = "CONTAINS"),
    (n[(n.CONTAINED_BY = 16)] = "CONTAINED_BY");
  var Tt = ["url", "type", "lang"],
    mt = [
      "fileSize",
      "bitrate",
      "framerate",
      "samplingrate",
      "channels",
      "duration",
      "height",
      "width",
    ];
  function ft(e) {
    return dt("media:content", e).map((e) => {
      var t = e["attribs"],
        r = { medium: t.medium, isDefault: !!t.isDefault };
      for (const n of Tt) t[n] && (r[n] = t[n]);
      for (const a of mt) t[a] && (r[a] = parseInt(t[a], 10));
      return t.expression && (r.expression = t.expression), r;
    });
  }
  function At(e, t) {
    return dt(e, t, !0, 1)[0];
  }
  function _t(e, t, r = !1) {
    return $e(dt(e, t, r, 1)).trim();
  }
  function o(e, t, r, n, a = !1) {
    r = _t(r, n, a);
    r && (e[t] = r);
  }
  function gt(e) {
    return "rss" === e || "feed" === e || "rdf:RDF" === e;
  }
  function Nt(e, t, r) {
    return e
      ? e(null != t ? t : e._root.children, null, void 0, r).toString()
      : "";
  }
  function Ct(e) {
    var t = e || (this ? this.root() : []);
    let r = "";
    for (let e = 0; e < t.length; e++) r += $e(t[e]);
    return r;
  }
  function It(e, t, r = "boolean" == typeof t && t) {
    if (!e || "string" != typeof e) return null;
    "boolean" == typeof t && (r = t);
    e = this.load(e, Q, !1);
    return r || e("script").remove(), e.root()[0].children.slice();
  }
  function St(t, r) {
    if (r !== t) {
      let e = r;
      for (; e && e !== e.parent; ) if ((e = e.parent) === t) return !0;
    }
    return !1;
  }
  function bt(t) {
    if (Array.isArray(t)) return 1;
    if (
      "object" == typeof t &&
      Object.prototype.hasOwnProperty.call(t, "length") &&
      "number" == typeof t.length &&
      !(t.length < 0)
    ) {
      for (let e = 0; e < t.length; e++) if (!(e in t)) return;
      return 1;
    }
  }
  var Rt,
    r = {};
  function Dt(e) {
    return null != e.cheerio;
  }
  function E(t, r) {
    var n = t.length;
    for (let e = 0; e < n; e++) r(t[e], e);
    return t;
  }
  function Ot(e) {
    e =
      "length" in e
        ? Array.prototype.map.call(e, (e) => me(e, !0))
        : [me(e, !0)];
    const t = new le(e);
    return (
      e.forEach((e) => {
        e.parent = t;
      }),
      e
    );
  }
  function Lt(e) {
    var t,
      r = e.indexOf("<");
    if (!(r < 0 || r > e.length - 3))
      return (
        (((t = e.charCodeAt(r + 1)) >= Rt.LowerA && t <= Rt.LowerZ) ||
          (t >= Rt.UpperA && t <= Rt.UpperZ) ||
          t === Rt.Exclamation) &&
        e.includes(">", r + 2)
      );
  }
  V(r, {
    addClass: () => Vt,
    attr: () =>
      function (n, a) {
        if ("object" != typeof n && void 0 === a)
          return 1 < arguments.length
            ? this
            : Bt(this[0], n, this.options.xmlMode);
        if ("function" != typeof a)
          return E(this, (r) => {
            h(r) &&
              ("object" == typeof n
                ? Object.keys(n).forEach((e) => {
                    var t = n[e];
                    xt(r, e, t);
                  })
                : xt(r, n, a));
          });
        if ("string" == typeof n)
          return E(this, (e, t) => {
            h(e) && xt(e, n, a.call(e, t, e.attribs[n]));
          });
        throw new Error("Bad combination of arguments.");
      },
    data: () =>
      function (t, r) {
        var e = this[0];
        if (e && h(e))
          return (
            null == (e = e).data && (e.data = {}),
            t
              ? "object" == typeof t || void 0 !== r
                ? (E(this, (e) => {
                    h(e) && ("object" == typeof t ? Ht(e, t) : Ht(e, t, r));
                  }),
                  this)
                : yt.call(e.data, t)
                ? e.data[t]
                : Gt(e, t)
              : Gt(e)
          );
      },
    hasClass: () =>
      function (a) {
        return this.toArray().some((e) => {
          var t = h(e) && e.attribs.class;
          let r = -1;
          if (t && a.length)
            for (; -1 < (r = t.indexOf(a, r + 1)); ) {
              var n = r + a.length;
              if (
                (0 === r || kt.test(t[r - 1])) &&
                (n === t.length || kt.test(t[n]))
              )
                return !0;
            }
          return !1;
        });
      },
    prop: () =>
      function (n, a) {
        if ("string" == typeof n && void 0 === a) {
          var e = this[0];
          if (!e || !h(e)) return;
          switch (n) {
            case "style": {
              const s = this.css();
              var t = Object.keys(s);
              return (
                t.forEach((e, t) => {
                  s[t] = e;
                }),
                (s.length = t.length),
                s
              );
            }
            case "tagName":
            case "nodeName":
              return e.name.toUpperCase();
            case "href":
            case "src":
              var r = null == (t = e.attribs) ? void 0 : t[n];
              return "undefined" == typeof URL ||
                (("href" !== n || ("a" !== e.tagName && "link" !== e.name)) &&
                  ("src" !== n ||
                    ("img" !== e.tagName &&
                      "iframe" !== e.tagName &&
                      "audio" !== e.tagName &&
                      "video" !== e.tagName &&
                      "source" !== e.tagName))) ||
                void 0 === r ||
                !this.options.baseURI
                ? r
                : new URL(r, this.options.baseURI).href;
            case "innerText":
              return Je(e);
            case "textContent":
              return $e(e);
            case "outerHTML":
              return this.clone().wrap("<container />").parent().html();
            case "innerHTML":
              return this.html();
            default:
              return Ft(e, n, this.options.xmlMode);
          }
        }
        if ("object" == typeof n || void 0 !== a) {
          if ("function" != typeof a)
            return E(this, (r) => {
              h(r) &&
                ("object" == typeof n
                  ? Object.keys(n).forEach((e) => {
                      var t = n[e];
                      Ut(r, e, t, this.options.xmlMode);
                    })
                  : Ut(r, n, a, this.options.xmlMode));
            });
          if ("object" == typeof n)
            throw new Error("Bad combination of arguments.");
          return E(this, (e, t) => {
            h(e) &&
              Ut(
                e,
                n,
                a.call(e, t, Ft(e, n, this.options.xmlMode)),
                this.options.xmlMode
              );
          });
        }
      },
    removeAttr: () =>
      function (e) {
        const r = Yt(e);
        for (let t = 0; t < r.length; t++)
          E(this, (e) => {
            h(e) && qt(e, r[t]);
          });
        return this;
      },
    removeClass: () => Qt,
    toggleClass: () => jt,
    val: () =>
      function (e) {
        var t = 0 === arguments.length,
          r = this[0];
        if (!r || !h(r)) return t ? void 0 : this;
        switch (r.name) {
          case "textarea":
            return this.text(e);
          case "select":
            var n = this.find("option:selected");
            if (t)
              return this.attr("multiple")
                ? n.toArray().map((e) => Ct(e.children))
                : n.attr("value");
            if (null != this.attr("multiple") || "object" != typeof e) {
              this.find("option").removeAttr("selected");
              var a = "object" != typeof e ? [e] : e;
              for (let e = 0; e < a.length; e++)
                this.find(`option[value="${a[e]}"]`).attr("selected", "");
            }
            return this;
          case "input":
          case "option":
            return t ? this.attr("value") : this.attr("value", e);
        }
      },
  }),
    ((n = Rt = Rt || {})[(n.LowerA = 97)] = "LowerA"),
    (n[(n.LowerZ = 122)] = "LowerZ"),
    (n[(n.UpperA = 65)] = "UpperA"),
    (n[(n.UpperZ = 90)] = "UpperZ"),
    (n[(n.Exclamation = 33)] = "Exclamation");
  var yt = Object.prototype.hasOwnProperty,
    kt = /\s+/,
    vt = "data-",
    Mt = { null: null, true: !0, false: !1 },
    Pt =
      /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    wt = /^{[^]*}$|^\[[^]*]$/;
  function Bt(e, t, r) {
    if (e && h(e))
      return (
        null == e.attribs && (e.attribs = {}),
        t
          ? yt.call(e.attribs, t)
            ? !r && Pt.test(t)
              ? t
              : e.attribs[t]
            : "option" === e.name && "value" === t
            ? Ct(e.children)
            : "input" !== e.name ||
              ("radio" !== e.attribs.type && "checkbox" !== e.attribs.type) ||
              "value" !== t
            ? void 0
            : "on"
          : e.attribs
      );
  }
  function xt(e, t, r) {
    null === r ? qt(e, t) : (e.attribs[t] = "" + r);
  }
  function Ft(e, t, r) {
    return t in e
      ? e[t]
      : !r && Pt.test(t)
      ? void 0 !== Bt(e, t, !1)
      : Bt(e, t, r);
  }
  function Ut(e, t, r, n) {
    t in e ? (e[t] = r) : xt(e, t, !n && Pt.test(t) ? (r ? "" : null) : "" + r);
  }
  function Ht(e, t, r) {
    null == e.data && (e.data = {}),
      "object" == typeof t
        ? Object.assign(e.data, t)
        : "string" == typeof t && void 0 !== r && (e.data[t] = r);
  }
  function Gt(t, e) {
    let r, n, a;
    n =
      null == e
        ? (r = Object.keys(t.attribs).filter((e) => e.startsWith(vt))).map(
            (e) => {
              return e
                .slice(vt.length)
                .replace(/[_.-](\w|$)/g, (e, t) => t.toUpperCase());
            }
          )
        : ((r = [vt + e.replace(/[A-Z]/g, "-$&").toLowerCase()]), [e]);
    for (let e = 0; e < r.length; ++e) {
      var s = r[e],
        i = n[e];
      if (yt.call(t.attribs, s) && !yt.call(t.data, i)) {
        if (((a = t.attribs[s]), yt.call(Mt, a))) a = Mt[a];
        else if (a === String(Number(a))) a = Number(a);
        else if (wt.test(a))
          try {
            a = JSON.parse(a);
          } catch (e) {}
        t.data[i] = a;
      }
    }
    return null == e ? t.data : a;
  }
  function qt(e, t) {
    e.attribs && yt.call(e.attribs, t) && delete e.attribs[t];
  }
  function Yt(e) {
    return e ? e.trim().split(kt) : [];
  }
  function Vt(n) {
    if ("function" == typeof n)
      return E(this, (e, t) => {
        var r;
        h(e) && ((r = e.attribs.class || ""), Vt.call([e], n.call(e, t, r)));
      });
    if (n && "string" == typeof n) {
      var r = n.split(kt),
        t = this.length;
      for (let e = 0; e < t; e++) {
        var a = this[e];
        if (h(a)) {
          var s = Bt(a, "class", !1);
          if (s) {
            let t = ` ${s} `;
            for (let e = 0; e < r.length; e++) {
              var i = r[e] + " ";
              t.includes(" " + i) || (t += i);
            }
            xt(a, "class", t.trim());
          } else xt(a, "class", r.join(" ").trim());
        }
      }
    }
    return this;
  }
  function Qt(r) {
    if ("function" == typeof r)
      return E(this, (e, t) => {
        h(e) && Qt.call([e], r.call(e, t, e.attribs.class || ""));
      });
    const a = Yt(r),
      s = a.length,
      t = 0 === arguments.length;
    return E(this, (e) => {
      if (h(e))
        if (t) e.attribs.class = "";
        else {
          var r = Yt(e.attribs.class);
          let t = !1;
          for (let e = 0; e < s; e++) {
            var n = r.indexOf(a[e]);
            0 <= n && (r.splice(n, 1), (t = !0), e--);
          }
          t && (e.attribs.class = r.join(" "));
        }
    });
  }
  function jt(r, n) {
    if ("function" == typeof r)
      return E(this, (e, t) => {
        h(e) && jt.call([e], r.call(e, t, e.attribs.class || "", n), n);
      });
    if (r && "string" == typeof r) {
      var t = r.split(kt),
        a = t.length,
        s = "boolean" == typeof n ? (n ? 1 : -1) : 0,
        i = this.length;
      for (let e = 0; e < i; e++) {
        var o = this[e];
        if (h(o)) {
          var c = Yt(o.attribs.class);
          for (let e = 0; e < a; e++) {
            var l = c.indexOf(t[e]);
            0 <= s && l < 0 ? c.push(t[e]) : s <= 0 && 0 <= l && c.splice(l, 1);
          }
          o.attribs.class = c.join(" ");
        }
      }
    }
    return this;
  }
  var C,
    I,
    n = {},
    Wt =
      (V(n, {
        add: () =>
          function (e, t) {
            (e = this._make(e, t)), (t = pt([...this.get(), ...e.get()]));
            return this._make(t);
          },
        addBack: () =>
          function (e) {
            return this.prevObject
              ? this.add(e ? this.prevObject.filter(e) : this.prevObject)
              : this;
          },
        children: () => Rn,
        closest: () =>
          function (t) {
            var e;
            const r = [];
            if (t) {
              const n = {
                  xmlMode: this.options.xmlMode,
                  root: null == (e = this._root) ? void 0 : e[0],
                },
                a = "string" == typeof t ? (e) => rn(e, t, n) : Dn(t);
              E(this, (e) => {
                for (; e && h(e); ) {
                  if (a(e, 0)) {
                    r.includes(e) || r.push(e);
                    break;
                  }
                  e = e.parent;
                }
              });
            }
            return this._make(r);
          },
        contents: () =>
          function () {
            var e = this.toArray().reduce(
              (e, t) => (u(t) ? e.concat(t.children) : e),
              []
            );
            return this._make(e);
          },
        each: () =>
          function (e) {
            let t = 0;
            var r = this.length;
            for (; t < r && !1 !== e.call(this[t], t, this[t]); ) ++t;
            return this;
          },
        end: () =>
          function () {
            var e;
            return null != (e = this.prevObject) ? e : this._make([]);
          },
        eq: () =>
          function (e) {
            if (0 == (e = +e) && this.length <= 1) return this;
            e < 0 && (e = this.length + e);
            return this._make(null != (e = this[e]) ? e : []);
          },
        filter: () =>
          function (e) {
            return this._make(
              On(
                this.toArray(),
                e,
                this.options.xmlMode,
                null == (e = this._root) ? void 0 : e[0]
              )
            );
          },
        filterArray: () => On,
        find: () =>
          function (e) {
            if (!e) return this._make([]);
            const r = this.toArray();
            if ("string" != typeof e)
              return (
                (t = Dt(e) ? e.toArray() : [e]),
                this._make(t.filter((t) => r.some((e) => St(e, t))))
              );
            var t = dn.test(e) ? r : this.children().toArray(),
              n = {
                context: r,
                root: null == (n = this._root) ? void 0 : n[0],
                xmlMode: this.options.xmlMode,
                lowerCaseTags: this.options.lowerCaseTags,
                lowerCaseAttributeNames: this.options.lowerCaseAttributeNames,
                pseudos: this.options.pseudos,
                quirksMode: this.options.quirksMode,
              };
            return this._make(
              (function (e, t, r, n = 1 / 0) {
                if ("function" == typeof e) return hn(t, e);
                var [e, a] = Zr(nr(e)),
                  a = a.map((e) => cn(t, e, r, !0, n));
                e.length && a.push(ln(t, e, r, n));
                return 0 !== a.length
                  ? 1 !== a.length
                    ? pt(a.reduce((e, t) => [...e, ...t]))
                    : a[0]
                  : [];
              })(e, t, n)
            );
          },
        first: () =>
          function () {
            return 1 < this.length ? this._make(this[0]) : this;
          },
        get: () =>
          function (e) {
            return null != e
              ? this[e < 0 ? this.length + e : e]
              : this.toArray();
          },
        has: () =>
          function (r) {
            return this.filter(
              "string" == typeof r
                ? `:has(${r})`
                : (e, t) => 0 < this._make(t).find(r).length
            );
          },
        index: () =>
          function (e) {
            let t, r;
            r =
              null == e
                ? ((t = this.parent().children()), this[0])
                : "string" == typeof e
                ? ((t = this._make(e)), this[0])
                : ((t = this), Dt(e) ? e[0] : e);
            return Array.prototype.indexOf.call(t, r);
          },
        is: () =>
          function (e) {
            var t = this.toArray();
            return "string" == typeof e
              ? nn(t.filter(h), e, this.options)
              : !!e && t.some(Dn(e));
          },
        last: () =>
          function () {
            return 0 < this.length ? this._make(this[this.length - 1]) : this;
          },
        map: () =>
          function (t) {
            let r = [];
            for (let e = 0; e < this.length; e++) {
              var n = this[e],
                n = t.call(n, e, n);
              null != n && (r = r.concat(n));
            }
            return this._make(r);
          },
        next: () => _n,
        nextAll: () => gn,
        nextUntil: () => Nn,
        not: () =>
          function (e) {
            let t = this.toArray();
            if ("string" == typeof e) {
              const r = new Set(an(e, t, this.options));
              t = t.filter((e) => !r.has(e));
            } else {
              const n = Dn(e);
              t = t.filter((e, t) => !n(e, t));
            }
            return this._make(t);
          },
        parent: () => mn,
        parents: () => fn,
        parentsUntil: () => An,
        prev: () => Cn,
        prevAll: () => In,
        prevUntil: () => Sn,
        siblings: () => bn,
        slice: () =>
          function (e, t) {
            return this._make(Array.prototype.slice.call(this, e, t));
          },
        toArray: () =>
          function () {
            return Array.prototype.slice.call(this);
          },
      }),
      ((p = C = C || {}).Attribute = "attribute"),
      (p.Pseudo = "pseudo"),
      (p.PseudoElement = "pseudo-element"),
      (p.Tag = "tag"),
      (p.Universal = "universal"),
      (p.Adjacent = "adjacent"),
      (p.Child = "child"),
      (p.Descendant = "descendant"),
      (p.Parent = "parent"),
      (p.Sibling = "sibling"),
      (p.ColumnCombinator = "column-combinator"),
      ((p = I = I || {}).Any = "any"),
      (p.Element = "element"),
      (p.End = "end"),
      (p.Equals = "equals"),
      (p.Exists = "exists"),
      (p.Hyphen = "hyphen"),
      (p.Not = "not"),
      (p.Start = "start"),
      /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/),
    Xt = /\\([\da-f]{1,6}\s?|(\s)|.)/gi,
    Kt = new Map([
      [126, I.Element],
      [94, I.Start],
      [36, I.End],
      [42, I.Any],
      [33, I.Not],
      [124, I.Hyphen],
    ]),
    zt = new Set([
      "has",
      "not",
      "matches",
      "is",
      "where",
      "host",
      "host-context",
    ]);
  function $t(e) {
    switch (e.type) {
      case C.Adjacent:
      case C.Child:
      case C.Descendant:
      case C.Parent:
      case C.Sibling:
      case C.ColumnCombinator:
        return !0;
      default:
        return !1;
    }
  }
  var Jt = new Set(["contains", "icontains"]);
  function Zt(e, t, r) {
    var n = parseInt(t, 16) - 65536;
    return n != n || r
      ? t
      : n < 0
      ? String.fromCharCode(65536 + n)
      : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320);
  }
  function er(e) {
    return e.replace(Xt, Zt);
  }
  function tr(e) {
    return 39 === e || 34 === e;
  }
  function rr(e) {
    return 32 === e || 9 === e || 10 === e || 12 === e || 13 === e;
  }
  function nr(e) {
    var t = [],
      r = (function t(e, s, i) {
        let o = [];
        function c(e) {
          const t = s.slice(i + e).match(Wt);
          if (!t) throw new Error("Expected name, found " + s.slice(i));
          const [r] = t;
          return (i += e + r.length), er(r);
        }
        function l(e) {
          for (i += e; i < s.length && rr(s.charCodeAt(i)); ) i++;
        }
        function r() {
          const e = (i += 1);
          let t = 1;
          for (; 0 < t && i < s.length; i++)
            40 !== s.charCodeAt(i) || h(i)
              ? 41 !== s.charCodeAt(i) || h(i) || t--
              : t++;
          if (t) throw new Error("Parenthesis not matched");
          return er(s.slice(e, i - 1));
        }
        function h(e) {
          let t = 0;
          for (; 92 === s.charCodeAt(--e); ) t++;
          return 1 == (1 & t);
        }
        function n() {
          if (0 < o.length && $t(o[o.length - 1]))
            throw new Error("Did not expect successive traversals.");
        }
        function a(e) {
          0 < o.length && o[o.length - 1].type === C.Descendant
            ? (o[o.length - 1].type = e)
            : (n(), o.push({ type: e }));
        }
        function u(e, t) {
          o.push({
            type: C.Attribute,
            name: e,
            action: t,
            value: c(1),
            namespace: null,
            ignoreCase: "quirks",
          });
        }
        function d() {
          if (
            (o.length && o[o.length - 1].type === C.Descendant && o.pop(),
            0 === o.length)
          )
            throw new Error("Empty sub-selector");
          e.push(o);
        }
        l(0);
        if (s.length === i) return i;
        e: for (; i < s.length; ) {
          const E = s.charCodeAt(i);
          switch (E) {
            case 32:
            case 9:
            case 10:
            case 12:
            case 13:
              (0 !== o.length && o[0].type === C.Descendant) ||
                (n(), o.push({ type: C.Descendant })),
                l(1);
              break;
            case 62:
              a(C.Child), l(1);
              break;
            case 60:
              a(C.Parent), l(1);
              break;
            case 126:
              a(C.Sibling), l(1);
              break;
            case 43:
              a(C.Adjacent), l(1);
              break;
            case 46:
              u("class", I.Element);
              break;
            case 35:
              u("id", I.Equals);
              break;
            case 91: {
              l(1);
              let e,
                t = null,
                r =
                  (124 === s.charCodeAt(i)
                    ? (e = c(1))
                    : s.startsWith("*|", i)
                    ? ((t = "*"), (e = c(2)))
                    : ((e = c(0)),
                      124 === s.charCodeAt(i) &&
                        61 !== s.charCodeAt(i + 1) &&
                        ((t = e), (e = c(1)))),
                  l(0),
                  I.Exists);
              const p = Kt.get(s.charCodeAt(i));
              if (p) {
                if (((r = p), 61 !== s.charCodeAt(i + 1)))
                  throw new Error("Expected `=`");
                l(2);
              } else 61 === s.charCodeAt(i) && ((r = I.Equals), l(1));
              let n = "",
                a = null;
              if ("exists" !== r) {
                if (tr(s.charCodeAt(i))) {
                  const f = s.charCodeAt(i);
                  let e = i + 1;
                  for (; e < s.length && (s.charCodeAt(e) !== f || h(e)); )
                    e += 1;
                  if (s.charCodeAt(e) !== f)
                    throw new Error("Attribute value didn't end");
                  (n = er(s.slice(i + 1, e))), (i = e + 1);
                } else {
                  const A = i;
                  for (
                    ;
                    i < s.length &&
                    ((!rr(s.charCodeAt(i)) && 93 !== s.charCodeAt(i)) || h(i));

                  )
                    i += 1;
                  n = er(s.slice(A, i));
                }
                l(0);
                const m = 32 | s.charCodeAt(i);
                115 == m ? ((a = !1), l(1)) : 105 == m && ((a = !0), l(1));
              }
              if (93 !== s.charCodeAt(i))
                throw new Error("Attribute selector didn't terminate");
              i += 1;
              const T = {
                type: C.Attribute,
                name: e,
                action: r,
                value: n,
                namespace: t,
                ignoreCase: a,
              };
              o.push(T);
              break;
            }
            case 58: {
              if (58 === s.charCodeAt(i + 1)) {
                o.push({
                  type: C.PseudoElement,
                  name: c(2).toLowerCase(),
                  data: 40 === s.charCodeAt(i) ? r() : null,
                });
                continue;
              }
              const _ = c(1).toLowerCase();
              let e = null;
              if (40 === s.charCodeAt(i))
                if (zt.has(_)) {
                  if (tr(s.charCodeAt(i + 1)))
                    throw new Error(`Pseudo-selector ${_} cannot be quoted`);
                  if (((e = []), (i = t(e, s, i + 1)), 41 !== s.charCodeAt(i)))
                    throw new Error(
                      `Missing closing parenthesis in :${_} (${s})`
                    );
                  i += 1;
                } else {
                  if (((e = r()), Jt.has(_))) {
                    const g = e.charCodeAt(0);
                    g === e.charCodeAt(e.length - 1) &&
                      tr(g) &&
                      (e = e.slice(1, -1));
                  }
                  e = er(e);
                }
              o.push({ type: C.Pseudo, name: _, data: e });
              break;
            }
            case 44:
              d(), (o = []), l(1);
              break;
            default:
              if (s.startsWith("/*", i)) {
                const N = s.indexOf("*/", i + 2);
                if (N < 0) throw new Error("Comment was not terminated");
                (i = N + 2), 0 === o.length && l(0);
              } else {
                let e = null,
                  t;
                if (42 === E) (i += 1), (t = "*");
                else if (124 === E) {
                  if (((t = ""), 124 === s.charCodeAt(i + 1))) {
                    a(C.ColumnCombinator), l(2);
                    break;
                  }
                } else {
                  if (!Wt.test(s.slice(i))) break e;
                  t = c(0);
                }
                124 === s.charCodeAt(i) &&
                  124 !== s.charCodeAt(i + 1) &&
                  ((e = t),
                  42 === s.charCodeAt(i + 1)
                    ? ((t = "*"), (i += 2))
                    : (t = c(1))),
                  o.push(
                    "*" === t
                      ? { type: C.Universal, namespace: e }
                      : { type: C.Tag, name: t, namespace: e }
                  );
              }
          }
        }
        d();
        return i;
      })(t, "" + e, 0);
    if (r < e.length) throw new Error("Unmatched selector: " + e.slice(r));
    return t;
  }
  var ar = e(t(), 1),
    sr = e(t(), 1),
    ir = new Map([
      [C.Universal, 50],
      [C.Tag, 30],
      [C.Attribute, 1],
      [C.Pseudo, 0],
    ]);
  function or(e) {
    return !ir.has(e.type);
  }
  var cr = new Map([
    [I.Exists, 10],
    [I.Equals, 8],
    [I.Not, 7],
    [I.Start, 6],
    [I.End, 6],
    [I.Any, 5],
  ]);
  function lr(r) {
    var n = r.map(hr);
    for (let t = 1; t < r.length; t++) {
      var a = n[t];
      if (!(a < 0))
        for (let e = t - 1; 0 <= e && a < n[e]; e--) {
          var s = r[e + 1];
          (r[e + 1] = r[e]), (r[e] = s), (n[e + 1] = n[e]), (n[e] = a);
        }
    }
  }
  function hr(e) {
    var t;
    let r = null != (t = ir.get(e.type)) ? t : -1;
    return (
      e.type === C.Attribute
        ? ((r = null != (t = cr.get(e.action)) ? t : 4),
          e.action === I.Equals && "id" === e.name && (r = 9),
          e.ignoreCase && (r >>= 1))
        : e.type === C.Pseudo &&
          (e.data
            ? "has" === e.name || "contains" === e.name
              ? (r = 0)
              : Array.isArray(e.data)
              ? (r = Math.min(...e.data.map((e) => Math.min(...e.map(hr))))) <
                  0 && (r = 0)
              : (r = 2)
            : (r = 3)),
      r
    );
  }
  var ur = e(t(), 1),
    dr = /[-[\]{}()*+?.,\\^$|#\s]/g;
  function Er(e) {
    return e.replace(dr, "\\$&");
  }
  var pr = new Set([
    "accept",
    "accept-charset",
    "align",
    "alink",
    "axis",
    "bgcolor",
    "charset",
    "checked",
    "clear",
    "codetype",
    "color",
    "compact",
    "declare",
    "defer",
    "dir",
    "direction",
    "disabled",
    "enctype",
    "face",
    "frame",
    "hreflang",
    "http-equiv",
    "lang",
    "language",
    "link",
    "media",
    "method",
    "multiple",
    "nohref",
    "noresize",
    "noshade",
    "nowrap",
    "readonly",
    "rel",
    "rev",
    "rules",
    "scope",
    "scrolling",
    "selected",
    "shape",
    "target",
    "text",
    "type",
    "valign",
    "valuetype",
    "vlink",
  ]);
  function Tr(e, t) {
    return "boolean" == typeof e.ignoreCase
      ? e.ignoreCase
      : "quirks" === e.ignoreCase
      ? t.quirksMode
      : !t.xmlMode && pr.has(e.name);
  }
  var mr = {
      equals(r, e, t) {
        const n = t["adapter"],
          a = e["name"];
        let s = e["value"];
        return Tr(e, t)
          ? ((s = s.toLowerCase()),
            (e) => {
              var t = n.getAttributeValue(e, a);
              return (
                null != t &&
                t.length === s.length &&
                t.toLowerCase() === s &&
                r(e)
              );
            })
          : (e) => n.getAttributeValue(e, a) === s && r(e);
      },
      hyphen(r, e, t) {
        const n = t["adapter"],
          a = e["name"];
        let s = e["value"];
        const i = s.length;
        return Tr(e, t)
          ? ((s = s.toLowerCase()),
            function (e) {
              var t = n.getAttributeValue(e, a);
              return (
                null != t &&
                (t.length === i || "-" === t.charAt(i)) &&
                t.substr(0, i).toLowerCase() === s &&
                r(e)
              );
            })
          : function (e) {
              var t = n.getAttributeValue(e, a);
              return (
                null != t &&
                (t.length === i || "-" === t.charAt(i)) &&
                t.substr(0, i) === s &&
                r(e)
              );
            };
      },
      element(r, e, t) {
        const n = t["adapter"],
          { name: a, value: s } = e;
        if (/\s/.test(s)) return ur.default.falseFunc;
        const i = new RegExp(`(?:^|\\s)${Er(s)}(?:$|\\s)`, Tr(e, t) ? "i" : "");
        return function (e) {
          var t = n.getAttributeValue(e, a);
          return null != t && t.length >= s.length && i.test(t) && r(e);
        };
      },
      exists(t, { name: r }, { adapter: n }) {
        return (e) => n.hasAttrib(e, r) && t(e);
      },
      start(r, e, t) {
        const n = t["adapter"],
          a = e["name"];
        let s = e["value"];
        const i = s.length;
        return 0 === i
          ? ur.default.falseFunc
          : Tr(e, t)
          ? ((s = s.toLowerCase()),
            (e) => {
              var t = n.getAttributeValue(e, a);
              return (
                null != t &&
                t.length >= i &&
                t.substr(0, i).toLowerCase() === s &&
                r(e)
              );
            })
          : (e) => {
              var t;
              return (
                !(
                  null == (t = n.getAttributeValue(e, a)) || !t.startsWith(s)
                ) && r(e)
              );
            };
      },
      end(r, e, t) {
        const n = t["adapter"],
          a = e["name"];
        let s = e["value"];
        const i = -s.length;
        return 0 == i
          ? ur.default.falseFunc
          : Tr(e, t)
          ? ((s = s.toLowerCase()),
            (e) => {
              var t;
              return (
                (null == (t = n.getAttributeValue(e, a))
                  ? void 0
                  : t.substr(i).toLowerCase()) === s && r(e)
              );
            })
          : (e) => {
              var t;
              return (
                !(null == (t = n.getAttributeValue(e, a)) || !t.endsWith(s)) &&
                r(e)
              );
            };
      },
      any(r, e, t) {
        const n = t["adapter"],
          { name: a, value: s } = e;
        if ("" === s) return ur.default.falseFunc;
        if (Tr(e, t)) {
          const i = new RegExp(Er(s), "i");
          return function (e) {
            var t = n.getAttributeValue(e, a);
            return null != t && t.length >= s.length && i.test(t) && r(e);
          };
        }
        return (e) => {
          var t;
          return (
            !(null == (t = n.getAttributeValue(e, a)) || !t.includes(s)) && r(e)
          );
        };
      },
      not(r, e, t) {
        const n = t["adapter"],
          a = e["name"];
        let s = e["value"];
        return "" === s
          ? (e) => !!n.getAttributeValue(e, a) && r(e)
          : Tr(e, t)
          ? ((s = s.toLowerCase()),
            (e) => {
              var t = n.getAttributeValue(e, a);
              return (
                (null == t || t.length !== s.length || t.toLowerCase() !== s) &&
                r(e)
              );
            })
          : (e) => n.getAttributeValue(e, a) !== s && r(e);
      },
    },
    fr = new Set([9, 10, 12, 13, 32]),
    Ar = "0".charCodeAt(0),
    _r = "9".charCodeAt(0);
  var gr = e(t(), 1);
  function Nr(e) {
    {
      var t = (e = (function (r) {
        if ("even" === (r = r.trim().toLowerCase())) return [2, 0];
        if ("odd" === r) return [2, 1];
        let n = 0,
          e = 0,
          t = s(),
          a = i();
        if (
          (n < r.length &&
            "n" === r.charAt(n) &&
            (n++,
            (e = t * (null !== a && void 0 !== a ? a : 1)),
            o(),
            n < r.length ? ((t = s()), o(), (a = i())) : (t = a = 0)),
          null === a || n < r.length)
        )
          throw new Error(`n-th rule couldn't be parsed ('${r}')`);
        return [e, t * a];
        function s() {
          return "-" === r.charAt(n)
            ? (n++, -1)
            : ("+" === r.charAt(n) && n++, 1);
        }
        function i() {
          var e = n;
          let t = 0;
          for (
            ;
            n < r.length && r.charCodeAt(n) >= Ar && r.charCodeAt(n) <= _r;

          )
            (t = 10 * t + (r.charCodeAt(n) - Ar)), n++;
          return n === e ? null : t;
        }
        function o() {
          for (; n < r.length && fr.has(r.charCodeAt(n)); ) n++;
        }
      })(e))[0];
      const r = e[1] - 1;
      if (r < 0 && t <= 0) return gr.default.falseFunc;
      if (-1 === t) return (e) => e <= r;
      if (0 === t) return (e) => e === r;
      if (1 === t) return r < 0 ? gr.default.trueFunc : (e) => e >= r;
      const n = Math.abs(t),
        a = ((r % n) + n) % n;
      return 1 < t ? (e) => e >= r && e % n == a : (e) => e <= r && e % n == a;
    }
  }
  var c = e(t(), 1);
  function Cr(r, n) {
    return (e) => {
      var t = n.getParent(e);
      return null != t && n.isTag(t) && r(e);
    };
  }
  var Ir = {
    contains(t, r, { adapter: n }) {
      return function (e) {
        return t(e) && n.getText(e).includes(r);
      };
    },
    icontains(t, e, { adapter: r }) {
      const n = e.toLowerCase();
      return function (e) {
        return t(e) && r.getText(e).toLowerCase().includes(n);
      };
    },
    "nth-child"(e, t, { adapter: a, equals: s }) {
      const i = Nr(t);
      return i === c.default.falseFunc
        ? c.default.falseFunc
        : i === c.default.trueFunc
        ? Cr(e, a)
        : function (t) {
            var r = a.getSiblings(t);
            let n = 0;
            for (let e = 0; e < r.length && !s(t, r[e]); e++)
              a.isTag(r[e]) && n++;
            return i(n) && e(t);
          };
    },
    "nth-last-child"(e, t, { adapter: a, equals: s }) {
      const i = Nr(t);
      return i === c.default.falseFunc
        ? c.default.falseFunc
        : i === c.default.trueFunc
        ? Cr(e, a)
        : function (t) {
            var r = a.getSiblings(t);
            let n = 0;
            for (let e = r.length - 1; 0 <= e && !s(t, r[e]); e--)
              a.isTag(r[e]) && n++;
            return i(n) && e(t);
          };
    },
    "nth-of-type"(e, t, { adapter: s, equals: i }) {
      const o = Nr(t);
      return o === c.default.falseFunc
        ? c.default.falseFunc
        : o === c.default.trueFunc
        ? Cr(e, s)
        : function (t) {
            var r = s.getSiblings(t);
            let n = 0;
            for (let e = 0; e < r.length; e++) {
              var a = r[e];
              if (i(t, a)) break;
              s.isTag(a) && s.getName(a) === s.getName(t) && n++;
            }
            return o(n) && e(t);
          };
    },
    "nth-last-of-type"(e, t, { adapter: s, equals: i }) {
      const o = Nr(t);
      return o === c.default.falseFunc
        ? c.default.falseFunc
        : o === c.default.trueFunc
        ? Cr(e, s)
        : function (t) {
            var r = s.getSiblings(t);
            let n = 0;
            for (let e = r.length - 1; 0 <= e; e--) {
              var a = r[e];
              if (i(t, a)) break;
              s.isTag(a) && s.getName(a) === s.getName(t) && n++;
            }
            return o(n) && e(t);
          };
    },
    root(r, e, { adapter: n }) {
      return (e) => {
        var t = n.getParent(e);
        return (null == t || !n.isTag(t)) && r(e);
      };
    },
    scope(t, e, r, n) {
      const a = r["equals"];
      return n && 0 !== n.length
        ? 1 === n.length
          ? (e) => a(n[0], e) && t(e)
          : (e) => n.includes(e) && t(e)
        : Ir.root(t, e, r);
    },
    hover: Sr("isHovered"),
    visited: Sr("isVisited"),
    active: Sr("isActive"),
  };
  function Sr(a) {
    return function (t, e, { adapter: r }) {
      const n = r[a];
      return "function" != typeof n
        ? c.default.falseFunc
        : function (e) {
            return n(e) && t(e);
          };
    };
  }
  var br = {
    empty(e, { adapter: t }) {
      return !t.getChildren(e).some((e) => t.isTag(e) || "" !== t.getText(e));
    },
    "first-child"(e, { adapter: t, equals: r }) {
      var n;
      return t.prevElementSibling
        ? null == t.prevElementSibling(e)
        : null != (n = t.getSiblings(e).find((e) => t.isTag(e))) && r(e, n);
    },
    "last-child"(t, { adapter: r, equals: n }) {
      var a = r.getSiblings(t);
      for (let e = a.length - 1; 0 <= e; e--) {
        if (n(t, a[e])) return !0;
        if (r.isTag(a[e])) break;
      }
      return !1;
    },
    "first-of-type"(t, { adapter: r, equals: n }) {
      var a = r.getSiblings(t),
        s = r.getName(t);
      for (let e = 0; e < a.length; e++) {
        var i = a[e];
        if (n(t, i)) return !0;
        if (r.isTag(i) && r.getName(i) === s) break;
      }
      return !1;
    },
    "last-of-type"(t, { adapter: r, equals: n }) {
      var a = r.getSiblings(t),
        s = r.getName(t);
      for (let e = a.length - 1; 0 <= e; e--) {
        var i = a[e];
        if (n(t, i)) return !0;
        if (r.isTag(i) && r.getName(i) === s) break;
      }
      return !1;
    },
    "only-of-type"(t, { adapter: r, equals: n }) {
      const a = r.getName(t);
      return r
        .getSiblings(t)
        .every((e) => n(t, e) || !r.isTag(e) || r.getName(e) !== a);
    },
    "only-child"(t, { adapter: r, equals: n }) {
      return r.getSiblings(t).every((e) => n(t, e) || !r.isTag(e));
    },
  };
  function Rr(e, t, r, n) {
    if (null === r) {
      if (e.length > n)
        throw new Error(`Pseudo-class :${t} requires an argument`);
    } else if (e.length === n)
      throw new Error(`Pseudo-class :${t} doesn't have any arguments`);
  }
  var Dr = {
      "any-link": ":is(a, area, link)[href]",
      link: ":any-link:not(:visited)",
      disabled: `:is(
        :is(button, input, select, textarea, optgroup, option)[disabled],
        optgroup[disabled] > option,
        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)
    )`,
      enabled: ":not(:disabled)",
      checked:
        ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)",
      required: ":is(input, select, textarea)[required]",
      optional: ":is(input, select, textarea):not([required])",
      selected:
        "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)",
      checkbox: "[type=checkbox]",
      file: "[type=file]",
      password: "[type=password]",
      radio: "[type=radio]",
      reset: "[type=reset]",
      image: "[type=image]",
      submit: "[type=submit]",
      parent: ":not(:empty)",
      header: ":is(h1, h2, h3, h4, h5, h6)",
      button: ":is(button, input[type=button])",
      input: ":is(input, textarea, select, button)",
      text: "input:is(:not([type!='']), [type=text])",
    },
    Or = e(t(), 1),
    Lr = {};
  function yr(t, r) {
    return t === Or.default.falseFunc
      ? Or.default.falseFunc
      : (e) => r.isTag(e) && t(e);
  }
  function kr(e, t) {
    var r = t.getSiblings(e);
    return r.length <= 1 || (e = r.indexOf(e)) < 0 || e === r.length - 1
      ? []
      : r.slice(e + 1).filter(t.isTag);
  }
  function vr(e) {
    return {
      xmlMode: !!e.xmlMode,
      lowerCaseAttributeNames: !!e.lowerCaseAttributeNames,
      lowerCaseTags: !!e.lowerCaseTags,
      quirksMode: !!e.quirksMode,
      cacheResults: !!e.cacheResults,
      pseudos: e.pseudos,
      adapter: e.adapter,
      equals: e.equals,
    };
  }
  var p = (t, e, r, n, a) => {
      const s = a(e, vr(r), n);
      return s === Or.default.trueFunc
        ? t
        : s === Or.default.falseFunc
        ? Or.default.falseFunc
        : (e) => s(e) && t(e);
    },
    Mr = {
      is: p,
      matches: p,
      where: p,
      not(t, e, r, n, a) {
        const s = a(e, vr(r), n);
        return s === Or.default.falseFunc
          ? t
          : s === Or.default.trueFunc
          ? Or.default.falseFunc
          : (e) => !s(e) && t(e);
      },
      has(r, e, t, n, a) {
        const s = t["adapter"];
        t = vr(t);
        t.relativeSelector = !0;
        const i = e.some((e) => e.some(or)) ? [Lr] : void 0;
        a = a(e, t, i);
        if (a === Or.default.falseFunc) return Or.default.falseFunc;
        const o = yr(a, s);
        if (i && a !== Or.default.trueFunc) {
          const { shouldTestNextSiblings: c = !1 } = a;
          return (e) => {
            if (!r(e)) return !1;
            i[0] = e;
            var t = s.getChildren(e),
              e = c ? [...t, ...kr(e, s)] : t;
            return s.existsOne(o, e);
          };
        }
        return (e) => r(e) && s.existsOne(o, s.getChildren(e));
      },
    };
  function Pr(e, t) {
    e = t.getParent(e);
    return e && t.isTag(e) ? e : null;
  }
  function wr(s, e, r, t, n) {
    const { adapter: i, equals: o } = r;
    switch (e.type) {
      case C.PseudoElement:
        throw new Error("Pseudo-elements are not supported by css-select");
      case C.ColumnCombinator:
        throw new Error(
          "Column combinators are not yet supported by css-select"
        );
      case C.Attribute:
        if (null != e.namespace)
          throw new Error(
            "Namespaced attributes are not yet supported by css-select"
          );
        return (
          (r.xmlMode && !r.lowerCaseAttributeNames) ||
            (e.name = e.name.toLowerCase()),
          mr[e.action](s, e, r)
        );
      case C.Pseudo: {
        var a = s;
        var c = e;
        var l = r;
        var h = t;
        var u = n;
        const { name: d, data: E } = c;
        if (Array.isArray(E)) {
          if (d in Mr) return Mr[d](a, E, l, h, u);
          throw new Error(`Unknown pseudo-class :${d}(${E})`);
        }
        const p = null == (c = l.pseudos) ? void 0 : c[d];
        if ("string" == typeof (c = "string" == typeof p ? p : Dr[d])) {
          if (null != E)
            throw new Error(`Pseudo ${d} doesn't have any arguments`);
          c = nr(c);
          return Mr.is(a, c, l, h, u);
        }
        if ("function" == typeof p)
          return Rr(p, d, E, 1), (e) => p(e, E) && a(e);
        if (d in Ir) return Ir[d](a, E, l, h);
        if (d in br) {
          const T = br[d];
          return Rr(T, d, E, 2), (e) => T(e, l, E) && a(e);
        }
        throw new Error("Unknown pseudo-class :" + d);
        return;
      }
      case C.Tag: {
        if (null != e.namespace)
          throw new Error(
            "Namespaced tag names are not yet supported by css-select"
          );
        let t = e["name"];
        return (
          (r.xmlMode && !r.lowerCaseTags) || (t = t.toLowerCase()),
          function (e) {
            return i.getName(e) === t && s(e);
          }
        );
      }
      case C.Descendant: {
        if (!1 === r.cacheResults || "undefined" == typeof WeakSet)
          return function (e) {
            let t = e;
            for (; (t = Pr(t, i)); ) if (s(t)) return !0;
            return !1;
          };
        const m = new WeakSet();
        return function (e) {
          let t = e;
          for (; (t = Pr(t, i)); )
            if (!m.has(t)) {
              if (i.isTag(t) && s(t)) return !0;
              m.add(t);
            }
          return !1;
        };
      }
      case "_flexibleDescendant":
        return function (e) {
          let t = e;
          do {
            if (s(t)) return !0;
          } while ((t = Pr(t, i)));
          return !1;
        };
      case C.Parent:
        return function (e) {
          return i.getChildren(e).some((e) => i.isTag(e) && s(e));
        };
      case C.Child:
        return function (e) {
          e = i.getParent(e);
          return null != e && i.isTag(e) && s(e);
        };
      case C.Sibling:
        return function (t) {
          var r = i.getSiblings(t);
          for (let e = 0; e < r.length; e++) {
            var n = r[e];
            if (o(t, n)) break;
            if (i.isTag(n) && s(n)) return !0;
          }
          return !1;
        };
      case C.Adjacent:
        return i.prevElementSibling
          ? function (e) {
              e = i.prevElementSibling(e);
              return null != e && s(e);
            }
          : function (t) {
              var r = i.getSiblings(t);
              let n;
              for (let e = 0; e < r.length; e++) {
                var a = r[e];
                if (o(t, a)) break;
                i.isTag(a) && (n = a);
              }
              return !!n && s(n);
            };
      case C.Universal:
        if (null != e.namespace && "*" !== e.namespace)
          throw new Error(
            "Namespaced universal selectors are not yet supported by css-select"
          );
        return s;
    }
  }
  function Br(e, t, r) {
    return Gr("string" == typeof e ? nr(e) : e, t, r);
  }
  function xr(e) {
    return (
      e.type === C.Pseudo &&
      ("scope" === e.name ||
        (Array.isArray(e.data) && e.data.some((e) => e.some(xr))))
    );
  }
  var Fr = { type: C.Descendant },
    Ur = { type: "_flexibleDescendant" },
    Hr = { type: C.Pseudo, name: "scope", data: null };
  function Gr(e, s, t) {
    e.forEach(lr), (t = null != (r = s.context) ? r : t);
    const i = Array.isArray(t),
      o = t && (Array.isArray(t) ? t : [t]);
    if (!1 !== s.relativeSelector) {
      var [r, n, t] = [e, s["adapter"], o],
        a = !(
          null == t ||
          !t.every((e) => {
            var t = n.isTag(e) && n.getParent(e);
            return e === Lr || (t && n.isTag(t));
          })
        );
      for (const l of r) {
        if (!(0 < l.length && or(l[0]) && l[0].type !== C.Descendant)) {
          if (!a || l.some(xr)) continue;
          l.unshift(Fr);
        }
        l.unshift(Hr);
      }
    } else if (e.some((e) => 0 < e.length && or(e[0])))
      throw new Error(
        "Relative selectors are not allowed when the `relativeSelector` option is disabled"
      );
    let c = !1;
    t = e
      .map((e) => {
        var t, r, n, a;
        return (
          2 <= e.length &&
            (([r, t] = e), r.type === C.Pseudo) &&
            "scope" === r.name &&
            (i && t.type === C.Descendant
              ? (e[1] = Ur)
              : (t.type !== C.Adjacent && t.type !== C.Sibling) || (c = !0)),
          (r = e),
          (n = s),
          (a = o),
          r.reduce(
            (e, t) =>
              e === sr.default.falseFunc
                ? sr.default.falseFunc
                : wr(e, t, n, a, Gr),
            null != (r = n.rootFunc) ? r : sr.default.trueFunc
          )
        );
      })
      .reduce(qr, sr.default.falseFunc);
    return (t.shouldTestNextSiblings = c), t;
  }
  function qr(t, r) {
    return r === sr.default.falseFunc || t === sr.default.trueFunc
      ? t
      : t === sr.default.falseFunc || r === sr.default.trueFunc
      ? r
      : function (e) {
          return t(e) || r(e);
        };
  }
  var Yr = (e, t) => e === t,
    Vr = { adapter: K, equals: Yr };
  function Qr(e) {
    var t,
      e = null != e ? e : Vr;
    return (
      null == e.adapter && (e.adapter = K),
      null == e.equals &&
        (e.equals =
          null != (t = null == (t = e.adapter) ? void 0 : t.equals) ? t : Yr),
      e
    );
  }
  function jr(n) {
    return function (e, t, r) {
      t = Qr(t);
      return n(e, t, r);
    };
  }
  jr(function (e, t, r) {
    return yr(Br(e, t, r), t.adapter);
  }),
    jr(Br);
  var Wr = jr(Gr);
  function Xr(n) {
    return function (e, t, r) {
      (r = Qr(r)),
        "function" != typeof e && (e = Br(e, r, t)),
        (t = Kr(t, r.adapter, e.shouldTestNextSiblings));
      return n(e, t, r);
    };
  }
  function Kr(e, t, r = !1) {
    return (
      r &&
        (e = (function (e, t) {
          var r = Array.isArray(e) ? e.slice(0) : [e],
            n = r.length;
          for (let e = 0; e < n; e++) {
            var a = kr(r[e], t);
            r.push(...a);
          }
          return r;
        })(e, t)),
      Array.isArray(e) ? t.removeSubsets(e) : t.getChildren(e)
    );
  }
  Xr((e, t, r) =>
    e !== ar.default.falseFunc && t && 0 !== t.length
      ? r.adapter.findAll(e, t)
      : []
  ),
    Xr((e, t, r) =>
      e !== ar.default.falseFunc && t && 0 !== t.length
        ? r.adapter.findOne(e, t)
        : null
    );
  var zr = e(t(), 1),
    $r = new Set(["first", "last", "eq", "gt", "nth", "lt", "even", "odd"]);
  function Jr(e) {
    return (
      "pseudo" === e.type &&
      (!!$r.has(e.name) ||
        (!("not" !== e.name || !Array.isArray(e.data)) &&
          e.data.some((e) => e.some(Jr))))
    );
  }
  function Zr(e) {
    var t = [],
      r = [];
    for (const n of e) (n.some(Jr) ? t : r).push(n);
    return [r, t];
  }
  var en = { type: C.Universal, namespace: null },
    tn = { type: C.Pseudo, name: "scope", data: null };
  function rn(e, t, r = {}) {
    return nn([e], t, r);
  }
  function nn(t, e, r = {}) {
    var n;
    return "function" == typeof e
      ? t.some(e)
      : (([e, n] = Zr(nr(e))),
        (0 < e.length && t.some(Wr(e, r))) ||
          n.some((e) => 0 < on(e, t, r).length));
  }
  function an(e, t, r = {}) {
    return sn(nr(e), t, r);
  }
  function sn(e, t, r) {
    if (0 === t.length) return [];
    var [e, n] = Zr(e);
    let a;
    if (e.length) {
      e = un(t, e, r);
      if (0 === n.length) return e;
      e.length && (a = new Set(e));
    }
    for (
      let e = 0;
      e < n.length &&
      (null === a || void 0 === a ? void 0 : a.size) !== t.length;
      e++
    ) {
      var s = n[e];
      if (0 === (a ? t.filter((e) => h(e) && !a.has(e)) : t).length) break;
      s = on(s, t, r);
      if (s.length)
        if (a) s.forEach((e) => a.add(e));
        else {
          if (e === n.length - 1) return s;
          a = new Set(s);
        }
    }
    return void 0 !== a
      ? a.size === t.length
        ? t
        : t.filter((e) => a.has(e))
      : [];
  }
  function on(e, t, r) {
    var n, a;
    return e.some($t)
      ? ((n =
          null != (n = r.root)
            ? n
            : (function (e) {
                for (; e.parent; ) e = e.parent;
                return e;
              })(t[0])),
        (a = { ...r, context: t, relativeSelector: !1 }),
        e.push(tn),
        cn(n, e, a, !0, t.length))
      : cn(t, e, r, !1, t.length);
  }
  function cn(e, t, r, n, a) {
    var s = t.findIndex(Jr),
      i = t.slice(0, s),
      o = t[s],
      c = t.length - 1 === s ? a : 1 / 0,
      c = (function (e, t, r) {
        var n = null != t ? parseInt(t, 10) : NaN;
        switch (e) {
          case "first":
            return 1;
          case "nth":
          case "eq":
            return isFinite(n) ? (0 <= n ? n + 1 : 1 / 0) : 0;
          case "lt":
            return isFinite(n) ? (0 <= n ? Math.min(n, r) : 1 / 0) : 0;
          case "gt":
            return isFinite(n) ? 1 / 0 : 0;
          case "odd":
            return 2 * r;
          case "even":
            return 2 * r - 1;
          case "last":
          case "not":
            return 1 / 0;
        }
      })(o.name, o.data, c);
    if (0 === c) return [];
    n = (
      0 !== i.length || Array.isArray(e)
        ? 0 === i.length
          ? (Array.isArray(e) ? e : [e]).filter(h)
          : n || i.some($t)
          ? ln(e, [i], r, c)
          : un(e, [i], r)
        : Ze(e).filter(h)
    ).slice(0, c);
    let l = (function (e, t, r, n) {
      var a = "string" == typeof r ? parseInt(r, 10) : NaN;
      switch (e) {
        case "first":
        case "lt":
          return t;
        case "last":
          return 0 < t.length ? [t[t.length - 1]] : t;
        case "nth":
        case "eq":
          return isFinite(a) && Math.abs(a) < t.length
            ? [a < 0 ? t[t.length + a] : t[a]]
            : [];
        case "gt":
          return isFinite(a) ? t.slice(a + 1) : [];
        case "even":
          return t.filter((e, t) => t % 2 == 0);
        case "odd":
          return t.filter((e, t) => t % 2 == 1);
        case "not": {
          const s = new Set(sn(r, t, n));
          return t.filter((e) => !s.has(e));
        }
      }
    })(o.name, n, o.data, r);
    return 0 === l.length || t.length === s + 1
      ? l
      : ((e = (i = t.slice(s + 1)).some($t))
          ? ($t(i[0]) &&
              ((c = i[0]["type"]),
              (c !== C.Sibling && c !== C.Adjacent) || (l = Kr(l, K, !0)),
              i.unshift(en)),
            (r = {
              ...r,
              relativeSelector: !1,
              rootFunc: (e) => l.includes(e),
            }))
          : r.rootFunc &&
            r.rootFunc !== zr.trueFunc &&
            (r = { ...r, rootFunc: zr.trueFunc }),
        i.some(Jr) ? cn(l, i, r, !1, a) : e ? ln(l, [i], r, a) : un(l, [i], r));
  }
  function ln(e, t, r, n) {
    return hn(e, Wr(t, r, e), n);
  }
  function hn(e, t, r = 1 / 0) {
    return it((e) => h(e) && t(e), Kr(e, K, t.shouldTestNextSiblings), !0, r);
  }
  function un(e, t, r) {
    e = (Array.isArray(e) ? e : [e]).filter(h);
    return 0 === e.length || (t = Wr(t, r)) === zr.trueFunc ? e : e.filter(t);
  }
  var dn = /^\s*[~+]/;
  function En(a) {
    return function (r, ...n) {
      return function (e) {
        let t = a(r, this);
        return (
          e &&
            (t = On(
              t,
              e,
              this.options.xmlMode,
              null == (e = this._root) ? void 0 : e[0]
            )),
          this._make(
            1 < this.length && 1 < t.length ? n.reduce((e, t) => t(e), t) : t
          )
        );
      };
    };
  }
  (p = En((t, r) => {
    var n = [];
    for (let e = 0; e < r.length; e++) {
      var a = t(r[e]);
      n.push(a);
    }
    return new Array().concat(...n);
  })),
    (e = En((t, r) => {
      var n = [];
      for (let e = 0; e < r.length; e++) {
        var a = t(r[e]);
        null !== a && n.push(a);
      }
      return n;
    }));
  function pn(e, ...t) {
    let a = null;
    const r = En((r, e) => {
      const n = [];
      return (
        E(e, (t) => {
          for (
            let e;
            (e = r(t)) && (null === a || void 0 === a || !a(e, n.length));
            t = e
          )
            n.push(e);
        }),
        n
      );
    })(e, ...t);
    return function (t, e) {
      a =
        "string" == typeof t ? (e) => rn(e, t, this.options) : t ? Dn(t) : null;
      e = r.call(this, e);
      return (a = null), e;
    };
  }
  function Tn(e) {
    return Array.from(new Set(e));
  }
  var mn = e(({ parent: e }) => (e && !Te(e) ? e : null), Tn),
    fn = p(
      (e) => {
        for (var t = []; e.parent && !Te(e.parent); )
          t.push(e.parent), (e = e.parent);
        return t;
      },
      pt,
      (e) => e.reverse()
    ),
    An = pn(
      ({ parent: e }) => (e && !Te(e) ? e : null),
      pt,
      (e) => e.reverse()
    );
  var _n = e((e) => rt(e)),
    gn = p((e) => {
      for (var t = []; e.next; ) h((e = e.next)) && t.push(e);
      return t;
    }, Tn),
    Nn = pn((e) => rt(e), Tn),
    Cn = e((e) => nt(e)),
    In = p((e) => {
      for (var t = []; e.prev; ) h((e = e.prev)) && t.push(e);
      return t;
    }, Tn),
    Sn = pn((e) => nt(e), Tn),
    bn = p((t) => tt(t).filter((e) => h(e) && e !== t), pt),
    Rn = p((e) => Ze(e).filter(h), Tn);
  function Dn(r) {
    return "function" == typeof r
      ? (e, t) => r.call(e, t, e)
      : Dt(r)
      ? (e) => Array.prototype.includes.call(r, e)
      : function (e) {
          return r === e;
        };
  }
  function On(e, t, r, n) {
    return "string" == typeof t
      ? an(t, e, { xmlMode: r, root: n })
      : e.filter(Dn(t));
  }
  t = {};
  function Ln(e, t) {
    var r = Array.isArray(e) ? e : [e];
    t ? (t.children = r) : (t = null);
    for (let e = 0; e < r.length; e++) {
      var n = r[e];
      n.parent && n.parent.children !== r && at(n),
        t
          ? ((n.prev = r[e - 1] || null), (n.next = r[e + 1] || null))
          : (n.prev = n.next = null),
        (n.parent = t);
    }
  }
  function yn(s) {
    return function (...n) {
      const a = this.length - 1;
      return E(this, (e, t) => {
        var r;
        u(e) &&
          ((r =
            "function" == typeof n[0]
              ? n[0].call(e, t, this._render(e.children))
              : n),
          (r = this._makeDomArray(r, t < a)),
          s(r, e.children, e));
      });
    };
  }
  function kn(e, t, r, n, a) {
    var s = [t, r, ...n],
      i = 0 === t ? null : e[t - 1],
      o = t + r >= e.length ? null : e[t + r];
    for (let e = 0; e < n.length; ++e) {
      var c,
        l = n[e],
        h = l.parent;
      h &&
        -1 < (c = h.children.indexOf(l)) &&
        (h.children.splice(c, 1), a === h) &&
        c < t &&
        s[0]--,
        (l.parent = a),
        l.prev && (l.prev.next = null != (h = l.next) ? h : null),
        l.next && (l.next.prev = null != (c = l.prev) ? c : null),
        (l.prev = 0 === e ? i : n[e - 1]),
        (l.next = e === n.length - 1 ? o : n[e + 1]);
    }
    i && (i.next = n[0]), o && (o.prev = n[n.length - 1]), e.splice(...s);
  }
  V(t, {
    _makeDomArray: () =>
      function (e, r) {
        if (null == e) return [];
        if (Dt(e)) return r ? Ot(e.get()) : e.get();
        if (Array.isArray(e))
          return e.reduce((e, t) => e.concat(this._makeDomArray(t, r)), []);
        return "string" != typeof e
          ? r
            ? Ot([e])
            : [e]
          : this._parse(e, this.options, !1, null).children;
      },
    after: () =>
      function (...s) {
        const i = this.length - 1;
        return E(this, (e, t) => {
          var r,
            n,
            a = e["parent"];
          u(e) &&
            a &&
            ((n = (r = a.children).indexOf(e)) < 0 ||
              ((e =
                "function" == typeof s[0]
                  ? s[0].call(e, t, this._render(e.children))
                  : s),
              kn(r, n + 1, 0, this._makeDomArray(e, t < i), a)));
        });
      },
    append: () => vn,
    appendTo: () =>
      function (e) {
        e = Dt(e) ? e : this._make(e);
        return e.append(this), this;
      },
    before: () =>
      function (...s) {
        const i = this.length - 1;
        return E(this, (e, t) => {
          var r,
            n,
            a = e["parent"];
          u(e) &&
            a &&
            ((n = (r = a.children).indexOf(e)) < 0 ||
              ((e =
                "function" == typeof s[0]
                  ? s[0].call(e, t, this._render(e.children))
                  : s),
              kn(r, n, 0, this._makeDomArray(e, t < i), a)));
        });
      },
    clone: () =>
      function () {
        return this._make(Ot(this.get()));
      },
    empty: () =>
      function () {
        return E(this, (e) => {
          u(e) &&
            (e.children.forEach((e) => {
              e.next = e.prev = e.parent = null;
            }),
            (e.children.length = 0));
        });
      },
    html: () =>
      function (t) {
        if (void 0 !== t)
          return E(this, (e) => {
            u(e) &&
              (e.children.forEach((e) => {
                e.next = e.prev = e.parent = null;
              }),
              Ln(
                Dt(t)
                  ? t.toArray()
                  : this._parse("" + t, this.options, !1, e).children,
                e
              ));
          });
        {
          var e = this[0];
          return e && u(e) ? this._render(e.children) : null;
        }
      },
    insertAfter: () =>
      function (e) {
        "string" == typeof e && (e = this._make(e));
        this.remove();
        const a = [];
        return (
          this._makeDomArray(e).forEach((e) => {
            var t,
              r = this.clone().toArray(),
              n = e["parent"];
            !n ||
              (e = (t = n.children).indexOf(e)) < 0 ||
              (kn(t, e + 1, 0, r, n), a.push(...r));
          }),
          this._make(a)
        );
      },
    insertBefore: () =>
      function (e) {
        const t = this._make(e),
          a = (this.remove(), []);
        return (
          E(t, (e) => {
            var t,
              r = this.clone().toArray(),
              n = e["parent"];
            !n ||
              (e = (t = n.children).indexOf(e)) < 0 ||
              (kn(t, e, 0, r, n), a.push(...r));
          }),
          this._make(a)
        );
      },
    prepend: () => Mn,
    prependTo: () =>
      function (e) {
        e = Dt(e) ? e : this._make(e);
        return e.prepend(this), this;
      },
    remove: () =>
      function (e) {
        e = e ? this.filter(e) : this;
        return (
          E(e, (e) => {
            at(e), (e.prev = e.next = e.parent = null);
          }),
          this
        );
      },
    replaceWith: () =>
      function (s) {
        return E(this, (e, t) => {
          var r,
            n,
            a = e["parent"];
          a &&
            ((r = a.children),
            (t = "function" == typeof s ? s.call(e, t, e) : s),
            Ln((t = this._makeDomArray(t)), null),
            (n = r.indexOf(e)),
            kn(r, n, 1, t, a),
            t.includes(e) || (e.parent = e.prev = e.next = null));
        });
      },
    text: () =>
      function (r) {
        return void 0 !== r
          ? E(
              this,
              "function" != typeof r
                ? (e) => {
                    u(e) &&
                      (e.children.forEach((e) => {
                        e.next = e.prev = e.parent = null;
                      }),
                      Ln(new se("" + r), e));
                  }
                : (e, t) => this._make(e).text(r.call(e, t, Ct([e])))
            )
          : Ct(this);
      },
    toString: () =>
      function () {
        return this._render(this);
      },
    unwrap: () =>
      function (e) {
        return (
          this.parent(e)
            .not("body")
            .each((e, t) => {
              this._make(t).replaceWith(t.children);
            }),
          this
        );
      },
    wrap: () => wn,
    wrapAll: () =>
      function (r) {
        var n = this[0];
        if (n) {
          var a = this._make(
            "function" == typeof r ? r.call(n, 0, n) : r
          ).insertBefore(n);
          let t;
          for (let e = 0; e < a.length; e++) "tag" === a[e].type && (t = a[e]);
          let e = 0;
          for (; t && e < t.children.length; ) {
            var s = t.children[e];
            "tag" === s.type ? ((t = s), (e = 0)) : e++;
          }
          t && this._make(t).append(this);
        }
        return this;
      },
    wrapInner: () => Bn,
  });
  var vn = yn((e, t, r) => {
      kn(t, t.length, 0, e, r);
    }),
    Mn = yn((e, t, r) => {
      kn(t, 0, 0, e, r);
    });
  function Pn(o) {
    return function (t) {
      var r = this.length - 1,
        n = this.parents().last();
      for (let e = 0; e < this.length; e++) {
        var a = this[e],
          s =
            "function" == typeof t
              ? t.call(a, e, a)
              : "string" != typeof t || Lt(t)
              ? t
              : n.find(t).clone(),
          [s] = this._makeDomArray(s, e < r);
        if (s && u(s)) {
          let e = s,
            t = 0;
          for (; t < e.children.length; ) {
            var i = e.children[t];
            h(i) ? ((e = i), (t = 0)) : t++;
          }
          o(a, e, [s]);
        }
      }
      return this;
    };
  }
  var wn = Pn((e, t, r) => {
      var n,
        a,
        s = e["parent"];
      s && ((a = (n = s.children).indexOf(e)), Ln([e], t), kn(n, a, 0, r, s));
    }),
    Bn = Pn((e, t, r) => {
      u(e) && (Ln(e.children, t), Ln(r, e));
    });
  e = {};
  function xn(e, t) {
    if (e && h(e)) {
      const r = (function (e) {
        if (!(e = (e || "").trim())) return {};
        var t = {};
        let r;
        for (const s of e.split(";")) {
          var n,
            a = s.indexOf(":");
          a < 1 || a === s.length - 1
            ? 0 < (n = s.trimEnd()).length && void 0 !== r && (t[r] += ";" + n)
            : ((r = s.slice(0, a).trim()), (t[r] = s.slice(a + 1).trim()));
        }
        return t;
      })(e.attribs.style);
      if ("string" == typeof t) return r[t];
      if (Array.isArray(t)) {
        const n = {};
        return (
          t.forEach((e) => {
            null != r[e] && (n[e] = r[e]);
          }),
          n
        );
      }
      return r;
    }
  }
  function Fn(r) {
    return Object.keys(r).reduce(
      (e, t) => e + (e ? " " : "") + t + `: ${r[t]};`,
      ""
    );
  }
  V(e, {
    css: () =>
      function (r, n) {
        if (
          (null != r && null != n) ||
          ("object" == typeof r && !Array.isArray(r))
        )
          return E(this, (e, t) => {
            h(e) &&
              !(function r(n, a, e, t) {
                if ("string" == typeof a) {
                  const s = xn(n),
                    i = "function" == typeof e ? e.call(n, t, s[a]) : e;
                  "" === i ? delete s[a] : null != i && (s[a] = i),
                    (n.attribs.style = Fn(s));
                } else
                  "object" == typeof a &&
                    Object.keys(a).forEach((e, t) => {
                      r(n, e, a[e], t);
                    });
              })(e, r, n, t);
          });
        if (0 !== this.length) return xn(this[0], r);
      },
  });
  var p = {},
    Un =
      (V(p, {
        serialize: () =>
          function () {
            var e = this.serializeArray(),
              e = e.map(
                (e) =>
                  encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value)
              );
            return e.join("&").replace(Hn, "+");
          },
        serializeArray: () =>
          function () {
            return this.map((e, t) => {
              var r = this._make(t);
              return (
                h(t) && "form" === t.name ? r.find(Un) : r.filter(Un)
              ).toArray();
            })
              .filter(
                '[name!=""]:enabled:not(:submit, :button, :image, :reset, :file):matches([checked], :not(:checkbox, :radio))'
              )
              .map((e, t) => {
                var t = this._make(t);
                const r = t.attr("name");
                t = null != (t = t.val()) ? t : "";
                return Array.isArray(t)
                  ? t.map((e) => ({ name: r, value: e.replace(Gn, "\r\n") }))
                  : { name: r, value: t.replace(Gn, "\r\n") };
              })
              .toArray();
          },
      }),
      "input,select,textarea,keygen"),
    Hn = /%20/g,
    Gn = /\r?\n/g;
  var qn = class {
    constructor(t, e, r) {
      if (((this.length = 0), (this.options = r), (this._root = e), t)) {
        for (let e = 0; e < t.length; e++) this[e] = t[e];
        this.length = t.length;
      }
    }
  };
  (qn.prototype.cheerio = "[cheerio object]"),
    (qn.prototype.splice = Array.prototype.splice),
    (qn.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator]),
    Object.assign(qn.prototype, r, n, t, e, p);
  var T,
    Yn = new Set([
      65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678,
      327679, 393214, 393215, 458750, 458751, 524286, 524287, 589822, 589823,
      655358, 655359, 720894, 720895, 786430, 786431, 851966, 851967, 917502,
      917503, 983038, 983039, 1048574, 1048575, 1114110, 1114111,
    ]),
    m = "�";
  ((r = T = T || {})[(r.EOF = -1)] = "EOF"),
    (r[(r.NULL = 0)] = "NULL"),
    (r[(r.TABULATION = 9)] = "TABULATION"),
    (r[(r.CARRIAGE_RETURN = 13)] = "CARRIAGE_RETURN"),
    (r[(r.LINE_FEED = 10)] = "LINE_FEED"),
    (r[(r.FORM_FEED = 12)] = "FORM_FEED"),
    (r[(r.SPACE = 32)] = "SPACE"),
    (r[(r.EXCLAMATION_MARK = 33)] = "EXCLAMATION_MARK"),
    (r[(r.QUOTATION_MARK = 34)] = "QUOTATION_MARK"),
    (r[(r.NUMBER_SIGN = 35)] = "NUMBER_SIGN"),
    (r[(r.AMPERSAND = 38)] = "AMPERSAND"),
    (r[(r.APOSTROPHE = 39)] = "APOSTROPHE"),
    (r[(r.HYPHEN_MINUS = 45)] = "HYPHEN_MINUS"),
    (r[(r.SOLIDUS = 47)] = "SOLIDUS"),
    (r[(r.DIGIT_0 = 48)] = "DIGIT_0"),
    (r[(r.DIGIT_9 = 57)] = "DIGIT_9"),
    (r[(r.SEMICOLON = 59)] = "SEMICOLON"),
    (r[(r.LESS_THAN_SIGN = 60)] = "LESS_THAN_SIGN"),
    (r[(r.EQUALS_SIGN = 61)] = "EQUALS_SIGN"),
    (r[(r.GREATER_THAN_SIGN = 62)] = "GREATER_THAN_SIGN"),
    (r[(r.QUESTION_MARK = 63)] = "QUESTION_MARK"),
    (r[(r.LATIN_CAPITAL_A = 65)] = "LATIN_CAPITAL_A"),
    (r[(r.LATIN_CAPITAL_F = 70)] = "LATIN_CAPITAL_F"),
    (r[(r.LATIN_CAPITAL_X = 88)] = "LATIN_CAPITAL_X"),
    (r[(r.LATIN_CAPITAL_Z = 90)] = "LATIN_CAPITAL_Z"),
    (r[(r.RIGHT_SQUARE_BRACKET = 93)] = "RIGHT_SQUARE_BRACKET"),
    (r[(r.GRAVE_ACCENT = 96)] = "GRAVE_ACCENT"),
    (r[(r.LATIN_SMALL_A = 97)] = "LATIN_SMALL_A"),
    (r[(r.LATIN_SMALL_F = 102)] = "LATIN_SMALL_F"),
    (r[(r.LATIN_SMALL_X = 120)] = "LATIN_SMALL_X"),
    (r[(r.LATIN_SMALL_Z = 122)] = "LATIN_SMALL_Z"),
    (r[(r.REPLACEMENT_CHARACTER = 65533)] = "REPLACEMENT_CHARACTER");
  var f,
    Vn = "--",
    Qn = "[CDATA[",
    jn = "doctype",
    Wn = "script",
    Xn = "public",
    Kn = "system";
  function zn(e) {
    return 55296 <= e && e <= 57343;
  }
  function $n(e) {
    return 56320 <= e && e <= 57343;
  }
  function Jn(e, t) {
    return 1024 * (e - 55296) + 9216 + t;
  }
  function Zn(e) {
    return (
      (32 !== e &&
        10 !== e &&
        13 !== e &&
        9 !== e &&
        12 !== e &&
        1 <= e &&
        e <= 31) ||
      (127 <= e && e <= 159)
    );
  }
  function ea(e) {
    return (64976 <= e && e <= 65007) || Yn.has(e);
  }
  ((n = f = f || {}).controlCharacterInInputStream =
    "control-character-in-input-stream"),
    (n.noncharacterInInputStream = "noncharacter-in-input-stream"),
    (n.surrogateInInputStream = "surrogate-in-input-stream"),
    (n.nonVoidHtmlElementStartTagWithTrailingSolidus =
      "non-void-html-element-start-tag-with-trailing-solidus"),
    (n.endTagWithAttributes = "end-tag-with-attributes"),
    (n.endTagWithTrailingSolidus = "end-tag-with-trailing-solidus"),
    (n.unexpectedSolidusInTag = "unexpected-solidus-in-tag"),
    (n.unexpectedNullCharacter = "unexpected-null-character"),
    (n.unexpectedQuestionMarkInsteadOfTagName =
      "unexpected-question-mark-instead-of-tag-name"),
    (n.invalidFirstCharacterOfTagName = "invalid-first-character-of-tag-name"),
    (n.unexpectedEqualsSignBeforeAttributeName =
      "unexpected-equals-sign-before-attribute-name"),
    (n.missingEndTagName = "missing-end-tag-name"),
    (n.unexpectedCharacterInAttributeName =
      "unexpected-character-in-attribute-name"),
    (n.unknownNamedCharacterReference = "unknown-named-character-reference"),
    (n.missingSemicolonAfterCharacterReference =
      "missing-semicolon-after-character-reference"),
    (n.unexpectedCharacterAfterDoctypeSystemIdentifier =
      "unexpected-character-after-doctype-system-identifier"),
    (n.unexpectedCharacterInUnquotedAttributeValue =
      "unexpected-character-in-unquoted-attribute-value"),
    (n.eofBeforeTagName = "eof-before-tag-name"),
    (n.eofInTag = "eof-in-tag"),
    (n.missingAttributeValue = "missing-attribute-value"),
    (n.missingWhitespaceBetweenAttributes =
      "missing-whitespace-between-attributes"),
    (n.missingWhitespaceAfterDoctypePublicKeyword =
      "missing-whitespace-after-doctype-public-keyword"),
    (n.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers =
      "missing-whitespace-between-doctype-public-and-system-identifiers"),
    (n.missingWhitespaceAfterDoctypeSystemKeyword =
      "missing-whitespace-after-doctype-system-keyword"),
    (n.missingQuoteBeforeDoctypePublicIdentifier =
      "missing-quote-before-doctype-public-identifier"),
    (n.missingQuoteBeforeDoctypeSystemIdentifier =
      "missing-quote-before-doctype-system-identifier"),
    (n.missingDoctypePublicIdentifier = "missing-doctype-public-identifier"),
    (n.missingDoctypeSystemIdentifier = "missing-doctype-system-identifier"),
    (n.abruptDoctypePublicIdentifier = "abrupt-doctype-public-identifier"),
    (n.abruptDoctypeSystemIdentifier = "abrupt-doctype-system-identifier"),
    (n.cdataInHtmlContent = "cdata-in-html-content"),
    (n.incorrectlyOpenedComment = "incorrectly-opened-comment"),
    (n.eofInScriptHtmlCommentLikeText = "eof-in-script-html-comment-like-text"),
    (n.eofInDoctype = "eof-in-doctype"),
    (n.nestedComment = "nested-comment"),
    (n.abruptClosingOfEmptyComment = "abrupt-closing-of-empty-comment"),
    (n.eofInComment = "eof-in-comment"),
    (n.incorrectlyClosedComment = "incorrectly-closed-comment"),
    (n.eofInCdata = "eof-in-cdata"),
    (n.absenceOfDigitsInNumericCharacterReference =
      "absence-of-digits-in-numeric-character-reference"),
    (n.nullCharacterReference = "null-character-reference"),
    (n.surrogateCharacterReference = "surrogate-character-reference"),
    (n.characterReferenceOutsideUnicodeRange =
      "character-reference-outside-unicode-range"),
    (n.controlCharacterReference = "control-character-reference"),
    (n.noncharacterCharacterReference = "noncharacter-character-reference"),
    (n.missingWhitespaceBeforeDoctypeName =
      "missing-whitespace-before-doctype-name"),
    (n.missingDoctypeName = "missing-doctype-name"),
    (n.invalidCharacterSequenceAfterDoctypeName =
      "invalid-character-sequence-after-doctype-name"),
    (n.duplicateAttribute = "duplicate-attribute"),
    (n.nonConformingDoctype = "non-conforming-doctype"),
    (n.missingDoctype = "missing-doctype"),
    (n.misplacedDoctype = "misplaced-doctype"),
    (n.endTagWithoutMatchingOpenElement =
      "end-tag-without-matching-open-element"),
    (n.closingOfElementWithOpenChildElements =
      "closing-of-element-with-open-child-elements"),
    (n.disallowedContentInNoscriptInHead =
      "disallowed-content-in-noscript-in-head"),
    (n.openElementsLeftAfterEof = "open-elements-left-after-eof"),
    (n.abandonedHeadElementChild = "abandoned-head-element-child"),
    (n.misplacedStartTagForHeadElement =
      "misplaced-start-tag-for-head-element"),
    (n.nestedNoscriptInHead = "nested-noscript-in-head"),
    (n.eofInElementThatCanContainOnlyText =
      "eof-in-element-that-can-contain-only-text");
  var A,
    ta = class {
      constructor(e) {
        (this.handler = e),
          (this.html = ""),
          (this.pos = -1),
          (this.lastGapPos = -2),
          (this.gapStack = []),
          (this.skipNextNewLine = !1),
          (this.lastChunkWritten = !1),
          (this.endOfChunkHit = !1),
          (this.bufferWaterline = 65536),
          (this.isEol = !1),
          (this.lineStartPos = 0),
          (this.droppedBufferSize = 0),
          (this.line = 1),
          (this.lastErrOffset = -1);
      }
      get col() {
        return (
          this.pos - this.lineStartPos + Number(this.lastGapPos !== this.pos)
        );
      }
      get offset() {
        return this.droppedBufferSize + this.pos;
      }
      getError(e) {
        var { line: t, col: r, offset: n } = this;
        return {
          code: e,
          startLine: t,
          endLine: t,
          startCol: r,
          endCol: r,
          startOffset: n,
          endOffset: n,
        };
      }
      _err(e) {
        this.handler.onParseError &&
          this.lastErrOffset !== this.offset &&
          ((this.lastErrOffset = this.offset),
          this.handler.onParseError(this.getError(e)));
      }
      _addGap() {
        this.gapStack.push(this.lastGapPos), (this.lastGapPos = this.pos);
      }
      _processSurrogate(e) {
        if (this.pos !== this.html.length - 1) {
          var t = this.html.charCodeAt(this.pos + 1);
          if ($n(t)) return this.pos++, this._addGap(), Jn(e, t);
        } else if (!this.lastChunkWritten)
          return (this.endOfChunkHit = !0), T.EOF;
        return this._err(f.surrogateInInputStream), e;
      }
      willDropParsedChunk() {
        return this.pos > this.bufferWaterline;
      }
      dropParsedChunk() {
        this.willDropParsedChunk() &&
          ((this.html = this.html.substring(this.pos)),
          (this.lineStartPos -= this.pos),
          (this.droppedBufferSize += this.pos),
          (this.pos = 0),
          (this.lastGapPos = -2),
          (this.gapStack.length = 0));
      }
      write(e, t) {
        0 < this.html.length ? (this.html += e) : (this.html = e),
          (this.endOfChunkHit = !1),
          (this.lastChunkWritten = t);
      }
      insertHtmlAtCurrentPos(e) {
        (this.html =
          this.html.substring(0, this.pos + 1) +
          e +
          this.html.substring(this.pos + 1)),
          (this.endOfChunkHit = !1);
      }
      startsWith(t, e) {
        if (this.pos + t.length > this.html.length)
          return (this.endOfChunkHit = !this.lastChunkWritten), !1;
        if (e) return this.html.startsWith(t, this.pos);
        for (let e = 0; e < t.length; e++)
          if ((32 | this.html.charCodeAt(this.pos + e)) !== t.charCodeAt(e))
            return !1;
        return !0;
      }
      peek(e) {
        var e = this.pos + e;
        return e >= this.html.length
          ? ((this.endOfChunkHit = !this.lastChunkWritten), T.EOF)
          : (e = this.html.charCodeAt(e)) === T.CARRIAGE_RETURN
          ? T.LINE_FEED
          : e;
      }
      advance() {
        if (
          (this.pos++,
          this.isEol &&
            ((this.isEol = !1), this.line++, (this.lineStartPos = this.pos)),
          this.pos >= this.html.length)
        )
          return (this.endOfChunkHit = !this.lastChunkWritten), T.EOF;
        let e = this.html.charCodeAt(this.pos);
        return e === T.CARRIAGE_RETURN
          ? ((this.isEol = !0), (this.skipNextNewLine = !0), T.LINE_FEED)
          : e === T.LINE_FEED && ((this.isEol = !0), this.skipNextNewLine)
          ? (this.line--,
            (this.skipNextNewLine = !1),
            this._addGap(),
            this.advance())
          : ((this.skipNextNewLine = !1),
            zn(e) && (e = this._processSurrogate(e)),
            null === this.handler.onParseError ||
              (31 < e && e < 127) ||
              e === T.LINE_FEED ||
              e === T.CARRIAGE_RETURN ||
              (159 < e && e < 64976) ||
              this._checkForProblematicCharacters(e),
            e);
      }
      _checkForProblematicCharacters(e) {
        Zn(e)
          ? this._err(f.controlCharacterInInputStream)
          : ea(e) && this._err(f.noncharacterInInputStream);
      }
      retreat(e) {
        for (this.pos -= e; this.pos < this.lastGapPos; )
          (this.lastGapPos = this.gapStack.pop()), this.pos--;
        this.isEol = !1;
      }
    };
  function ra(t, r) {
    for (let e = t.attrs.length - 1; 0 <= e; e--)
      if (t.attrs[e].name === r) return t.attrs[e].value;
    return null;
  }
  ((t = A = A || {})[(t.CHARACTER = 0)] = "CHARACTER"),
    (t[(t.NULL_CHARACTER = 1)] = "NULL_CHARACTER"),
    (t[(t.WHITESPACE_CHARACTER = 2)] = "WHITESPACE_CHARACTER"),
    (t[(t.START_TAG = 3)] = "START_TAG"),
    (t[(t.END_TAG = 4)] = "END_TAG"),
    (t[(t.COMMENT = 5)] = "COMMENT"),
    (t[(t.DOCTYPE = 6)] = "DOCTYPE"),
    (t[(t.EOF = 7)] = "EOF"),
    (t[(t.HIBERNATION = 8)] = "HIBERNATION");
  var P,
    na,
    w,
    B,
    x,
    aa = {},
    sa =
      (V(aa, {
        ATTRS: () => na,
        DOCUMENT_MODE: () => w,
        NS: () => P,
        SPECIAL_ELEMENTS: () => oa,
        TAG_ID: () => x,
        TAG_NAMES: () => B,
        getTagID: () => ia,
        hasUnescapedText: () => ha,
        isNumberedHeader: () => ca,
      }),
      ((e = P = P || {}).HTML = "http://www.w3.org/1999/xhtml"),
      (e.MATHML = "http://www.w3.org/1998/Math/MathML"),
      (e.SVG = "http://www.w3.org/2000/svg"),
      (e.XLINK = "http://www.w3.org/1999/xlink"),
      (e.XML = "http://www.w3.org/XML/1998/namespace"),
      (e.XMLNS = "http://www.w3.org/2000/xmlns/"),
      ((p = na = na || {}).TYPE = "type"),
      (p.ACTION = "action"),
      (p.ENCODING = "encoding"),
      (p.PROMPT = "prompt"),
      (p.NAME = "name"),
      (p.COLOR = "color"),
      (p.FACE = "face"),
      (p.SIZE = "size"),
      ((r = w = w || {}).NO_QUIRKS = "no-quirks"),
      (r.QUIRKS = "quirks"),
      (r.LIMITED_QUIRKS = "limited-quirks"),
      ((n = B = B || {}).A = "a"),
      (n.ADDRESS = "address"),
      (n.ANNOTATION_XML = "annotation-xml"),
      (n.APPLET = "applet"),
      (n.AREA = "area"),
      (n.ARTICLE = "article"),
      (n.ASIDE = "aside"),
      (n.B = "b"),
      (n.BASE = "base"),
      (n.BASEFONT = "basefont"),
      (n.BGSOUND = "bgsound"),
      (n.BIG = "big"),
      (n.BLOCKQUOTE = "blockquote"),
      (n.BODY = "body"),
      (n.BR = "br"),
      (n.BUTTON = "button"),
      (n.CAPTION = "caption"),
      (n.CENTER = "center"),
      (n.CODE = "code"),
      (n.COL = "col"),
      (n.COLGROUP = "colgroup"),
      (n.DD = "dd"),
      (n.DESC = "desc"),
      (n.DETAILS = "details"),
      (n.DIALOG = "dialog"),
      (n.DIR = "dir"),
      (n.DIV = "div"),
      (n.DL = "dl"),
      (n.DT = "dt"),
      (n.EM = "em"),
      (n.EMBED = "embed"),
      (n.FIELDSET = "fieldset"),
      (n.FIGCAPTION = "figcaption"),
      (n.FIGURE = "figure"),
      (n.FONT = "font"),
      (n.FOOTER = "footer"),
      (n.FOREIGN_OBJECT = "foreignObject"),
      (n.FORM = "form"),
      (n.FRAME = "frame"),
      (n.FRAMESET = "frameset"),
      (n.H1 = "h1"),
      (n.H2 = "h2"),
      (n.H3 = "h3"),
      (n.H4 = "h4"),
      (n.H5 = "h5"),
      (n.H6 = "h6"),
      (n.HEAD = "head"),
      (n.HEADER = "header"),
      (n.HGROUP = "hgroup"),
      (n.HR = "hr"),
      (n.HTML = "html"),
      (n.I = "i"),
      (n.IMG = "img"),
      (n.IMAGE = "image"),
      (n.INPUT = "input"),
      (n.IFRAME = "iframe"),
      (n.KEYGEN = "keygen"),
      (n.LABEL = "label"),
      (n.LI = "li"),
      (n.LINK = "link"),
      (n.LISTING = "listing"),
      (n.MAIN = "main"),
      (n.MALIGNMARK = "malignmark"),
      (n.MARQUEE = "marquee"),
      (n.MATH = "math"),
      (n.MENU = "menu"),
      (n.META = "meta"),
      (n.MGLYPH = "mglyph"),
      (n.MI = "mi"),
      (n.MO = "mo"),
      (n.MN = "mn"),
      (n.MS = "ms"),
      (n.MTEXT = "mtext"),
      (n.NAV = "nav"),
      (n.NOBR = "nobr"),
      (n.NOFRAMES = "noframes"),
      (n.NOEMBED = "noembed"),
      (n.NOSCRIPT = "noscript"),
      (n.OBJECT = "object"),
      (n.OL = "ol"),
      (n.OPTGROUP = "optgroup"),
      (n.OPTION = "option"),
      (n.P = "p"),
      (n.PARAM = "param"),
      (n.PLAINTEXT = "plaintext"),
      (n.PRE = "pre"),
      (n.RB = "rb"),
      (n.RP = "rp"),
      (n.RT = "rt"),
      (n.RTC = "rtc"),
      (n.RUBY = "ruby"),
      (n.S = "s"),
      (n.SCRIPT = "script"),
      (n.SECTION = "section"),
      (n.SELECT = "select"),
      (n.SOURCE = "source"),
      (n.SMALL = "small"),
      (n.SPAN = "span"),
      (n.STRIKE = "strike"),
      (n.STRONG = "strong"),
      (n.STYLE = "style"),
      (n.SUB = "sub"),
      (n.SUMMARY = "summary"),
      (n.SUP = "sup"),
      (n.TABLE = "table"),
      (n.TBODY = "tbody"),
      (n.TEMPLATE = "template"),
      (n.TEXTAREA = "textarea"),
      (n.TFOOT = "tfoot"),
      (n.TD = "td"),
      (n.TH = "th"),
      (n.THEAD = "thead"),
      (n.TITLE = "title"),
      (n.TR = "tr"),
      (n.TRACK = "track"),
      (n.TT = "tt"),
      (n.U = "u"),
      (n.UL = "ul"),
      (n.SVG = "svg"),
      (n.VAR = "var"),
      (n.WBR = "wbr"),
      (n.XMP = "xmp"),
      ((t = x = x || {})[(t.UNKNOWN = 0)] = "UNKNOWN"),
      (t[(t.A = 1)] = "A"),
      (t[(t.ADDRESS = 2)] = "ADDRESS"),
      (t[(t.ANNOTATION_XML = 3)] = "ANNOTATION_XML"),
      (t[(t.APPLET = 4)] = "APPLET"),
      (t[(t.AREA = 5)] = "AREA"),
      (t[(t.ARTICLE = 6)] = "ARTICLE"),
      (t[(t.ASIDE = 7)] = "ASIDE"),
      (t[(t.B = 8)] = "B"),
      (t[(t.BASE = 9)] = "BASE"),
      (t[(t.BASEFONT = 10)] = "BASEFONT"),
      (t[(t.BGSOUND = 11)] = "BGSOUND"),
      (t[(t.BIG = 12)] = "BIG"),
      (t[(t.BLOCKQUOTE = 13)] = "BLOCKQUOTE"),
      (t[(t.BODY = 14)] = "BODY"),
      (t[(t.BR = 15)] = "BR"),
      (t[(t.BUTTON = 16)] = "BUTTON"),
      (t[(t.CAPTION = 17)] = "CAPTION"),
      (t[(t.CENTER = 18)] = "CENTER"),
      (t[(t.CODE = 19)] = "CODE"),
      (t[(t.COL = 20)] = "COL"),
      (t[(t.COLGROUP = 21)] = "COLGROUP"),
      (t[(t.DD = 22)] = "DD"),
      (t[(t.DESC = 23)] = "DESC"),
      (t[(t.DETAILS = 24)] = "DETAILS"),
      (t[(t.DIALOG = 25)] = "DIALOG"),
      (t[(t.DIR = 26)] = "DIR"),
      (t[(t.DIV = 27)] = "DIV"),
      (t[(t.DL = 28)] = "DL"),
      (t[(t.DT = 29)] = "DT"),
      (t[(t.EM = 30)] = "EM"),
      (t[(t.EMBED = 31)] = "EMBED"),
      (t[(t.FIELDSET = 32)] = "FIELDSET"),
      (t[(t.FIGCAPTION = 33)] = "FIGCAPTION"),
      (t[(t.FIGURE = 34)] = "FIGURE"),
      (t[(t.FONT = 35)] = "FONT"),
      (t[(t.FOOTER = 36)] = "FOOTER"),
      (t[(t.FOREIGN_OBJECT = 37)] = "FOREIGN_OBJECT"),
      (t[(t.FORM = 38)] = "FORM"),
      (t[(t.FRAME = 39)] = "FRAME"),
      (t[(t.FRAMESET = 40)] = "FRAMESET"),
      (t[(t.H1 = 41)] = "H1"),
      (t[(t.H2 = 42)] = "H2"),
      (t[(t.H3 = 43)] = "H3"),
      (t[(t.H4 = 44)] = "H4"),
      (t[(t.H5 = 45)] = "H5"),
      (t[(t.H6 = 46)] = "H6"),
      (t[(t.HEAD = 47)] = "HEAD"),
      (t[(t.HEADER = 48)] = "HEADER"),
      (t[(t.HGROUP = 49)] = "HGROUP"),
      (t[(t.HR = 50)] = "HR"),
      (t[(t.HTML = 51)] = "HTML"),
      (t[(t.I = 52)] = "I"),
      (t[(t.IMG = 53)] = "IMG"),
      (t[(t.IMAGE = 54)] = "IMAGE"),
      (t[(t.INPUT = 55)] = "INPUT"),
      (t[(t.IFRAME = 56)] = "IFRAME"),
      (t[(t.KEYGEN = 57)] = "KEYGEN"),
      (t[(t.LABEL = 58)] = "LABEL"),
      (t[(t.LI = 59)] = "LI"),
      (t[(t.LINK = 60)] = "LINK"),
      (t[(t.LISTING = 61)] = "LISTING"),
      (t[(t.MAIN = 62)] = "MAIN"),
      (t[(t.MALIGNMARK = 63)] = "MALIGNMARK"),
      (t[(t.MARQUEE = 64)] = "MARQUEE"),
      (t[(t.MATH = 65)] = "MATH"),
      (t[(t.MENU = 66)] = "MENU"),
      (t[(t.META = 67)] = "META"),
      (t[(t.MGLYPH = 68)] = "MGLYPH"),
      (t[(t.MI = 69)] = "MI"),
      (t[(t.MO = 70)] = "MO"),
      (t[(t.MN = 71)] = "MN"),
      (t[(t.MS = 72)] = "MS"),
      (t[(t.MTEXT = 73)] = "MTEXT"),
      (t[(t.NAV = 74)] = "NAV"),
      (t[(t.NOBR = 75)] = "NOBR"),
      (t[(t.NOFRAMES = 76)] = "NOFRAMES"),
      (t[(t.NOEMBED = 77)] = "NOEMBED"),
      (t[(t.NOSCRIPT = 78)] = "NOSCRIPT"),
      (t[(t.OBJECT = 79)] = "OBJECT"),
      (t[(t.OL = 80)] = "OL"),
      (t[(t.OPTGROUP = 81)] = "OPTGROUP"),
      (t[(t.OPTION = 82)] = "OPTION"),
      (t[(t.P = 83)] = "P"),
      (t[(t.PARAM = 84)] = "PARAM"),
      (t[(t.PLAINTEXT = 85)] = "PLAINTEXT"),
      (t[(t.PRE = 86)] = "PRE"),
      (t[(t.RB = 87)] = "RB"),
      (t[(t.RP = 88)] = "RP"),
      (t[(t.RT = 89)] = "RT"),
      (t[(t.RTC = 90)] = "RTC"),
      (t[(t.RUBY = 91)] = "RUBY"),
      (t[(t.S = 92)] = "S"),
      (t[(t.SCRIPT = 93)] = "SCRIPT"),
      (t[(t.SECTION = 94)] = "SECTION"),
      (t[(t.SELECT = 95)] = "SELECT"),
      (t[(t.SOURCE = 96)] = "SOURCE"),
      (t[(t.SMALL = 97)] = "SMALL"),
      (t[(t.SPAN = 98)] = "SPAN"),
      (t[(t.STRIKE = 99)] = "STRIKE"),
      (t[(t.STRONG = 100)] = "STRONG"),
      (t[(t.STYLE = 101)] = "STYLE"),
      (t[(t.SUB = 102)] = "SUB"),
      (t[(t.SUMMARY = 103)] = "SUMMARY"),
      (t[(t.SUP = 104)] = "SUP"),
      (t[(t.TABLE = 105)] = "TABLE"),
      (t[(t.TBODY = 106)] = "TBODY"),
      (t[(t.TEMPLATE = 107)] = "TEMPLATE"),
      (t[(t.TEXTAREA = 108)] = "TEXTAREA"),
      (t[(t.TFOOT = 109)] = "TFOOT"),
      (t[(t.TD = 110)] = "TD"),
      (t[(t.TH = 111)] = "TH"),
      (t[(t.THEAD = 112)] = "THEAD"),
      (t[(t.TITLE = 113)] = "TITLE"),
      (t[(t.TR = 114)] = "TR"),
      (t[(t.TRACK = 115)] = "TRACK"),
      (t[(t.TT = 116)] = "TT"),
      (t[(t.U = 117)] = "U"),
      (t[(t.UL = 118)] = "UL"),
      (t[(t.SVG = 119)] = "SVG"),
      (t[(t.VAR = 120)] = "VAR"),
      (t[(t.WBR = 121)] = "WBR"),
      (t[(t.XMP = 122)] = "XMP"),
      new Map([
        [B.A, x.A],
        [B.ADDRESS, x.ADDRESS],
        [B.ANNOTATION_XML, x.ANNOTATION_XML],
        [B.APPLET, x.APPLET],
        [B.AREA, x.AREA],
        [B.ARTICLE, x.ARTICLE],
        [B.ASIDE, x.ASIDE],
        [B.B, x.B],
        [B.BASE, x.BASE],
        [B.BASEFONT, x.BASEFONT],
        [B.BGSOUND, x.BGSOUND],
        [B.BIG, x.BIG],
        [B.BLOCKQUOTE, x.BLOCKQUOTE],
        [B.BODY, x.BODY],
        [B.BR, x.BR],
        [B.BUTTON, x.BUTTON],
        [B.CAPTION, x.CAPTION],
        [B.CENTER, x.CENTER],
        [B.CODE, x.CODE],
        [B.COL, x.COL],
        [B.COLGROUP, x.COLGROUP],
        [B.DD, x.DD],
        [B.DESC, x.DESC],
        [B.DETAILS, x.DETAILS],
        [B.DIALOG, x.DIALOG],
        [B.DIR, x.DIR],
        [B.DIV, x.DIV],
        [B.DL, x.DL],
        [B.DT, x.DT],
        [B.EM, x.EM],
        [B.EMBED, x.EMBED],
        [B.FIELDSET, x.FIELDSET],
        [B.FIGCAPTION, x.FIGCAPTION],
        [B.FIGURE, x.FIGURE],
        [B.FONT, x.FONT],
        [B.FOOTER, x.FOOTER],
        [B.FOREIGN_OBJECT, x.FOREIGN_OBJECT],
        [B.FORM, x.FORM],
        [B.FRAME, x.FRAME],
        [B.FRAMESET, x.FRAMESET],
        [B.H1, x.H1],
        [B.H2, x.H2],
        [B.H3, x.H3],
        [B.H4, x.H4],
        [B.H5, x.H5],
        [B.H6, x.H6],
        [B.HEAD, x.HEAD],
        [B.HEADER, x.HEADER],
        [B.HGROUP, x.HGROUP],
        [B.HR, x.HR],
        [B.HTML, x.HTML],
        [B.I, x.I],
        [B.IMG, x.IMG],
        [B.IMAGE, x.IMAGE],
        [B.INPUT, x.INPUT],
        [B.IFRAME, x.IFRAME],
        [B.KEYGEN, x.KEYGEN],
        [B.LABEL, x.LABEL],
        [B.LI, x.LI],
        [B.LINK, x.LINK],
        [B.LISTING, x.LISTING],
        [B.MAIN, x.MAIN],
        [B.MALIGNMARK, x.MALIGNMARK],
        [B.MARQUEE, x.MARQUEE],
        [B.MATH, x.MATH],
        [B.MENU, x.MENU],
        [B.META, x.META],
        [B.MGLYPH, x.MGLYPH],
        [B.MI, x.MI],
        [B.MO, x.MO],
        [B.MN, x.MN],
        [B.MS, x.MS],
        [B.MTEXT, x.MTEXT],
        [B.NAV, x.NAV],
        [B.NOBR, x.NOBR],
        [B.NOFRAMES, x.NOFRAMES],
        [B.NOEMBED, x.NOEMBED],
        [B.NOSCRIPT, x.NOSCRIPT],
        [B.OBJECT, x.OBJECT],
        [B.OL, x.OL],
        [B.OPTGROUP, x.OPTGROUP],
        [B.OPTION, x.OPTION],
        [B.P, x.P],
        [B.PARAM, x.PARAM],
        [B.PLAINTEXT, x.PLAINTEXT],
        [B.PRE, x.PRE],
        [B.RB, x.RB],
        [B.RP, x.RP],
        [B.RT, x.RT],
        [B.RTC, x.RTC],
        [B.RUBY, x.RUBY],
        [B.S, x.S],
        [B.SCRIPT, x.SCRIPT],
        [B.SECTION, x.SECTION],
        [B.SELECT, x.SELECT],
        [B.SOURCE, x.SOURCE],
        [B.SMALL, x.SMALL],
        [B.SPAN, x.SPAN],
        [B.STRIKE, x.STRIKE],
        [B.STRONG, x.STRONG],
        [B.STYLE, x.STYLE],
        [B.SUB, x.SUB],
        [B.SUMMARY, x.SUMMARY],
        [B.SUP, x.SUP],
        [B.TABLE, x.TABLE],
        [B.TBODY, x.TBODY],
        [B.TEMPLATE, x.TEMPLATE],
        [B.TEXTAREA, x.TEXTAREA],
        [B.TFOOT, x.TFOOT],
        [B.TD, x.TD],
        [B.TH, x.TH],
        [B.THEAD, x.THEAD],
        [B.TITLE, x.TITLE],
        [B.TR, x.TR],
        [B.TRACK, x.TRACK],
        [B.TT, x.TT],
        [B.U, x.U],
        [B.UL, x.UL],
        [B.SVG, x.SVG],
        [B.VAR, x.VAR],
        [B.WBR, x.WBR],
        [B.XMP, x.XMP],
      ]));
  function ia(e) {
    return null != (e = sa.get(e)) ? e : x.UNKNOWN;
  }
  var _ = x,
    oa = {
      [P.HTML]: new Set([
        _.ADDRESS,
        _.APPLET,
        _.AREA,
        _.ARTICLE,
        _.ASIDE,
        _.BASE,
        _.BASEFONT,
        _.BGSOUND,
        _.BLOCKQUOTE,
        _.BODY,
        _.BR,
        _.BUTTON,
        _.CAPTION,
        _.CENTER,
        _.COL,
        _.COLGROUP,
        _.DD,
        _.DETAILS,
        _.DIR,
        _.DIV,
        _.DL,
        _.DT,
        _.EMBED,
        _.FIELDSET,
        _.FIGCAPTION,
        _.FIGURE,
        _.FOOTER,
        _.FORM,
        _.FRAME,
        _.FRAMESET,
        _.H1,
        _.H2,
        _.H3,
        _.H4,
        _.H5,
        _.H6,
        _.HEAD,
        _.HEADER,
        _.HGROUP,
        _.HR,
        _.HTML,
        _.IFRAME,
        _.IMG,
        _.INPUT,
        _.LI,
        _.LINK,
        _.LISTING,
        _.MAIN,
        _.MARQUEE,
        _.MENU,
        _.META,
        _.NAV,
        _.NOEMBED,
        _.NOFRAMES,
        _.NOSCRIPT,
        _.OBJECT,
        _.OL,
        _.P,
        _.PARAM,
        _.PLAINTEXT,
        _.PRE,
        _.SCRIPT,
        _.SECTION,
        _.SELECT,
        _.SOURCE,
        _.STYLE,
        _.SUMMARY,
        _.TABLE,
        _.TBODY,
        _.TD,
        _.TEMPLATE,
        _.TEXTAREA,
        _.TFOOT,
        _.TH,
        _.THEAD,
        _.TITLE,
        _.TR,
        _.TRACK,
        _.UL,
        _.WBR,
        _.XMP,
      ]),
      [P.MATHML]: new Set([_.MI, _.MO, _.MN, _.MS, _.MTEXT, _.ANNOTATION_XML]),
      [P.SVG]: new Set([_.TITLE, _.FOREIGN_OBJECT, _.DESC]),
      [P.XLINK]: new Set(),
      [P.XML]: new Set(),
      [P.XMLNS]: new Set(),
    };
  function ca(e) {
    return (
      e === _.H1 ||
      e === _.H2 ||
      e === _.H3 ||
      e === _.H4 ||
      e === _.H5 ||
      e === _.H6
    );
  }
  var la = new Set([
    B.STYLE,
    B.SCRIPT,
    B.XMP,
    B.IFRAME,
    B.NOEMBED,
    B.NOFRAMES,
    B.PLAINTEXT,
  ]);
  function ha(e, t) {
    return la.has(e) || (t && e === B.NOSCRIPT);
  }
  var g,
    ua = new Map([
      [128, 8364],
      [130, 8218],
      [131, 402],
      [132, 8222],
      [133, 8230],
      [134, 8224],
      [135, 8225],
      [136, 710],
      [137, 8240],
      [138, 352],
      [139, 8249],
      [140, 338],
      [142, 381],
      [145, 8216],
      [146, 8217],
      [147, 8220],
      [148, 8221],
      [149, 8226],
      [150, 8211],
      [151, 8212],
      [152, 732],
      [153, 8482],
      [154, 353],
      [155, 8250],
      [156, 339],
      [158, 382],
      [159, 376],
    ]),
    F =
      (((e = g = g || {})[(e.DATA = 0)] = "DATA"),
      (e[(e.RCDATA = 1)] = "RCDATA"),
      (e[(e.RAWTEXT = 2)] = "RAWTEXT"),
      (e[(e.SCRIPT_DATA = 3)] = "SCRIPT_DATA"),
      (e[(e.PLAINTEXT = 4)] = "PLAINTEXT"),
      (e[(e.TAG_OPEN = 5)] = "TAG_OPEN"),
      (e[(e.END_TAG_OPEN = 6)] = "END_TAG_OPEN"),
      (e[(e.TAG_NAME = 7)] = "TAG_NAME"),
      (e[(e.RCDATA_LESS_THAN_SIGN = 8)] = "RCDATA_LESS_THAN_SIGN"),
      (e[(e.RCDATA_END_TAG_OPEN = 9)] = "RCDATA_END_TAG_OPEN"),
      (e[(e.RCDATA_END_TAG_NAME = 10)] = "RCDATA_END_TAG_NAME"),
      (e[(e.RAWTEXT_LESS_THAN_SIGN = 11)] = "RAWTEXT_LESS_THAN_SIGN"),
      (e[(e.RAWTEXT_END_TAG_OPEN = 12)] = "RAWTEXT_END_TAG_OPEN"),
      (e[(e.RAWTEXT_END_TAG_NAME = 13)] = "RAWTEXT_END_TAG_NAME"),
      (e[(e.SCRIPT_DATA_LESS_THAN_SIGN = 14)] = "SCRIPT_DATA_LESS_THAN_SIGN"),
      (e[(e.SCRIPT_DATA_END_TAG_OPEN = 15)] = "SCRIPT_DATA_END_TAG_OPEN"),
      (e[(e.SCRIPT_DATA_END_TAG_NAME = 16)] = "SCRIPT_DATA_END_TAG_NAME"),
      (e[(e.SCRIPT_DATA_ESCAPE_START = 17)] = "SCRIPT_DATA_ESCAPE_START"),
      (e[(e.SCRIPT_DATA_ESCAPE_START_DASH = 18)] =
        "SCRIPT_DATA_ESCAPE_START_DASH"),
      (e[(e.SCRIPT_DATA_ESCAPED = 19)] = "SCRIPT_DATA_ESCAPED"),
      (e[(e.SCRIPT_DATA_ESCAPED_DASH = 20)] = "SCRIPT_DATA_ESCAPED_DASH"),
      (e[(e.SCRIPT_DATA_ESCAPED_DASH_DASH = 21)] =
        "SCRIPT_DATA_ESCAPED_DASH_DASH"),
      (e[(e.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN = 22)] =
        "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN"),
      (e[(e.SCRIPT_DATA_ESCAPED_END_TAG_OPEN = 23)] =
        "SCRIPT_DATA_ESCAPED_END_TAG_OPEN"),
      (e[(e.SCRIPT_DATA_ESCAPED_END_TAG_NAME = 24)] =
        "SCRIPT_DATA_ESCAPED_END_TAG_NAME"),
      (e[(e.SCRIPT_DATA_DOUBLE_ESCAPE_START = 25)] =
        "SCRIPT_DATA_DOUBLE_ESCAPE_START"),
      (e[(e.SCRIPT_DATA_DOUBLE_ESCAPED = 26)] = "SCRIPT_DATA_DOUBLE_ESCAPED"),
      (e[(e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH = 27)] =
        "SCRIPT_DATA_DOUBLE_ESCAPED_DASH"),
      (e[(e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH = 28)] =
        "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH"),
      (e[(e.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN = 29)] =
        "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN"),
      (e[(e.SCRIPT_DATA_DOUBLE_ESCAPE_END = 30)] =
        "SCRIPT_DATA_DOUBLE_ESCAPE_END"),
      (e[(e.BEFORE_ATTRIBUTE_NAME = 31)] = "BEFORE_ATTRIBUTE_NAME"),
      (e[(e.ATTRIBUTE_NAME = 32)] = "ATTRIBUTE_NAME"),
      (e[(e.AFTER_ATTRIBUTE_NAME = 33)] = "AFTER_ATTRIBUTE_NAME"),
      (e[(e.BEFORE_ATTRIBUTE_VALUE = 34)] = "BEFORE_ATTRIBUTE_VALUE"),
      (e[(e.ATTRIBUTE_VALUE_DOUBLE_QUOTED = 35)] =
        "ATTRIBUTE_VALUE_DOUBLE_QUOTED"),
      (e[(e.ATTRIBUTE_VALUE_SINGLE_QUOTED = 36)] =
        "ATTRIBUTE_VALUE_SINGLE_QUOTED"),
      (e[(e.ATTRIBUTE_VALUE_UNQUOTED = 37)] = "ATTRIBUTE_VALUE_UNQUOTED"),
      (e[(e.AFTER_ATTRIBUTE_VALUE_QUOTED = 38)] =
        "AFTER_ATTRIBUTE_VALUE_QUOTED"),
      (e[(e.SELF_CLOSING_START_TAG = 39)] = "SELF_CLOSING_START_TAG"),
      (e[(e.BOGUS_COMMENT = 40)] = "BOGUS_COMMENT"),
      (e[(e.MARKUP_DECLARATION_OPEN = 41)] = "MARKUP_DECLARATION_OPEN"),
      (e[(e.COMMENT_START = 42)] = "COMMENT_START"),
      (e[(e.COMMENT_START_DASH = 43)] = "COMMENT_START_DASH"),
      (e[(e.COMMENT = 44)] = "COMMENT"),
      (e[(e.COMMENT_LESS_THAN_SIGN = 45)] = "COMMENT_LESS_THAN_SIGN"),
      (e[(e.COMMENT_LESS_THAN_SIGN_BANG = 46)] = "COMMENT_LESS_THAN_SIGN_BANG"),
      (e[(e.COMMENT_LESS_THAN_SIGN_BANG_DASH = 47)] =
        "COMMENT_LESS_THAN_SIGN_BANG_DASH"),
      (e[(e.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH = 48)] =
        "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH"),
      (e[(e.COMMENT_END_DASH = 49)] = "COMMENT_END_DASH"),
      (e[(e.COMMENT_END = 50)] = "COMMENT_END"),
      (e[(e.COMMENT_END_BANG = 51)] = "COMMENT_END_BANG"),
      (e[(e.DOCTYPE = 52)] = "DOCTYPE"),
      (e[(e.BEFORE_DOCTYPE_NAME = 53)] = "BEFORE_DOCTYPE_NAME"),
      (e[(e.DOCTYPE_NAME = 54)] = "DOCTYPE_NAME"),
      (e[(e.AFTER_DOCTYPE_NAME = 55)] = "AFTER_DOCTYPE_NAME"),
      (e[(e.AFTER_DOCTYPE_PUBLIC_KEYWORD = 56)] =
        "AFTER_DOCTYPE_PUBLIC_KEYWORD"),
      (e[(e.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER = 57)] =
        "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER"),
      (e[(e.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED = 58)] =
        "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED"),
      (e[(e.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED = 59)] =
        "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED"),
      (e[(e.AFTER_DOCTYPE_PUBLIC_IDENTIFIER = 60)] =
        "AFTER_DOCTYPE_PUBLIC_IDENTIFIER"),
      (e[(e.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS = 61)] =
        "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS"),
      (e[(e.AFTER_DOCTYPE_SYSTEM_KEYWORD = 62)] =
        "AFTER_DOCTYPE_SYSTEM_KEYWORD"),
      (e[(e.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER = 63)] =
        "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER"),
      (e[(e.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED = 64)] =
        "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED"),
      (e[(e.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED = 65)] =
        "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED"),
      (e[(e.AFTER_DOCTYPE_SYSTEM_IDENTIFIER = 66)] =
        "AFTER_DOCTYPE_SYSTEM_IDENTIFIER"),
      (e[(e.BOGUS_DOCTYPE = 67)] = "BOGUS_DOCTYPE"),
      (e[(e.CDATA_SECTION = 68)] = "CDATA_SECTION"),
      (e[(e.CDATA_SECTION_BRACKET = 69)] = "CDATA_SECTION_BRACKET"),
      (e[(e.CDATA_SECTION_END = 70)] = "CDATA_SECTION_END"),
      (e[(e.CHARACTER_REFERENCE = 71)] = "CHARACTER_REFERENCE"),
      (e[(e.NAMED_CHARACTER_REFERENCE = 72)] = "NAMED_CHARACTER_REFERENCE"),
      (e[(e.AMBIGUOUS_AMPERSAND = 73)] = "AMBIGUOUS_AMPERSAND"),
      (e[(e.NUMERIC_CHARACTER_REFERENCE = 74)] = "NUMERIC_CHARACTER_REFERENCE"),
      (e[(e.HEXADEMICAL_CHARACTER_REFERENCE_START = 75)] =
        "HEXADEMICAL_CHARACTER_REFERENCE_START"),
      (e[(e.HEXADEMICAL_CHARACTER_REFERENCE = 76)] =
        "HEXADEMICAL_CHARACTER_REFERENCE"),
      (e[(e.DECIMAL_CHARACTER_REFERENCE = 77)] = "DECIMAL_CHARACTER_REFERENCE"),
      (e[(e.NUMERIC_CHARACTER_REFERENCE_END = 78)] =
        "NUMERIC_CHARACTER_REFERENCE_END"),
      {
        DATA: g.DATA,
        RCDATA: g.RCDATA,
        RAWTEXT: g.RAWTEXT,
        SCRIPT_DATA: g.SCRIPT_DATA,
        PLAINTEXT: g.PLAINTEXT,
        CDATA_SECTION: g.CDATA_SECTION,
      });
  function da(e) {
    return e >= T.DIGIT_0 && e <= T.DIGIT_9;
  }
  function Ea(e) {
    return e >= T.LATIN_CAPITAL_A && e <= T.LATIN_CAPITAL_Z;
  }
  function pa(e) {
    return ((t = e) >= T.LATIN_SMALL_A && t <= T.LATIN_SMALL_Z) || Ea(e);
    var t;
  }
  function Ta(e) {
    return pa(e) || da(e);
  }
  function ma(e) {
    return e >= T.LATIN_CAPITAL_A && e <= T.LATIN_CAPITAL_F;
  }
  function fa(e) {
    return e >= T.LATIN_SMALL_A && e <= T.LATIN_SMALL_F;
  }
  function Aa(e) {
    return da(e) || ma(e) || fa(e);
  }
  function _a(e) {
    return e + 32;
  }
  function ga(e) {
    return (
      e === T.SPACE ||
      e === T.LINE_FEED ||
      e === T.TABULATION ||
      e === T.FORM_FEED
    );
  }
  function Na(e) {
    return e === T.EQUALS_SIGN || Ta(e);
  }
  function Ca(e) {
    return ga(e) || e === T.SOLIDUS || e === T.GREATER_THAN_SIGN;
  }
  var Ia,
    Sa = class {
      constructor(e, t) {
        (this.options = e),
          (this.handler = t),
          (this.paused = !1),
          (this.inLoop = !1),
          (this.inForeignNode = !1),
          (this.lastStartTagName = ""),
          (this.active = !1),
          (this.state = g.DATA),
          (this.returnState = g.DATA),
          (this.charRefCode = -1),
          (this.consumedAfterSnapshot = -1),
          (this.currentCharacterToken = null),
          (this.currentToken = null),
          (this.currentAttr = { name: "", value: "" }),
          (this.preprocessor = new ta(t)),
          (this.currentLocation = this.getCurrentLocation(-1));
      }
      _err(e) {
        var t, r;
        null != (r = (t = this.handler).onParseError) &&
          r.call(t, this.preprocessor.getError(e));
      }
      getCurrentLocation(e) {
        return this.options.sourceCodeLocationInfo
          ? {
              startLine: this.preprocessor.line,
              startCol: this.preprocessor.col - e,
              startOffset: this.preprocessor.offset - e,
              endLine: -1,
              endCol: -1,
              endOffset: -1,
            }
          : null;
      }
      _runParsingLoop() {
        if (!this.inLoop) {
          for (this.inLoop = !0; this.active && !this.paused; ) {
            this.consumedAfterSnapshot = 0;
            var e = this._consume();
            this._ensureHibernation() || this._callState(e);
          }
          this.inLoop = !1;
        }
      }
      pause() {
        this.paused = !0;
      }
      resume(e) {
        if (!this.paused) throw new Error("Parser was already resumed");
        (this.paused = !1),
          this.inLoop ||
            (this._runParsingLoop(), this.paused) ||
            (null != e && e());
      }
      write(e, t, r) {
        (this.active = !0),
          this.preprocessor.write(e, t),
          this._runParsingLoop(),
          this.paused || (null != r && r());
      }
      insertHtmlAtCurrentPos(e) {
        (this.active = !0),
          this.preprocessor.insertHtmlAtCurrentPos(e),
          this._runParsingLoop();
      }
      _ensureHibernation() {
        return !(
          !this.preprocessor.endOfChunkHit ||
          (this._unconsume(this.consumedAfterSnapshot), (this.active = !1))
        );
      }
      _consume() {
        return this.consumedAfterSnapshot++, this.preprocessor.advance();
      }
      _unconsume(e) {
        (this.consumedAfterSnapshot -= e), this.preprocessor.retreat(e);
      }
      _reconsumeInState(e, t) {
        (this.state = e), this._callState(t);
      }
      _advanceBy(t) {
        this.consumedAfterSnapshot += t;
        for (let e = 0; e < t; e++) this.preprocessor.advance();
      }
      _consumeSequenceIfMatch(e, t) {
        return (
          !!this.preprocessor.startsWith(e, t) &&
          (this._advanceBy(e.length - 1), !0)
        );
      }
      _createStartTagToken() {
        this.currentToken = {
          type: A.START_TAG,
          tagName: "",
          tagID: x.UNKNOWN,
          selfClosing: !1,
          ackSelfClosing: !1,
          attrs: [],
          location: this.getCurrentLocation(1),
        };
      }
      _createEndTagToken() {
        this.currentToken = {
          type: A.END_TAG,
          tagName: "",
          tagID: x.UNKNOWN,
          selfClosing: !1,
          ackSelfClosing: !1,
          attrs: [],
          location: this.getCurrentLocation(2),
        };
      }
      _createCommentToken(e) {
        this.currentToken = {
          type: A.COMMENT,
          data: "",
          location: this.getCurrentLocation(e),
        };
      }
      _createDoctypeToken(e) {
        this.currentToken = {
          type: A.DOCTYPE,
          name: e,
          forceQuirks: !1,
          publicId: null,
          systemId: null,
          location: this.currentLocation,
        };
      }
      _createCharacterToken(e, t) {
        this.currentCharacterToken = {
          type: e,
          chars: t,
          location: this.currentLocation,
        };
      }
      _createAttr(e) {
        (this.currentAttr = { name: e, value: "" }),
          (this.currentLocation = this.getCurrentLocation(0));
      }
      _leaveAttrName() {
        var e,
          t = this.currentToken;
        null === ra(t, this.currentAttr.name)
          ? (t.attrs.push(this.currentAttr),
            t.location &&
              this.currentLocation &&
              (((null != (e = (t = t.location).attrs)
                ? e
                : (t.attrs = Object.create(null)))[this.currentAttr.name] =
                this.currentLocation),
              this._leaveAttrValue()))
          : this._err(f.duplicateAttribute);
      }
      _leaveAttrValue() {
        this.currentLocation &&
          ((this.currentLocation.endLine = this.preprocessor.line),
          (this.currentLocation.endCol = this.preprocessor.col),
          (this.currentLocation.endOffset = this.preprocessor.offset));
      }
      prepareToken(e) {
        this._emitCurrentCharacterToken(e.location),
          (this.currentToken = null),
          e.location &&
            ((e.location.endLine = this.preprocessor.line),
            (e.location.endCol = this.preprocessor.col + 1),
            (e.location.endOffset = this.preprocessor.offset + 1)),
          (this.currentLocation = this.getCurrentLocation(-1));
      }
      emitCurrentTagToken() {
        var e = this.currentToken;
        this.prepareToken(e),
          (e.tagID = ia(e.tagName)),
          e.type === A.START_TAG
            ? ((this.lastStartTagName = e.tagName), this.handler.onStartTag(e))
            : (0 < e.attrs.length && this._err(f.endTagWithAttributes),
              e.selfClosing && this._err(f.endTagWithTrailingSolidus),
              this.handler.onEndTag(e)),
          this.preprocessor.dropParsedChunk();
      }
      emitCurrentComment(e) {
        this.prepareToken(e),
          this.handler.onComment(e),
          this.preprocessor.dropParsedChunk();
      }
      emitCurrentDoctype(e) {
        this.prepareToken(e),
          this.handler.onDoctype(e),
          this.preprocessor.dropParsedChunk();
      }
      _emitCurrentCharacterToken(e) {
        if (this.currentCharacterToken) {
          switch (
            (e &&
              this.currentCharacterToken.location &&
              ((this.currentCharacterToken.location.endLine = e.startLine),
              (this.currentCharacterToken.location.endCol = e.startCol),
              (this.currentCharacterToken.location.endOffset = e.startOffset)),
            this.currentCharacterToken.type)
          ) {
            case A.CHARACTER:
              this.handler.onCharacter(this.currentCharacterToken);
              break;
            case A.NULL_CHARACTER:
              this.handler.onNullCharacter(this.currentCharacterToken);
              break;
            case A.WHITESPACE_CHARACTER:
              this.handler.onWhitespaceCharacter(this.currentCharacterToken);
          }
          this.currentCharacterToken = null;
        }
      }
      _emitEOFToken() {
        var e = this.getCurrentLocation(0);
        e &&
          ((e.endLine = e.startLine),
          (e.endCol = e.startCol),
          (e.endOffset = e.startOffset)),
          this._emitCurrentCharacterToken(e),
          this.handler.onEof({ type: A.EOF, location: e }),
          (this.active = !1);
      }
      _appendCharToCurrentCharacterToken(e, t) {
        if (this.currentCharacterToken) {
          if (this.currentCharacterToken.type === e)
            return void (this.currentCharacterToken.chars += t);
          (this.currentLocation = this.getCurrentLocation(0)),
            this._emitCurrentCharacterToken(this.currentLocation),
            this.preprocessor.dropParsedChunk();
        }
        this._createCharacterToken(e, t);
      }
      _emitCodePoint(e) {
        var t = ga(e)
          ? A.WHITESPACE_CHARACTER
          : e === T.NULL
          ? A.NULL_CHARACTER
          : A.CHARACTER;
        this._appendCharToCurrentCharacterToken(t, String.fromCodePoint(e));
      }
      _emitChars(e) {
        this._appendCharToCurrentCharacterToken(A.CHARACTER, e);
      }
      _matchNamedCharacterReference(r) {
        let n = null,
          a = 0,
          s = !1;
        for (
          let e = 0, t = ge[0];
          0 <= e && !((e = ke(ge, t, e + 1, r)) < 0);
          r = this._consume()
        ) {
          a += 1;
          var i = (t = ge[e]) & l.VALUE_LENGTH;
          if (i) {
            i = (i >> 14) - 1;
            if (
              (r !== T.SEMICOLON &&
              this._isCharacterReferenceInAttribute() &&
              Na(this.preprocessor.peek(1))
                ? ((n = [T.AMPERSAND]), (e += i))
                : ((n =
                    0 == i
                      ? [ge[e] & ~l.VALUE_LENGTH]
                      : 1 == i
                      ? [ge[++e]]
                      : [ge[++e], ge[++e]]),
                  (a = 0),
                  (s = r !== T.SEMICOLON)),
              0 == i)
            ) {
              this._consume();
              break;
            }
          }
        }
        return (
          this._unconsume(a),
          s &&
            !this.preprocessor.endOfChunkHit &&
            this._err(f.missingSemicolonAfterCharacterReference),
          this._unconsume(1),
          n
        );
      }
      _isCharacterReferenceInAttribute() {
        return (
          this.returnState === g.ATTRIBUTE_VALUE_DOUBLE_QUOTED ||
          this.returnState === g.ATTRIBUTE_VALUE_SINGLE_QUOTED ||
          this.returnState === g.ATTRIBUTE_VALUE_UNQUOTED
        );
      }
      _flushCodePointConsumedAsCharacterReference(e) {
        this._isCharacterReferenceInAttribute()
          ? (this.currentAttr.value += String.fromCodePoint(e))
          : this._emitCodePoint(e);
      }
      _callState(e) {
        switch (this.state) {
          case g.DATA:
            this._stateData(e);
            break;
          case g.RCDATA:
            this._stateRcdata(e);
            break;
          case g.RAWTEXT:
            this._stateRawtext(e);
            break;
          case g.SCRIPT_DATA:
            this._stateScriptData(e);
            break;
          case g.PLAINTEXT:
            this._statePlaintext(e);
            break;
          case g.TAG_OPEN:
            this._stateTagOpen(e);
            break;
          case g.END_TAG_OPEN:
            this._stateEndTagOpen(e);
            break;
          case g.TAG_NAME:
            this._stateTagName(e);
            break;
          case g.RCDATA_LESS_THAN_SIGN:
            this._stateRcdataLessThanSign(e);
            break;
          case g.RCDATA_END_TAG_OPEN:
            this._stateRcdataEndTagOpen(e);
            break;
          case g.RCDATA_END_TAG_NAME:
            this._stateRcdataEndTagName(e);
            break;
          case g.RAWTEXT_LESS_THAN_SIGN:
            this._stateRawtextLessThanSign(e);
            break;
          case g.RAWTEXT_END_TAG_OPEN:
            this._stateRawtextEndTagOpen(e);
            break;
          case g.RAWTEXT_END_TAG_NAME:
            this._stateRawtextEndTagName(e);
            break;
          case g.SCRIPT_DATA_LESS_THAN_SIGN:
            this._stateScriptDataLessThanSign(e);
            break;
          case g.SCRIPT_DATA_END_TAG_OPEN:
            this._stateScriptDataEndTagOpen(e);
            break;
          case g.SCRIPT_DATA_END_TAG_NAME:
            this._stateScriptDataEndTagName(e);
            break;
          case g.SCRIPT_DATA_ESCAPE_START:
            this._stateScriptDataEscapeStart(e);
            break;
          case g.SCRIPT_DATA_ESCAPE_START_DASH:
            this._stateScriptDataEscapeStartDash(e);
            break;
          case g.SCRIPT_DATA_ESCAPED:
            this._stateScriptDataEscaped(e);
            break;
          case g.SCRIPT_DATA_ESCAPED_DASH:
            this._stateScriptDataEscapedDash(e);
            break;
          case g.SCRIPT_DATA_ESCAPED_DASH_DASH:
            this._stateScriptDataEscapedDashDash(e);
            break;
          case g.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN:
            this._stateScriptDataEscapedLessThanSign(e);
            break;
          case g.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:
            this._stateScriptDataEscapedEndTagOpen(e);
            break;
          case g.SCRIPT_DATA_ESCAPED_END_TAG_NAME:
            this._stateScriptDataEscapedEndTagName(e);
            break;
          case g.SCRIPT_DATA_DOUBLE_ESCAPE_START:
            this._stateScriptDataDoubleEscapeStart(e);
            break;
          case g.SCRIPT_DATA_DOUBLE_ESCAPED:
            this._stateScriptDataDoubleEscaped(e);
            break;
          case g.SCRIPT_DATA_DOUBLE_ESCAPED_DASH:
            this._stateScriptDataDoubleEscapedDash(e);
            break;
          case g.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH:
            this._stateScriptDataDoubleEscapedDashDash(e);
            break;
          case g.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN:
            this._stateScriptDataDoubleEscapedLessThanSign(e);
            break;
          case g.SCRIPT_DATA_DOUBLE_ESCAPE_END:
            this._stateScriptDataDoubleEscapeEnd(e);
            break;
          case g.BEFORE_ATTRIBUTE_NAME:
            this._stateBeforeAttributeName(e);
            break;
          case g.ATTRIBUTE_NAME:
            this._stateAttributeName(e);
            break;
          case g.AFTER_ATTRIBUTE_NAME:
            this._stateAfterAttributeName(e);
            break;
          case g.BEFORE_ATTRIBUTE_VALUE:
            this._stateBeforeAttributeValue(e);
            break;
          case g.ATTRIBUTE_VALUE_DOUBLE_QUOTED:
            this._stateAttributeValueDoubleQuoted(e);
            break;
          case g.ATTRIBUTE_VALUE_SINGLE_QUOTED:
            this._stateAttributeValueSingleQuoted(e);
            break;
          case g.ATTRIBUTE_VALUE_UNQUOTED:
            this._stateAttributeValueUnquoted(e);
            break;
          case g.AFTER_ATTRIBUTE_VALUE_QUOTED:
            this._stateAfterAttributeValueQuoted(e);
            break;
          case g.SELF_CLOSING_START_TAG:
            this._stateSelfClosingStartTag(e);
            break;
          case g.BOGUS_COMMENT:
            this._stateBogusComment(e);
            break;
          case g.MARKUP_DECLARATION_OPEN:
            this._stateMarkupDeclarationOpen(e);
            break;
          case g.COMMENT_START:
            this._stateCommentStart(e);
            break;
          case g.COMMENT_START_DASH:
            this._stateCommentStartDash(e);
            break;
          case g.COMMENT:
            this._stateComment(e);
            break;
          case g.COMMENT_LESS_THAN_SIGN:
            this._stateCommentLessThanSign(e);
            break;
          case g.COMMENT_LESS_THAN_SIGN_BANG:
            this._stateCommentLessThanSignBang(e);
            break;
          case g.COMMENT_LESS_THAN_SIGN_BANG_DASH:
            this._stateCommentLessThanSignBangDash(e);
            break;
          case g.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:
            this._stateCommentLessThanSignBangDashDash(e);
            break;
          case g.COMMENT_END_DASH:
            this._stateCommentEndDash(e);
            break;
          case g.COMMENT_END:
            this._stateCommentEnd(e);
            break;
          case g.COMMENT_END_BANG:
            this._stateCommentEndBang(e);
            break;
          case g.DOCTYPE:
            this._stateDoctype(e);
            break;
          case g.BEFORE_DOCTYPE_NAME:
            this._stateBeforeDoctypeName(e);
            break;
          case g.DOCTYPE_NAME:
            this._stateDoctypeName(e);
            break;
          case g.AFTER_DOCTYPE_NAME:
            this._stateAfterDoctypeName(e);
            break;
          case g.AFTER_DOCTYPE_PUBLIC_KEYWORD:
            this._stateAfterDoctypePublicKeyword(e);
            break;
          case g.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER:
            this._stateBeforeDoctypePublicIdentifier(e);
            break;
          case g.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED:
            this._stateDoctypePublicIdentifierDoubleQuoted(e);
            break;
          case g.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED:
            this._stateDoctypePublicIdentifierSingleQuoted(e);
            break;
          case g.AFTER_DOCTYPE_PUBLIC_IDENTIFIER:
            this._stateAfterDoctypePublicIdentifier(e);
            break;
          case g.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS:
            this._stateBetweenDoctypePublicAndSystemIdentifiers(e);
            break;
          case g.AFTER_DOCTYPE_SYSTEM_KEYWORD:
            this._stateAfterDoctypeSystemKeyword(e);
            break;
          case g.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER:
            this._stateBeforeDoctypeSystemIdentifier(e);
            break;
          case g.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED:
            this._stateDoctypeSystemIdentifierDoubleQuoted(e);
            break;
          case g.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED:
            this._stateDoctypeSystemIdentifierSingleQuoted(e);
            break;
          case g.AFTER_DOCTYPE_SYSTEM_IDENTIFIER:
            this._stateAfterDoctypeSystemIdentifier(e);
            break;
          case g.BOGUS_DOCTYPE:
            this._stateBogusDoctype(e);
            break;
          case g.CDATA_SECTION:
            this._stateCdataSection(e);
            break;
          case g.CDATA_SECTION_BRACKET:
            this._stateCdataSectionBracket(e);
            break;
          case g.CDATA_SECTION_END:
            this._stateCdataSectionEnd(e);
            break;
          case g.CHARACTER_REFERENCE:
            this._stateCharacterReference(e);
            break;
          case g.NAMED_CHARACTER_REFERENCE:
            this._stateNamedCharacterReference(e);
            break;
          case g.AMBIGUOUS_AMPERSAND:
            this._stateAmbiguousAmpersand(e);
            break;
          case g.NUMERIC_CHARACTER_REFERENCE:
            this._stateNumericCharacterReference(e);
            break;
          case g.HEXADEMICAL_CHARACTER_REFERENCE_START:
            this._stateHexademicalCharacterReferenceStart(e);
            break;
          case g.HEXADEMICAL_CHARACTER_REFERENCE:
            this._stateHexademicalCharacterReference(e);
            break;
          case g.DECIMAL_CHARACTER_REFERENCE:
            this._stateDecimalCharacterReference(e);
            break;
          case g.NUMERIC_CHARACTER_REFERENCE_END:
            this._stateNumericCharacterReferenceEnd(e);
            break;
          default:
            throw new Error("Unknown state");
        }
      }
      _stateData(e) {
        switch (e) {
          case T.LESS_THAN_SIGN:
            this.state = g.TAG_OPEN;
            break;
          case T.AMPERSAND:
            (this.returnState = g.DATA), (this.state = g.CHARACTER_REFERENCE);
            break;
          case T.NULL:
            this._err(f.unexpectedNullCharacter), this._emitCodePoint(e);
            break;
          case T.EOF:
            this._emitEOFToken();
            break;
          default:
            this._emitCodePoint(e);
        }
      }
      _stateRcdata(e) {
        switch (e) {
          case T.AMPERSAND:
            (this.returnState = g.RCDATA), (this.state = g.CHARACTER_REFERENCE);
            break;
          case T.LESS_THAN_SIGN:
            this.state = g.RCDATA_LESS_THAN_SIGN;
            break;
          case T.NULL:
            this._err(f.unexpectedNullCharacter), this._emitChars(m);
            break;
          case T.EOF:
            this._emitEOFToken();
            break;
          default:
            this._emitCodePoint(e);
        }
      }
      _stateRawtext(e) {
        switch (e) {
          case T.LESS_THAN_SIGN:
            this.state = g.RAWTEXT_LESS_THAN_SIGN;
            break;
          case T.NULL:
            this._err(f.unexpectedNullCharacter), this._emitChars(m);
            break;
          case T.EOF:
            this._emitEOFToken();
            break;
          default:
            this._emitCodePoint(e);
        }
      }
      _stateScriptData(e) {
        switch (e) {
          case T.LESS_THAN_SIGN:
            this.state = g.SCRIPT_DATA_LESS_THAN_SIGN;
            break;
          case T.NULL:
            this._err(f.unexpectedNullCharacter), this._emitChars(m);
            break;
          case T.EOF:
            this._emitEOFToken();
            break;
          default:
            this._emitCodePoint(e);
        }
      }
      _statePlaintext(e) {
        switch (e) {
          case T.NULL:
            this._err(f.unexpectedNullCharacter), this._emitChars(m);
            break;
          case T.EOF:
            this._emitEOFToken();
            break;
          default:
            this._emitCodePoint(e);
        }
      }
      _stateTagOpen(e) {
        if (pa(e))
          this._createStartTagToken(),
            (this.state = g.TAG_NAME),
            this._stateTagName(e);
        else
          switch (e) {
            case T.EXCLAMATION_MARK:
              this.state = g.MARKUP_DECLARATION_OPEN;
              break;
            case T.SOLIDUS:
              this.state = g.END_TAG_OPEN;
              break;
            case T.QUESTION_MARK:
              this._err(f.unexpectedQuestionMarkInsteadOfTagName),
                this._createCommentToken(1),
                (this.state = g.BOGUS_COMMENT),
                this._stateBogusComment(e);
              break;
            case T.EOF:
              this._err(f.eofBeforeTagName),
                this._emitChars("<"),
                this._emitEOFToken();
              break;
            default:
              this._err(f.invalidFirstCharacterOfTagName),
                this._emitChars("<"),
                (this.state = g.DATA),
                this._stateData(e);
          }
      }
      _stateEndTagOpen(e) {
        if (pa(e))
          this._createEndTagToken(),
            (this.state = g.TAG_NAME),
            this._stateTagName(e);
        else
          switch (e) {
            case T.GREATER_THAN_SIGN:
              this._err(f.missingEndTagName), (this.state = g.DATA);
              break;
            case T.EOF:
              this._err(f.eofBeforeTagName),
                this._emitChars("</"),
                this._emitEOFToken();
              break;
            default:
              this._err(f.invalidFirstCharacterOfTagName),
                this._createCommentToken(2),
                (this.state = g.BOGUS_COMMENT),
                this._stateBogusComment(e);
          }
      }
      _stateTagName(e) {
        var t = this.currentToken;
        switch (e) {
          case T.SPACE:
          case T.LINE_FEED:
          case T.TABULATION:
          case T.FORM_FEED:
            this.state = g.BEFORE_ATTRIBUTE_NAME;
            break;
          case T.SOLIDUS:
            this.state = g.SELF_CLOSING_START_TAG;
            break;
          case T.GREATER_THAN_SIGN:
            (this.state = g.DATA), this.emitCurrentTagToken();
            break;
          case T.NULL:
            this._err(f.unexpectedNullCharacter), (t.tagName += m);
            break;
          case T.EOF:
            this._err(f.eofInTag), this._emitEOFToken();
            break;
          default:
            t.tagName += String.fromCodePoint(Ea(e) ? _a(e) : e);
        }
      }
      _stateRcdataLessThanSign(e) {
        e === T.SOLIDUS
          ? (this.state = g.RCDATA_END_TAG_OPEN)
          : (this._emitChars("<"),
            (this.state = g.RCDATA),
            this._stateRcdata(e));
      }
      _stateRcdataEndTagOpen(e) {
        pa(e)
          ? ((this.state = g.RCDATA_END_TAG_NAME),
            this._stateRcdataEndTagName(e))
          : (this._emitChars("</"),
            (this.state = g.RCDATA),
            this._stateRcdata(e));
      }
      handleSpecialEndTag(e) {
        if (!this.preprocessor.startsWith(this.lastStartTagName, !1))
          return !this._ensureHibernation();
        this._createEndTagToken();
        this.currentToken.tagName = this.lastStartTagName;
        var t = this.preprocessor.peek(this.lastStartTagName.length);
        switch (t) {
          case T.SPACE:
          case T.LINE_FEED:
          case T.TABULATION:
          case T.FORM_FEED:
            return (
              this._advanceBy(this.lastStartTagName.length),
              (this.state = g.BEFORE_ATTRIBUTE_NAME),
              !1
            );
          case T.SOLIDUS:
            return (
              this._advanceBy(this.lastStartTagName.length),
              (this.state = g.SELF_CLOSING_START_TAG),
              !1
            );
          case T.GREATER_THAN_SIGN:
            return (
              this._advanceBy(this.lastStartTagName.length),
              this.emitCurrentTagToken(),
              (this.state = g.DATA),
              !1
            );
          default:
            return !this._ensureHibernation();
        }
      }
      _stateRcdataEndTagName(e) {
        this.handleSpecialEndTag(e) &&
          (this._emitChars("</"),
          (this.state = g.RCDATA),
          this._stateRcdata(e));
      }
      _stateRawtextLessThanSign(e) {
        e === T.SOLIDUS
          ? (this.state = g.RAWTEXT_END_TAG_OPEN)
          : (this._emitChars("<"),
            (this.state = g.RAWTEXT),
            this._stateRawtext(e));
      }
      _stateRawtextEndTagOpen(e) {
        pa(e)
          ? ((this.state = g.RAWTEXT_END_TAG_NAME),
            this._stateRawtextEndTagName(e))
          : (this._emitChars("</"),
            (this.state = g.RAWTEXT),
            this._stateRawtext(e));
      }
      _stateRawtextEndTagName(e) {
        this.handleSpecialEndTag(e) &&
          (this._emitChars("</"),
          (this.state = g.RAWTEXT),
          this._stateRawtext(e));
      }
      _stateScriptDataLessThanSign(e) {
        switch (e) {
          case T.SOLIDUS:
            this.state = g.SCRIPT_DATA_END_TAG_OPEN;
            break;
          case T.EXCLAMATION_MARK:
            (this.state = g.SCRIPT_DATA_ESCAPE_START), this._emitChars("<!");
            break;
          default:
            this._emitChars("<"),
              (this.state = g.SCRIPT_DATA),
              this._stateScriptData(e);
        }
      }
      _stateScriptDataEndTagOpen(e) {
        pa(e)
          ? ((this.state = g.SCRIPT_DATA_END_TAG_NAME),
            this._stateScriptDataEndTagName(e))
          : (this._emitChars("</"),
            (this.state = g.SCRIPT_DATA),
            this._stateScriptData(e));
      }
      _stateScriptDataEndTagName(e) {
        this.handleSpecialEndTag(e) &&
          (this._emitChars("</"),
          (this.state = g.SCRIPT_DATA),
          this._stateScriptData(e));
      }
      _stateScriptDataEscapeStart(e) {
        e === T.HYPHEN_MINUS
          ? ((this.state = g.SCRIPT_DATA_ESCAPE_START_DASH),
            this._emitChars("-"))
          : ((this.state = g.SCRIPT_DATA), this._stateScriptData(e));
      }
      _stateScriptDataEscapeStartDash(e) {
        e === T.HYPHEN_MINUS
          ? ((this.state = g.SCRIPT_DATA_ESCAPED_DASH_DASH),
            this._emitChars("-"))
          : ((this.state = g.SCRIPT_DATA), this._stateScriptData(e));
      }
      _stateScriptDataEscaped(e) {
        switch (e) {
          case T.HYPHEN_MINUS:
            (this.state = g.SCRIPT_DATA_ESCAPED_DASH), this._emitChars("-");
            break;
          case T.LESS_THAN_SIGN:
            this.state = g.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
            break;
          case T.NULL:
            this._err(f.unexpectedNullCharacter), this._emitChars(m);
            break;
          case T.EOF:
            this._err(f.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
            break;
          default:
            this._emitCodePoint(e);
        }
      }
      _stateScriptDataEscapedDash(e) {
        switch (e) {
          case T.HYPHEN_MINUS:
            (this.state = g.SCRIPT_DATA_ESCAPED_DASH_DASH),
              this._emitChars("-");
            break;
          case T.LESS_THAN_SIGN:
            this.state = g.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
            break;
          case T.NULL:
            this._err(f.unexpectedNullCharacter),
              (this.state = g.SCRIPT_DATA_ESCAPED),
              this._emitChars(m);
            break;
          case T.EOF:
            this._err(f.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
            break;
          default:
            (this.state = g.SCRIPT_DATA_ESCAPED), this._emitCodePoint(e);
        }
      }
      _stateScriptDataEscapedDashDash(e) {
        switch (e) {
          case T.HYPHEN_MINUS:
            this._emitChars("-");
            break;
          case T.LESS_THAN_SIGN:
            this.state = g.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
            break;
          case T.GREATER_THAN_SIGN:
            (this.state = g.SCRIPT_DATA), this._emitChars(">");
            break;
          case T.NULL:
            this._err(f.unexpectedNullCharacter),
              (this.state = g.SCRIPT_DATA_ESCAPED),
              this._emitChars(m);
            break;
          case T.EOF:
            this._err(f.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
            break;
          default:
            (this.state = g.SCRIPT_DATA_ESCAPED), this._emitCodePoint(e);
        }
      }
      _stateScriptDataEscapedLessThanSign(e) {
        e === T.SOLIDUS
          ? (this.state = g.SCRIPT_DATA_ESCAPED_END_TAG_OPEN)
          : pa(e)
          ? (this._emitChars("<"),
            (this.state = g.SCRIPT_DATA_DOUBLE_ESCAPE_START),
            this._stateScriptDataDoubleEscapeStart(e))
          : (this._emitChars("<"),
            (this.state = g.SCRIPT_DATA_ESCAPED),
            this._stateScriptDataEscaped(e));
      }
      _stateScriptDataEscapedEndTagOpen(e) {
        pa(e)
          ? ((this.state = g.SCRIPT_DATA_ESCAPED_END_TAG_NAME),
            this._stateScriptDataEscapedEndTagName(e))
          : (this._emitChars("</"),
            (this.state = g.SCRIPT_DATA_ESCAPED),
            this._stateScriptDataEscaped(e));
      }
      _stateScriptDataEscapedEndTagName(e) {
        this.handleSpecialEndTag(e) &&
          (this._emitChars("</"),
          (this.state = g.SCRIPT_DATA_ESCAPED),
          this._stateScriptDataEscaped(e));
      }
      _stateScriptDataDoubleEscapeStart(e) {
        if (
          this.preprocessor.startsWith(Wn, !1) &&
          Ca(this.preprocessor.peek(Wn.length))
        ) {
          this._emitCodePoint(e);
          for (let e = 0; e < Wn.length; e++)
            this._emitCodePoint(this._consume());
          this.state = g.SCRIPT_DATA_DOUBLE_ESCAPED;
        } else
          this._ensureHibernation() ||
            ((this.state = g.SCRIPT_DATA_ESCAPED),
            this._stateScriptDataEscaped(e));
      }
      _stateScriptDataDoubleEscaped(e) {
        switch (e) {
          case T.HYPHEN_MINUS:
            (this.state = g.SCRIPT_DATA_DOUBLE_ESCAPED_DASH),
              this._emitChars("-");
            break;
          case T.LESS_THAN_SIGN:
            (this.state = g.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN),
              this._emitChars("<");
            break;
          case T.NULL:
            this._err(f.unexpectedNullCharacter), this._emitChars(m);
            break;
          case T.EOF:
            this._err(f.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
            break;
          default:
            this._emitCodePoint(e);
        }
      }
      _stateScriptDataDoubleEscapedDash(e) {
        switch (e) {
          case T.HYPHEN_MINUS:
            (this.state = g.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH),
              this._emitChars("-");
            break;
          case T.LESS_THAN_SIGN:
            (this.state = g.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN),
              this._emitChars("<");
            break;
          case T.NULL:
            this._err(f.unexpectedNullCharacter),
              (this.state = g.SCRIPT_DATA_DOUBLE_ESCAPED),
              this._emitChars(m);
            break;
          case T.EOF:
            this._err(f.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
            break;
          default:
            (this.state = g.SCRIPT_DATA_DOUBLE_ESCAPED), this._emitCodePoint(e);
        }
      }
      _stateScriptDataDoubleEscapedDashDash(e) {
        switch (e) {
          case T.HYPHEN_MINUS:
            this._emitChars("-");
            break;
          case T.LESS_THAN_SIGN:
            (this.state = g.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN),
              this._emitChars("<");
            break;
          case T.GREATER_THAN_SIGN:
            (this.state = g.SCRIPT_DATA), this._emitChars(">");
            break;
          case T.NULL:
            this._err(f.unexpectedNullCharacter),
              (this.state = g.SCRIPT_DATA_DOUBLE_ESCAPED),
              this._emitChars(m);
            break;
          case T.EOF:
            this._err(f.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
            break;
          default:
            (this.state = g.SCRIPT_DATA_DOUBLE_ESCAPED), this._emitCodePoint(e);
        }
      }
      _stateScriptDataDoubleEscapedLessThanSign(e) {
        e === T.SOLIDUS
          ? ((this.state = g.SCRIPT_DATA_DOUBLE_ESCAPE_END),
            this._emitChars("/"))
          : ((this.state = g.SCRIPT_DATA_DOUBLE_ESCAPED),
            this._stateScriptDataDoubleEscaped(e));
      }
      _stateScriptDataDoubleEscapeEnd(e) {
        if (
          this.preprocessor.startsWith(Wn, !1) &&
          Ca(this.preprocessor.peek(Wn.length))
        ) {
          this._emitCodePoint(e);
          for (let e = 0; e < Wn.length; e++)
            this._emitCodePoint(this._consume());
          this.state = g.SCRIPT_DATA_ESCAPED;
        } else
          this._ensureHibernation() ||
            ((this.state = g.SCRIPT_DATA_DOUBLE_ESCAPED),
            this._stateScriptDataDoubleEscaped(e));
      }
      _stateBeforeAttributeName(e) {
        switch (e) {
          case T.SPACE:
          case T.LINE_FEED:
          case T.TABULATION:
          case T.FORM_FEED:
            break;
          case T.SOLIDUS:
          case T.GREATER_THAN_SIGN:
          case T.EOF:
            (this.state = g.AFTER_ATTRIBUTE_NAME),
              this._stateAfterAttributeName(e);
            break;
          case T.EQUALS_SIGN:
            this._err(f.unexpectedEqualsSignBeforeAttributeName),
              this._createAttr("="),
              (this.state = g.ATTRIBUTE_NAME);
            break;
          default:
            this._createAttr(""),
              (this.state = g.ATTRIBUTE_NAME),
              this._stateAttributeName(e);
        }
      }
      _stateAttributeName(e) {
        switch (e) {
          case T.SPACE:
          case T.LINE_FEED:
          case T.TABULATION:
          case T.FORM_FEED:
          case T.SOLIDUS:
          case T.GREATER_THAN_SIGN:
          case T.EOF:
            this._leaveAttrName(),
              (this.state = g.AFTER_ATTRIBUTE_NAME),
              this._stateAfterAttributeName(e);
            break;
          case T.EQUALS_SIGN:
            this._leaveAttrName(), (this.state = g.BEFORE_ATTRIBUTE_VALUE);
            break;
          case T.QUOTATION_MARK:
          case T.APOSTROPHE:
          case T.LESS_THAN_SIGN:
            this._err(f.unexpectedCharacterInAttributeName),
              (this.currentAttr.name += String.fromCodePoint(e));
            break;
          case T.NULL:
            this._err(f.unexpectedNullCharacter), (this.currentAttr.name += m);
            break;
          default:
            this.currentAttr.name += String.fromCodePoint(Ea(e) ? _a(e) : e);
        }
      }
      _stateAfterAttributeName(e) {
        switch (e) {
          case T.SPACE:
          case T.LINE_FEED:
          case T.TABULATION:
          case T.FORM_FEED:
            break;
          case T.SOLIDUS:
            this.state = g.SELF_CLOSING_START_TAG;
            break;
          case T.EQUALS_SIGN:
            this.state = g.BEFORE_ATTRIBUTE_VALUE;
            break;
          case T.GREATER_THAN_SIGN:
            (this.state = g.DATA), this.emitCurrentTagToken();
            break;
          case T.EOF:
            this._err(f.eofInTag), this._emitEOFToken();
            break;
          default:
            this._createAttr(""),
              (this.state = g.ATTRIBUTE_NAME),
              this._stateAttributeName(e);
        }
      }
      _stateBeforeAttributeValue(e) {
        switch (e) {
          case T.SPACE:
          case T.LINE_FEED:
          case T.TABULATION:
          case T.FORM_FEED:
            break;
          case T.QUOTATION_MARK:
            this.state = g.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
            break;
          case T.APOSTROPHE:
            this.state = g.ATTRIBUTE_VALUE_SINGLE_QUOTED;
            break;
          case T.GREATER_THAN_SIGN:
            this._err(f.missingAttributeValue),
              (this.state = g.DATA),
              this.emitCurrentTagToken();
            break;
          default:
            (this.state = g.ATTRIBUTE_VALUE_UNQUOTED),
              this._stateAttributeValueUnquoted(e);
        }
      }
      _stateAttributeValueDoubleQuoted(e) {
        switch (e) {
          case T.QUOTATION_MARK:
            this.state = g.AFTER_ATTRIBUTE_VALUE_QUOTED;
            break;
          case T.AMPERSAND:
            (this.returnState = g.ATTRIBUTE_VALUE_DOUBLE_QUOTED),
              (this.state = g.CHARACTER_REFERENCE);
            break;
          case T.NULL:
            this._err(f.unexpectedNullCharacter), (this.currentAttr.value += m);
            break;
          case T.EOF:
            this._err(f.eofInTag), this._emitEOFToken();
            break;
          default:
            this.currentAttr.value += String.fromCodePoint(e);
        }
      }
      _stateAttributeValueSingleQuoted(e) {
        switch (e) {
          case T.APOSTROPHE:
            this.state = g.AFTER_ATTRIBUTE_VALUE_QUOTED;
            break;
          case T.AMPERSAND:
            (this.returnState = g.ATTRIBUTE_VALUE_SINGLE_QUOTED),
              (this.state = g.CHARACTER_REFERENCE);
            break;
          case T.NULL:
            this._err(f.unexpectedNullCharacter), (this.currentAttr.value += m);
            break;
          case T.EOF:
            this._err(f.eofInTag), this._emitEOFToken();
            break;
          default:
            this.currentAttr.value += String.fromCodePoint(e);
        }
      }
      _stateAttributeValueUnquoted(e) {
        switch (e) {
          case T.SPACE:
          case T.LINE_FEED:
          case T.TABULATION:
          case T.FORM_FEED:
            this._leaveAttrValue(), (this.state = g.BEFORE_ATTRIBUTE_NAME);
            break;
          case T.AMPERSAND:
            (this.returnState = g.ATTRIBUTE_VALUE_UNQUOTED),
              (this.state = g.CHARACTER_REFERENCE);
            break;
          case T.GREATER_THAN_SIGN:
            this._leaveAttrValue(),
              (this.state = g.DATA),
              this.emitCurrentTagToken();
            break;
          case T.NULL:
            this._err(f.unexpectedNullCharacter), (this.currentAttr.value += m);
            break;
          case T.QUOTATION_MARK:
          case T.APOSTROPHE:
          case T.LESS_THAN_SIGN:
          case T.EQUALS_SIGN:
          case T.GRAVE_ACCENT:
            this._err(f.unexpectedCharacterInUnquotedAttributeValue),
              (this.currentAttr.value += String.fromCodePoint(e));
            break;
          case T.EOF:
            this._err(f.eofInTag), this._emitEOFToken();
            break;
          default:
            this.currentAttr.value += String.fromCodePoint(e);
        }
      }
      _stateAfterAttributeValueQuoted(e) {
        switch (e) {
          case T.SPACE:
          case T.LINE_FEED:
          case T.TABULATION:
          case T.FORM_FEED:
            this._leaveAttrValue(), (this.state = g.BEFORE_ATTRIBUTE_NAME);
            break;
          case T.SOLIDUS:
            this._leaveAttrValue(), (this.state = g.SELF_CLOSING_START_TAG);
            break;
          case T.GREATER_THAN_SIGN:
            this._leaveAttrValue(),
              (this.state = g.DATA),
              this.emitCurrentTagToken();
            break;
          case T.EOF:
            this._err(f.eofInTag), this._emitEOFToken();
            break;
          default:
            this._err(f.missingWhitespaceBetweenAttributes),
              (this.state = g.BEFORE_ATTRIBUTE_NAME),
              this._stateBeforeAttributeName(e);
        }
      }
      _stateSelfClosingStartTag(e) {
        switch (e) {
          case T.GREATER_THAN_SIGN:
            (this.currentToken.selfClosing = !0),
              (this.state = g.DATA),
              this.emitCurrentTagToken();
            break;
          case T.EOF:
            this._err(f.eofInTag), this._emitEOFToken();
            break;
          default:
            this._err(f.unexpectedSolidusInTag),
              (this.state = g.BEFORE_ATTRIBUTE_NAME),
              this._stateBeforeAttributeName(e);
        }
      }
      _stateBogusComment(e) {
        var t = this.currentToken;
        switch (e) {
          case T.GREATER_THAN_SIGN:
            (this.state = g.DATA), this.emitCurrentComment(t);
            break;
          case T.EOF:
            this.emitCurrentComment(t), this._emitEOFToken();
            break;
          case T.NULL:
            this._err(f.unexpectedNullCharacter), (t.data += m);
            break;
          default:
            t.data += String.fromCodePoint(e);
        }
      }
      _stateMarkupDeclarationOpen(e) {
        this._consumeSequenceIfMatch(Vn, !0)
          ? (this._createCommentToken(Vn.length + 1),
            (this.state = g.COMMENT_START))
          : this._consumeSequenceIfMatch(jn, !1)
          ? ((this.currentLocation = this.getCurrentLocation(jn.length + 1)),
            (this.state = g.DOCTYPE))
          : this._consumeSequenceIfMatch(Qn, !0)
          ? this.inForeignNode
            ? (this.state = g.CDATA_SECTION)
            : (this._err(f.cdataInHtmlContent),
              this._createCommentToken(Qn.length + 1),
              (this.currentToken.data = "[CDATA["),
              (this.state = g.BOGUS_COMMENT))
          : this._ensureHibernation() ||
            (this._err(f.incorrectlyOpenedComment),
            this._createCommentToken(2),
            (this.state = g.BOGUS_COMMENT),
            this._stateBogusComment(e));
      }
      _stateCommentStart(e) {
        switch (e) {
          case T.HYPHEN_MINUS:
            this.state = g.COMMENT_START_DASH;
            break;
          case T.GREATER_THAN_SIGN:
            this._err(f.abruptClosingOfEmptyComment), (this.state = g.DATA);
            var t = this.currentToken;
            this.emitCurrentComment(t);
            break;
          default:
            (this.state = g.COMMENT), this._stateComment(e);
        }
      }
      _stateCommentStartDash(e) {
        var t = this.currentToken;
        switch (e) {
          case T.HYPHEN_MINUS:
            this.state = g.COMMENT_END;
            break;
          case T.GREATER_THAN_SIGN:
            this._err(f.abruptClosingOfEmptyComment),
              (this.state = g.DATA),
              this.emitCurrentComment(t);
            break;
          case T.EOF:
            this._err(f.eofInComment),
              this.emitCurrentComment(t),
              this._emitEOFToken();
            break;
          default:
            (t.data += "-"), (this.state = g.COMMENT), this._stateComment(e);
        }
      }
      _stateComment(e) {
        var t = this.currentToken;
        switch (e) {
          case T.HYPHEN_MINUS:
            this.state = g.COMMENT_END_DASH;
            break;
          case T.LESS_THAN_SIGN:
            (t.data += "<"), (this.state = g.COMMENT_LESS_THAN_SIGN);
            break;
          case T.NULL:
            this._err(f.unexpectedNullCharacter), (t.data += m);
            break;
          case T.EOF:
            this._err(f.eofInComment),
              this.emitCurrentComment(t),
              this._emitEOFToken();
            break;
          default:
            t.data += String.fromCodePoint(e);
        }
      }
      _stateCommentLessThanSign(e) {
        var t = this.currentToken;
        switch (e) {
          case T.EXCLAMATION_MARK:
            (t.data += "!"), (this.state = g.COMMENT_LESS_THAN_SIGN_BANG);
            break;
          case T.LESS_THAN_SIGN:
            t.data += "<";
            break;
          default:
            (this.state = g.COMMENT), this._stateComment(e);
        }
      }
      _stateCommentLessThanSignBang(e) {
        e === T.HYPHEN_MINUS
          ? (this.state = g.COMMENT_LESS_THAN_SIGN_BANG_DASH)
          : ((this.state = g.COMMENT), this._stateComment(e));
      }
      _stateCommentLessThanSignBangDash(e) {
        e === T.HYPHEN_MINUS
          ? (this.state = g.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH)
          : ((this.state = g.COMMENT_END_DASH), this._stateCommentEndDash(e));
      }
      _stateCommentLessThanSignBangDashDash(e) {
        e !== T.GREATER_THAN_SIGN && e !== T.EOF && this._err(f.nestedComment),
          (this.state = g.COMMENT_END),
          this._stateCommentEnd(e);
      }
      _stateCommentEndDash(e) {
        var t = this.currentToken;
        switch (e) {
          case T.HYPHEN_MINUS:
            this.state = g.COMMENT_END;
            break;
          case T.EOF:
            this._err(f.eofInComment),
              this.emitCurrentComment(t),
              this._emitEOFToken();
            break;
          default:
            (t.data += "-"), (this.state = g.COMMENT), this._stateComment(e);
        }
      }
      _stateCommentEnd(e) {
        var t = this.currentToken;
        switch (e) {
          case T.GREATER_THAN_SIGN:
            (this.state = g.DATA), this.emitCurrentComment(t);
            break;
          case T.EXCLAMATION_MARK:
            this.state = g.COMMENT_END_BANG;
            break;
          case T.HYPHEN_MINUS:
            t.data += "-";
            break;
          case T.EOF:
            this._err(f.eofInComment),
              this.emitCurrentComment(t),
              this._emitEOFToken();
            break;
          default:
            (t.data += "--"), (this.state = g.COMMENT), this._stateComment(e);
        }
      }
      _stateCommentEndBang(e) {
        var t = this.currentToken;
        switch (e) {
          case T.HYPHEN_MINUS:
            (t.data += "--!"), (this.state = g.COMMENT_END_DASH);
            break;
          case T.GREATER_THAN_SIGN:
            this._err(f.incorrectlyClosedComment),
              (this.state = g.DATA),
              this.emitCurrentComment(t);
            break;
          case T.EOF:
            this._err(f.eofInComment),
              this.emitCurrentComment(t),
              this._emitEOFToken();
            break;
          default:
            (t.data += "--!"), (this.state = g.COMMENT), this._stateComment(e);
        }
      }
      _stateDoctype(e) {
        switch (e) {
          case T.SPACE:
          case T.LINE_FEED:
          case T.TABULATION:
          case T.FORM_FEED:
            this.state = g.BEFORE_DOCTYPE_NAME;
            break;
          case T.GREATER_THAN_SIGN:
            (this.state = g.BEFORE_DOCTYPE_NAME),
              this._stateBeforeDoctypeName(e);
            break;
          case T.EOF:
            this._err(f.eofInDoctype), this._createDoctypeToken(null);
            var t = this.currentToken;
            (t.forceQuirks = !0),
              this.emitCurrentDoctype(t),
              this._emitEOFToken();
            break;
          default:
            this._err(f.missingWhitespaceBeforeDoctypeName),
              (this.state = g.BEFORE_DOCTYPE_NAME),
              this._stateBeforeDoctypeName(e);
        }
      }
      _stateBeforeDoctypeName(e) {
        if (Ea(e))
          this._createDoctypeToken(String.fromCharCode(_a(e))),
            (this.state = g.DOCTYPE_NAME);
        else
          switch (e) {
            case T.SPACE:
            case T.LINE_FEED:
            case T.TABULATION:
            case T.FORM_FEED:
              break;
            case T.NULL:
              this._err(f.unexpectedNullCharacter),
                this._createDoctypeToken(m),
                (this.state = g.DOCTYPE_NAME);
              break;
            case T.GREATER_THAN_SIGN:
              this._err(f.missingDoctypeName), this._createDoctypeToken(null);
              var t = this.currentToken;
              (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                (this.state = g.DATA);
              break;
            case T.EOF:
              this._err(f.eofInDoctype), this._createDoctypeToken(null);
              t = this.currentToken;
              (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              this._createDoctypeToken(String.fromCodePoint(e)),
                (this.state = g.DOCTYPE_NAME);
          }
      }
      _stateDoctypeName(e) {
        var t = this.currentToken;
        switch (e) {
          case T.SPACE:
          case T.LINE_FEED:
          case T.TABULATION:
          case T.FORM_FEED:
            this.state = g.AFTER_DOCTYPE_NAME;
            break;
          case T.GREATER_THAN_SIGN:
            (this.state = g.DATA), this.emitCurrentDoctype(t);
            break;
          case T.NULL:
            this._err(f.unexpectedNullCharacter), (t.name += m);
            break;
          case T.EOF:
            this._err(f.eofInDoctype),
              (t.forceQuirks = !0),
              this.emitCurrentDoctype(t),
              this._emitEOFToken();
            break;
          default:
            t.name += String.fromCodePoint(Ea(e) ? _a(e) : e);
        }
      }
      _stateAfterDoctypeName(e) {
        var t = this.currentToken;
        switch (e) {
          case T.SPACE:
          case T.LINE_FEED:
          case T.TABULATION:
          case T.FORM_FEED:
            break;
          case T.GREATER_THAN_SIGN:
            (this.state = g.DATA), this.emitCurrentDoctype(t);
            break;
          case T.EOF:
            this._err(f.eofInDoctype),
              (t.forceQuirks = !0),
              this.emitCurrentDoctype(t),
              this._emitEOFToken();
            break;
          default:
            this._consumeSequenceIfMatch(Xn, !1)
              ? (this.state = g.AFTER_DOCTYPE_PUBLIC_KEYWORD)
              : this._consumeSequenceIfMatch(Kn, !1)
              ? (this.state = g.AFTER_DOCTYPE_SYSTEM_KEYWORD)
              : this._ensureHibernation() ||
                (this._err(f.invalidCharacterSequenceAfterDoctypeName),
                (t.forceQuirks = !0),
                (this.state = g.BOGUS_DOCTYPE),
                this._stateBogusDoctype(e));
        }
      }
      _stateAfterDoctypePublicKeyword(e) {
        var t = this.currentToken;
        switch (e) {
          case T.SPACE:
          case T.LINE_FEED:
          case T.TABULATION:
          case T.FORM_FEED:
            this.state = g.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
            break;
          case T.QUOTATION_MARK:
            this._err(f.missingWhitespaceAfterDoctypePublicKeyword),
              (t.publicId = ""),
              (this.state = g.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED);
            break;
          case T.APOSTROPHE:
            this._err(f.missingWhitespaceAfterDoctypePublicKeyword),
              (t.publicId = ""),
              (this.state = g.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED);
            break;
          case T.GREATER_THAN_SIGN:
            this._err(f.missingDoctypePublicIdentifier),
              (t.forceQuirks = !0),
              (this.state = g.DATA),
              this.emitCurrentDoctype(t);
            break;
          case T.EOF:
            this._err(f.eofInDoctype),
              (t.forceQuirks = !0),
              this.emitCurrentDoctype(t),
              this._emitEOFToken();
            break;
          default:
            this._err(f.missingQuoteBeforeDoctypePublicIdentifier),
              (t.forceQuirks = !0),
              (this.state = g.BOGUS_DOCTYPE),
              this._stateBogusDoctype(e);
        }
      }
      _stateBeforeDoctypePublicIdentifier(e) {
        var t = this.currentToken;
        switch (e) {
          case T.SPACE:
          case T.LINE_FEED:
          case T.TABULATION:
          case T.FORM_FEED:
            break;
          case T.QUOTATION_MARK:
            (t.publicId = ""),
              (this.state = g.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED);
            break;
          case T.APOSTROPHE:
            (t.publicId = ""),
              (this.state = g.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED);
            break;
          case T.GREATER_THAN_SIGN:
            this._err(f.missingDoctypePublicIdentifier),
              (t.forceQuirks = !0),
              (this.state = g.DATA),
              this.emitCurrentDoctype(t);
            break;
          case T.EOF:
            this._err(f.eofInDoctype),
              (t.forceQuirks = !0),
              this.emitCurrentDoctype(t),
              this._emitEOFToken();
            break;
          default:
            this._err(f.missingQuoteBeforeDoctypePublicIdentifier),
              (t.forceQuirks = !0),
              (this.state = g.BOGUS_DOCTYPE),
              this._stateBogusDoctype(e);
        }
      }
      _stateDoctypePublicIdentifierDoubleQuoted(e) {
        var t = this.currentToken;
        switch (e) {
          case T.QUOTATION_MARK:
            this.state = g.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
            break;
          case T.NULL:
            this._err(f.unexpectedNullCharacter), (t.publicId += m);
            break;
          case T.GREATER_THAN_SIGN:
            this._err(f.abruptDoctypePublicIdentifier),
              (t.forceQuirks = !0),
              this.emitCurrentDoctype(t),
              (this.state = g.DATA);
            break;
          case T.EOF:
            this._err(f.eofInDoctype),
              (t.forceQuirks = !0),
              this.emitCurrentDoctype(t),
              this._emitEOFToken();
            break;
          default:
            t.publicId += String.fromCodePoint(e);
        }
      }
      _stateDoctypePublicIdentifierSingleQuoted(e) {
        var t = this.currentToken;
        switch (e) {
          case T.APOSTROPHE:
            this.state = g.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
            break;
          case T.NULL:
            this._err(f.unexpectedNullCharacter), (t.publicId += m);
            break;
          case T.GREATER_THAN_SIGN:
            this._err(f.abruptDoctypePublicIdentifier),
              (t.forceQuirks = !0),
              this.emitCurrentDoctype(t),
              (this.state = g.DATA);
            break;
          case T.EOF:
            this._err(f.eofInDoctype),
              (t.forceQuirks = !0),
              this.emitCurrentDoctype(t),
              this._emitEOFToken();
            break;
          default:
            t.publicId += String.fromCodePoint(e);
        }
      }
      _stateAfterDoctypePublicIdentifier(e) {
        var t = this.currentToken;
        switch (e) {
          case T.SPACE:
          case T.LINE_FEED:
          case T.TABULATION:
          case T.FORM_FEED:
            this.state = g.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
            break;
          case T.GREATER_THAN_SIGN:
            (this.state = g.DATA), this.emitCurrentDoctype(t);
            break;
          case T.QUOTATION_MARK:
            this._err(
              f.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers
            ),
              (t.systemId = ""),
              (this.state = g.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED);
            break;
          case T.APOSTROPHE:
            this._err(
              f.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers
            ),
              (t.systemId = ""),
              (this.state = g.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED);
            break;
          case T.EOF:
            this._err(f.eofInDoctype),
              (t.forceQuirks = !0),
              this.emitCurrentDoctype(t),
              this._emitEOFToken();
            break;
          default:
            this._err(f.missingQuoteBeforeDoctypeSystemIdentifier),
              (t.forceQuirks = !0),
              (this.state = g.BOGUS_DOCTYPE),
              this._stateBogusDoctype(e);
        }
      }
      _stateBetweenDoctypePublicAndSystemIdentifiers(e) {
        var t = this.currentToken;
        switch (e) {
          case T.SPACE:
          case T.LINE_FEED:
          case T.TABULATION:
          case T.FORM_FEED:
            break;
          case T.GREATER_THAN_SIGN:
            this.emitCurrentDoctype(t), (this.state = g.DATA);
            break;
          case T.QUOTATION_MARK:
            (t.systemId = ""),
              (this.state = g.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED);
            break;
          case T.APOSTROPHE:
            (t.systemId = ""),
              (this.state = g.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED);
            break;
          case T.EOF:
            this._err(f.eofInDoctype),
              (t.forceQuirks = !0),
              this.emitCurrentDoctype(t),
              this._emitEOFToken();
            break;
          default:
            this._err(f.missingQuoteBeforeDoctypeSystemIdentifier),
              (t.forceQuirks = !0),
              (this.state = g.BOGUS_DOCTYPE),
              this._stateBogusDoctype(e);
        }
      }
      _stateAfterDoctypeSystemKeyword(e) {
        var t = this.currentToken;
        switch (e) {
          case T.SPACE:
          case T.LINE_FEED:
          case T.TABULATION:
          case T.FORM_FEED:
            this.state = g.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
            break;
          case T.QUOTATION_MARK:
            this._err(f.missingWhitespaceAfterDoctypeSystemKeyword),
              (t.systemId = ""),
              (this.state = g.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED);
            break;
          case T.APOSTROPHE:
            this._err(f.missingWhitespaceAfterDoctypeSystemKeyword),
              (t.systemId = ""),
              (this.state = g.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED);
            break;
          case T.GREATER_THAN_SIGN:
            this._err(f.missingDoctypeSystemIdentifier),
              (t.forceQuirks = !0),
              (this.state = g.DATA),
              this.emitCurrentDoctype(t);
            break;
          case T.EOF:
            this._err(f.eofInDoctype),
              (t.forceQuirks = !0),
              this.emitCurrentDoctype(t),
              this._emitEOFToken();
            break;
          default:
            this._err(f.missingQuoteBeforeDoctypeSystemIdentifier),
              (t.forceQuirks = !0),
              (this.state = g.BOGUS_DOCTYPE),
              this._stateBogusDoctype(e);
        }
      }
      _stateBeforeDoctypeSystemIdentifier(e) {
        var t = this.currentToken;
        switch (e) {
          case T.SPACE:
          case T.LINE_FEED:
          case T.TABULATION:
          case T.FORM_FEED:
            break;
          case T.QUOTATION_MARK:
            (t.systemId = ""),
              (this.state = g.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED);
            break;
          case T.APOSTROPHE:
            (t.systemId = ""),
              (this.state = g.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED);
            break;
          case T.GREATER_THAN_SIGN:
            this._err(f.missingDoctypeSystemIdentifier),
              (t.forceQuirks = !0),
              (this.state = g.DATA),
              this.emitCurrentDoctype(t);
            break;
          case T.EOF:
            this._err(f.eofInDoctype),
              (t.forceQuirks = !0),
              this.emitCurrentDoctype(t),
              this._emitEOFToken();
            break;
          default:
            this._err(f.missingQuoteBeforeDoctypeSystemIdentifier),
              (t.forceQuirks = !0),
              (this.state = g.BOGUS_DOCTYPE),
              this._stateBogusDoctype(e);
        }
      }
      _stateDoctypeSystemIdentifierDoubleQuoted(e) {
        var t = this.currentToken;
        switch (e) {
          case T.QUOTATION_MARK:
            this.state = g.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
            break;
          case T.NULL:
            this._err(f.unexpectedNullCharacter), (t.systemId += m);
            break;
          case T.GREATER_THAN_SIGN:
            this._err(f.abruptDoctypeSystemIdentifier),
              (t.forceQuirks = !0),
              this.emitCurrentDoctype(t),
              (this.state = g.DATA);
            break;
          case T.EOF:
            this._err(f.eofInDoctype),
              (t.forceQuirks = !0),
              this.emitCurrentDoctype(t),
              this._emitEOFToken();
            break;
          default:
            t.systemId += String.fromCodePoint(e);
        }
      }
      _stateDoctypeSystemIdentifierSingleQuoted(e) {
        var t = this.currentToken;
        switch (e) {
          case T.APOSTROPHE:
            this.state = g.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
            break;
          case T.NULL:
            this._err(f.unexpectedNullCharacter), (t.systemId += m);
            break;
          case T.GREATER_THAN_SIGN:
            this._err(f.abruptDoctypeSystemIdentifier),
              (t.forceQuirks = !0),
              this.emitCurrentDoctype(t),
              (this.state = g.DATA);
            break;
          case T.EOF:
            this._err(f.eofInDoctype),
              (t.forceQuirks = !0),
              this.emitCurrentDoctype(t),
              this._emitEOFToken();
            break;
          default:
            t.systemId += String.fromCodePoint(e);
        }
      }
      _stateAfterDoctypeSystemIdentifier(e) {
        var t = this.currentToken;
        switch (e) {
          case T.SPACE:
          case T.LINE_FEED:
          case T.TABULATION:
          case T.FORM_FEED:
            break;
          case T.GREATER_THAN_SIGN:
            this.emitCurrentDoctype(t), (this.state = g.DATA);
            break;
          case T.EOF:
            this._err(f.eofInDoctype),
              (t.forceQuirks = !0),
              this.emitCurrentDoctype(t),
              this._emitEOFToken();
            break;
          default:
            this._err(f.unexpectedCharacterAfterDoctypeSystemIdentifier),
              (this.state = g.BOGUS_DOCTYPE),
              this._stateBogusDoctype(e);
        }
      }
      _stateBogusDoctype(e) {
        var t = this.currentToken;
        switch (e) {
          case T.GREATER_THAN_SIGN:
            this.emitCurrentDoctype(t), (this.state = g.DATA);
            break;
          case T.NULL:
            this._err(f.unexpectedNullCharacter);
            break;
          case T.EOF:
            this.emitCurrentDoctype(t), this._emitEOFToken();
        }
      }
      _stateCdataSection(e) {
        switch (e) {
          case T.RIGHT_SQUARE_BRACKET:
            this.state = g.CDATA_SECTION_BRACKET;
            break;
          case T.EOF:
            this._err(f.eofInCdata), this._emitEOFToken();
            break;
          default:
            this._emitCodePoint(e);
        }
      }
      _stateCdataSectionBracket(e) {
        e === T.RIGHT_SQUARE_BRACKET
          ? (this.state = g.CDATA_SECTION_END)
          : (this._emitChars("]"),
            (this.state = g.CDATA_SECTION),
            this._stateCdataSection(e));
      }
      _stateCdataSectionEnd(e) {
        switch (e) {
          case T.GREATER_THAN_SIGN:
            this.state = g.DATA;
            break;
          case T.RIGHT_SQUARE_BRACKET:
            this._emitChars("]");
            break;
          default:
            this._emitChars("]]"),
              (this.state = g.CDATA_SECTION),
              this._stateCdataSection(e);
        }
      }
      _stateCharacterReference(e) {
        e === T.NUMBER_SIGN
          ? (this.state = g.NUMERIC_CHARACTER_REFERENCE)
          : Ta(e)
          ? ((this.state = g.NAMED_CHARACTER_REFERENCE),
            this._stateNamedCharacterReference(e))
          : (this._flushCodePointConsumedAsCharacterReference(T.AMPERSAND),
            this._reconsumeInState(this.returnState, e));
      }
      _stateNamedCharacterReference(e) {
        var t = this._matchNamedCharacterReference(e);
        if (!this._ensureHibernation())
          if (t) {
            for (let e = 0; e < t.length; e++)
              this._flushCodePointConsumedAsCharacterReference(t[e]);
            this.state = this.returnState;
          } else
            this._flushCodePointConsumedAsCharacterReference(T.AMPERSAND),
              (this.state = g.AMBIGUOUS_AMPERSAND);
      }
      _stateAmbiguousAmpersand(e) {
        Ta(e)
          ? this._flushCodePointConsumedAsCharacterReference(e)
          : (e === T.SEMICOLON && this._err(f.unknownNamedCharacterReference),
            this._reconsumeInState(this.returnState, e));
      }
      _stateNumericCharacterReference(e) {
        (this.charRefCode = 0),
          e === T.LATIN_SMALL_X || e === T.LATIN_CAPITAL_X
            ? (this.state = g.HEXADEMICAL_CHARACTER_REFERENCE_START)
            : da(e)
            ? ((this.state = g.DECIMAL_CHARACTER_REFERENCE),
              this._stateDecimalCharacterReference(e))
            : (this._err(f.absenceOfDigitsInNumericCharacterReference),
              this._flushCodePointConsumedAsCharacterReference(T.AMPERSAND),
              this._flushCodePointConsumedAsCharacterReference(T.NUMBER_SIGN),
              this._reconsumeInState(this.returnState, e));
      }
      _stateHexademicalCharacterReferenceStart(e) {
        Aa(e)
          ? ((this.state = g.HEXADEMICAL_CHARACTER_REFERENCE),
            this._stateHexademicalCharacterReference(e))
          : (this._err(f.absenceOfDigitsInNumericCharacterReference),
            this._flushCodePointConsumedAsCharacterReference(T.AMPERSAND),
            this._flushCodePointConsumedAsCharacterReference(T.NUMBER_SIGN),
            this._unconsume(2),
            (this.state = this.returnState));
      }
      _stateHexademicalCharacterReference(e) {
        ma(e)
          ? (this.charRefCode = 16 * this.charRefCode + e - 55)
          : fa(e)
          ? (this.charRefCode = 16 * this.charRefCode + e - 87)
          : da(e)
          ? (this.charRefCode = 16 * this.charRefCode + e - 48)
          : e === T.SEMICOLON
          ? (this.state = g.NUMERIC_CHARACTER_REFERENCE_END)
          : (this._err(f.missingSemicolonAfterCharacterReference),
            (this.state = g.NUMERIC_CHARACTER_REFERENCE_END),
            this._stateNumericCharacterReferenceEnd(e));
      }
      _stateDecimalCharacterReference(e) {
        da(e)
          ? (this.charRefCode = 10 * this.charRefCode + e - 48)
          : e === T.SEMICOLON
          ? (this.state = g.NUMERIC_CHARACTER_REFERENCE_END)
          : (this._err(f.missingSemicolonAfterCharacterReference),
            (this.state = g.NUMERIC_CHARACTER_REFERENCE_END),
            this._stateNumericCharacterReferenceEnd(e));
      }
      _stateNumericCharacterReferenceEnd(e) {
        var t;
        this.charRefCode === T.NULL
          ? (this._err(f.nullCharacterReference),
            (this.charRefCode = T.REPLACEMENT_CHARACTER))
          : 1114111 < this.charRefCode
          ? (this._err(f.characterReferenceOutsideUnicodeRange),
            (this.charRefCode = T.REPLACEMENT_CHARACTER))
          : zn(this.charRefCode)
          ? (this._err(f.surrogateCharacterReference),
            (this.charRefCode = T.REPLACEMENT_CHARACTER))
          : ea(this.charRefCode)
          ? this._err(f.noncharacterCharacterReference)
          : (!Zn(this.charRefCode) && this.charRefCode !== T.CARRIAGE_RETURN) ||
            (this._err(f.controlCharacterReference),
            void 0 === (t = ua.get(this.charRefCode))) ||
            (this.charRefCode = t),
          this._flushCodePointConsumedAsCharacterReference(this.charRefCode),
          this._reconsumeInState(this.returnState, e);
      }
    },
    ba = new Set([
      x.DD,
      x.DT,
      x.LI,
      x.OPTGROUP,
      x.OPTION,
      x.P,
      x.RB,
      x.RP,
      x.RT,
      x.RTC,
    ]),
    Ra = new Set([
      ...ba,
      x.CAPTION,
      x.COLGROUP,
      x.TBODY,
      x.TD,
      x.TFOOT,
      x.TH,
      x.THEAD,
      x.TR,
    ]),
    Da = new Map([
      [x.APPLET, P.HTML],
      [x.CAPTION, P.HTML],
      [x.HTML, P.HTML],
      [x.MARQUEE, P.HTML],
      [x.OBJECT, P.HTML],
      [x.TABLE, P.HTML],
      [x.TD, P.HTML],
      [x.TEMPLATE, P.HTML],
      [x.TH, P.HTML],
      [x.ANNOTATION_XML, P.MATHML],
      [x.MI, P.MATHML],
      [x.MN, P.MATHML],
      [x.MO, P.MATHML],
      [x.MS, P.MATHML],
      [x.MTEXT, P.MATHML],
      [x.DESC, P.SVG],
      [x.FOREIGN_OBJECT, P.SVG],
      [x.TITLE, P.SVG],
    ]),
    Oa = [x.H1, x.H2, x.H3, x.H4, x.H5, x.H6],
    La = [x.TR, x.TEMPLATE, x.HTML],
    ya = [x.TBODY, x.TFOOT, x.THEAD, x.TEMPLATE, x.HTML],
    ka = [x.TABLE, x.TEMPLATE, x.HTML],
    va = [x.TD, x.TH],
    Ma = class {
      get currentTmplContentOrNode() {
        return this._isInTemplate()
          ? this.treeAdapter.getTemplateContent(this.current)
          : this.current;
      }
      constructor(e, t, r) {
        (this.treeAdapter = t),
          (this.handler = r),
          (this.items = []),
          (this.tagIDs = []),
          (this.stackTop = -1),
          (this.tmplCount = 0),
          (this.currentTagId = x.UNKNOWN),
          (this.current = e);
      }
      _indexOf(e) {
        return this.items.lastIndexOf(e, this.stackTop);
      }
      _isInTemplate() {
        return (
          this.currentTagId === x.TEMPLATE &&
          this.treeAdapter.getNamespaceURI(this.current) === P.HTML
        );
      }
      _updateCurrentElement() {
        (this.current = this.items[this.stackTop]),
          (this.currentTagId = this.tagIDs[this.stackTop]);
      }
      push(e, t) {
        this.stackTop++,
          (this.items[this.stackTop] = e),
          (this.current = e),
          (this.tagIDs[this.stackTop] = t),
          (this.currentTagId = t),
          this._isInTemplate() && this.tmplCount++,
          this.handler.onItemPush(e, t, !0);
      }
      pop() {
        var e = this.current;
        0 < this.tmplCount && this._isInTemplate() && this.tmplCount--,
          this.stackTop--,
          this._updateCurrentElement(),
          this.handler.onItemPop(e, !0);
      }
      replace(e, t) {
        e = this._indexOf(e);
        (this.items[e] = t), e === this.stackTop && (this.current = t);
      }
      insertAfter(e, t, r) {
        e = this._indexOf(e) + 1;
        this.items.splice(e, 0, t),
          this.tagIDs.splice(e, 0, r),
          this.stackTop++,
          e === this.stackTop && this._updateCurrentElement(),
          this.handler.onItemPush(
            this.current,
            this.currentTagId,
            e === this.stackTop
          );
      }
      popUntilTagNamePopped(e) {
        let t = this.stackTop + 1;
        for (
          ;
          0 < (t = this.tagIDs.lastIndexOf(e, t - 1)) &&
          this.treeAdapter.getNamespaceURI(this.items[t]) !== P.HTML;

        );
        this.shortenToLength(t < 0 ? 0 : t);
      }
      shortenToLength(e) {
        for (; this.stackTop >= e; ) {
          var t = this.current;
          0 < this.tmplCount && this._isInTemplate() && --this.tmplCount,
            this.stackTop--,
            this._updateCurrentElement(),
            this.handler.onItemPop(t, this.stackTop < e);
        }
      }
      popUntilElementPopped(e) {
        e = this._indexOf(e);
        this.shortenToLength(e < 0 ? 0 : e);
      }
      popUntilPopped(e, t) {
        e = this._indexOfTagNames(e, t);
        this.shortenToLength(e < 0 ? 0 : e);
      }
      popUntilNumberedHeaderPopped() {
        this.popUntilPopped(Oa, P.HTML);
      }
      popUntilTableCellPopped() {
        this.popUntilPopped(va, P.HTML);
      }
      popAllUpToHtmlElement() {
        (this.tmplCount = 0), this.shortenToLength(1);
      }
      _indexOfTagNames(t, r) {
        for (let e = this.stackTop; 0 <= e; e--)
          if (
            t.includes(this.tagIDs[e]) &&
            this.treeAdapter.getNamespaceURI(this.items[e]) === r
          )
            return e;
        return -1;
      }
      clearBackTo(e, t) {
        e = this._indexOfTagNames(e, t);
        this.shortenToLength(e + 1);
      }
      clearBackToTableContext() {
        this.clearBackTo(ka, P.HTML);
      }
      clearBackToTableBodyContext() {
        this.clearBackTo(ya, P.HTML);
      }
      clearBackToTableRowContext() {
        this.clearBackTo(La, P.HTML);
      }
      remove(e) {
        var t = this._indexOf(e);
        0 <= t &&
          (t === this.stackTop
            ? this.pop()
            : (this.items.splice(t, 1),
              this.tagIDs.splice(t, 1),
              this.stackTop--,
              this._updateCurrentElement(),
              this.handler.onItemPop(e, !1)));
      }
      tryPeekProperlyNestedBodyElement() {
        return 1 <= this.stackTop && this.tagIDs[1] === x.BODY
          ? this.items[1]
          : null;
      }
      contains(e) {
        return -1 < this._indexOf(e);
      }
      getCommonAncestor(e) {
        e = this._indexOf(e) - 1;
        return 0 <= e ? this.items[e] : null;
      }
      isRootHtmlElementCurrent() {
        return 0 === this.stackTop && this.tagIDs[0] === x.HTML;
      }
      hasInScope(t) {
        for (let e = this.stackTop; 0 <= e; e--) {
          var r = this.tagIDs[e],
            n = this.treeAdapter.getNamespaceURI(this.items[e]);
          if (r === t && n === P.HTML) return !0;
          if (Da.get(r) === n) return !1;
        }
        return !0;
      }
      hasNumberedHeaderInScope() {
        for (let e = this.stackTop; 0 <= e; e--) {
          var t = this.tagIDs[e],
            r = this.treeAdapter.getNamespaceURI(this.items[e]);
          if (ca(t) && r === P.HTML) return !0;
          if (Da.get(t) === r) return !1;
        }
        return !0;
      }
      hasInListItemScope(t) {
        for (let e = this.stackTop; 0 <= e; e--) {
          var r = this.tagIDs[e],
            n = this.treeAdapter.getNamespaceURI(this.items[e]);
          if (r === t && n === P.HTML) return !0;
          if (((r === x.UL || r === x.OL) && n === P.HTML) || Da.get(r) === n)
            return !1;
        }
        return !0;
      }
      hasInButtonScope(t) {
        for (let e = this.stackTop; 0 <= e; e--) {
          var r = this.tagIDs[e],
            n = this.treeAdapter.getNamespaceURI(this.items[e]);
          if (r === t && n === P.HTML) return !0;
          if ((r === x.BUTTON && n === P.HTML) || Da.get(r) === n) return !1;
        }
        return !0;
      }
      hasInTableScope(t) {
        for (let e = this.stackTop; 0 <= e; e--) {
          var r = this.tagIDs[e],
            n = this.treeAdapter.getNamespaceURI(this.items[e]);
          if (n === P.HTML) {
            if (r === t) return !0;
            if (r === x.TABLE || r === x.TEMPLATE || r === x.HTML) return !1;
          }
        }
        return !0;
      }
      hasTableBodyContextInTableScope() {
        for (let e = this.stackTop; 0 <= e; e--) {
          var t = this.tagIDs[e],
            r = this.treeAdapter.getNamespaceURI(this.items[e]);
          if (r === P.HTML) {
            if (t === x.TBODY || t === x.THEAD || t === x.TFOOT) return !0;
            if (t === x.TABLE || t === x.HTML) return !1;
          }
        }
        return !0;
      }
      hasInSelectScope(t) {
        for (let e = this.stackTop; 0 <= e; e--) {
          var r = this.tagIDs[e],
            n = this.treeAdapter.getNamespaceURI(this.items[e]);
          if (n === P.HTML) {
            if (r === t) return !0;
            if (r !== x.OPTION && r !== x.OPTGROUP) return !1;
          }
        }
        return !0;
      }
      generateImpliedEndTags() {
        for (; ba.has(this.currentTagId); ) this.pop();
      }
      generateImpliedEndTagsThoroughly() {
        for (; Ra.has(this.currentTagId); ) this.pop();
      }
      generateImpliedEndTagsWithExclusion(e) {
        for (; this.currentTagId !== e && Ra.has(this.currentTagId); )
          this.pop();
      }
    },
    Pa =
      (((p = Ia = Ia || {})[(p.Marker = 0)] = "Marker"),
      (p[(p.Element = 1)] = "Element"),
      { type: Ia.Marker }),
    wa = class {
      constructor(e) {
        (this.treeAdapter = e), (this.entries = []), (this.bookmark = null);
      }
      _getNoahArkConditionCandidates(e, t) {
        var r = [],
          n = t.length,
          a = this.treeAdapter.getTagName(e),
          s = this.treeAdapter.getNamespaceURI(e);
        for (let e = 0; e < this.entries.length; e++) {
          var i = this.entries[e];
          if (i.type === Ia.Marker) break;
          var i = i["element"];
          this.treeAdapter.getTagName(i) === a &&
            this.treeAdapter.getNamespaceURI(i) === s &&
            (i = this.treeAdapter.getAttrList(i)).length === n &&
            r.push({ idx: e, attrs: i });
        }
        return r;
      }
      _ensureNoahArkCondition(e) {
        if (!(this.entries.length < 3)) {
          var r = this.treeAdapter.getAttrList(e),
            n = this._getNoahArkConditionCandidates(e, r);
          if (!(n.length < 3)) {
            const s = new Map(r.map((e) => [e.name, e.value]));
            let t = 0;
            for (let e = 0; e < n.length; e++) {
              var a = n[e];
              a.attrs.every((e) => s.get(e.name) === e.value) &&
                3 <= (t += 1) &&
                this.entries.splice(a.idx, 1);
            }
          }
        }
      }
      insertMarker() {
        this.entries.unshift(Pa);
      }
      pushElement(e, t) {
        this._ensureNoahArkCondition(e),
          this.entries.unshift({ type: Ia.Element, element: e, token: t });
      }
      insertElementAfterBookmark(e, t) {
        var r = this.entries.indexOf(this.bookmark);
        this.entries.splice(r, 0, { type: Ia.Element, element: e, token: t });
      }
      removeEntry(e) {
        e = this.entries.indexOf(e);
        0 <= e && this.entries.splice(e, 1);
      }
      clearToLastMarker() {
        var e = this.entries.indexOf(Pa);
        0 <= e ? this.entries.splice(0, e + 1) : (this.entries.length = 0);
      }
      getElementEntryInScopeWithTagName(t) {
        var e = this.entries.find(
          (e) =>
            e.type === Ia.Marker || this.treeAdapter.getTagName(e.element) === t
        );
        return e && e.type === Ia.Element ? e : null;
      }
      getElementEntry(t) {
        return this.entries.find(
          (e) => e.type === Ia.Element && e.element === t
        );
      }
    };
  function Ba(e) {
    return { nodeName: "#text", value: e, parentNode: null };
  }
  var xa = {
      createDocument() {
        return { nodeName: "#document", mode: w.NO_QUIRKS, childNodes: [] };
      },
      createDocumentFragment() {
        return { nodeName: "#document-fragment", childNodes: [] };
      },
      createElement(e, t, r) {
        return {
          nodeName: e,
          tagName: e,
          attrs: r,
          namespaceURI: t,
          childNodes: [],
          parentNode: null,
        };
      },
      createCommentNode(e) {
        return { nodeName: "#comment", data: e, parentNode: null };
      },
      appendChild(e, t) {
        e.childNodes.push(t), (t.parentNode = e);
      },
      insertBefore(e, t, r) {
        r = e.childNodes.indexOf(r);
        e.childNodes.splice(r, 0, t), (t.parentNode = e);
      },
      setTemplateContent(e, t) {
        e.content = t;
      },
      getTemplateContent(e) {
        return e.content;
      },
      setDocumentType(e, t, r, n) {
        var a = e.childNodes.find((e) => "#documentType" === e.nodeName);
        a
          ? ((a.name = t), (a.publicId = r), (a.systemId = n))
          : xa.appendChild(e, {
              nodeName: "#documentType",
              name: t,
              publicId: r,
              systemId: n,
              parentNode: null,
            });
      },
      setDocumentMode(e, t) {
        e.mode = t;
      },
      getDocumentMode(e) {
        return e.mode;
      },
      detachNode(e) {
        var t;
        e.parentNode &&
          ((t = e.parentNode.childNodes.indexOf(e)),
          e.parentNode.childNodes.splice(t, 1),
          (e.parentNode = null));
      },
      insertText(e, t) {
        if (0 < e.childNodes.length) {
          var r = e.childNodes[e.childNodes.length - 1];
          if (xa.isTextNode(r)) return void (r.value += t);
        }
        xa.appendChild(e, Ba(t));
      },
      insertTextBefore(e, t, r) {
        var n = e.childNodes[e.childNodes.indexOf(r) - 1];
        n && xa.isTextNode(n) ? (n.value += t) : xa.insertBefore(e, Ba(t), r);
      },
      adoptAttributes(t, r) {
        var n = new Set(t.attrs.map((e) => e.name));
        for (let e = 0; e < r.length; e++)
          n.has(r[e].name) || t.attrs.push(r[e]);
      },
      getFirstChild(e) {
        return e.childNodes[0];
      },
      getChildNodes(e) {
        return e.childNodes;
      },
      getParentNode(e) {
        return e.parentNode;
      },
      getAttrList(e) {
        return e.attrs;
      },
      getTagName(e) {
        return e.tagName;
      },
      getNamespaceURI(e) {
        return e.namespaceURI;
      },
      getTextNodeContent(e) {
        return e.value;
      },
      getCommentNodeContent(e) {
        return e.data;
      },
      getDocumentTypeNodeName(e) {
        return e.name;
      },
      getDocumentTypeNodePublicId(e) {
        return e.publicId;
      },
      getDocumentTypeNodeSystemId(e) {
        return e.systemId;
      },
      isTextNode(e) {
        return "#text" === e.nodeName;
      },
      isCommentNode(e) {
        return "#comment" === e.nodeName;
      },
      isDocumentTypeNode(e) {
        return "#documentType" === e.nodeName;
      },
      isElementNode(e) {
        return Object.prototype.hasOwnProperty.call(e, "tagName");
      },
      setNodeSourceCodeLocation(e, t) {
        e.sourceCodeLocation = t;
      },
      getNodeSourceCodeLocation(e) {
        return e.sourceCodeLocation;
      },
      updateNodeSourceCodeLocation(e, t) {
        e.sourceCodeLocation = { ...e.sourceCodeLocation, ...t };
      },
    },
    Fa = "html",
    Ua = "about:legacy-compat",
    Ha = "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd",
    Ga = [
      "+//silmaril//dtd html pro v0r11 19970101//",
      "-//as//dtd html 3.0 aswedit + extensions//",
      "-//advasoft ltd//dtd html 3.0 aswedit + extensions//",
      "-//ietf//dtd html 2.0 level 1//",
      "-//ietf//dtd html 2.0 level 2//",
      "-//ietf//dtd html 2.0 strict level 1//",
      "-//ietf//dtd html 2.0 strict level 2//",
      "-//ietf//dtd html 2.0 strict//",
      "-//ietf//dtd html 2.0//",
      "-//ietf//dtd html 2.1e//",
      "-//ietf//dtd html 3.0//",
      "-//ietf//dtd html 3.2 final//",
      "-//ietf//dtd html 3.2//",
      "-//ietf//dtd html 3//",
      "-//ietf//dtd html level 0//",
      "-//ietf//dtd html level 1//",
      "-//ietf//dtd html level 2//",
      "-//ietf//dtd html level 3//",
      "-//ietf//dtd html strict level 0//",
      "-//ietf//dtd html strict level 1//",
      "-//ietf//dtd html strict level 2//",
      "-//ietf//dtd html strict level 3//",
      "-//ietf//dtd html strict//",
      "-//ietf//dtd html//",
      "-//metrius//dtd metrius presentational//",
      "-//microsoft//dtd internet explorer 2.0 html strict//",
      "-//microsoft//dtd internet explorer 2.0 html//",
      "-//microsoft//dtd internet explorer 2.0 tables//",
      "-//microsoft//dtd internet explorer 3.0 html strict//",
      "-//microsoft//dtd internet explorer 3.0 html//",
      "-//microsoft//dtd internet explorer 3.0 tables//",
      "-//netscape comm. corp.//dtd html//",
      "-//netscape comm. corp.//dtd strict html//",
      "-//o'reilly and associates//dtd html 2.0//",
      "-//o'reilly and associates//dtd html extended 1.0//",
      "-//o'reilly and associates//dtd html extended relaxed 1.0//",
      "-//sq//dtd html 2.0 hotmetal + extensions//",
      "-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//",
      "-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//",
      "-//spyglass//dtd html 2.0 extended//",
      "-//sun microsystems corp.//dtd hotjava html//",
      "-//sun microsystems corp.//dtd hotjava strict html//",
      "-//w3c//dtd html 3 1995-03-24//",
      "-//w3c//dtd html 3.2 draft//",
      "-//w3c//dtd html 3.2 final//",
      "-//w3c//dtd html 3.2//",
      "-//w3c//dtd html 3.2s draft//",
      "-//w3c//dtd html 4.0 frameset//",
      "-//w3c//dtd html 4.0 transitional//",
      "-//w3c//dtd html experimental 19960712//",
      "-//w3c//dtd html experimental 970421//",
      "-//w3c//dtd w3 html//",
      "-//w3o//dtd w3 html 3.0//",
      "-//webtechs//dtd mozilla html 2.0//",
      "-//webtechs//dtd mozilla html//",
    ],
    qa = [
      ...Ga,
      "-//w3c//dtd html 4.01 frameset//",
      "-//w3c//dtd html 4.01 transitional//",
    ],
    Ya = new Set([
      "-//w3o//dtd w3 html strict 3.0//en//",
      "-/w3c/dtd html 4.0 transitional/en",
      "html",
    ]),
    Va = [
      "-//w3c//dtd xhtml 1.0 frameset//",
      "-//w3c//dtd xhtml 1.0 transitional//",
    ],
    Qa = [
      ...Va,
      "-//w3c//dtd html 4.01 frameset//",
      "-//w3c//dtd html 4.01 transitional//",
    ];
  function ja(t, e) {
    return e.some((e) => t.startsWith(e));
  }
  var Wa = { TEXT_HTML: "text/html", APPLICATION_XML: "application/xhtml+xml" },
    Xa = "definitionurl",
    Ka = "definitionURL",
    za = new Map(
      [
        "attributeName",
        "attributeType",
        "baseFrequency",
        "baseProfile",
        "calcMode",
        "clipPathUnits",
        "diffuseConstant",
        "edgeMode",
        "filterUnits",
        "glyphRef",
        "gradientTransform",
        "gradientUnits",
        "kernelMatrix",
        "kernelUnitLength",
        "keyPoints",
        "keySplines",
        "keyTimes",
        "lengthAdjust",
        "limitingConeAngle",
        "markerHeight",
        "markerUnits",
        "markerWidth",
        "maskContentUnits",
        "maskUnits",
        "numOctaves",
        "pathLength",
        "patternContentUnits",
        "patternTransform",
        "patternUnits",
        "pointsAtX",
        "pointsAtY",
        "pointsAtZ",
        "preserveAlpha",
        "preserveAspectRatio",
        "primitiveUnits",
        "refX",
        "refY",
        "repeatCount",
        "repeatDur",
        "requiredExtensions",
        "requiredFeatures",
        "specularConstant",
        "specularExponent",
        "spreadMethod",
        "startOffset",
        "stdDeviation",
        "stitchTiles",
        "surfaceScale",
        "systemLanguage",
        "tableValues",
        "targetX",
        "targetY",
        "textLength",
        "viewBox",
        "viewTarget",
        "xChannelSelector",
        "yChannelSelector",
        "zoomAndPan",
      ].map((e) => [e.toLowerCase(), e])
    ),
    $a = new Map([
      [
        "xlink:actuate",
        { prefix: "xlink", name: "actuate", namespace: P.XLINK },
      ],
      [
        "xlink:arcrole",
        { prefix: "xlink", name: "arcrole", namespace: P.XLINK },
      ],
      ["xlink:href", { prefix: "xlink", name: "href", namespace: P.XLINK }],
      ["xlink:role", { prefix: "xlink", name: "role", namespace: P.XLINK }],
      ["xlink:show", { prefix: "xlink", name: "show", namespace: P.XLINK }],
      ["xlink:title", { prefix: "xlink", name: "title", namespace: P.XLINK }],
      ["xlink:type", { prefix: "xlink", name: "type", namespace: P.XLINK }],
      ["xml:base", { prefix: "xml", name: "base", namespace: P.XML }],
      ["xml:lang", { prefix: "xml", name: "lang", namespace: P.XML }],
      ["xml:space", { prefix: "xml", name: "space", namespace: P.XML }],
      ["xmlns", { prefix: "", name: "xmlns", namespace: P.XMLNS }],
      ["xmlns:xlink", { prefix: "xmlns", name: "xlink", namespace: P.XMLNS }],
    ]),
    Ja = new Map(
      [
        "altGlyph",
        "altGlyphDef",
        "altGlyphItem",
        "animateColor",
        "animateMotion",
        "animateTransform",
        "clipPath",
        "feBlend",
        "feColorMatrix",
        "feComponentTransfer",
        "feComposite",
        "feConvolveMatrix",
        "feDiffuseLighting",
        "feDisplacementMap",
        "feDistantLight",
        "feFlood",
        "feFuncA",
        "feFuncB",
        "feFuncG",
        "feFuncR",
        "feGaussianBlur",
        "feImage",
        "feMerge",
        "feMergeNode",
        "feMorphology",
        "feOffset",
        "fePointLight",
        "feSpecularLighting",
        "feSpotLight",
        "feTile",
        "feTurbulence",
        "foreignObject",
        "glyphRef",
        "linearGradient",
        "radialGradient",
        "textPath",
      ].map((e) => [e.toLowerCase(), e])
    ),
    Za = new Set([
      x.B,
      x.BIG,
      x.BLOCKQUOTE,
      x.BODY,
      x.BR,
      x.CENTER,
      x.CODE,
      x.DD,
      x.DIV,
      x.DL,
      x.DT,
      x.EM,
      x.EMBED,
      x.H1,
      x.H2,
      x.H3,
      x.H4,
      x.H5,
      x.H6,
      x.HEAD,
      x.HR,
      x.I,
      x.IMG,
      x.LI,
      x.LISTING,
      x.MENU,
      x.META,
      x.NOBR,
      x.OL,
      x.P,
      x.PRE,
      x.RUBY,
      x.S,
      x.SMALL,
      x.SPAN,
      x.STRONG,
      x.STRIKE,
      x.SUB,
      x.SUP,
      x.TABLE,
      x.TT,
      x.U,
      x.UL,
      x.VAR,
    ]);
  function es(t) {
    for (let e = 0; e < t.attrs.length; e++)
      if (t.attrs[e].name === Xa) {
        t.attrs[e].name = Ka;
        break;
      }
  }
  function ts(t) {
    for (let e = 0; e < t.attrs.length; e++) {
      var r = za.get(t.attrs[e].name);
      null != r && (t.attrs[e].name = r);
    }
  }
  function rs(t) {
    for (let e = 0; e < t.attrs.length; e++) {
      var r = $a.get(t.attrs[e].name);
      r &&
        ((t.attrs[e].prefix = r.prefix),
        (t.attrs[e].name = r.name),
        (t.attrs[e].namespace = r.namespace));
    }
  }
  function ns(e, t, r, n) {
    return (
      ((!n || n === P.HTML) &&
        (function (e, t, r) {
          if (t === P.MATHML && e === x.ANNOTATION_XML)
            for (let e = 0; e < r.length; e++) {
              var n;
              if (r[e].name === na.ENCODING)
                return (
                  (n = r[e].value.toLowerCase()) === Wa.TEXT_HTML ||
                  n === Wa.APPLICATION_XML
                );
            }
          return (
            t === P.SVG &&
            (e === x.FOREIGN_OBJECT || e === x.DESC || e === x.TITLE)
          );
        })(e, t, r)) ||
      ((!n || n === P.MATHML) &&
        ((r = e), t === P.MATHML) &&
        (r === x.MI || r === x.MO || r === x.MN || r === x.MS || r === x.MTEXT))
    );
  }
  var U,
    as = "hidden",
    ss = 8,
    is = 3,
    os =
      (((r = U = U || {})[(r.INITIAL = 0)] = "INITIAL"),
      (r[(r.BEFORE_HTML = 1)] = "BEFORE_HTML"),
      (r[(r.BEFORE_HEAD = 2)] = "BEFORE_HEAD"),
      (r[(r.IN_HEAD = 3)] = "IN_HEAD"),
      (r[(r.IN_HEAD_NO_SCRIPT = 4)] = "IN_HEAD_NO_SCRIPT"),
      (r[(r.AFTER_HEAD = 5)] = "AFTER_HEAD"),
      (r[(r.IN_BODY = 6)] = "IN_BODY"),
      (r[(r.TEXT = 7)] = "TEXT"),
      (r[(r.IN_TABLE = 8)] = "IN_TABLE"),
      (r[(r.IN_TABLE_TEXT = 9)] = "IN_TABLE_TEXT"),
      (r[(r.IN_CAPTION = 10)] = "IN_CAPTION"),
      (r[(r.IN_COLUMN_GROUP = 11)] = "IN_COLUMN_GROUP"),
      (r[(r.IN_TABLE_BODY = 12)] = "IN_TABLE_BODY"),
      (r[(r.IN_ROW = 13)] = "IN_ROW"),
      (r[(r.IN_CELL = 14)] = "IN_CELL"),
      (r[(r.IN_SELECT = 15)] = "IN_SELECT"),
      (r[(r.IN_SELECT_IN_TABLE = 16)] = "IN_SELECT_IN_TABLE"),
      (r[(r.IN_TEMPLATE = 17)] = "IN_TEMPLATE"),
      (r[(r.AFTER_BODY = 18)] = "AFTER_BODY"),
      (r[(r.IN_FRAMESET = 19)] = "IN_FRAMESET"),
      (r[(r.AFTER_FRAMESET = 20)] = "AFTER_FRAMESET"),
      (r[(r.AFTER_AFTER_BODY = 21)] = "AFTER_AFTER_BODY"),
      (r[(r.AFTER_AFTER_FRAMESET = 22)] = "AFTER_AFTER_FRAMESET"),
      {
        startLine: -1,
        startCol: -1,
        startOffset: -1,
        endLine: -1,
        endCol: -1,
        endOffset: -1,
      }),
    cs = new Set([x.TABLE, x.TBODY, x.TFOOT, x.THEAD, x.TR]),
    ls = {
      scriptingEnabled: !0,
      sourceCodeLocationInfo: !1,
      treeAdapter: xa,
      onParseError: null,
    },
    hs = class {
      constructor(e, t, r = null, n = null) {
        (this.fragmentContext = r),
          (this.scriptHandler = n),
          (this.currentToken = null),
          (this.stopped = !1),
          (this.insertionMode = U.INITIAL),
          (this.originalInsertionMode = U.INITIAL),
          (this.headElement = null),
          (this.formElement = null),
          (this.currentNotInHTML = !1),
          (this.tmplInsertionModeStack = []),
          (this.pendingCharacterTokens = []),
          (this.hasNonWhitespacePendingCharacterToken = !1),
          (this.framesetOk = !0),
          (this.skipNextNewLine = !1),
          (this.fosterParentingEnabled = !1),
          (this.options = { ...ls, ...e }),
          (this.treeAdapter = this.options.treeAdapter),
          (this.onParseError = this.options.onParseError),
          this.onParseError && (this.options.sourceCodeLocationInfo = !0),
          (this.document = null != t ? t : this.treeAdapter.createDocument()),
          (this.tokenizer = new Sa(this.options, this)),
          (this.activeFormattingElements = new wa(this.treeAdapter)),
          (this.fragmentContextID = r
            ? ia(this.treeAdapter.getTagName(r))
            : x.UNKNOWN),
          this._setContextModes(
            null != r ? r : this.document,
            this.fragmentContextID
          ),
          (this.openElements = new Ma(this.document, this.treeAdapter, this));
      }
      static parse(e, t) {
        t = new this(t);
        return t.tokenizer.write(e, !0), t.document;
      }
      static getFragmentParser(e, t) {
        var t = { ...ls, ...t },
          r =
            (null != e ||
              (e = t.treeAdapter.createElement(B.TEMPLATE, P.HTML, [])),
            t.treeAdapter.createElement("documentmock", P.HTML, [])),
          t = new this(t, r, e);
        return (
          t.fragmentContextID === x.TEMPLATE &&
            t.tmplInsertionModeStack.unshift(U.IN_TEMPLATE),
          t._initTokenizerForFragmentParsing(),
          t._insertFakeRootElement(),
          t._resetInsertionMode(),
          t._findFormInFragmentContext(),
          t
        );
      }
      getFragment() {
        var e = this.treeAdapter.getFirstChild(this.document),
          t = this.treeAdapter.createDocumentFragment();
        return this._adoptNodes(e, t), t;
      }
      _err(e, t, r) {
        this.onParseError &&
          ((t = {
            code: t,
            startLine: (e = null != (t = e.location) ? t : os).startLine,
            startCol: e.startCol,
            startOffset: e.startOffset,
            endLine: r ? e.startLine : e.endLine,
            endCol: r ? e.startCol : e.endCol,
            endOffset: r ? e.startOffset : e.endOffset,
          }),
          this.onParseError(t));
      }
      onItemPush(e, t, r) {
        var n, a;
        null != (a = (n = this.treeAdapter).onItemPush) && a.call(n, e),
          r && 0 < this.openElements.stackTop && this._setContextModes(e, t);
      }
      onItemPop(e, t) {
        var r, n;
        if (
          (this.options.sourceCodeLocationInfo &&
            this._setEndLocation(e, this.currentToken),
          null != (n = (r = this.treeAdapter).onItemPop) &&
            n.call(r, e, this.openElements.current),
          t)
        ) {
          let e, t;
          0 === this.openElements.stackTop && this.fragmentContext
            ? ((e = this.fragmentContext), (t = this.fragmentContextID))
            : ({ current: e, currentTagId: t } = this.openElements),
            this._setContextModes(e, t);
        }
      }
      _setContextModes(e, t) {
        var r =
          e === this.document || this.treeAdapter.getNamespaceURI(e) === P.HTML;
        (this.currentNotInHTML = !r),
          (this.tokenizer.inForeignNode =
            !r && !this._isIntegrationPoint(t, e));
      }
      _switchToTextParsing(e, t) {
        this._insertElement(e, P.HTML),
          (this.tokenizer.state = t),
          (this.originalInsertionMode = this.insertionMode),
          (this.insertionMode = U.TEXT);
      }
      switchToPlaintextParsing() {
        (this.insertionMode = U.TEXT),
          (this.originalInsertionMode = U.IN_BODY),
          (this.tokenizer.state = F.PLAINTEXT);
      }
      _getAdjustedCurrentElement() {
        return 0 === this.openElements.stackTop && this.fragmentContext
          ? this.fragmentContext
          : this.openElements.current;
      }
      _findFormInFragmentContext() {
        let e = this.fragmentContext;
        for (; e; ) {
          if (this.treeAdapter.getTagName(e) === B.FORM) {
            this.formElement = e;
            break;
          }
          e = this.treeAdapter.getParentNode(e);
        }
      }
      _initTokenizerForFragmentParsing() {
        if (
          this.fragmentContext &&
          this.treeAdapter.getNamespaceURI(this.fragmentContext) === P.HTML
        )
          switch (this.fragmentContextID) {
            case x.TITLE:
            case x.TEXTAREA:
              this.tokenizer.state = F.RCDATA;
              break;
            case x.STYLE:
            case x.XMP:
            case x.IFRAME:
            case x.NOEMBED:
            case x.NOFRAMES:
            case x.NOSCRIPT:
              this.tokenizer.state = F.RAWTEXT;
              break;
            case x.SCRIPT:
              this.tokenizer.state = F.SCRIPT_DATA;
              break;
            case x.PLAINTEXT:
              this.tokenizer.state = F.PLAINTEXT;
          }
      }
      _setDocumentType(e) {
        var t = e.name || "",
          r = e.publicId || "",
          n = e.systemId || "";
        this.treeAdapter.setDocumentType(this.document, t, r, n),
          e.location &&
            (t = this.treeAdapter
              .getChildNodes(this.document)
              .find((e) => this.treeAdapter.isDocumentTypeNode(e))) &&
            this.treeAdapter.setNodeSourceCodeLocation(t, e.location);
      }
      _attachElementToTree(e, t) {
        this.options.sourceCodeLocationInfo &&
          ((t = t && { ...t, startTag: t }),
          this.treeAdapter.setNodeSourceCodeLocation(e, t)),
          this._shouldFosterParentOnInsertion()
            ? this._fosterParentElement(e)
            : ((t = this.openElements.currentTmplContentOrNode),
              this.treeAdapter.appendChild(t, e));
      }
      _appendElement(e, t) {
        t = this.treeAdapter.createElement(e.tagName, t, e.attrs);
        this._attachElementToTree(t, e.location);
      }
      _insertElement(e, t) {
        t = this.treeAdapter.createElement(e.tagName, t, e.attrs);
        this._attachElementToTree(t, e.location),
          this.openElements.push(t, e.tagID);
      }
      _insertFakeElement(e, t) {
        e = this.treeAdapter.createElement(e, P.HTML, []);
        this._attachElementToTree(e, null), this.openElements.push(e, t);
      }
      _insertTemplate(e) {
        var t = this.treeAdapter.createElement(e.tagName, P.HTML, e.attrs),
          r = this.treeAdapter.createDocumentFragment();
        this.treeAdapter.setTemplateContent(t, r),
          this._attachElementToTree(t, e.location),
          this.openElements.push(t, e.tagID),
          this.options.sourceCodeLocationInfo &&
            this.treeAdapter.setNodeSourceCodeLocation(r, null);
      }
      _insertFakeRootElement() {
        var e = this.treeAdapter.createElement(B.HTML, P.HTML, []);
        this.options.sourceCodeLocationInfo &&
          this.treeAdapter.setNodeSourceCodeLocation(e, null),
          this.treeAdapter.appendChild(this.openElements.current, e),
          this.openElements.push(e, x.HTML);
      }
      _appendCommentNode(e, t) {
        var r = this.treeAdapter.createCommentNode(e.data);
        this.treeAdapter.appendChild(t, r),
          this.options.sourceCodeLocationInfo &&
            this.treeAdapter.setNodeSourceCodeLocation(r, e.location);
      }
      _insertCharacters(e) {
        let t, r;
        var n, a, s, i;
        this._shouldFosterParentOnInsertion()
          ? (({ parent: t, beforeElement: r } =
              this._findFosterParentingLocation()),
            r
              ? this.treeAdapter.insertTextBefore(t, e.chars, r)
              : this.treeAdapter.insertText(t, e.chars))
          : ((t = this.openElements.currentTmplContentOrNode),
            this.treeAdapter.insertText(t, e.chars)),
          e.location &&
            ((n = this.treeAdapter.getChildNodes(t)),
            (a = r ? n.lastIndexOf(r) : n.length),
            (n = n[a - 1]),
            this.treeAdapter.getNodeSourceCodeLocation(n)
              ? (({ endLine: a, endCol: s, endOffset: i } = e.location),
                this.treeAdapter.updateNodeSourceCodeLocation(n, {
                  endLine: a,
                  endCol: s,
                  endOffset: i,
                }))
              : this.options.sourceCodeLocationInfo &&
                this.treeAdapter.setNodeSourceCodeLocation(n, e.location));
      }
      _adoptNodes(t, r) {
        for (
          let e = this.treeAdapter.getFirstChild(t);
          e;
          e = this.treeAdapter.getFirstChild(t)
        )
          this.treeAdapter.detachNode(e), this.treeAdapter.appendChild(r, e);
      }
      _setEndLocation(e, t) {
        var r, n;
        this.treeAdapter.getNodeSourceCodeLocation(e) &&
          t.location &&
          ((r = t.location),
          (n = this.treeAdapter.getTagName(e)),
          (n =
            t.type === A.END_TAG && n === t.tagName
              ? {
                  endTag: { ...r },
                  endLine: r.endLine,
                  endCol: r.endCol,
                  endOffset: r.endOffset,
                }
              : {
                  endLine: r.startLine,
                  endCol: r.startCol,
                  endOffset: r.startOffset,
                }),
          this.treeAdapter.updateNodeSourceCodeLocation(e, n));
      }
      shouldProcessStartTagTokenInForeignContent(e) {
        if (!this.currentNotInHTML) return !1;
        let t, r;
        return (
          0 === this.openElements.stackTop && this.fragmentContext
            ? ((t = this.fragmentContext), (r = this.fragmentContextID))
            : ({ current: t, currentTagId: r } = this.openElements),
          (e.tagID !== x.SVG ||
            this.treeAdapter.getTagName(t) !== B.ANNOTATION_XML ||
            this.treeAdapter.getNamespaceURI(t) !== P.MATHML) &&
            (this.tokenizer.inForeignNode ||
              ((e.tagID === x.MGLYPH || e.tagID === x.MALIGNMARK) &&
                !this._isIntegrationPoint(r, t, P.HTML)))
        );
      }
      _processToken(e) {
        switch (e.type) {
          case A.CHARACTER:
            this.onCharacter(e);
            break;
          case A.NULL_CHARACTER:
            this.onNullCharacter(e);
            break;
          case A.COMMENT:
            this.onComment(e);
            break;
          case A.DOCTYPE:
            this.onDoctype(e);
            break;
          case A.START_TAG:
            this._processStartTag(e);
            break;
          case A.END_TAG:
            this.onEndTag(e);
            break;
          case A.EOF:
            this.onEof(e);
            break;
          case A.WHITESPACE_CHARACTER:
            this.onWhitespaceCharacter(e);
        }
      }
      _isIntegrationPoint(e, t, r) {
        return ns(
          e,
          this.treeAdapter.getNamespaceURI(t),
          this.treeAdapter.getAttrList(t),
          r
        );
      }
      _reconstructActiveFormattingElements() {
        var t = this.activeFormattingElements.entries.length;
        if (t) {
          var r = this.activeFormattingElements.entries.findIndex(
            (e) => e.type === Ia.Marker || this.openElements.contains(e.element)
          );
          for (let e = r < 0 ? t - 1 : r - 1; 0 <= e; e--) {
            var n = this.activeFormattingElements.entries[e];
            this._insertElement(
              n.token,
              this.treeAdapter.getNamespaceURI(n.element)
            ),
              (n.element = this.openElements.current);
          }
        }
      }
      _closeTableCell() {
        this.openElements.generateImpliedEndTags(),
          this.openElements.popUntilTableCellPopped(),
          this.activeFormattingElements.clearToLastMarker(),
          (this.insertionMode = U.IN_ROW);
      }
      _closePElement() {
        this.openElements.generateImpliedEndTagsWithExclusion(x.P),
          this.openElements.popUntilTagNamePopped(x.P);
      }
      _resetInsertionMode() {
        for (let e = this.openElements.stackTop; 0 <= e; e--)
          switch (
            0 === e && this.fragmentContext
              ? this.fragmentContextID
              : this.openElements.tagIDs[e]
          ) {
            case x.TR:
              return void (this.insertionMode = U.IN_ROW);
            case x.TBODY:
            case x.THEAD:
            case x.TFOOT:
              return void (this.insertionMode = U.IN_TABLE_BODY);
            case x.CAPTION:
              return void (this.insertionMode = U.IN_CAPTION);
            case x.COLGROUP:
              return void (this.insertionMode = U.IN_COLUMN_GROUP);
            case x.TABLE:
              return void (this.insertionMode = U.IN_TABLE);
            case x.BODY:
              return void (this.insertionMode = U.IN_BODY);
            case x.FRAMESET:
              return void (this.insertionMode = U.IN_FRAMESET);
            case x.SELECT:
              return void this._resetInsertionModeForSelect(e);
            case x.TEMPLATE:
              return void (this.insertionMode = this.tmplInsertionModeStack[0]);
            case x.HTML:
              return void (this.insertionMode = this.headElement
                ? U.AFTER_HEAD
                : U.BEFORE_HEAD);
            case x.TD:
            case x.TH:
              if (0 < e) return void (this.insertionMode = U.IN_CELL);
              break;
            case x.HEAD:
              if (0 < e) return void (this.insertionMode = U.IN_HEAD);
          }
        this.insertionMode = U.IN_BODY;
      }
      _resetInsertionModeForSelect(t) {
        if (0 < t)
          for (let e = t - 1; 0 < e; e--) {
            var r = this.openElements.tagIDs[e];
            if (r === x.TEMPLATE) break;
            if (r === x.TABLE)
              return void (this.insertionMode = U.IN_SELECT_IN_TABLE);
          }
        this.insertionMode = U.IN_SELECT;
      }
      _isElementCausesFosterParenting(e) {
        return cs.has(e);
      }
      _shouldFosterParentOnInsertion() {
        return (
          this.fosterParentingEnabled &&
          this._isElementCausesFosterParenting(this.openElements.currentTagId)
        );
      }
      _findFosterParentingLocation() {
        for (let e = this.openElements.stackTop; 0 <= e; e--) {
          var t = this.openElements.items[e];
          switch (this.openElements.tagIDs[e]) {
            case x.TEMPLATE:
              if (this.treeAdapter.getNamespaceURI(t) === P.HTML)
                return {
                  parent: this.treeAdapter.getTemplateContent(t),
                  beforeElement: null,
                };
              break;
            case x.TABLE:
              var r = this.treeAdapter.getParentNode(t);
              return r
                ? { parent: r, beforeElement: t }
                : {
                    parent: this.openElements.items[e - 1],
                    beforeElement: null,
                  };
          }
        }
        return { parent: this.openElements.items[0], beforeElement: null };
      }
      _fosterParentElement(e) {
        var t = this._findFosterParentingLocation();
        t.beforeElement
          ? this.treeAdapter.insertBefore(t.parent, e, t.beforeElement)
          : this.treeAdapter.appendChild(t.parent, e);
      }
      _isSpecialElement(e, t) {
        e = this.treeAdapter.getNamespaceURI(e);
        return oa[e].has(t);
      }
      onCharacter(e) {
        if (((this.skipNextNewLine = !1), this.tokenizer.inForeignNode))
          Li(this, e);
        else
          switch (this.insertionMode) {
            case U.INITIAL:
              fs(this, e);
              break;
            case U.BEFORE_HTML:
              gs(this, e);
              break;
            case U.BEFORE_HEAD:
              Is(this, e);
              break;
            case U.IN_HEAD:
              Ds(this, e);
              break;
            case U.IN_HEAD_NO_SCRIPT:
              ys(this, e);
              break;
            case U.AFTER_HEAD:
              Ms(this, e);
              break;
            case U.IN_BODY:
            case U.IN_CAPTION:
            case U.IN_CELL:
            case U.IN_TEMPLATE:
              Bs(this, e);
              break;
            case U.TEXT:
            case U.IN_SELECT:
            case U.IN_SELECT_IN_TABLE:
              this._insertCharacters(e);
              break;
            case U.IN_TABLE:
            case U.IN_TABLE_BODY:
            case U.IN_ROW:
              js(this, e);
              break;
            case U.IN_TABLE_TEXT:
              $s(this, e);
              break;
            case U.IN_COLUMN_GROUP:
              ai(this, e);
              break;
            case U.AFTER_BODY:
              gi(this, e);
              break;
            case U.AFTER_AFTER_BODY:
              Ri(this, e);
          }
      }
      onNullCharacter(e) {
        if (((this.skipNextNewLine = !1), this.tokenizer.inForeignNode))
          Oi(this, e);
        else
          switch (this.insertionMode) {
            case U.INITIAL:
              fs(this, e);
              break;
            case U.BEFORE_HTML:
              gs(this, e);
              break;
            case U.BEFORE_HEAD:
              Is(this, e);
              break;
            case U.IN_HEAD:
              Ds(this, e);
              break;
            case U.IN_HEAD_NO_SCRIPT:
              ys(this, e);
              break;
            case U.AFTER_HEAD:
              Ms(this, e);
              break;
            case U.TEXT:
              this._insertCharacters(e);
              break;
            case U.IN_TABLE:
            case U.IN_TABLE_BODY:
            case U.IN_ROW:
              js(this, e);
              break;
            case U.IN_COLUMN_GROUP:
              ai(this, e);
              break;
            case U.AFTER_BODY:
              gi(this, e);
              break;
            case U.AFTER_AFTER_BODY:
              Ri(this, e);
          }
      }
      onComment(e) {
        if (((this.skipNextNewLine = !1), this.currentNotInHTML)) ds(this, e);
        else
          switch (this.insertionMode) {
            case U.INITIAL:
            case U.BEFORE_HTML:
            case U.BEFORE_HEAD:
            case U.IN_HEAD:
            case U.IN_HEAD_NO_SCRIPT:
            case U.AFTER_HEAD:
            case U.IN_BODY:
            case U.IN_TABLE:
            case U.IN_CAPTION:
            case U.IN_COLUMN_GROUP:
            case U.IN_TABLE_BODY:
            case U.IN_ROW:
            case U.IN_CELL:
            case U.IN_SELECT:
            case U.IN_SELECT_IN_TABLE:
            case U.IN_TEMPLATE:
            case U.IN_FRAMESET:
            case U.AFTER_FRAMESET:
              ds(this, e);
              break;
            case U.IN_TABLE_TEXT:
              Js(this, e);
              break;
            case U.AFTER_BODY:
              Es(this, e);
              break;
            case U.AFTER_AFTER_BODY:
            case U.AFTER_AFTER_FRAMESET:
              ps(this, e);
          }
      }
      onDoctype(e) {
        switch (((this.skipNextNewLine = !1), this.insertionMode)) {
          case U.INITIAL:
            ms(this, e);
            break;
          case U.BEFORE_HEAD:
          case U.IN_HEAD:
          case U.IN_HEAD_NO_SCRIPT:
          case U.AFTER_HEAD:
            this._err(e, f.misplacedDoctype);
            break;
          case U.IN_TABLE_TEXT:
            Js(this, e);
        }
      }
      onStartTag(e) {
        (this.skipNextNewLine = !1),
          (this.currentToken = e),
          this._processStartTag(e),
          e.selfClosing &&
            !e.ackSelfClosing &&
            this._err(e, f.nonVoidHtmlElementStartTagWithTrailingSolidus);
      }
      _processStartTag(e) {
        this.shouldProcessStartTagTokenInForeignContent(e)
          ? ki(this, e)
          : this._startTagOutsideForeignContent(e);
      }
      _startTagOutsideForeignContent(e) {
        switch (this.insertionMode) {
          case U.INITIAL:
            fs(this, e);
            break;
          case U.BEFORE_HTML:
            As(this, e);
            break;
          case U.BEFORE_HEAD:
            Ns(this, e);
            break;
          case U.IN_HEAD:
            Ss(this, e);
            break;
          case U.IN_HEAD_NO_SCRIPT:
            Os(this, e);
            break;
          case U.AFTER_HEAD:
            ks(this, e);
            break;
          case U.IN_BODY:
            N(this, e);
            break;
          case U.IN_TABLE:
            Ws(this, e);
            break;
          case U.IN_TABLE_TEXT:
            Js(this, e);
            break;
          case U.IN_CAPTION:
            ei(this, e);
            break;
          case U.IN_COLUMN_GROUP:
            ri(this, e);
            break;
          case U.IN_TABLE_BODY:
            si(this, e);
            break;
          case U.IN_ROW:
            oi(this, e);
            break;
          case U.IN_CELL:
            li(this, e);
            break;
          case U.IN_SELECT:
            ui(this, e);
            break;
          case U.IN_SELECT_IN_TABLE:
            Ei(this, e);
            break;
          case U.IN_TEMPLATE:
            Ti(this, e);
            break;
          case U.AFTER_BODY:
            Ai(this, e);
            break;
          case U.IN_FRAMESET:
            Ni(this, e);
            break;
          case U.AFTER_FRAMESET:
            Ii(this, e);
            break;
          case U.AFTER_AFTER_BODY:
            bi(this, e);
            break;
          case U.AFTER_AFTER_FRAMESET:
            Di(this, e);
        }
      }
      onEndTag(e) {
        (this.skipNextNewLine = !1),
          (this.currentToken = e),
          this.currentNotInHTML
            ? vi(this, e)
            : this._endTagOutsideForeignContent(e);
      }
      _endTagOutsideForeignContent(e) {
        switch (this.insertionMode) {
          case U.INITIAL:
            fs(this, e);
            break;
          case U.BEFORE_HTML:
            _s(this, e);
            break;
          case U.BEFORE_HEAD:
            Cs(this, e);
            break;
          case U.IN_HEAD:
            bs(this, e);
            break;
          case U.IN_HEAD_NO_SCRIPT:
            Ls(this, e);
            break;
          case U.AFTER_HEAD:
            vs(this, e);
            break;
          case U.IN_BODY:
            qs(this, e);
            break;
          case U.TEXT:
            Vs(this, e);
            break;
          case U.IN_TABLE:
            Xs(this, e);
            break;
          case U.IN_TABLE_TEXT:
            Js(this, e);
            break;
          case U.IN_CAPTION:
            ti(this, e);
            break;
          case U.IN_COLUMN_GROUP:
            ni(this, e);
            break;
          case U.IN_TABLE_BODY:
            ii(this, e);
            break;
          case U.IN_ROW:
            ci(this, e);
            break;
          case U.IN_CELL:
            hi(this, e);
            break;
          case U.IN_SELECT:
            di(this, e);
            break;
          case U.IN_SELECT_IN_TABLE:
            pi(this, e);
            break;
          case U.IN_TEMPLATE:
            mi(this, e);
            break;
          case U.AFTER_BODY:
            _i(this, e);
            break;
          case U.IN_FRAMESET:
            Ci(this, e);
            break;
          case U.AFTER_FRAMESET:
            Si(this, e);
            break;
          case U.AFTER_AFTER_BODY:
            Ri(this, e);
        }
      }
      onEof(e) {
        switch (this.insertionMode) {
          case U.INITIAL:
            fs(this, e);
            break;
          case U.BEFORE_HTML:
            gs(this, e);
            break;
          case U.BEFORE_HEAD:
            Is(this, e);
            break;
          case U.IN_HEAD:
            Ds(this, e);
            break;
          case U.IN_HEAD_NO_SCRIPT:
            ys(this, e);
            break;
          case U.AFTER_HEAD:
            Ms(this, e);
            break;
          case U.IN_BODY:
          case U.IN_TABLE:
          case U.IN_CAPTION:
          case U.IN_COLUMN_GROUP:
          case U.IN_TABLE_BODY:
          case U.IN_ROW:
          case U.IN_CELL:
          case U.IN_SELECT:
          case U.IN_SELECT_IN_TABLE:
            Ys(this, e);
            break;
          case U.TEXT:
            Qs(this, e);
            break;
          case U.IN_TABLE_TEXT:
            Js(this, e);
            break;
          case U.IN_TEMPLATE:
            fi(this, e);
            break;
          case U.AFTER_BODY:
          case U.IN_FRAMESET:
          case U.AFTER_FRAMESET:
          case U.AFTER_AFTER_BODY:
          case U.AFTER_AFTER_FRAMESET:
            Ts(this, e);
        }
      }
      onWhitespaceCharacter(e) {
        if (
          this.skipNextNewLine &&
          ((this.skipNextNewLine = !1), e.chars.charCodeAt(0) === T.LINE_FEED)
        ) {
          if (1 === e.chars.length) return;
          e.chars = e.chars.substr(1);
        }
        if (this.tokenizer.inForeignNode) this._insertCharacters(e);
        else
          switch (this.insertionMode) {
            case U.IN_HEAD:
            case U.IN_HEAD_NO_SCRIPT:
            case U.AFTER_HEAD:
            case U.TEXT:
            case U.IN_COLUMN_GROUP:
            case U.IN_SELECT:
            case U.IN_SELECT_IN_TABLE:
            case U.IN_FRAMESET:
            case U.AFTER_FRAMESET:
              this._insertCharacters(e);
              break;
            case U.IN_BODY:
            case U.IN_CAPTION:
            case U.IN_CELL:
            case U.IN_TEMPLATE:
            case U.AFTER_BODY:
            case U.AFTER_AFTER_BODY:
            case U.AFTER_AFTER_FRAMESET:
              ws(this, e);
              break;
            case U.IN_TABLE:
            case U.IN_TABLE_BODY:
            case U.IN_ROW:
              js(this, e);
              break;
            case U.IN_TABLE_TEXT:
              zs(this, e);
          }
      }
    };
  function us(t, r) {
    for (let e = 0; e < ss; e++) {
      var n = (function (e, t) {
        let r = e.activeFormattingElements.getElementEntryInScopeWithTagName(
          t.tagName
        );
        return (
          r
            ? e.openElements.contains(r.element)
              ? e.openElements.hasInScope(t.tagID) || (r = null)
              : (e.activeFormattingElements.removeEntry(r), (r = null))
            : Gs(e, t),
          r
        );
      })(t, r);
      if (!n) break;
      var a = (function (e, t) {
        let r = null,
          n = e.openElements.stackTop;
        for (; 0 <= n; n--) {
          var a = e.openElements.items[n];
          if (a === t.element) break;
          e._isSpecialElement(a, e.openElements.tagIDs[n]) && (r = a);
        }
        return (
          r ||
            (e.openElements.shortenToLength(n < 0 ? 0 : n),
            e.activeFormattingElements.removeEntry(t)),
          r
        );
      })(t, n);
      if (!a) break;
      t.activeFormattingElements.bookmark = n;
      var s = (function (r, n, a) {
          let s = n;
          var i, o;
          for (
            let e = 0, t = r.openElements.getCommonAncestor(n);
            t !== a;
            e++, t = c
          ) {
            var c = r.openElements.getCommonAncestor(t),
              l = r.activeFormattingElements.getElementEntry(t),
              h = l && e >= is;
            !l || h
              ? (h && r.activeFormattingElements.removeEntry(l),
                r.openElements.remove(t))
              : ((t =
                  ((h = l),
                  void 0,
                  (o = void 0),
                  (o = (i = r).treeAdapter.getNamespaceURI(h.element)),
                  (o = i.treeAdapter.createElement(
                    h.token.tagName,
                    o,
                    h.token.attrs
                  )),
                  i.openElements.replace(h.element, o),
                  (h.element = o))),
                s === n && (r.activeFormattingElements.bookmark = l),
                r.treeAdapter.detachNode(s),
                r.treeAdapter.appendChild(t, s),
                (s = t));
          }
          return s;
        })(t, a, n.element),
        i = t.openElements.getCommonAncestor(n.element);
      t.treeAdapter.detachNode(s),
        i &&
          ((i = i),
          (s = s),
          (l = c = void 0),
          (l = ia((o = t).treeAdapter.getTagName(i))),
          o._isElementCausesFosterParenting(l)
            ? o._fosterParentElement(s)
            : ((c = o.treeAdapter.getNamespaceURI(i)),
              l === x.TEMPLATE &&
                c === P.HTML &&
                (i = o.treeAdapter.getTemplateContent(i)),
              o.treeAdapter.appendChild(i, s))),
        (l = a),
        (c = n),
        (o = i = o = void 0),
        (o = (s = t).treeAdapter.getNamespaceURI(c.element)),
        (i = c.token),
        (o = s.treeAdapter.createElement(i.tagName, o, i.attrs)),
        s._adoptNodes(l, o),
        s.treeAdapter.appendChild(l, o),
        s.activeFormattingElements.insertElementAfterBookmark(o, i),
        s.activeFormattingElements.removeEntry(c),
        s.openElements.remove(c.element),
        s.openElements.insertAfter(l, o, i.tagID);
    }
    var o, c, l;
  }
  function ds(e, t) {
    e._appendCommentNode(t, e.openElements.currentTmplContentOrNode);
  }
  function Es(e, t) {
    e._appendCommentNode(t, e.openElements.items[0]);
  }
  function ps(e, t) {
    e._appendCommentNode(t, e.document);
  }
  function Ts(t, r) {
    if (((t.stopped = !0), r.location)) {
      var e,
        n,
        a = t.fragmentContext ? 0 : 2;
      for (let e = t.openElements.stackTop; e >= a; e--)
        t._setEndLocation(t.openElements.items[e], r);
      !t.fragmentContext &&
        0 <= t.openElements.stackTop &&
        ((n = t.openElements.items[0]),
        (e = t.treeAdapter.getNodeSourceCodeLocation(n))) &&
        !e.endTag &&
        (t._setEndLocation(n, r), 1 <= t.openElements.stackTop) &&
        ((e = t.openElements.items[1]),
        (n = t.treeAdapter.getNodeSourceCodeLocation(e))) &&
        !n.endTag &&
        t._setEndLocation(e, r);
    }
  }
  function ms(e, t) {
    e._setDocumentType(t);
    var r,
      n = t.forceQuirks
        ? w.QUIRKS
        : (function (e) {
            if (e.name !== Fa) return w.QUIRKS;
            var t = e["systemId"];
            if (t && t.toLowerCase() === Ha) return w.QUIRKS;
            let r = e["publicId"];
            if (null !== r) {
              if (((r = r.toLowerCase()), Ya.has(r))) return w.QUIRKS;
              e = null === t ? qa : Ga;
              if (ja(r, e)) return w.QUIRKS;
              if (ja(r, null === t ? Va : Qa)) return w.LIMITED_QUIRKS;
            }
            return w.NO_QUIRKS;
          })(t);
    ((r = t).name !== Fa ||
      null !== r.publicId ||
      (null !== r.systemId && r.systemId !== Ua)) &&
      e._err(t, f.nonConformingDoctype),
      e.treeAdapter.setDocumentMode(e.document, n),
      (e.insertionMode = U.BEFORE_HTML);
  }
  function fs(e, t) {
    e._err(t, f.missingDoctype, !0),
      e.treeAdapter.setDocumentMode(e.document, w.QUIRKS),
      (e.insertionMode = U.BEFORE_HTML),
      e._processToken(t);
  }
  function As(e, t) {
    t.tagID === x.HTML
      ? (e._insertElement(t, P.HTML), (e.insertionMode = U.BEFORE_HEAD))
      : gs(e, t);
  }
  function _s(e, t) {
    var r = t.tagID;
    (r !== x.HTML && r !== x.HEAD && r !== x.BODY && r !== x.BR) || gs(e, t);
  }
  function gs(e, t) {
    e._insertFakeRootElement(),
      (e.insertionMode = U.BEFORE_HEAD),
      e._processToken(t);
  }
  function Ns(e, t) {
    switch (t.tagID) {
      case x.HTML:
        N(e, t);
        break;
      case x.HEAD:
        e._insertElement(t, P.HTML),
          (e.headElement = e.openElements.current),
          (e.insertionMode = U.IN_HEAD);
        break;
      default:
        Is(e, t);
    }
  }
  function Cs(e, t) {
    var r = t.tagID;
    r === x.HEAD || r === x.BODY || r === x.HTML || r === x.BR
      ? Is(e, t)
      : e._err(t, f.endTagWithoutMatchingOpenElement);
  }
  function Is(e, t) {
    e._insertFakeElement(B.HEAD, x.HEAD),
      (e.headElement = e.openElements.current),
      (e.insertionMode = U.IN_HEAD),
      e._processToken(t);
  }
  function Ss(e, t) {
    switch (t.tagID) {
      case x.HTML:
        N(e, t);
        break;
      case x.BASE:
      case x.BASEFONT:
      case x.BGSOUND:
      case x.LINK:
      case x.META:
        e._appendElement(t, P.HTML), (t.ackSelfClosing = !0);
        break;
      case x.TITLE:
        e._switchToTextParsing(t, F.RCDATA);
        break;
      case x.NOSCRIPT:
        e.options.scriptingEnabled
          ? e._switchToTextParsing(t, F.RAWTEXT)
          : (e._insertElement(t, P.HTML),
            (e.insertionMode = U.IN_HEAD_NO_SCRIPT));
        break;
      case x.NOFRAMES:
      case x.STYLE:
        e._switchToTextParsing(t, F.RAWTEXT);
        break;
      case x.SCRIPT:
        e._switchToTextParsing(t, F.SCRIPT_DATA);
        break;
      case x.TEMPLATE:
        e._insertTemplate(t),
          e.activeFormattingElements.insertMarker(),
          (e.framesetOk = !1),
          (e.insertionMode = U.IN_TEMPLATE),
          e.tmplInsertionModeStack.unshift(U.IN_TEMPLATE);
        break;
      case x.HEAD:
        e._err(t, f.misplacedStartTagForHeadElement);
        break;
      default:
        Ds(e, t);
    }
  }
  function bs(e, t) {
    switch (t.tagID) {
      case x.HEAD:
        e.openElements.pop(), (e.insertionMode = U.AFTER_HEAD);
        break;
      case x.BODY:
      case x.BR:
      case x.HTML:
        Ds(e, t);
        break;
      case x.TEMPLATE:
        Rs(e, t);
        break;
      default:
        e._err(t, f.endTagWithoutMatchingOpenElement);
    }
  }
  function Rs(e, t) {
    0 < e.openElements.tmplCount
      ? (e.openElements.generateImpliedEndTagsThoroughly(),
        e.openElements.currentTagId !== x.TEMPLATE &&
          e._err(t, f.closingOfElementWithOpenChildElements),
        e.openElements.popUntilTagNamePopped(x.TEMPLATE),
        e.activeFormattingElements.clearToLastMarker(),
        e.tmplInsertionModeStack.shift(),
        e._resetInsertionMode())
      : e._err(t, f.endTagWithoutMatchingOpenElement);
  }
  function Ds(e, t) {
    e.openElements.pop(), (e.insertionMode = U.AFTER_HEAD), e._processToken(t);
  }
  function Os(e, t) {
    switch (t.tagID) {
      case x.HTML:
        N(e, t);
        break;
      case x.BASEFONT:
      case x.BGSOUND:
      case x.HEAD:
      case x.LINK:
      case x.META:
      case x.NOFRAMES:
      case x.STYLE:
        Ss(e, t);
        break;
      case x.NOSCRIPT:
        e._err(t, f.nestedNoscriptInHead);
        break;
      default:
        ys(e, t);
    }
  }
  function Ls(e, t) {
    switch (t.tagID) {
      case x.NOSCRIPT:
        e.openElements.pop(), (e.insertionMode = U.IN_HEAD);
        break;
      case x.BR:
        ys(e, t);
        break;
      default:
        e._err(t, f.endTagWithoutMatchingOpenElement);
    }
  }
  function ys(e, t) {
    var r =
      t.type === A.EOF
        ? f.openElementsLeftAfterEof
        : f.disallowedContentInNoscriptInHead;
    e._err(t, r),
      e.openElements.pop(),
      (e.insertionMode = U.IN_HEAD),
      e._processToken(t);
  }
  function ks(e, t) {
    switch (t.tagID) {
      case x.HTML:
        N(e, t);
        break;
      case x.BODY:
        e._insertElement(t, P.HTML),
          (e.framesetOk = !1),
          (e.insertionMode = U.IN_BODY);
        break;
      case x.FRAMESET:
        e._insertElement(t, P.HTML), (e.insertionMode = U.IN_FRAMESET);
        break;
      case x.BASE:
      case x.BASEFONT:
      case x.BGSOUND:
      case x.LINK:
      case x.META:
      case x.NOFRAMES:
      case x.SCRIPT:
      case x.STYLE:
      case x.TEMPLATE:
      case x.TITLE:
        e._err(t, f.abandonedHeadElementChild),
          e.openElements.push(e.headElement, x.HEAD),
          Ss(e, t),
          e.openElements.remove(e.headElement);
        break;
      case x.HEAD:
        e._err(t, f.misplacedStartTagForHeadElement);
        break;
      default:
        Ms(e, t);
    }
  }
  function vs(e, t) {
    switch (t.tagID) {
      case x.BODY:
      case x.HTML:
      case x.BR:
        Ms(e, t);
        break;
      case x.TEMPLATE:
        Rs(e, t);
        break;
      default:
        e._err(t, f.endTagWithoutMatchingOpenElement);
    }
  }
  function Ms(e, t) {
    e._insertFakeElement(B.BODY, x.BODY),
      (e.insertionMode = U.IN_BODY),
      Ps(e, t);
  }
  function Ps(e, t) {
    switch (t.type) {
      case A.CHARACTER:
        Bs(e, t);
        break;
      case A.WHITESPACE_CHARACTER:
        ws(e, t);
        break;
      case A.COMMENT:
        ds(e, t);
        break;
      case A.START_TAG:
        N(e, t);
        break;
      case A.END_TAG:
        qs(e, t);
        break;
      case A.EOF:
        Ys(e, t);
    }
  }
  function ws(e, t) {
    e._reconstructActiveFormattingElements(), e._insertCharacters(t);
  }
  function Bs(e, t) {
    e._reconstructActiveFormattingElements(),
      e._insertCharacters(t),
      (e.framesetOk = !1);
  }
  function xs(e, t) {
    e._reconstructActiveFormattingElements(),
      e._appendElement(t, P.HTML),
      (e.framesetOk = !1),
      (t.ackSelfClosing = !0);
  }
  function Fs(e) {
    e = ra(e, na.TYPE);
    return null != e && e.toLowerCase() === as;
  }
  function Us(e, t) {
    e._switchToTextParsing(t, F.RAWTEXT);
  }
  function Hs(e, t) {
    e._reconstructActiveFormattingElements(), e._insertElement(t, P.HTML);
  }
  function N(e, t) {
    switch (t.tagID) {
      case x.I:
      case x.S:
      case x.B:
      case x.U:
      case x.EM:
      case x.TT:
      case x.BIG:
      case x.CODE:
      case x.FONT:
      case x.SMALL:
      case x.STRIKE:
      case x.STRONG:
        (M = t),
          (v = e)._reconstructActiveFormattingElements(),
          v._insertElement(M, P.HTML),
          v.activeFormattingElements.pushElement(v.openElements.current, M);
        break;
      case x.A:
        (v = t),
          (k = (M =
            e).activeFormattingElements.getElementEntryInScopeWithTagName(
            B.A
          )) &&
            (us(M, v),
            M.openElements.remove(k.element),
            M.activeFormattingElements.removeEntry(k)),
          M._reconstructActiveFormattingElements(),
          M._insertElement(v, P.HTML),
          M.activeFormattingElements.pushElement(M.openElements.current, v);
        break;
      case x.H1:
      case x.H2:
      case x.H3:
      case x.H4:
      case x.H5:
      case x.H6:
        (k = t),
          (y = e).openElements.hasInButtonScope(x.P) && y._closePElement(),
          ca(y.openElements.currentTagId) && y.openElements.pop(),
          y._insertElement(k, P.HTML);
        break;
      case x.P:
      case x.DL:
      case x.OL:
      case x.UL:
      case x.DIV:
      case x.DIR:
      case x.NAV:
      case x.MAIN:
      case x.MENU:
      case x.ASIDE:
      case x.CENTER:
      case x.FIGURE:
      case x.FOOTER:
      case x.HEADER:
      case x.HGROUP:
      case x.DIALOG:
      case x.DETAILS:
      case x.ADDRESS:
      case x.ARTICLE:
      case x.SECTION:
      case x.SUMMARY:
      case x.FIELDSET:
      case x.BLOCKQUOTE:
      case x.FIGCAPTION:
        (y = t),
          (n = e).openElements.hasInButtonScope(x.P) && n._closePElement(),
          n._insertElement(y, P.HTML);
        break;
      case x.LI:
      case x.DD:
      case x.DT:
        var r = e,
          n = t,
          a = ((r.framesetOk = !1), n.tagID);
        for (let e = r.openElements.stackTop; 0 <= e; e--) {
          var s = r.openElements.tagIDs[e];
          if (
            (a === x.LI && s === x.LI) ||
            ((a === x.DD || a === x.DT) && (s === x.DD || s === x.DT))
          ) {
            r.openElements.generateImpliedEndTagsWithExclusion(s),
              r.openElements.popUntilTagNamePopped(s);
            break;
          }
          if (
            s !== x.ADDRESS &&
            s !== x.DIV &&
            s !== x.P &&
            r._isSpecialElement(r.openElements.items[e], s)
          )
            break;
        }
        r.openElements.hasInButtonScope(x.P) && r._closePElement(),
          r._insertElement(n, P.HTML);
        break;
      case x.BR:
      case x.IMG:
      case x.WBR:
      case x.AREA:
      case x.EMBED:
      case x.KEYGEN:
        xs(e, t);
        break;
      case x.HR:
        (L = t),
          (O = e).openElements.hasInButtonScope(x.P) && O._closePElement(),
          O._appendElement(L, P.HTML),
          (O.framesetOk = !1),
          (L.ackSelfClosing = !0);
        break;
      case x.RB:
      case x.RTC:
        (O = t),
          (L = e).openElements.hasInScope(x.RUBY) &&
            L.openElements.generateImpliedEndTags(),
          L._insertElement(O, P.HTML);
        break;
      case x.RT:
      case x.RP:
        (D = t),
          (R = e).openElements.hasInScope(x.RUBY) &&
            R.openElements.generateImpliedEndTagsWithExclusion(x.RTC),
          R._insertElement(D, P.HTML);
        break;
      case x.PRE:
      case x.LISTING:
        (R = t),
          (D = e).openElements.hasInButtonScope(x.P) && D._closePElement(),
          D._insertElement(R, P.HTML),
          (D.skipNextNewLine = !0),
          (D.framesetOk = !1);
        break;
      case x.XMP:
        (b = t),
          (S = e).openElements.hasInButtonScope(x.P) && S._closePElement(),
          S._reconstructActiveFormattingElements(),
          (S.framesetOk = !1),
          S._switchToTextParsing(b, F.RAWTEXT);
        break;
      case x.SVG:
        (S = t),
          (b = e)._reconstructActiveFormattingElements(),
          ts(S),
          rs(S),
          S.selfClosing
            ? b._appendElement(S, P.SVG)
            : b._insertElement(S, P.SVG),
          (S.ackSelfClosing = !0);
        break;
      case x.HTML:
        (I = t),
          0 === (C = e).openElements.tmplCount &&
            C.treeAdapter.adoptAttributes(C.openElements.items[0], I.attrs);
        break;
      case x.BASE:
      case x.LINK:
      case x.META:
      case x.STYLE:
      case x.TITLE:
      case x.SCRIPT:
      case x.BGSOUND:
      case x.BASEFONT:
      case x.TEMPLATE:
        Ss(e, t);
        break;
      case x.BODY:
        (C = t),
          (N = (I = e).openElements.tryPeekProperlyNestedBodyElement()) &&
            0 === I.openElements.tmplCount &&
            ((I.framesetOk = !1), I.treeAdapter.adoptAttributes(N, C.attrs));
        break;
      case x.FORM:
        (N = t),
          (g = 0 < (_ = e).openElements.tmplCount),
          (_.formElement && !g) ||
            (_.openElements.hasInButtonScope(x.P) && _._closePElement(),
            _._insertElement(N, P.HTML),
            g) ||
            (_.formElement = _.openElements.current);
        break;
      case x.NOBR:
        (g = t),
          (_ = e)._reconstructActiveFormattingElements(),
          _.openElements.hasInScope(x.NOBR) &&
            (us(_, g), _._reconstructActiveFormattingElements()),
          _._insertElement(g, P.HTML),
          _.activeFormattingElements.pushElement(_.openElements.current, g);
        break;
      case x.MATH:
        (A = t),
          (f = e)._reconstructActiveFormattingElements(),
          es(A),
          rs(A),
          A.selfClosing
            ? f._appendElement(A, P.MATHML)
            : f._insertElement(A, P.MATHML),
          (A.ackSelfClosing = !0);
        break;
      case x.TABLE:
        (f = t),
          (A = e).treeAdapter.getDocumentMode(A.document) !== w.QUIRKS &&
            A.openElements.hasInButtonScope(x.P) &&
            A._closePElement(),
          A._insertElement(f, P.HTML),
          (A.framesetOk = !1),
          (A.insertionMode = U.IN_TABLE);
        break;
      case x.INPUT:
        (m = t),
          (T = e)._reconstructActiveFormattingElements(),
          T._appendElement(m, P.HTML),
          Fs(m) || (T.framesetOk = !1),
          (m.ackSelfClosing = !0);
        break;
      case x.PARAM:
      case x.TRACK:
      case x.SOURCE:
        (T = t), e._appendElement(T, P.HTML), (T.ackSelfClosing = !0);
        break;
      case x.IMAGE:
        (m = e), ((p = t).tagName = B.IMG), (p.tagID = x.IMG), xs(m, p);
        break;
      case x.BUTTON:
        (p = t),
          (E = e).openElements.hasInScope(x.BUTTON) &&
            (E.openElements.generateImpliedEndTags(),
            E.openElements.popUntilTagNamePopped(x.BUTTON)),
          E._reconstructActiveFormattingElements(),
          E._insertElement(p, P.HTML),
          (E.framesetOk = !1);
        break;
      case x.APPLET:
      case x.OBJECT:
      case x.MARQUEE:
        (E = t),
          (d = e)._reconstructActiveFormattingElements(),
          d._insertElement(E, P.HTML),
          d.activeFormattingElements.insertMarker(),
          (d.framesetOk = !1);
        break;
      case x.IFRAME:
        (d = t),
          ((u = e).framesetOk = !1),
          u._switchToTextParsing(d, F.RAWTEXT);
        break;
      case x.SELECT:
        (u = t),
          (h = e)._reconstructActiveFormattingElements(),
          h._insertElement(u, P.HTML),
          (h.framesetOk = !1),
          (h.insertionMode =
            h.insertionMode === U.IN_TABLE ||
            h.insertionMode === U.IN_CAPTION ||
            h.insertionMode === U.IN_TABLE_BODY ||
            h.insertionMode === U.IN_ROW ||
            h.insertionMode === U.IN_CELL
              ? U.IN_SELECT_IN_TABLE
              : U.IN_SELECT);
        break;
      case x.OPTION:
      case x.OPTGROUP:
        (h = t),
          (l = e).openElements.currentTagId === x.OPTION &&
            l.openElements.pop(),
          l._reconstructActiveFormattingElements(),
          l._insertElement(h, P.HTML);
        break;
      case x.NOEMBED:
        Us(e, t);
        break;
      case x.FRAMESET:
        (l = t),
          (c = (o = e).openElements.tryPeekProperlyNestedBodyElement()),
          o.framesetOk &&
            c &&
            (o.treeAdapter.detachNode(c),
            o.openElements.popAllUpToHtmlElement(),
            o._insertElement(l, P.HTML),
            (o.insertionMode = U.IN_FRAMESET));
        break;
      case x.TEXTAREA:
        (c = e)._insertElement(t, P.HTML),
          (c.skipNextNewLine = !0),
          (c.tokenizer.state = F.RCDATA),
          (c.originalInsertionMode = c.insertionMode),
          (c.framesetOk = !1),
          (c.insertionMode = U.TEXT);
        break;
      case x.NOSCRIPT:
        (e.options.scriptingEnabled ? Us : Hs)(e, t);
        break;
      case x.PLAINTEXT:
        (o = t),
          (i = e).openElements.hasInButtonScope(x.P) && i._closePElement(),
          i._insertElement(o, P.HTML),
          (i.tokenizer.state = F.PLAINTEXT);
        break;
      case x.COL:
      case x.TH:
      case x.TD:
      case x.TR:
      case x.HEAD:
      case x.FRAME:
      case x.TBODY:
      case x.TFOOT:
      case x.THEAD:
      case x.CAPTION:
      case x.COLGROUP:
        break;
      default:
        Hs(e, t);
    }
    var i,
      o,
      c,
      l,
      h,
      u,
      d,
      E,
      p,
      T,
      m,
      f,
      A,
      _,
      g,
      N,
      C,
      I,
      S,
      b,
      R,
      D,
      O,
      L,
      n,
      y,
      k,
      v,
      M;
  }
  function Gs(t, e) {
    var r = e.tagName,
      n = e.tagID;
    for (let e = t.openElements.stackTop; 0 < e; e--) {
      var a = t.openElements.items[e],
        s = t.openElements.tagIDs[e];
      if (n === s && (n !== x.UNKNOWN || t.treeAdapter.getTagName(a) === r)) {
        t.openElements.generateImpliedEndTagsWithExclusion(n),
          t.openElements.stackTop >= e && t.openElements.shortenToLength(e);
        break;
      }
      if (t._isSpecialElement(a, s)) break;
    }
  }
  function qs(e, t) {
    switch (t.tagID) {
      case x.A:
      case x.B:
      case x.I:
      case x.S:
      case x.U:
      case x.EM:
      case x.TT:
      case x.BIG:
      case x.CODE:
      case x.FONT:
      case x.NOBR:
      case x.SMALL:
      case x.STRIKE:
      case x.STRONG:
        us(e, t);
        break;
      case x.P:
        (h = e).openElements.hasInButtonScope(x.P) ||
          h._insertFakeElement(B.P, x.P),
          h._closePElement();
        break;
      case x.DL:
      case x.UL:
      case x.OL:
      case x.DIR:
      case x.DIV:
      case x.NAV:
      case x.PRE:
      case x.MAIN:
      case x.MENU:
      case x.ASIDE:
      case x.BUTTON:
      case x.CENTER:
      case x.FIGURE:
      case x.FOOTER:
      case x.HEADER:
      case x.HGROUP:
      case x.DIALOG:
      case x.ADDRESS:
      case x.ARTICLE:
      case x.DETAILS:
      case x.SECTION:
      case x.SUMMARY:
      case x.LISTING:
      case x.FIELDSET:
      case x.BLOCKQUOTE:
      case x.FIGCAPTION:
        (h = e),
          (l = (l = t).tagID),
          h.openElements.hasInScope(l) &&
            (h.openElements.generateImpliedEndTags(),
            h.openElements.popUntilTagNamePopped(l));
        break;
      case x.LI:
        (l = e).openElements.hasInListItemScope(x.LI) &&
          (l.openElements.generateImpliedEndTagsWithExclusion(x.LI),
          l.openElements.popUntilTagNamePopped(x.LI));
        break;
      case x.DD:
      case x.DT:
        (o = e),
          (c = (c = t).tagID),
          o.openElements.hasInScope(c) &&
            (o.openElements.generateImpliedEndTagsWithExclusion(c),
            o.openElements.popUntilTagNamePopped(c));
        break;
      case x.H1:
      case x.H2:
      case x.H3:
      case x.H4:
      case x.H5:
      case x.H6:
        (o = e).openElements.hasNumberedHeaderInScope() &&
          (o.openElements.generateImpliedEndTags(),
          o.openElements.popUntilNumberedHeaderPopped());
        break;
      case x.BR:
        (c = e)._reconstructActiveFormattingElements(),
          c._insertFakeElement(B.BR, x.BR),
          c.openElements.pop(),
          (c.framesetOk = !1);
        break;
      case x.BODY:
        (s = t),
          (a = e).openElements.hasInScope(x.BODY) &&
            ((a.insertionMode = U.AFTER_BODY),
            a.options.sourceCodeLocationInfo) &&
            (i = a.openElements.tryPeekProperlyNestedBodyElement()) &&
            a._setEndLocation(i, s);
        break;
      case x.HTML:
        (a = t),
          (i = e).openElements.hasInScope(x.BODY) &&
            ((i.insertionMode = U.AFTER_BODY), _i(i, a));
        break;
      case x.FORM:
        (r = 0 < (s = e).openElements.tmplCount),
          (n = s.formElement),
          r || (s.formElement = null),
          (n || r) &&
            s.openElements.hasInScope(x.FORM) &&
            (s.openElements.generateImpliedEndTags(),
            r
              ? s.openElements.popUntilTagNamePopped(x.FORM)
              : n && s.openElements.remove(n));
        break;
      case x.APPLET:
      case x.OBJECT:
      case x.MARQUEE:
        (r = e),
          (n = (n = t).tagID),
          r.openElements.hasInScope(n) &&
            (r.openElements.generateImpliedEndTags(),
            r.openElements.popUntilTagNamePopped(n),
            r.activeFormattingElements.clearToLastMarker());
        break;
      case x.TEMPLATE:
        Rs(e, t);
        break;
      default:
        Gs(e, t);
    }
    var r, n, a, s, i, o, c, l, h;
  }
  function Ys(e, t) {
    (0 < e.tmplInsertionModeStack.length ? fi : Ts)(e, t);
  }
  function Vs(e, t) {
    t.tagID === x.SCRIPT &&
      null != (t = e.scriptHandler) &&
      t.call(e, e.openElements.current),
      e.openElements.pop(),
      (e.insertionMode = e.originalInsertionMode);
  }
  function Qs(e, t) {
    e._err(t, f.eofInElementThatCanContainOnlyText),
      e.openElements.pop(),
      (e.insertionMode = e.originalInsertionMode),
      e.onEof(t);
  }
  function js(e, t) {
    if (cs.has(e.openElements.currentTagId))
      switch (
        ((e.pendingCharacterTokens.length = 0),
        (e.hasNonWhitespacePendingCharacterToken = !1),
        (e.originalInsertionMode = e.insertionMode),
        (e.insertionMode = U.IN_TABLE_TEXT),
        t.type)
      ) {
        case A.CHARACTER:
          $s(e, t);
          break;
        case A.WHITESPACE_CHARACTER:
          zs(e, t);
      }
    else Ks(e, t);
  }
  function Ws(e, t) {
    switch (t.tagID) {
      case x.TD:
      case x.TH:
      case x.TR:
        (l = t),
          (c = e).openElements.clearBackToTableContext(),
          c._insertFakeElement(B.TBODY, x.TBODY),
          (c.insertionMode = U.IN_TABLE_BODY),
          si(c, l);
        break;
      case x.STYLE:
      case x.SCRIPT:
      case x.TEMPLATE:
        Ss(e, t);
        break;
      case x.COL:
        (c = t),
          (l = e).openElements.clearBackToTableContext(),
          l._insertFakeElement(B.COLGROUP, x.COLGROUP),
          (l.insertionMode = U.IN_COLUMN_GROUP),
          ri(l, c);
        break;
      case x.FORM:
        (o = t),
          (i = e).formElement ||
            0 !== i.openElements.tmplCount ||
            (i._insertElement(o, P.HTML),
            (i.formElement = i.openElements.current),
            i.openElements.pop());
        break;
      case x.TABLE:
        (o = t),
          (i = e).openElements.hasInTableScope(x.TABLE) &&
            (i.openElements.popUntilTagNamePopped(x.TABLE),
            i._resetInsertionMode(),
            i._processStartTag(o));
        break;
      case x.TBODY:
      case x.TFOOT:
      case x.THEAD:
        (s = t),
          (a = e).openElements.clearBackToTableContext(),
          a._insertElement(s, P.HTML),
          (a.insertionMode = U.IN_TABLE_BODY);
        break;
      case x.INPUT:
        (s = e),
          Fs((a = t)) ? s._appendElement(a, P.HTML) : Ks(s, a),
          (a.ackSelfClosing = !0);
        break;
      case x.CAPTION:
        (n = t),
          (r = e).openElements.clearBackToTableContext(),
          r.activeFormattingElements.insertMarker(),
          r._insertElement(n, P.HTML),
          (r.insertionMode = U.IN_CAPTION);
        break;
      case x.COLGROUP:
        (n = t),
          (r = e).openElements.clearBackToTableContext(),
          r._insertElement(n, P.HTML),
          (r.insertionMode = U.IN_COLUMN_GROUP);
        break;
      default:
        Ks(e, t);
    }
    var r, n, a, s, i, o, c, l;
  }
  function Xs(e, t) {
    switch (t.tagID) {
      case x.TABLE:
        e.openElements.hasInTableScope(x.TABLE) &&
          (e.openElements.popUntilTagNamePopped(x.TABLE),
          e._resetInsertionMode());
        break;
      case x.TEMPLATE:
        Rs(e, t);
        break;
      case x.BODY:
      case x.CAPTION:
      case x.COL:
      case x.COLGROUP:
      case x.HTML:
      case x.TBODY:
      case x.TD:
      case x.TFOOT:
      case x.TH:
      case x.THEAD:
      case x.TR:
        break;
      default:
        Ks(e, t);
    }
  }
  function Ks(e, t) {
    var r = e.fosterParentingEnabled;
    (e.fosterParentingEnabled = !0), Ps(e, t), (e.fosterParentingEnabled = r);
  }
  function zs(e, t) {
    e.pendingCharacterTokens.push(t);
  }
  function $s(e, t) {
    e.pendingCharacterTokens.push(t),
      (e.hasNonWhitespacePendingCharacterToken = !0);
  }
  function Js(e, t) {
    let r = 0;
    if (e.hasNonWhitespacePendingCharacterToken)
      for (; r < e.pendingCharacterTokens.length; r++)
        Ks(e, e.pendingCharacterTokens[r]);
    else
      for (; r < e.pendingCharacterTokens.length; r++)
        e._insertCharacters(e.pendingCharacterTokens[r]);
    (e.insertionMode = e.originalInsertionMode), e._processToken(t);
  }
  var Zs = new Set([
    x.CAPTION,
    x.COL,
    x.COLGROUP,
    x.TBODY,
    x.TD,
    x.TFOOT,
    x.TH,
    x.THEAD,
    x.TR,
  ]);
  function ei(e, t) {
    var r = t.tagID;
    Zs.has(r)
      ? e.openElements.hasInTableScope(x.CAPTION) &&
        (e.openElements.generateImpliedEndTags(),
        e.openElements.popUntilTagNamePopped(x.CAPTION),
        e.activeFormattingElements.clearToLastMarker(),
        (e.insertionMode = U.IN_TABLE),
        Ws(e, t))
      : N(e, t);
  }
  function ti(e, t) {
    var r = t.tagID;
    switch (r) {
      case x.CAPTION:
      case x.TABLE:
        e.openElements.hasInTableScope(x.CAPTION) &&
          (e.openElements.generateImpliedEndTags(),
          e.openElements.popUntilTagNamePopped(x.CAPTION),
          e.activeFormattingElements.clearToLastMarker(),
          (e.insertionMode = U.IN_TABLE),
          r === x.TABLE) &&
          Xs(e, t);
        break;
      case x.BODY:
      case x.COL:
      case x.COLGROUP:
      case x.HTML:
      case x.TBODY:
      case x.TD:
      case x.TFOOT:
      case x.TH:
      case x.THEAD:
      case x.TR:
        break;
      default:
        qs(e, t);
    }
  }
  function ri(e, t) {
    switch (t.tagID) {
      case x.HTML:
        N(e, t);
        break;
      case x.COL:
        e._appendElement(t, P.HTML), (t.ackSelfClosing = !0);
        break;
      case x.TEMPLATE:
        Ss(e, t);
        break;
      default:
        ai(e, t);
    }
  }
  function ni(e, t) {
    switch (t.tagID) {
      case x.COLGROUP:
        e.openElements.currentTagId === x.COLGROUP &&
          (e.openElements.pop(), (e.insertionMode = U.IN_TABLE));
        break;
      case x.TEMPLATE:
        Rs(e, t);
        break;
      case x.COL:
        break;
      default:
        ai(e, t);
    }
  }
  function ai(e, t) {
    e.openElements.currentTagId === x.COLGROUP &&
      (e.openElements.pop(),
      (e.insertionMode = U.IN_TABLE),
      e._processToken(t));
  }
  function si(e, t) {
    switch (t.tagID) {
      case x.TR:
        e.openElements.clearBackToTableBodyContext(),
          e._insertElement(t, P.HTML),
          (e.insertionMode = U.IN_ROW);
        break;
      case x.TH:
      case x.TD:
        e.openElements.clearBackToTableBodyContext(),
          e._insertFakeElement(B.TR, x.TR),
          (e.insertionMode = U.IN_ROW),
          oi(e, t);
        break;
      case x.CAPTION:
      case x.COL:
      case x.COLGROUP:
      case x.TBODY:
      case x.TFOOT:
      case x.THEAD:
        e.openElements.hasTableBodyContextInTableScope() &&
          (e.openElements.clearBackToTableBodyContext(),
          e.openElements.pop(),
          (e.insertionMode = U.IN_TABLE),
          Ws(e, t));
        break;
      default:
        Ws(e, t);
    }
  }
  function ii(e, t) {
    var r = t.tagID;
    switch (t.tagID) {
      case x.TBODY:
      case x.TFOOT:
      case x.THEAD:
        e.openElements.hasInTableScope(r) &&
          (e.openElements.clearBackToTableBodyContext(),
          e.openElements.pop(),
          (e.insertionMode = U.IN_TABLE));
        break;
      case x.TABLE:
        e.openElements.hasTableBodyContextInTableScope() &&
          (e.openElements.clearBackToTableBodyContext(),
          e.openElements.pop(),
          (e.insertionMode = U.IN_TABLE),
          Xs(e, t));
        break;
      case x.BODY:
      case x.CAPTION:
      case x.COL:
      case x.COLGROUP:
      case x.HTML:
      case x.TD:
      case x.TH:
      case x.TR:
        break;
      default:
        Xs(e, t);
    }
  }
  function oi(e, t) {
    switch (t.tagID) {
      case x.TH:
      case x.TD:
        e.openElements.clearBackToTableRowContext(),
          e._insertElement(t, P.HTML),
          (e.insertionMode = U.IN_CELL),
          e.activeFormattingElements.insertMarker();
        break;
      case x.CAPTION:
      case x.COL:
      case x.COLGROUP:
      case x.TBODY:
      case x.TFOOT:
      case x.THEAD:
      case x.TR:
        e.openElements.hasInTableScope(x.TR) &&
          (e.openElements.clearBackToTableRowContext(),
          e.openElements.pop(),
          (e.insertionMode = U.IN_TABLE_BODY),
          si(e, t));
        break;
      default:
        Ws(e, t);
    }
  }
  function ci(e, t) {
    switch (t.tagID) {
      case x.TR:
        e.openElements.hasInTableScope(x.TR) &&
          (e.openElements.clearBackToTableRowContext(),
          e.openElements.pop(),
          (e.insertionMode = U.IN_TABLE_BODY));
        break;
      case x.TABLE:
        e.openElements.hasInTableScope(x.TR) &&
          (e.openElements.clearBackToTableRowContext(),
          e.openElements.pop(),
          (e.insertionMode = U.IN_TABLE_BODY),
          ii(e, t));
        break;
      case x.TBODY:
      case x.TFOOT:
      case x.THEAD:
        (e.openElements.hasInTableScope(t.tagID) ||
          e.openElements.hasInTableScope(x.TR)) &&
          (e.openElements.clearBackToTableRowContext(),
          e.openElements.pop(),
          (e.insertionMode = U.IN_TABLE_BODY),
          ii(e, t));
        break;
      case x.BODY:
      case x.CAPTION:
      case x.COL:
      case x.COLGROUP:
      case x.HTML:
      case x.TD:
      case x.TH:
        break;
      default:
        Xs(e, t);
    }
  }
  function li(e, t) {
    var r = t.tagID;
    Zs.has(r)
      ? (e.openElements.hasInTableScope(x.TD) ||
          e.openElements.hasInTableScope(x.TH)) &&
        (e._closeTableCell(), oi(e, t))
      : N(e, t);
  }
  function hi(e, t) {
    var r = t.tagID;
    switch (r) {
      case x.TD:
      case x.TH:
        e.openElements.hasInTableScope(r) &&
          (e.openElements.generateImpliedEndTags(),
          e.openElements.popUntilTagNamePopped(r),
          e.activeFormattingElements.clearToLastMarker(),
          (e.insertionMode = U.IN_ROW));
        break;
      case x.TABLE:
      case x.TBODY:
      case x.TFOOT:
      case x.THEAD:
      case x.TR:
        e.openElements.hasInTableScope(r) && (e._closeTableCell(), ci(e, t));
        break;
      case x.BODY:
      case x.CAPTION:
      case x.COL:
      case x.COLGROUP:
      case x.HTML:
        break;
      default:
        qs(e, t);
    }
  }
  function ui(e, t) {
    switch (t.tagID) {
      case x.HTML:
        N(e, t);
        break;
      case x.OPTION:
        e.openElements.currentTagId === x.OPTION && e.openElements.pop(),
          e._insertElement(t, P.HTML);
        break;
      case x.OPTGROUP:
        e.openElements.currentTagId === x.OPTION && e.openElements.pop(),
          e.openElements.currentTagId === x.OPTGROUP && e.openElements.pop(),
          e._insertElement(t, P.HTML);
        break;
      case x.INPUT:
      case x.KEYGEN:
      case x.TEXTAREA:
      case x.SELECT:
        e.openElements.hasInSelectScope(x.SELECT) &&
          (e.openElements.popUntilTagNamePopped(x.SELECT),
          e._resetInsertionMode(),
          t.tagID !== x.SELECT) &&
          e._processStartTag(t);
        break;
      case x.SCRIPT:
      case x.TEMPLATE:
        Ss(e, t);
    }
  }
  function di(e, t) {
    switch (t.tagID) {
      case x.OPTGROUP:
        0 < e.openElements.stackTop &&
          e.openElements.currentTagId === x.OPTION &&
          e.openElements.tagIDs[e.openElements.stackTop - 1] === x.OPTGROUP &&
          e.openElements.pop(),
          e.openElements.currentTagId === x.OPTGROUP && e.openElements.pop();
        break;
      case x.OPTION:
        e.openElements.currentTagId === x.OPTION && e.openElements.pop();
        break;
      case x.SELECT:
        e.openElements.hasInSelectScope(x.SELECT) &&
          (e.openElements.popUntilTagNamePopped(x.SELECT),
          e._resetInsertionMode());
        break;
      case x.TEMPLATE:
        Rs(e, t);
    }
  }
  function Ei(e, t) {
    var r = t.tagID;
    r === x.CAPTION ||
    r === x.TABLE ||
    r === x.TBODY ||
    r === x.TFOOT ||
    r === x.THEAD ||
    r === x.TR ||
    r === x.TD ||
    r === x.TH
      ? (e.openElements.popUntilTagNamePopped(x.SELECT),
        e._resetInsertionMode(),
        e._processStartTag(t))
      : ui(e, t);
  }
  function pi(e, t) {
    var r = t.tagID;
    r === x.CAPTION ||
    r === x.TABLE ||
    r === x.TBODY ||
    r === x.TFOOT ||
    r === x.THEAD ||
    r === x.TR ||
    r === x.TD ||
    r === x.TH
      ? e.openElements.hasInTableScope(r) &&
        (e.openElements.popUntilTagNamePopped(x.SELECT),
        e._resetInsertionMode(),
        e.onEndTag(t))
      : di(e, t);
  }
  function Ti(e, t) {
    switch (t.tagID) {
      case x.BASE:
      case x.BASEFONT:
      case x.BGSOUND:
      case x.LINK:
      case x.META:
      case x.NOFRAMES:
      case x.SCRIPT:
      case x.STYLE:
      case x.TEMPLATE:
      case x.TITLE:
        Ss(e, t);
        break;
      case x.CAPTION:
      case x.COLGROUP:
      case x.TBODY:
      case x.TFOOT:
      case x.THEAD:
        (e.tmplInsertionModeStack[0] = U.IN_TABLE),
          (e.insertionMode = U.IN_TABLE),
          Ws(e, t);
        break;
      case x.COL:
        (e.tmplInsertionModeStack[0] = U.IN_COLUMN_GROUP),
          (e.insertionMode = U.IN_COLUMN_GROUP),
          ri(e, t);
        break;
      case x.TR:
        (e.tmplInsertionModeStack[0] = U.IN_TABLE_BODY),
          (e.insertionMode = U.IN_TABLE_BODY),
          si(e, t);
        break;
      case x.TD:
      case x.TH:
        (e.tmplInsertionModeStack[0] = U.IN_ROW),
          (e.insertionMode = U.IN_ROW),
          oi(e, t);
        break;
      default:
        (e.tmplInsertionModeStack[0] = U.IN_BODY),
          (e.insertionMode = U.IN_BODY),
          N(e, t);
    }
  }
  function mi(e, t) {
    t.tagID === x.TEMPLATE && Rs(e, t);
  }
  function fi(e, t) {
    0 < e.openElements.tmplCount
      ? (e.openElements.popUntilTagNamePopped(x.TEMPLATE),
        e.activeFormattingElements.clearToLastMarker(),
        e.tmplInsertionModeStack.shift(),
        e._resetInsertionMode(),
        e.onEof(t))
      : Ts(e, t);
  }
  function Ai(e, t) {
    (t.tagID === x.HTML ? N : gi)(e, t);
  }
  function _i(e, t) {
    var r, n;
    t.tagID === x.HTML
      ? (e.fragmentContext || (e.insertionMode = U.AFTER_AFTER_BODY),
        e.options.sourceCodeLocationInfo &&
          e.openElements.tagIDs[0] === x.HTML &&
          (e._setEndLocation(e.openElements.items[0], t),
          !(n = e.openElements.items[1]) ||
            (null != (r = e.treeAdapter.getNodeSourceCodeLocation(n)) &&
              r.endTag) ||
            e._setEndLocation(n, t)))
      : gi(e, t);
  }
  function gi(e, t) {
    (e.insertionMode = U.IN_BODY), Ps(e, t);
  }
  function Ni(e, t) {
    switch (t.tagID) {
      case x.HTML:
        N(e, t);
        break;
      case x.FRAMESET:
        e._insertElement(t, P.HTML);
        break;
      case x.FRAME:
        e._appendElement(t, P.HTML), (t.ackSelfClosing = !0);
        break;
      case x.NOFRAMES:
        Ss(e, t);
    }
  }
  function Ci(e, t) {
    t.tagID !== x.FRAMESET ||
      e.openElements.isRootHtmlElementCurrent() ||
      (e.openElements.pop(), e.fragmentContext) ||
      e.openElements.currentTagId === x.FRAMESET ||
      (e.insertionMode = U.AFTER_FRAMESET);
  }
  function Ii(e, t) {
    switch (t.tagID) {
      case x.HTML:
        N(e, t);
        break;
      case x.NOFRAMES:
        Ss(e, t);
    }
  }
  function Si(e, t) {
    t.tagID === x.HTML && (e.insertionMode = U.AFTER_AFTER_FRAMESET);
  }
  function bi(e, t) {
    (t.tagID === x.HTML ? N : Ri)(e, t);
  }
  function Ri(e, t) {
    (e.insertionMode = U.IN_BODY), Ps(e, t);
  }
  function Di(e, t) {
    switch (t.tagID) {
      case x.HTML:
        N(e, t);
        break;
      case x.NOFRAMES:
        Ss(e, t);
    }
  }
  function Oi(e, t) {
    (t.chars = m), e._insertCharacters(t);
  }
  function Li(e, t) {
    e._insertCharacters(t), (e.framesetOk = !1);
  }
  function yi(e) {
    for (
      ;
      e.treeAdapter.getNamespaceURI(e.openElements.current) !== P.HTML &&
      !e._isIntegrationPoint(
        e.openElements.currentTagId,
        e.openElements.current
      );

    )
      e.openElements.pop();
  }
  function ki(e, t) {
    var r, n, a;
    ((a = (n = t).tagID) === x.FONT &&
      n.attrs.some(
        ({ name: e }) => e === na.COLOR || e === na.SIZE || e === na.FACE
      )) ||
    Za.has(a)
      ? (yi(e), e._startTagOutsideForeignContent(t))
      : ((n = e._getAdjustedCurrentElement()),
        (a = e.treeAdapter.getNamespaceURI(n)) === P.MATHML
          ? es(t)
          : a === P.SVG &&
            ((n = t),
            null != (r = Ja.get(n.tagName)) &&
              ((n.tagName = r), (n.tagID = ia(n.tagName))),
            ts(t)),
        rs(t),
        t.selfClosing ? e._appendElement(t, a) : e._insertElement(t, a),
        (t.ackSelfClosing = !0));
  }
  function vi(t, r) {
    if (r.tagID === x.P || r.tagID === x.BR)
      yi(t), t._endTagOutsideForeignContent(r);
    else
      for (let e = t.openElements.stackTop; 0 < e; e--) {
        var n = t.openElements.items[e];
        if (t.treeAdapter.getNamespaceURI(n) === P.HTML) {
          t._endTagOutsideForeignContent(r);
          break;
        }
        n = t.treeAdapter.getTagName(n);
        if (n.toLowerCase() === r.tagName) {
          (r.tagName = n), t.openElements.shortenToLength(e);
          break;
        }
      }
  }
  var Mi = new Set([
    B.AREA,
    B.BASE,
    B.BASEFONT,
    B.BGSOUND,
    B.BR,
    B.COL,
    B.EMBED,
    B.FRAME,
    B.HR,
    B.IMG,
    B.INPUT,
    B.KEYGEN,
    B.LINK,
    B.META,
    B.PARAM,
    B.SOURCE,
    B.TRACK,
    B.WBR,
  ]);
  var Pi = { treeAdapter: xa, scriptingEnabled: !0 };
  function wi(e, t) {
    var r, n, a, s, i;
    return t.treeAdapter.isElementNode(e)
      ? ((r = e),
        `<${(a = (n = t).treeAdapter.getTagName(r))}${(function (
          e,
          { treeAdapter: t }
        ) {
          let r = "";
          for (const n of t.getAttrList(e)) {
            if (((r += " "), n.namespace))
              switch (n.namespace) {
                case P.XML:
                  r += "xml:" + n.name;
                  break;
                case P.XMLNS:
                  "xmlns" !== n.name && (r += "xmlns:"), (r += n.name);
                  break;
                case P.XLINK:
                  r += "xlink:" + n.name;
                  break;
                default:
                  r += n.prefix + ":" + n.name;
              }
            else r += n.name;
            r += `="${Fe(n.value)}"`;
          }
          return r;
        })(r, n)}>` +
          ((function (e, t) {
            return (
              t.treeAdapter.isElementNode(e) &&
              t.treeAdapter.getNamespaceURI(e) === P.HTML &&
              Mi.has(t.treeAdapter.getTagName(e))
            );
          })(r, n)
            ? ""
            : (function (e, t) {
                let r = "";
                if (
                  ((e =
                    t.treeAdapter.isElementNode(e) &&
                    t.treeAdapter.getTagName(e) === B.TEMPLATE &&
                    t.treeAdapter.getNamespaceURI(e) === P.HTML
                      ? t.treeAdapter.getTemplateContent(e)
                      : e),
                  (e = t.treeAdapter.getChildNodes(e)))
                )
                  for (const n of e) r += wi(n, t);
                return r;
              })(r, n) + `</${a}>`))
      : t.treeAdapter.isTextNode(e)
      ? ((r = e),
        (a = (n = t).treeAdapter),
        (i = a.getTextNodeContent(r)),
        (r = a.getParentNode(r)),
        (s = r && a.isElementNode(r) && a.getTagName(r)) &&
        a.getNamespaceURI(r) === P.HTML &&
        ha(s, n.scriptingEnabled)
          ? i
          : Ue(i))
      : t.treeAdapter.isCommentNode(e)
      ? (([s, i] = [e, t["treeAdapter"]]),
        `<!--${i.getCommentNodeContent(s)}-->`)
      : t.treeAdapter.isDocumentTypeNode(e)
      ? (([e, t] = [e, t["treeAdapter"]]),
        `<!DOCTYPE ${t.getDocumentTypeNodeName(e)}>`)
      : "";
  }
  function Bi(e) {
    return new se(e);
  }
  function xi(e) {
    var t = e.includes('"') ? "'" : '"';
    return t + e + t;
  }
  var Fi = {
    isCommentNode: Ee,
    isElementNode: h,
    isTextNode: de,
    createDocument() {
      var e = new le([]);
      return (e["x-mode"] = aa.DOCUMENT_MODE.NO_QUIRKS), e;
    },
    createDocumentFragment() {
      return new le([]);
    },
    createElement(e, t, r) {
      var n = Object.create(null),
        a = Object.create(null),
        s = Object.create(null);
      for (let e = 0; e < r.length; e++) {
        var i = r[e].name;
        (n[i] = r[e].value), (a[i] = r[e].namespace), (s[i] = r[e].prefix);
      }
      e = new he(e, n, []);
      return (
        (e.namespace = t),
        (e["x-attribsNamespace"] = a),
        (e["x-attribsPrefix"] = s),
        e
      );
    },
    createCommentNode(e) {
      return new ie(e);
    },
    appendChild(e, t) {
      var r = e.children[e.children.length - 1];
      r && ((r.next = t).prev = r), e.children.push(t), (t.parent = e);
    },
    insertBefore(e, t, r) {
      var n = e.children.indexOf(r),
        a = r["prev"];
      a && ((a.next = t).prev = a),
        ((r.prev = t).next = r),
        e.children.splice(n, 0, t),
        (t.parent = e);
    },
    setTemplateContent(e, t) {
      Fi.appendChild(e, t);
    },
    getTemplateContent(e) {
      return e.children[0];
    },
    setDocumentType(e, t, r, n) {
      var a = (function (e, t, r) {
        let n = "!DOCTYPE ";
        return (
          e && (n += e),
          t ? (n += " PUBLIC " + xi(t)) : r && (n += " SYSTEM"),
          r && (n += " " + xi(r)),
          n
        );
      })(t, r, n);
      let s = e.children.find((e) => pe(e) && "!doctype" === e.name);
      s
        ? (s.data = null != a ? a : null)
        : ((s = new oe("!doctype", a)), Fi.appendChild(e, s)),
        (s["x-name"] = null != t ? t : void 0),
        (s["x-publicId"] = null != r ? r : void 0),
        (s["x-systemId"] = null != n ? n : void 0);
    },
    setDocumentMode(e, t) {
      e["x-mode"] = t;
    },
    getDocumentMode(e) {
      return e["x-mode"];
    },
    detachNode(e) {
      var t, r, n;
      e.parent &&
        ((t = e.parent.children.indexOf(e)),
        ({ prev: r, next: n } = e),
        (e.prev = null),
        (e.next = null),
        r && (r.next = n),
        n && (n.prev = r),
        e.parent.children.splice(t, 1),
        (e.parent = null));
    },
    insertText(e, t) {
      var r = e.children[e.children.length - 1];
      r && de(r) ? (r.data += t) : Fi.appendChild(e, Bi(t));
    },
    insertTextBefore(e, t, r) {
      var n = e.children[e.children.indexOf(r) - 1];
      n && de(n) ? (n.data += t) : Fi.insertBefore(e, Bi(t), r);
    },
    adoptAttributes(t, r) {
      for (let e = 0; e < r.length; e++) {
        var n = r[e].name;
        void 0 === t.attribs[n] &&
          ((t.attribs[n] = r[e].value),
          (t["x-attribsNamespace"][n] = r[e].namespace),
          (t["x-attribsPrefix"][n] = r[e].prefix));
      }
    },
    getFirstChild(e) {
      return e.children[0];
    },
    getChildNodes(e) {
      return e.children;
    },
    getParentNode(e) {
      return e.parent;
    },
    getAttrList(e) {
      return e.attributes;
    },
    getTagName(e) {
      return e.name;
    },
    getNamespaceURI(e) {
      return e.namespace;
    },
    getTextNodeContent(e) {
      return e.data;
    },
    getCommentNodeContent(e) {
      return e.data;
    },
    getDocumentTypeNodeName(e) {
      return null != (e = e["x-name"]) ? e : "";
    },
    getDocumentTypeNodePublicId(e) {
      return null != (e = e["x-publicId"]) ? e : "";
    },
    getDocumentTypeNodeSystemId(e) {
      return null != (e = e["x-systemId"]) ? e : "";
    },
    isDocumentTypeNode(e) {
      return pe(e) && "!doctype" === e.name;
    },
    setNodeSourceCodeLocation(e, t) {
      t && ((e.startIndex = t.startOffset), (e.endIndex = t.endOffset)),
        (e.sourceCodeLocation = t);
    },
    getNodeSourceCodeLocation(e) {
      return e.sourceCodeLocation;
    },
    updateNodeSourceCodeLocation(e, t) {
      null != t.endOffset && (e.endIndex = t.endOffset),
        (e.sourceCodeLocation = { ...e.sourceCodeLocation, ...t });
    },
  };
  function Ui(e, t, r, n) {
    var t = {
      scriptingEnabled:
        "boolean" != typeof t.scriptingEnabled || t.scriptingEnabled,
      treeAdapter: Fi,
      sourceCodeLocationInfo: t.sourceCodeLocationInfo,
    };
    return r
      ? hs.parse(e, t)
      : ((r = e),
        (e = t),
        "string" == typeof (t = n) && ((e = r), (r = t), (t = null)),
        (t = hs.getFragmentParser(t, e)).tokenizer.write(r, !0),
        t.getFragment());
  }
  var S,
    b,
    Hi,
    Gi = { treeAdapter: Fi };
  function qi(e) {
    var t,
      r = "length" in e ? e : [e];
    for (let e = 0; e < r.length; e += 1) {
      var n = r[e];
      Te(n) && Array.prototype.splice.call(r, e, 1, ...n.children);
    }
    let a = "";
    for (let e = 0; e < r.length; e += 1) {
      var s = r[e];
      a += ((t = Gi), wi(s, { ...Pi, ...t }));
    }
    return a;
  }
  function Yi(e) {
    return (
      e === S.Space ||
      e === S.NewLine ||
      e === S.Tab ||
      e === S.FormFeed ||
      e === S.CarriageReturn
    );
  }
  function Vi(e) {
    return e === S.Slash || e === S.Gt || Yi(e);
  }
  function Qi(e) {
    return e >= S.Zero && e <= S.Nine;
  }
  function ji(e) {
    return (e >= S.LowerA && e <= S.LowerZ) || (e >= S.UpperA && e <= S.UpperZ);
  }
  function Wi(e) {
    return (e >= S.UpperA && e <= S.UpperF) || (e >= S.LowerA && e <= S.LowerF);
  }
  ((n = S = S || {})[(n.Tab = 9)] = "Tab"),
    (n[(n.NewLine = 10)] = "NewLine"),
    (n[(n.FormFeed = 12)] = "FormFeed"),
    (n[(n.CarriageReturn = 13)] = "CarriageReturn"),
    (n[(n.Space = 32)] = "Space"),
    (n[(n.ExclamationMark = 33)] = "ExclamationMark"),
    (n[(n.Number = 35)] = "Number"),
    (n[(n.Amp = 38)] = "Amp"),
    (n[(n.SingleQuote = 39)] = "SingleQuote"),
    (n[(n.DoubleQuote = 34)] = "DoubleQuote"),
    (n[(n.Dash = 45)] = "Dash"),
    (n[(n.Slash = 47)] = "Slash"),
    (n[(n.Zero = 48)] = "Zero"),
    (n[(n.Nine = 57)] = "Nine"),
    (n[(n.Semi = 59)] = "Semi"),
    (n[(n.Lt = 60)] = "Lt"),
    (n[(n.Eq = 61)] = "Eq"),
    (n[(n.Gt = 62)] = "Gt"),
    (n[(n.Questionmark = 63)] = "Questionmark"),
    (n[(n.UpperA = 65)] = "UpperA"),
    (n[(n.LowerA = 97)] = "LowerA"),
    (n[(n.UpperF = 70)] = "UpperF"),
    (n[(n.LowerF = 102)] = "LowerF"),
    (n[(n.UpperZ = 90)] = "UpperZ"),
    (n[(n.LowerZ = 122)] = "LowerZ"),
    (n[(n.LowerX = 120)] = "LowerX"),
    (n[(n.OpeningSquareBracket = 91)] = "OpeningSquareBracket"),
    ((t = b = b || {})[(t.Text = 1)] = "Text"),
    (t[(t.BeforeTagName = 2)] = "BeforeTagName"),
    (t[(t.InTagName = 3)] = "InTagName"),
    (t[(t.InSelfClosingTag = 4)] = "InSelfClosingTag"),
    (t[(t.BeforeClosingTagName = 5)] = "BeforeClosingTagName"),
    (t[(t.InClosingTagName = 6)] = "InClosingTagName"),
    (t[(t.AfterClosingTagName = 7)] = "AfterClosingTagName"),
    (t[(t.BeforeAttributeName = 8)] = "BeforeAttributeName"),
    (t[(t.InAttributeName = 9)] = "InAttributeName"),
    (t[(t.AfterAttributeName = 10)] = "AfterAttributeName"),
    (t[(t.BeforeAttributeValue = 11)] = "BeforeAttributeValue"),
    (t[(t.InAttributeValueDq = 12)] = "InAttributeValueDq"),
    (t[(t.InAttributeValueSq = 13)] = "InAttributeValueSq"),
    (t[(t.InAttributeValueNq = 14)] = "InAttributeValueNq"),
    (t[(t.BeforeDeclaration = 15)] = "BeforeDeclaration"),
    (t[(t.InDeclaration = 16)] = "InDeclaration"),
    (t[(t.InProcessingInstruction = 17)] = "InProcessingInstruction"),
    (t[(t.BeforeComment = 18)] = "BeforeComment"),
    (t[(t.CDATASequence = 19)] = "CDATASequence"),
    (t[(t.InSpecialComment = 20)] = "InSpecialComment"),
    (t[(t.InCommentLike = 21)] = "InCommentLike"),
    (t[(t.BeforeSpecialS = 22)] = "BeforeSpecialS"),
    (t[(t.SpecialStartSequence = 23)] = "SpecialStartSequence"),
    (t[(t.InSpecialTag = 24)] = "InSpecialTag"),
    (t[(t.BeforeEntity = 25)] = "BeforeEntity"),
    (t[(t.BeforeNumericEntity = 26)] = "BeforeNumericEntity"),
    (t[(t.InNamedEntity = 27)] = "InNamedEntity"),
    (t[(t.InNumericEntity = 28)] = "InNumericEntity"),
    (t[(t.InHexEntity = 29)] = "InHexEntity"),
    ((e = Hi = Hi || {})[(e.NoValue = 0)] = "NoValue"),
    (e[(e.Unquoted = 1)] = "Unquoted"),
    (e[(e.Single = 2)] = "Single"),
    (e[(e.Double = 3)] = "Double");
  var Xi,
    R = {
      Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
      CdataEnd: new Uint8Array([93, 93, 62]),
      CommentEnd: new Uint8Array([45, 45, 62]),
      ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
      StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
      TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]),
    },
    Ki = class {
      constructor({ xmlMode: e = !1, decodeEntities: t = !0 }, r) {
        (this.cbs = r),
          (this.state = b.Text),
          (this.buffer = ""),
          (this.sectionStart = 0),
          (this.index = 0),
          (this.baseState = b.Text),
          (this.isSpecial = !1),
          (this.running = !0),
          (this.offset = 0),
          (this.currentSequence = void 0),
          (this.sequenceIndex = 0),
          (this.trieIndex = 0),
          (this.trieCurrent = 0),
          (this.entityResult = 0),
          (this.entityExcess = 0),
          (this.xmlMode = e),
          (this.decodeEntities = t),
          (this.entityTrie = e ? Ne : ge);
      }
      reset() {
        (this.state = b.Text),
          (this.buffer = ""),
          (this.sectionStart = 0),
          (this.index = 0),
          (this.baseState = b.Text),
          (this.currentSequence = void 0),
          (this.running = !0),
          (this.offset = 0);
      }
      write(e) {
        (this.offset += this.buffer.length), (this.buffer = e), this.parse();
      }
      end() {
        this.running && this.finish();
      }
      pause() {
        this.running = !1;
      }
      resume() {
        (this.running = !0),
          this.index < this.buffer.length + this.offset && this.parse();
      }
      getIndex() {
        return this.index;
      }
      getSectionStart() {
        return this.sectionStart;
      }
      stateText(e) {
        e === S.Lt || (!this.decodeEntities && this.fastForwardTo(S.Lt))
          ? (this.index > this.sectionStart &&
              this.cbs.ontext(this.sectionStart, this.index),
            (this.state = b.BeforeTagName),
            (this.sectionStart = this.index))
          : this.decodeEntities && e === S.Amp && (this.state = b.BeforeEntity);
      }
      stateSpecialStartSequence(e) {
        var t = this.sequenceIndex === this.currentSequence.length;
        if (t ? Vi(e) : (32 | e) === this.currentSequence[this.sequenceIndex]) {
          if (!t) return void this.sequenceIndex++;
        } else this.isSpecial = !1;
        (this.sequenceIndex = 0),
          (this.state = b.InTagName),
          this.stateInTagName(e);
      }
      stateInSpecialTag(e) {
        if (this.sequenceIndex === this.currentSequence.length) {
          var t, r;
          if (e === S.Gt || Yi(e))
            return (
              (t = this.index - this.currentSequence.length),
              this.sectionStart < t &&
                ((r = this.index),
                (this.index = t),
                this.cbs.ontext(this.sectionStart, t),
                (this.index = r)),
              (this.isSpecial = !1),
              (this.sectionStart = 2 + t),
              void this.stateInClosingTagName(e)
            );
          this.sequenceIndex = 0;
        }
        (32 | e) === this.currentSequence[this.sequenceIndex]
          ? (this.sequenceIndex += 1)
          : 0 === this.sequenceIndex
          ? this.currentSequence === R.TitleEnd
            ? this.decodeEntities &&
              e === S.Amp &&
              (this.state = b.BeforeEntity)
            : this.fastForwardTo(S.Lt) && (this.sequenceIndex = 1)
          : (this.sequenceIndex = Number(e === S.Lt));
      }
      stateCDATASequence(e) {
        e === R.Cdata[this.sequenceIndex]
          ? ++this.sequenceIndex === R.Cdata.length &&
            ((this.state = b.InCommentLike),
            (this.currentSequence = R.CdataEnd),
            (this.sequenceIndex = 0),
            (this.sectionStart = this.index + 1))
          : ((this.sequenceIndex = 0),
            (this.state = b.InDeclaration),
            this.stateInDeclaration(e));
      }
      fastForwardTo(e) {
        for (; ++this.index < this.buffer.length + this.offset; )
          if (this.buffer.charCodeAt(this.index - this.offset) === e) return !0;
        return (this.index = this.buffer.length + this.offset - 1), !1;
      }
      stateInCommentLike(e) {
        e === this.currentSequence[this.sequenceIndex]
          ? ++this.sequenceIndex === this.currentSequence.length &&
            (this.currentSequence === R.CdataEnd
              ? this.cbs.oncdata(this.sectionStart, this.index, 2)
              : this.cbs.oncomment(this.sectionStart, this.index, 2),
            (this.sequenceIndex = 0),
            (this.sectionStart = this.index + 1),
            (this.state = b.Text))
          : 0 === this.sequenceIndex
          ? this.fastForwardTo(this.currentSequence[0]) &&
            (this.sequenceIndex = 1)
          : e !== this.currentSequence[this.sequenceIndex - 1] &&
            (this.sequenceIndex = 0);
      }
      isTagStartChar(e) {
        return this.xmlMode ? !Vi(e) : ji(e);
      }
      startSpecial(e, t) {
        (this.isSpecial = !0),
          (this.currentSequence = e),
          (this.sequenceIndex = t),
          (this.state = b.SpecialStartSequence);
      }
      stateBeforeTagName(e) {
        var t;
        e === S.ExclamationMark
          ? ((this.state = b.BeforeDeclaration),
            (this.sectionStart = this.index + 1))
          : e === S.Questionmark
          ? ((this.state = b.InProcessingInstruction),
            (this.sectionStart = this.index + 1))
          : this.isTagStartChar(e)
          ? ((t = 32 | e),
            (this.sectionStart = this.index),
            this.xmlMode || t !== R.TitleEnd[2]
              ? (this.state =
                  this.xmlMode || t !== R.ScriptEnd[2]
                    ? b.InTagName
                    : b.BeforeSpecialS)
              : this.startSpecial(R.TitleEnd, 3))
          : e === S.Slash
          ? (this.state = b.BeforeClosingTagName)
          : ((this.state = b.Text), this.stateText(e));
      }
      stateInTagName(e) {
        Vi(e) &&
          (this.cbs.onopentagname(this.sectionStart, this.index),
          (this.sectionStart = -1),
          (this.state = b.BeforeAttributeName),
          this.stateBeforeAttributeName(e));
      }
      stateBeforeClosingTagName(e) {
        Yi(e) ||
          (e === S.Gt
            ? (this.state = b.Text)
            : ((this.state = this.isTagStartChar(e)
                ? b.InClosingTagName
                : b.InSpecialComment),
              (this.sectionStart = this.index)));
      }
      stateInClosingTagName(e) {
        (e !== S.Gt && !Yi(e)) ||
          (this.cbs.onclosetag(this.sectionStart, this.index),
          (this.sectionStart = -1),
          (this.state = b.AfterClosingTagName),
          this.stateAfterClosingTagName(e));
      }
      stateAfterClosingTagName(e) {
        (e !== S.Gt && !this.fastForwardTo(S.Gt)) ||
          ((this.state = b.Text),
          (this.baseState = b.Text),
          (this.sectionStart = this.index + 1));
      }
      stateBeforeAttributeName(e) {
        e === S.Gt
          ? (this.cbs.onopentagend(this.index),
            this.isSpecial
              ? ((this.state = b.InSpecialTag), (this.sequenceIndex = 0))
              : (this.state = b.Text),
            (this.baseState = this.state),
            (this.sectionStart = this.index + 1))
          : e === S.Slash
          ? (this.state = b.InSelfClosingTag)
          : Yi(e) ||
            ((this.state = b.InAttributeName),
            (this.sectionStart = this.index));
      }
      stateInSelfClosingTag(e) {
        e === S.Gt
          ? (this.cbs.onselfclosingtag(this.index),
            (this.state = b.Text),
            (this.baseState = b.Text),
            (this.sectionStart = this.index + 1),
            (this.isSpecial = !1))
          : Yi(e) ||
            ((this.state = b.BeforeAttributeName),
            this.stateBeforeAttributeName(e));
      }
      stateInAttributeName(e) {
        (e !== S.Eq && !Vi(e)) ||
          (this.cbs.onattribname(this.sectionStart, this.index),
          (this.sectionStart = -1),
          (this.state = b.AfterAttributeName),
          this.stateAfterAttributeName(e));
      }
      stateAfterAttributeName(e) {
        e === S.Eq
          ? (this.state = b.BeforeAttributeValue)
          : e === S.Slash || e === S.Gt
          ? (this.cbs.onattribend(Hi.NoValue, this.index),
            (this.state = b.BeforeAttributeName),
            this.stateBeforeAttributeName(e))
          : Yi(e) ||
            (this.cbs.onattribend(Hi.NoValue, this.index),
            (this.state = b.InAttributeName),
            (this.sectionStart = this.index));
      }
      stateBeforeAttributeValue(e) {
        e === S.DoubleQuote
          ? ((this.state = b.InAttributeValueDq),
            (this.sectionStart = this.index + 1))
          : e === S.SingleQuote
          ? ((this.state = b.InAttributeValueSq),
            (this.sectionStart = this.index + 1))
          : Yi(e) ||
            ((this.sectionStart = this.index),
            (this.state = b.InAttributeValueNq),
            this.stateInAttributeValueNoQuotes(e));
      }
      handleInAttributeValue(e, t) {
        e === t || (!this.decodeEntities && this.fastForwardTo(t))
          ? (this.cbs.onattribdata(this.sectionStart, this.index),
            (this.sectionStart = -1),
            this.cbs.onattribend(
              t === S.DoubleQuote ? Hi.Double : Hi.Single,
              this.index
            ),
            (this.state = b.BeforeAttributeName))
          : this.decodeEntities &&
            e === S.Amp &&
            ((this.baseState = this.state), (this.state = b.BeforeEntity));
      }
      stateInAttributeValueDoubleQuotes(e) {
        this.handleInAttributeValue(e, S.DoubleQuote);
      }
      stateInAttributeValueSingleQuotes(e) {
        this.handleInAttributeValue(e, S.SingleQuote);
      }
      stateInAttributeValueNoQuotes(e) {
        Yi(e) || e === S.Gt
          ? (this.cbs.onattribdata(this.sectionStart, this.index),
            (this.sectionStart = -1),
            this.cbs.onattribend(Hi.Unquoted, this.index),
            (this.state = b.BeforeAttributeName),
            this.stateBeforeAttributeName(e))
          : this.decodeEntities &&
            e === S.Amp &&
            ((this.baseState = this.state), (this.state = b.BeforeEntity));
      }
      stateBeforeDeclaration(e) {
        e === S.OpeningSquareBracket
          ? ((this.state = b.CDATASequence), (this.sequenceIndex = 0))
          : (this.state = e === S.Dash ? b.BeforeComment : b.InDeclaration);
      }
      stateInDeclaration(e) {
        (e !== S.Gt && !this.fastForwardTo(S.Gt)) ||
          (this.cbs.ondeclaration(this.sectionStart, this.index),
          (this.state = b.Text),
          (this.sectionStart = this.index + 1));
      }
      stateInProcessingInstruction(e) {
        (e !== S.Gt && !this.fastForwardTo(S.Gt)) ||
          (this.cbs.onprocessinginstruction(this.sectionStart, this.index),
          (this.state = b.Text),
          (this.sectionStart = this.index + 1));
      }
      stateBeforeComment(e) {
        e === S.Dash
          ? ((this.state = b.InCommentLike),
            (this.currentSequence = R.CommentEnd),
            (this.sequenceIndex = 2),
            (this.sectionStart = this.index + 1))
          : (this.state = b.InDeclaration);
      }
      stateInSpecialComment(e) {
        (e !== S.Gt && !this.fastForwardTo(S.Gt)) ||
          (this.cbs.oncomment(this.sectionStart, this.index, 0),
          (this.state = b.Text),
          (this.sectionStart = this.index + 1));
      }
      stateBeforeSpecialS(e) {
        var t = 32 | e;
        t === R.ScriptEnd[3]
          ? this.startSpecial(R.ScriptEnd, 4)
          : t === R.StyleEnd[3]
          ? this.startSpecial(R.StyleEnd, 4)
          : ((this.state = b.InTagName), this.stateInTagName(e));
      }
      stateBeforeEntity(e) {
        (this.entityExcess = 1),
          (this.entityResult = 0),
          e === S.Number
            ? (this.state = b.BeforeNumericEntity)
            : e !== S.Amp &&
              ((this.trieIndex = 0),
              (this.trieCurrent = this.entityTrie[0]),
              (this.state = b.InNamedEntity),
              this.stateInNamedEntity(e));
      }
      stateInNamedEntity(e) {
        var t;
        (this.entityExcess += 1),
          (this.trieIndex = ke(
            this.entityTrie,
            this.trieCurrent,
            this.trieIndex + 1,
            e
          )),
          this.trieIndex < 0
            ? (this.emitNamedEntity(), this.index--)
            : ((this.trieCurrent = this.entityTrie[this.trieIndex]),
              (t = this.trieCurrent & l.VALUE_LENGTH) &&
                ((t = (t >> 14) - 1),
                this.allowLegacyEntity() || e === S.Semi
                  ? ((e = this.index - this.entityExcess + 1) >
                      this.sectionStart &&
                      this.emitPartial(this.sectionStart, e),
                    (this.entityResult = this.trieIndex),
                    (this.trieIndex += t),
                    (this.entityExcess = 0),
                    (this.sectionStart = this.index + 1),
                    0 == t && this.emitNamedEntity())
                  : (this.trieIndex += t)));
      }
      emitNamedEntity() {
        if (((this.state = this.baseState), 0 !== this.entityResult))
          switch ((this.entityTrie[this.entityResult] & l.VALUE_LENGTH) >> 14) {
            case 1:
              this.emitCodePoint(
                this.entityTrie[this.entityResult] & ~l.VALUE_LENGTH
              );
              break;
            case 2:
              this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
              break;
            case 3:
              this.emitCodePoint(this.entityTrie[this.entityResult + 1]),
                this.emitCodePoint(this.entityTrie[this.entityResult + 2]);
          }
      }
      stateBeforeNumericEntity(e) {
        (32 | e) === S.LowerX
          ? (this.entityExcess++, (this.state = b.InHexEntity))
          : ((this.state = b.InNumericEntity), this.stateInNumericEntity(e));
      }
      emitNumericEntity(e) {
        var t = this.index - this.entityExcess - 1;
        2 + t + Number(this.state === b.InHexEntity) !== this.index &&
          (t > this.sectionStart && this.emitPartial(this.sectionStart, t),
          (this.sectionStart = this.index + Number(e)),
          this.emitCodePoint(Se(this.entityResult))),
          (this.state = this.baseState);
      }
      stateInNumericEntity(e) {
        e === S.Semi
          ? this.emitNumericEntity(!0)
          : Qi(e)
          ? ((this.entityResult = 10 * this.entityResult + (e - S.Zero)),
            this.entityExcess++)
          : (this.allowLegacyEntity()
              ? this.emitNumericEntity(!1)
              : (this.state = this.baseState),
            this.index--);
      }
      stateInHexEntity(e) {
        e === S.Semi
          ? this.emitNumericEntity(!0)
          : Qi(e)
          ? ((this.entityResult = 16 * this.entityResult + (e - S.Zero)),
            this.entityExcess++)
          : Wi(e)
          ? ((this.entityResult =
              16 * this.entityResult + ((32 | e) - S.LowerA + 10)),
            this.entityExcess++)
          : (this.allowLegacyEntity()
              ? this.emitNumericEntity(!1)
              : (this.state = this.baseState),
            this.index--);
      }
      allowLegacyEntity() {
        return (
          !this.xmlMode &&
          (this.baseState === b.Text || this.baseState === b.InSpecialTag)
        );
      }
      cleanup() {
        this.running &&
          this.sectionStart !== this.index &&
          (this.state === b.Text ||
          (this.state === b.InSpecialTag && 0 === this.sequenceIndex)
            ? (this.cbs.ontext(this.sectionStart, this.index),
              (this.sectionStart = this.index))
            : (this.state !== b.InAttributeValueDq &&
                this.state !== b.InAttributeValueSq &&
                this.state !== b.InAttributeValueNq) ||
              (this.cbs.onattribdata(this.sectionStart, this.index),
              (this.sectionStart = this.index)));
      }
      shouldContinue() {
        return this.index < this.buffer.length + this.offset && this.running;
      }
      parse() {
        for (; this.shouldContinue(); ) {
          var e = this.buffer.charCodeAt(this.index - this.offset);
          switch (this.state) {
            case b.Text:
              this.stateText(e);
              break;
            case b.SpecialStartSequence:
              this.stateSpecialStartSequence(e);
              break;
            case b.InSpecialTag:
              this.stateInSpecialTag(e);
              break;
            case b.CDATASequence:
              this.stateCDATASequence(e);
              break;
            case b.InAttributeValueDq:
              this.stateInAttributeValueDoubleQuotes(e);
              break;
            case b.InAttributeName:
              this.stateInAttributeName(e);
              break;
            case b.InCommentLike:
              this.stateInCommentLike(e);
              break;
            case b.InSpecialComment:
              this.stateInSpecialComment(e);
              break;
            case b.BeforeAttributeName:
              this.stateBeforeAttributeName(e);
              break;
            case b.InTagName:
              this.stateInTagName(e);
              break;
            case b.InClosingTagName:
              this.stateInClosingTagName(e);
              break;
            case b.BeforeTagName:
              this.stateBeforeTagName(e);
              break;
            case b.AfterAttributeName:
              this.stateAfterAttributeName(e);
              break;
            case b.InAttributeValueSq:
              this.stateInAttributeValueSingleQuotes(e);
              break;
            case b.BeforeAttributeValue:
              this.stateBeforeAttributeValue(e);
              break;
            case b.BeforeClosingTagName:
              this.stateBeforeClosingTagName(e);
              break;
            case b.AfterClosingTagName:
              this.stateAfterClosingTagName(e);
              break;
            case b.BeforeSpecialS:
              this.stateBeforeSpecialS(e);
              break;
            case b.InAttributeValueNq:
              this.stateInAttributeValueNoQuotes(e);
              break;
            case b.InSelfClosingTag:
              this.stateInSelfClosingTag(e);
              break;
            case b.InDeclaration:
              this.stateInDeclaration(e);
              break;
            case b.BeforeDeclaration:
              this.stateBeforeDeclaration(e);
              break;
            case b.BeforeComment:
              this.stateBeforeComment(e);
              break;
            case b.InProcessingInstruction:
              this.stateInProcessingInstruction(e);
              break;
            case b.InNamedEntity:
              this.stateInNamedEntity(e);
              break;
            case b.BeforeEntity:
              this.stateBeforeEntity(e);
              break;
            case b.InHexEntity:
              this.stateInHexEntity(e);
              break;
            case b.InNumericEntity:
              this.stateInNumericEntity(e);
              break;
            default:
              this.stateBeforeNumericEntity(e);
          }
          this.index++;
        }
        this.cleanup();
      }
      finish() {
        this.state === b.InNamedEntity && this.emitNamedEntity(),
          this.sectionStart < this.index && this.handleTrailingData(),
          this.cbs.onend();
      }
      handleTrailingData() {
        var e = this.buffer.length + this.offset;
        this.state === b.InCommentLike
          ? this.currentSequence === R.CdataEnd
            ? this.cbs.oncdata(this.sectionStart, e, 0)
            : this.cbs.oncomment(this.sectionStart, e, 0)
          : (this.state === b.InNumericEntity && this.allowLegacyEntity()) ||
            (this.state === b.InHexEntity && this.allowLegacyEntity())
          ? this.emitNumericEntity(!1)
          : this.state !== b.InTagName &&
            this.state !== b.BeforeAttributeName &&
            this.state !== b.BeforeAttributeValue &&
            this.state !== b.AfterAttributeName &&
            this.state !== b.InAttributeName &&
            this.state !== b.InAttributeValueSq &&
            this.state !== b.InAttributeValueDq &&
            this.state !== b.InAttributeValueNq &&
            this.state !== b.InClosingTagName &&
            this.cbs.ontext(this.sectionStart, e);
      }
      emitPartial(e, t) {
        this.baseState !== b.Text && this.baseState !== b.InSpecialTag
          ? this.cbs.onattribdata(e, t)
          : this.cbs.ontext(e, t);
      }
      emitCodePoint(e) {
        this.baseState !== b.Text && this.baseState !== b.InSpecialTag
          ? this.cbs.onattribentity(e)
          : this.cbs.ontextentity(e);
      }
    },
    p = new Set([
      "input",
      "option",
      "optgroup",
      "select",
      "button",
      "datalist",
      "textarea",
    ]),
    r = new Set(["p"]),
    n = new Set(["thead", "tbody"]),
    t = new Set(["dd", "dt"]),
    e = new Set(["rt", "rp"]),
    zi = new Map([
      ["tr", new Set(["tr", "th", "td"])],
      ["th", new Set(["th"])],
      ["td", new Set(["thead", "th", "td"])],
      ["body", new Set(["head", "link", "script"])],
      ["li", new Set(["li"])],
      ["p", r],
      ["h1", r],
      ["h2", r],
      ["h3", r],
      ["h4", r],
      ["h5", r],
      ["h6", r],
      ["select", p],
      ["input", p],
      ["output", p],
      ["button", p],
      ["datalist", p],
      ["textarea", p],
      ["option", new Set(["option"])],
      ["optgroup", new Set(["optgroup", "option"])],
      ["dd", t],
      ["dt", t],
      ["address", r],
      ["article", r],
      ["aside", r],
      ["blockquote", r],
      ["details", r],
      ["div", r],
      ["dl", r],
      ["fieldset", r],
      ["figcaption", r],
      ["figure", r],
      ["footer", r],
      ["form", r],
      ["header", r],
      ["hr", r],
      ["main", r],
      ["nav", r],
      ["ol", r],
      ["pre", r],
      ["section", r],
      ["table", r],
      ["ul", r],
      ["rt", e],
      ["rp", e],
      ["tbody", n],
      ["tfoot", n],
    ]),
    $i = new Set([
      "area",
      "base",
      "basefont",
      "br",
      "col",
      "command",
      "embed",
      "frame",
      "hr",
      "img",
      "input",
      "isindex",
      "keygen",
      "link",
      "meta",
      "param",
      "source",
      "track",
      "wbr",
    ]),
    Ji = new Set(["math", "svg"]),
    Zi = new Set([
      "mi",
      "mo",
      "mn",
      "ms",
      "mtext",
      "annotation-xml",
      "foreignobject",
      "desc",
      "title",
    ]),
    eo = /\s|\//,
    to = class {
      constructor(e, t = {}) {
        (this.options = t),
          (this.startIndex = 0),
          (this.endIndex = 0),
          (this.openTagStart = 0),
          (this.tagname = ""),
          (this.attribname = ""),
          (this.attribvalue = ""),
          (this.attribs = null),
          (this.stack = []),
          (this.foreignContext = []),
          (this.buffers = []),
          (this.bufferOffset = 0),
          (this.writeIndex = 0),
          (this.ended = !1),
          (this.cbs = null != e ? e : {}),
          (this.lowerCaseTagNames =
            null != (e = t.lowerCaseTags) ? e : !t.xmlMode),
          (this.lowerCaseAttributeNames =
            null != (e = t.lowerCaseAttributeNames) ? e : !t.xmlMode),
          (this.tokenizer = new (null != (e = t.Tokenizer) ? e : Ki)(
            this.options,
            this
          )),
          null != (e = (t = this.cbs).onparserinit) && e.call(t, this);
      }
      ontext(e, t) {
        var r,
          n,
          e = this.getSlice(e, t);
        (this.endIndex = t - 1),
          null != (n = (r = this.cbs).ontext) && n.call(r, e),
          (this.startIndex = t);
      }
      ontextentity(e) {
        var t,
          r,
          n = this.tokenizer.getSectionStart();
        (this.endIndex = n - 1),
          null != (r = (t = this.cbs).ontext) && r.call(t, Ie(e)),
          (this.startIndex = n);
      }
      isVoidElement(e) {
        return !this.options.xmlMode && $i.has(e);
      }
      onopentagname(e, t) {
        this.endIndex = t;
        let r = this.getSlice(e, t);
        this.lowerCaseTagNames && (r = r.toLowerCase()), this.emitOpenTag(r);
      }
      emitOpenTag(e) {
        (this.openTagStart = this.startIndex), (this.tagname = e);
        var t,
          r,
          n,
          a,
          s = !this.options.xmlMode && zi.get(e);
        if (s)
          for (
            ;
            0 < this.stack.length && s.has(this.stack[this.stack.length - 1]);

          ) {
            var i = this.stack.pop();
            null != (r = (t = this.cbs).onclosetag) && r.call(t, i, !0);
          }
        this.isVoidElement(e) ||
          (this.stack.push(e),
          Ji.has(e)
            ? this.foreignContext.push(!0)
            : Zi.has(e) && this.foreignContext.push(!1)),
          null != (a = (n = this.cbs).onopentagname) && a.call(n, e),
          this.cbs.onopentag && (this.attribs = {});
      }
      endOpenTag(e) {
        var t, r;
        (this.startIndex = this.openTagStart),
          this.attribs &&
            (null != (r = (t = this.cbs).onopentag) &&
              r.call(t, this.tagname, this.attribs, e),
            (this.attribs = null)),
          this.cbs.onclosetag &&
            this.isVoidElement(this.tagname) &&
            this.cbs.onclosetag(this.tagname, !0),
          (this.tagname = "");
      }
      onopentagend(e) {
        (this.endIndex = e), this.endOpenTag(!1), (this.startIndex = e + 1);
      }
      onclosetag(e, t) {
        this.endIndex = t;
        let r = this.getSlice(e, t);
        if (
          (this.lowerCaseTagNames && (r = r.toLowerCase()),
          (Ji.has(r) || Zi.has(r)) && this.foreignContext.pop(),
          this.isVoidElement(r))
        )
          this.options.xmlMode ||
            "br" !== r ||
            (null != (n = (e = this.cbs).onopentagname) && n.call(e, "br"),
            null != (e = (n = this.cbs).onopentag) && e.call(n, "br", {}, !0),
            null != (n = (e = this.cbs).onclosetag) && n.call(e, "br", !1));
        else {
          var n = this.stack.lastIndexOf(r);
          if (-1 !== n)
            if (this.cbs.onclosetag) {
              let e = this.stack.length - n;
              for (; e--; ) this.cbs.onclosetag(this.stack.pop(), 0 !== e);
            } else this.stack.length = n;
          else
            this.options.xmlMode ||
              "p" !== r ||
              (this.emitOpenTag("p"), this.closeCurrentTag(!0));
        }
        this.startIndex = t + 1;
      }
      onselfclosingtag(e) {
        (this.endIndex = e),
          this.options.xmlMode ||
          this.options.recognizeSelfClosing ||
          this.foreignContext[this.foreignContext.length - 1]
            ? (this.closeCurrentTag(!1), (this.startIndex = e + 1))
            : this.onopentagend(e);
      }
      closeCurrentTag(e) {
        var t,
          r,
          n = this.tagname;
        this.endOpenTag(e),
          this.stack[this.stack.length - 1] === n &&
            (null != (r = (t = this.cbs).onclosetag) && r.call(t, n, !e),
            this.stack.pop());
      }
      onattribname(e, t) {
        this.startIndex = e;
        e = this.getSlice(e, t);
        this.attribname = this.lowerCaseAttributeNames ? e.toLowerCase() : e;
      }
      onattribdata(e, t) {
        this.attribvalue += this.getSlice(e, t);
      }
      onattribentity(e) {
        this.attribvalue += Ie(e);
      }
      onattribend(e, t) {
        var r;
        (this.endIndex = t),
          null != (r = (t = this.cbs).onattribute) &&
            r.call(
              t,
              this.attribname,
              this.attribvalue,
              e === Hi.Double
                ? '"'
                : e === Hi.Single
                ? "'"
                : e === Hi.NoValue
                ? void 0
                : null
            ),
          this.attribs &&
            !Object.prototype.hasOwnProperty.call(
              this.attribs,
              this.attribname
            ) &&
            (this.attribs[this.attribname] = this.attribvalue),
          (this.attribvalue = "");
      }
      getInstructionName(e) {
        var t = e.search(eo);
        let r = t < 0 ? e : e.substr(0, t);
        return (r = this.lowerCaseTagNames ? r.toLowerCase() : r);
      }
      ondeclaration(e, t) {
        this.endIndex = t;
        var r,
          e = this.getSlice(e, t);
        this.cbs.onprocessinginstruction &&
          ((r = this.getInstructionName(e)),
          this.cbs.onprocessinginstruction("!" + r, "!" + e)),
          (this.startIndex = t + 1);
      }
      onprocessinginstruction(e, t) {
        this.endIndex = t;
        var r,
          e = this.getSlice(e, t);
        this.cbs.onprocessinginstruction &&
          ((r = this.getInstructionName(e)),
          this.cbs.onprocessinginstruction("?" + r, "?" + e)),
          (this.startIndex = t + 1);
      }
      oncomment(e, t, r) {
        var n, a;
        (this.endIndex = t),
          null != (n = (a = this.cbs).oncomment) &&
            n.call(a, this.getSlice(e, t - r)),
          null != (a = (n = this.cbs).oncommentend) && a.call(n),
          (this.startIndex = t + 1);
      }
      oncdata(e, t, r) {
        this.endIndex = t;
        var n,
          e = this.getSlice(e, t - r);
        this.options.xmlMode || this.options.recognizeCDATA
          ? (null != (n = (r = this.cbs).oncdatastart) && n.call(r),
            null != (r = (n = this.cbs).ontext) && r.call(n, e),
            null != (n = (r = this.cbs).oncdataend) && n.call(r))
          : (null != (r = (n = this.cbs).oncomment) &&
              r.call(n, `[CDATA[${e}]]`),
            null != (n = (r = this.cbs).oncommentend) && n.call(r)),
          (this.startIndex = t + 1);
      }
      onend() {
        var e, t;
        if (this.cbs.onclosetag) {
          this.endIndex = this.startIndex;
          for (
            let e = this.stack.length;
            0 < e;
            this.cbs.onclosetag(this.stack[--e], !0)
          );
        }
        null != (t = (e = this.cbs).onend) && t.call(e);
      }
      reset() {
        var e, t;
        null != (e = (t = this.cbs).onreset) && e.call(t),
          this.tokenizer.reset(),
          (this.tagname = ""),
          (this.attribname = ""),
          (this.attribs = null),
          (this.stack.length = 0),
          (this.startIndex = 0),
          (this.endIndex = 0),
          null != (t = (e = this.cbs).onparserinit) && t.call(e, this),
          (this.buffers.length = 0),
          (this.bufferOffset = 0),
          (this.writeIndex = 0),
          (this.ended = !1);
      }
      parseComplete(e) {
        this.reset(), this.end(e);
      }
      getSlice(e, t) {
        for (; e - this.bufferOffset >= this.buffers[0].length; )
          this.shiftBuffer();
        let r = this.buffers[0].slice(
          e - this.bufferOffset,
          t - this.bufferOffset
        );
        for (; t - this.bufferOffset > this.buffers[0].length; )
          this.shiftBuffer(),
            (r += this.buffers[0].slice(0, t - this.bufferOffset));
        return r;
      }
      shiftBuffer() {
        (this.bufferOffset += this.buffers[0].length),
          this.writeIndex--,
          this.buffers.shift();
      }
      write(e) {
        var t, r;
        this.ended
          ? null != (r = (t = this.cbs).onerror) &&
            r.call(t, new Error(".write() after done!"))
          : (this.buffers.push(e),
            this.tokenizer.running &&
              (this.tokenizer.write(e), this.writeIndex++));
      }
      end(e) {
        var t, r;
        this.ended
          ? null != (r = (t = this.cbs).onerror) &&
            r.call(t, new Error(".end() after done!"))
          : (e && this.write(e), (this.ended = !0), this.tokenizer.end());
      }
      pause() {
        this.tokenizer.pause();
      }
      resume() {
        for (
          this.tokenizer.resume();
          this.tokenizer.running && this.writeIndex < this.buffers.length;

        )
          this.tokenizer.write(this.buffers[this.writeIndex++]);
        this.ended && this.tokenizer.end();
      }
      parseChunk(e) {
        this.write(e);
      }
      done(e) {
        this.end(e);
      }
    };
  (Xi = (e, t, r, n) => {
    return t.xmlMode || t._useHtmlParser2
      ? ((a = e), (i = new _e(void 0, (s = t))), new to(i, s).end(a), i.root)
      : Ui(e, t, r, n);
    var a, s, i;
  }),
    (ro = function (e, t, r, n) {
      return "string" ==
        typeof (e =
          "undefined" != typeof Buffer && Buffer.isBuffer(e) ? e.toString() : e)
        ? Xi(e, t, r, n)
        : ((t = e),
          !Array.isArray(t) && Te(t) ? t : (Ln(t, (r = new le([]))), r));
    }),
    (no = (e, t) => (t.xmlMode || t._useHtmlParser2 ? je(e, t) : qi(e)));
  var ro,
    no,
    ao = (function e(t, r, n = !0) {
      if (null == t) throw new Error("cheerio.load() expects a string");
      const o = { ...Q, ...W(r) },
        c = ro(t, o, n, null);
      class l extends qn {
        _make(e, t) {
          e = a(e, t);
          return (e.prevObject = this), e;
        }
        _parse(e, t, r, n) {
          return ro(e, t, r, n);
        }
        _render(e) {
          return no(e, this.options);
        }
      }
      function a(e, t, r = c, n) {
        if (e && Dt(e)) return e;
        (n = { ...o, ...W(n) }),
          (r =
            "string" == typeof r
              ? [ro(r, n, !1, null)]
              : "length" in r
              ? r
              : [r]),
          (r = Dt(r) ? r : new l(r, null, n));
        if (((r._root = r), !e)) return new l(void 0, r, n);
        var a =
            "string" == typeof e && Lt(e)
              ? ro(e, n, !1, null).children
              : (a = e).name ||
                "root" === a.type ||
                "text" === a.type ||
                "comment" === a.type
              ? [e]
              : Array.isArray(e)
              ? e
              : void 0,
          s = new l(a, r, n);
        if (a) return s;
        if ("string" != typeof e)
          throw new Error("Unexpected type of selector");
        let i = e;
        e = t
          ? "string" == typeof t
            ? Lt(t)
              ? new l([ro(t, n, !1, null)], r, n)
              : ((i = t + " " + i), r)
            : Dt(t)
            ? t
            : new l(Array.isArray(t) ? t : [t], r, n)
          : r;
        return e ? e.find(i) : s;
      }
      return (
        Object.assign(a, X, {
          load: e,
          _root: c,
          _options: o,
          fn: l.prototype,
          prototype: l.prototype,
        }),
        a
      );
    })([]);
  function so(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  var io,
    oo = Object.prototype["toString"],
    co = Object["getPrototypeOf"],
    lo =
      ((io = Object.create(null)),
      (e) => {
        e = oo.call(e);
        return io[e] || (io[e] = e.slice(8, -1).toLowerCase());
      }),
    p = (t) => ((t = t.toLowerCase()), (e) => lo(e) === t),
    t = (t) => (e) => typeof e === t,
    ho = Array["isArray"],
    uo = t("undefined");
  var Eo = p("ArrayBuffer");
  var r = t("string"),
    po = t("function"),
    To = t("number"),
    mo = (e) => null !== e && "object" == typeof e,
    fo = (e) => {
      var t;
      return (
        "object" === lo(e) &&
        !(
          (null !== (t = co(e)) &&
            t !== Object.prototype &&
            null !== Object.getPrototypeOf(t)) ||
          Symbol.toStringTag in e ||
          Symbol.iterator in e
        )
      );
    },
    e = p("Date"),
    n = p("File"),
    t = p("Blob"),
    Ao = p("FileList"),
    D = p("URLSearchParams"),
    [_o, go, No, Co] = ["ReadableStream", "Request", "Response", "Headers"].map(
      p
    );
  function Io(t, r, { allOwnKeys: n = !1 } = {}) {
    if (null != t) {
      let e;
      var a;
      if (ho((t = "object" != typeof t ? [t] : t)))
        for (e = 0, a = t.length; e < a; e++) r.call(null, t[e], e, t);
      else {
        var s,
          i = n ? Object.getOwnPropertyNames(t) : Object.keys(t),
          o = i.length;
        for (e = 0; e < o; e++) (s = i[e]), r.call(null, t[s], s, t);
      }
    }
  }
  function So(e, t) {
    t = t.toLowerCase();
    var r,
      n = Object.keys(e);
    let a = n.length;
    for (; 0 < a--; ) if (t === (r = n[a]).toLowerCase()) return r;
    return null;
  }
  var bo =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof self
        ? self
        : "undefined" != typeof window
        ? window
        : global,
    Ro = (e) => !uo(e) && e !== bo;
  Do = "undefined" != typeof Uint8Array && co(Uint8Array);
  var Do,
    Oo,
    Lo = (e) => Do && e instanceof Do,
    yo = p("HTMLFormElement"),
    ko =
      ((Oo = [Object.prototype["hasOwnProperty"]][0]), (e, t) => Oo.call(e, t)),
    vo = p("RegExp"),
    Mo = (n, a) => {
      var e = Object.getOwnPropertyDescriptors(n);
      const s = {};
      Io(e, (e, t) => {
        var r;
        !1 !== (r = a(e, t, n)) && (s[t] = r || e);
      }),
        Object.defineProperties(n, s);
    },
    Po = "abcdefghijklmnopqrstuvwxyz",
    wo = "0123456789",
    Bo = { DIGIT: wo, ALPHA: Po, ALPHA_DIGIT: Po + Po.toUpperCase() + wo };
  var Po = p("AsyncFunction"),
    O = {
      isArray: ho,
      isArrayBuffer: Eo,
      isBuffer: function (e) {
        return (
          null !== e &&
          !uo(e) &&
          null !== e.constructor &&
          !uo(e.constructor) &&
          po(e.constructor.isBuffer) &&
          e.constructor.isBuffer(e)
        );
      },
      isFormData: (e) => {
        var t;
        return (
          e &&
          (("function" == typeof FormData && e instanceof FormData) ||
            (po(e.append) &&
              ("formdata" === (t = lo(e)) ||
                ("object" === t &&
                  po(e.toString) &&
                  "[object FormData]" === e.toString()))))
        );
      },
      isArrayBufferView: function (e) {
        let t;
        return (t =
          "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView(e)
            : e && e.buffer && Eo(e.buffer));
      },
      isString: r,
      isNumber: To,
      isBoolean: (e) => !0 === e || !1 === e,
      isObject: mo,
      isPlainObject: fo,
      isReadableStream: _o,
      isRequest: go,
      isResponse: No,
      isHeaders: Co,
      isUndefined: uo,
      isDate: e,
      isFile: n,
      isBlob: t,
      isRegExp: vo,
      isFunction: po,
      isStream: (e) => mo(e) && po(e.pipe),
      isURLSearchParams: D,
      isTypedArray: Lo,
      isFileList: Ao,
      forEach: Io,
      merge: function r() {
        const n = ((Ro(this) && this) || {}).caseless,
          a = {};
        var s = (e, t) => {
          (t = (n && So(a, t)) || t),
            fo(a[t]) && fo(e)
              ? (a[t] = r(a[t], e))
              : fo(e)
              ? (a[t] = r({}, e))
              : ho(e)
              ? (a[t] = e.slice())
              : (a[t] = e);
        };
        for (let e = 0, t = arguments.length; e < t; e++)
          arguments[e] && Io(arguments[e], s);
        return a;
      },
      extend: (r, e, n, { allOwnKeys: t } = {}) => (
        Io(
          e,
          (e, t) => {
            n && po(e) ? (r[t] = so(e, n)) : (r[t] = e);
          },
          { allOwnKeys: t }
        ),
        r
      ),
      trim: (e) =>
        e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
      stripBOM: (e) => (e = 65279 === e.charCodeAt(0) ? e.slice(1) : e),
      inherits: (e, t, r, n) => {
        (e.prototype = Object.create(t.prototype, n)),
          (e.prototype.constructor = e),
          Object.defineProperty(e, "super", { value: t.prototype }),
          r && Object.assign(e.prototype, r);
      },
      toFlatObject: (e, t, r, n) => {
        var a, s;
        let i;
        var o = {};
        if (((t = t || {}), null != e))
          do {
            for (a = Object.getOwnPropertyNames(e), i = a.length; 0 < i--; )
              (s = a[i]),
                (n && !n(s, e, t)) || o[s] || ((t[s] = e[s]), (o[s] = !0));
          } while (
            (e = !1 !== r && co(e)) &&
            (!r || r(e, t)) &&
            e !== Object.prototype
          );
        return t;
      },
      kindOf: lo,
      kindOfTest: p,
      endsWith: (e, t, r) => {
        (e = String(e)),
          (void 0 === r || r > e.length) && (r = e.length),
          (r -= t.length);
        e = e.indexOf(t, r);
        return -1 !== e && e === r;
      },
      toArray: (e) => {
        if (!e) return null;
        if (ho(e)) return e;
        let t = e.length;
        if (!To(t)) return null;
        for (var r = new Array(t); 0 < t--; ) r[t] = e[t];
        return r;
      },
      forEachEntry: (e, t) => {
        for (
          var r = (e && e[Symbol.iterator]).call(e);
          (n = r.next()) && !n.done;

        ) {
          var n = n.value;
          t.call(e, n[0], n[1]);
        }
      },
      matchAll: (e, t) => {
        for (var r, n = []; null !== (r = e.exec(t)); ) n.push(r);
        return n;
      },
      isHTMLForm: yo,
      hasOwnProperty: ko,
      hasOwnProp: ko,
      reduceDescriptors: Mo,
      freezeMethods: (n) => {
        Mo(n, (e, t) => {
          if (po(n) && -1 !== ["arguments", "caller", "callee"].indexOf(t))
            return !1;
          var r = n[t];
          po(r) &&
            ((e.enumerable = !1),
            "writable" in e
              ? (e.writable = !1)
              : e.set ||
                (e.set = () => {
                  throw Error("Can not rewrite read-only method '" + t + "'");
                }));
        });
      },
      toObjectSet: (e, t) => {
        const r = {};
        var n = (e) => {
          e.forEach((e) => {
            r[e] = !0;
          });
        };
        return ho(e) ? n(e) : n(String(e).split(t)), r;
      },
      toCamelCase: (e) =>
        e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, r) {
          return t.toUpperCase() + r;
        }),
      noop: () => {},
      toFiniteNumber: (e, t) =>
        null != e && Number.isFinite((e = +e)) ? e : t,
      findKey: So,
      global: bo,
      isContextDefined: Ro,
      ALPHABET: Bo,
      generateString: (e = 16, t = Bo.ALPHA_DIGIT) => {
        let r = "";
        for (var n = t["length"]; e--; ) r += t[(Math.random() * n) | 0];
        return r;
      },
      isSpecCompliantForm: function (e) {
        return !!(
          e &&
          po(e.append) &&
          "FormData" === e[Symbol.toStringTag] &&
          e[Symbol.iterator]
        );
      },
      toJSONObject: (e) => {
        const t = new Array(10),
          a = (e, r) => {
            if (mo(e)) {
              if (0 <= t.indexOf(e)) return;
              if (!("toJSON" in e)) {
                t[r] = e;
                const n = ho(e) ? [] : {};
                return (
                  Io(e, (e, t) => {
                    e = a(e, r + 1);
                    uo(e) || (n[t] = e);
                  }),
                  (t[r] = void 0),
                  n
                );
              }
            }
            return e;
          };
        return a(e, 0);
      },
      isAsyncFn: Po,
      isThenable: (e) => e && (mo(e) || po(e)) && po(e.then) && po(e.catch),
    };
  function xo(e, t, r, n, a) {
    Error.call(this),
      Error.captureStackTrace
        ? Error.captureStackTrace(this, this.constructor)
        : (this.stack = new Error().stack),
      (this.message = e),
      (this.name = "AxiosError"),
      t && (this.code = t),
      r && (this.config = r),
      n && (this.request = n),
      a && (this.response = a);
  }
  O.inherits(xo, Error, {
    toJSON: function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: O.toJSONObject(this.config),
        code: this.code,
        status:
          this.response && this.response.status ? this.response.status : null,
      };
    },
  });
  var Fo = xo.prototype,
    Uo = {},
    L =
      ([
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
        "ERR_NOT_SUPPORT",
        "ERR_INVALID_URL",
      ].forEach((e) => {
        Uo[e] = { value: e };
      }),
      Object.defineProperties(xo, Uo),
      Object.defineProperty(Fo, "isAxiosError", { value: !0 }),
      (xo.from = (e, t, r, n, a, s) => {
        var i = Object.create(Fo);
        return (
          O.toFlatObject(
            e,
            i,
            function (e) {
              return e !== Error.prototype;
            },
            (e) => "isAxiosError" !== e
          ),
          xo.call(i, e.message, t, r, n, a),
          (i.cause = e),
          (i.name = e.name),
          s && Object.assign(i, s),
          i
        );
      }),
      xo);
  function Ho(e) {
    return O.isPlainObject(e) || O.isArray(e);
  }
  function Go(e) {
    return O.endsWith(e, "[]") ? e.slice(0, -2) : e;
  }
  function qo(e, t, r) {
    return e
      ? e
          .concat(t)
          .map(function (e, t) {
            return (e = Go(e)), !r && t ? "[" + e + "]" : e;
          })
          .join(r ? "." : "")
      : t;
  }
  var Yo = O.toFlatObject(O, {}, null, function (e) {
    return /^is[A-Z]/.test(e);
  });
  var Vo = function (e, s, t) {
    if (!O.isObject(e)) throw new TypeError("target must be an object");
    s = s || new FormData();
    const i = (t = O.toFlatObject(
        t,
        { metaTokens: !0, dots: !1, indexes: !1 },
        !1,
        function (e, t) {
          return !O.isUndefined(t[e]);
        }
      )).metaTokens,
      a = t.visitor || n,
      o = t.dots,
      c = t.indexes,
      r =
        (t.Blob || ("undefined" != typeof Blob && Blob)) &&
        O.isSpecCompliantForm(s);
    if (!O.isFunction(a)) throw new TypeError("visitor must be a function");
    function l(e) {
      if (null === e) return "";
      if (O.isDate(e)) return e.toISOString();
      if (!r && O.isBlob(e))
        throw new L("Blob is not supported. Use a Buffer instead.");
      return O.isArrayBuffer(e) || O.isTypedArray(e)
        ? r && "function" == typeof Blob
          ? new Blob([e])
          : Buffer.from(e)
        : e;
    }
    function n(e, r, t) {
      let n = e;
      if (e && !t && "object" == typeof e)
        if (O.endsWith(r, "{}"))
          (r = i ? r : r.slice(0, -2)), (e = JSON.stringify(e));
        else if (
          (O.isArray(e) && ((a = e), O.isArray(a)) && !a.some(Ho)) ||
          ((O.isFileList(e) || O.endsWith(r, "[]")) && (n = O.toArray(e)))
        )
          return (
            (r = Go(r)),
            n.forEach(function (e, t) {
              O.isUndefined(e) ||
                null === e ||
                s.append(
                  !0 === c ? qo([r], t, o) : null === c ? r : r + "[]",
                  l(e)
                );
            }),
            !1
          );
      var a;
      return !!Ho(e) || (s.append(qo(t, r, o), l(e)), !1);
    }
    const h = [],
      u = Object.assign(Yo, {
        defaultVisitor: n,
        convertValue: l,
        isVisitable: Ho,
      });
    if (O.isObject(e))
      return (
        (function r(e, n) {
          if (!O.isUndefined(e)) {
            if (-1 !== h.indexOf(e))
              throw Error("Circular reference detected in " + n.join("."));
            h.push(e),
              O.forEach(e, function (e, t) {
                !0 ===
                  (!(O.isUndefined(e) || null === e) &&
                    a.call(s, e, O.isString(t) ? t.trim() : t, n, u)) &&
                  r(e, n ? n.concat(t) : [t]);
              }),
              h.pop();
          }
        })(e),
        s
      );
    throw new TypeError("data must be an object");
  };
  function Qo(e) {
    const t = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0",
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
      return t[e];
    });
  }
  function jo(e, t) {
    (this._pairs = []), e && Vo(e, this, t);
  }
  var wo = jo.prototype,
    Wo =
      ((wo.append = function (e, t) {
        this._pairs.push([e, t]);
      }),
      (wo.toString = function (t) {
        const r = t
          ? function (e) {
              return t.call(this, e, Qo);
            }
          : Qo;
        return this._pairs
          .map(function (e) {
            return r(e[0]) + "=" + r(e[1]);
          }, "")
          .join("&");
      }),
      jo);
  function Xo(e) {
    return encodeURIComponent(e)
      .replace(/%3A/gi, ":")
      .replace(/%24/g, "$")
      .replace(/%2C/gi, ",")
      .replace(/%20/g, "+")
      .replace(/%5B/gi, "[")
      .replace(/%5D/gi, "]");
  }
  function Ko(t, r, n) {
    if (r) {
      var a = (n && n.encode) || Xo,
        s = n && n.serialize;
      let e;
      (e = s
        ? s(r, n)
        : O.isURLSearchParams(r)
        ? r.toString()
        : new Wo(r, n).toString(a)) &&
        (-1 !== (s = t.indexOf("#")) && (t = t.slice(0, s)),
        (t += (-1 === t.indexOf("?") ? "?" : "&") + e));
    }
    return t;
  }
  var zo = class {
      constructor() {
        this.handlers = [];
      }
      use(e, t, r) {
        return (
          this.handlers.push({
            fulfilled: e,
            rejected: t,
            synchronous: !!r && r.synchronous,
            runWhen: r ? r.runWhen : null,
          }),
          this.handlers.length - 1
        );
      }
      eject(e) {
        this.handlers[e] && (this.handlers[e] = null);
      }
      clear() {
        this.handlers && (this.handlers = []);
      }
      forEach(t) {
        O.forEach(this.handlers, function (e) {
          null !== e && t(e);
        });
      }
    },
    $o = {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
    },
    r = {
      isBrowser: !0,
      classes: {
        URLSearchParams:
          "undefined" != typeof URLSearchParams ? URLSearchParams : Wo,
        FormData: "undefined" != typeof FormData ? FormData : null,
        Blob: "undefined" != typeof Blob ? Blob : null,
      },
      protocols: ["http", "https", "file", "blob", "url", "data"],
    },
    _o = {},
    Jo =
      (V(_o, {
        hasBrowserEnv: () => Jo,
        hasStandardBrowserEnv: () => Zo,
        hasStandardBrowserWebWorkerEnv: () => ec,
        origin: () => tc,
      }),
      "undefined" != typeof window && "undefined" != typeof document),
    Zo =
      ((go = "undefined" != typeof navigator && navigator.product),
      Jo && ["ReactNative", "NativeScript", "NS"].indexOf(go) < 0),
    ec =
      "undefined" != typeof WorkerGlobalScope &&
      self instanceof WorkerGlobalScope &&
      "function" == typeof self.importScripts,
    tc = (Jo && window.location.href) || "http://localhost",
    rc = { ..._o, ...r };
  var nc = function (e) {
    function o(e, t, r, n) {
      var a, s, i;
      return (
        "__proto__" === (i = e[n++]) ||
        ((a = Number.isFinite(+i)),
        (s = n >= e.length),
        (i = !i && O.isArray(r) ? r.length : i),
        s
          ? O.hasOwnProp(r, i)
            ? (r[i] = [r[i], t])
            : (r[i] = t)
          : ((r[i] && O.isObject(r[i])) || (r[i] = []),
            o(e, t, r[i], n) &&
              O.isArray(r[i]) &&
              (r[i] = (function (e) {
                var t = {},
                  r = Object.keys(e);
                let n;
                var a,
                  s = r.length;
                for (n = 0; n < s; n++) t[(a = r[n])] = e[a];
                return t;
              })(r[i]))),
        !a)
      );
    }
    if (O.isFormData(e) && O.isFunction(e.entries)) {
      const r = {};
      return (
        O.forEachEntry(e, (e, t) => {
          o(
            O.matchAll(/\w+|\[(\w*)]/g, e).map((e) =>
              "[]" === e[0] ? "" : e[1] || e[0]
            ),
            t,
            r,
            0
          );
        }),
        r
      );
    }
    return null;
  };
  var ac = {
      transitional: $o,
      adapter: ["xhr", "http", "fetch"],
      transformRequest: [
        function (e, t) {
          var r,
            n = t.getContentType() || "",
            a = -1 < n.indexOf("application/json"),
            s = O.isObject(e),
            i =
              (s && O.isHTMLForm(e) && (e = new FormData(e)), O.isFormData(e));
          if (i) return a ? JSON.stringify(nc(e)) : e;
          if (
            !(
              O.isArrayBuffer(e) ||
              O.isBuffer(e) ||
              O.isStream(e) ||
              O.isFile(e) ||
              O.isBlob(e) ||
              O.isReadableStream(e)
            )
          ) {
            if (O.isArrayBufferView(e)) return e.buffer;
            if (O.isURLSearchParams(e))
              return (
                t.setContentType(
                  "application/x-www-form-urlencoded;charset=utf-8",
                  !1
                ),
                e.toString()
              );
            if (s) {
              if (-1 < n.indexOf("application/x-www-form-urlencoded"))
                return (
                  (i = e),
                  (r = this.formSerializer),
                  Vo(
                    i,
                    new rc.classes.URLSearchParams(),
                    Object.assign(
                      {
                        visitor: function (e, t, r, n) {
                          return rc.isNode && O.isBuffer(e)
                            ? (this.append(t, e.toString("base64")), !1)
                            : n.defaultVisitor.apply(this, arguments);
                        },
                      },
                      r
                    )
                  ).toString()
                );
              if (
                (i = O.isFileList(e)) ||
                -1 < n.indexOf("multipart/form-data")
              )
                return (
                  (r = this.env && this.env.FormData),
                  Vo(
                    i ? { "files[]": e } : e,
                    r && new r(),
                    this.formSerializer
                  )
                );
            }
            if (s || a) {
              t.setContentType("application/json", !1);
              (n = e), (i = void 0), (s = void 0);
              if (O.isString(n))
                try {
                  return (i || JSON.parse)(n), O.trim(n);
                } catch (e) {
                  if ("SyntaxError" !== e.name) throw e;
                }
              return (s || JSON.stringify)(n);
            }
          }
          return e;
        },
      ],
      transformResponse: [
        function (e) {
          var t = this.transitional || ac.transitional,
            r = t && t.forcedJSONParsing,
            n = "json" === this.responseType;
          if (
            !O.isResponse(e) &&
            !O.isReadableStream(e) &&
            e &&
            O.isString(e) &&
            ((r && !this.responseType) || n)
          ) {
            r = !(t && t.silentJSONParsing) && n;
            try {
              return JSON.parse(e);
            } catch (e) {
              if (r) {
                if ("SyntaxError" === e.name)
                  throw L.from(
                    e,
                    L.ERR_BAD_RESPONSE,
                    this,
                    null,
                    this.response
                  );
                throw e;
              }
            }
          }
          return e;
        },
      ],
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      maxBodyLength: -1,
      env: { FormData: rc.classes.FormData, Blob: rc.classes.Blob },
      validateStatus: function (e) {
        return 200 <= e && e < 300;
      },
      headers: {
        common: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": void 0,
        },
      },
    },
    sc =
      (O.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
        ac.headers[e] = {};
      }),
      ac),
    ic = O.toObjectSet([
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent",
    ]),
    oc = (e) => {
      const t = {};
      let r, n, a;
      return (
        e &&
          e.split("\n").forEach(function (e) {
            (a = e.indexOf(":")),
              (r = e.substring(0, a).trim().toLowerCase()),
              (n = e.substring(a + 1).trim()),
              !r ||
                (t[r] && ic[r]) ||
                ("set-cookie" === r
                  ? t[r]
                    ? t[r].push(n)
                    : (t[r] = [n])
                  : (t[r] = t[r] ? t[r] + ", " + n : n));
          }),
        t
      );
    },
    cc = Symbol("internals");
  function lc(e) {
    return e && String(e).trim().toLowerCase();
  }
  function hc(e) {
    return !1 === e || null == e ? e : O.isArray(e) ? e.map(hc) : String(e);
  }
  function uc(e) {
    for (
      var t, r = Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
      (t = n.exec(e));

    )
      r[t[1]] = t[2];
    return r;
  }
  var dc = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
  function Ec(e, t, r, n, a) {
    return O.isFunction(n)
      ? n.call(this, t, r)
      : O.isString((t = a ? r : t)) &&
          (O.isString(n) ? -1 !== t.indexOf(n) : O.isRegExp(n) && n.test(t));
  }
  function pc(e) {
    return e
      .trim()
      .toLowerCase()
      .replace(/([a-z\d])(\w*)/g, (e, t, r) => t.toUpperCase() + r);
  }
  function Tc(e, a) {
    const t = O.toCamelCase(" " + a);
    ["get", "set", "has"].forEach((n) => {
      Object.defineProperty(e, n + t, {
        value: function (e, t, r) {
          return this[n].call(this, a, e, t, r);
        },
        configurable: !0,
      });
    });
  }
  var No = class {
      constructor(e) {
        e && this.set(e);
      }
      set(e, t, r) {
        const a = this;
        function n(e, t, r) {
          var n = lc(t);
          if (!n) throw new Error("header name must be a non-empty string");
          n = O.findKey(a, n);
          (n && void 0 !== a[n] && !0 !== r && (void 0 !== r || !1 === a[n])) ||
            (a[n || t] = hc(e));
        }
        var s = (e, r) => O.forEach(e, (e, t) => n(e, t, r));
        if (O.isPlainObject(e) || e instanceof this.constructor) s(e, t);
        else if (O.isString(e) && (e = e.trim()) && !dc(e)) s(oc(e), t);
        else if (O.isHeaders(e)) for (var [i, o] of e.entries()) n(o, i, r);
        else null != e && n(t, e, r);
        return this;
      }
      get(e, t) {
        if ((e = lc(e))) {
          e = O.findKey(this, e);
          if (e) {
            var r = this[e];
            if (!t) return r;
            if (!0 === t) return uc(r);
            if (O.isFunction(t)) return t.call(this, r, e);
            if (O.isRegExp(t)) return t.exec(r);
            throw new TypeError("parser must be boolean|regexp|function");
          }
        }
      }
      has(e, t) {
        return (
          !!(e = lc(e)) &&
          !(
            !(e = O.findKey(this, e)) ||
            void 0 === this[e] ||
            (t && !Ec(0, this[e], e, t))
          )
        );
      }
      delete(e, t) {
        const r = this;
        let n = !1;
        function a(e) {
          (e = lc(e)) &&
            (e = O.findKey(r, e)) &&
            (!t || Ec(r, r[e], e, t)) &&
            (delete r[e], (n = !0));
        }
        return O.isArray(e) ? e.forEach(a) : a(e), n;
      }
      clear(e) {
        var t = Object.keys(this);
        let r = t.length,
          n = !1;
        for (; r--; ) {
          var a = t[r];
          (e && !Ec(0, this[a], a, e, !0)) || (delete this[a], (n = !0));
        }
        return n;
      }
      normalize(n) {
        const a = this,
          s = {};
        return (
          O.forEach(this, (e, t) => {
            var r = O.findKey(s, t);
            r
              ? ((a[r] = hc(e)), delete a[t])
              : ((r = n ? pc(t) : String(t).trim()) !== t && delete a[t],
                (a[r] = hc(e)),
                (s[r] = !0));
          }),
          this
        );
      }
      concat(...e) {
        return this.constructor.concat(this, ...e);
      }
      toJSON(r) {
        const n = Object.create(null);
        return (
          O.forEach(this, (e, t) => {
            null != e &&
              !1 !== e &&
              (n[t] = r && O.isArray(e) ? e.join(", ") : e);
          }),
          n
        );
      }
      [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
      }
      toString() {
        return Object.entries(this.toJSON())
          .map(([e, t]) => e + ": " + t)
          .join("\n");
      }
      get [Symbol.toStringTag]() {
        return "AxiosHeaders";
      }
      static from(e) {
        return e instanceof this ? e : new this(e);
      }
      static concat(e, ...t) {
        const r = new this(e);
        return t.forEach((e) => r.set(e)), r;
      }
      static accessor(e) {
        const r = (this[cc] = this[cc] = { accessors: {} }).accessors,
          n = this.prototype;
        function t(e) {
          var t = lc(e);
          r[t] || (Tc(n, e), (r[t] = !0));
        }
        return O.isArray(e) ? e.forEach(t) : t(e), this;
      }
    },
    mc =
      (No.accessor([
        "Content-Type",
        "Content-Length",
        "Accept",
        "Accept-Encoding",
        "User-Agent",
        "Authorization",
      ]),
      O.reduceDescriptors(No.prototype, ({ value: e }, t) => {
        let r = t[0].toUpperCase() + t.slice(1);
        return {
          get: () => e,
          set(e) {
            this[r] = e;
          },
        };
      }),
      O.freezeMethods(No),
      No);
  function fc(e, t) {
    const r = this || sc;
    var n = t || r;
    const a = mc.from(n.headers);
    let s = n.data;
    return (
      O.forEach(e, function (e) {
        s = e.call(r, s, a.normalize(), t ? t.status : void 0);
      }),
      a.normalize(),
      s
    );
  }
  function Ac(e) {
    return !(!e || !e.__CANCEL__);
  }
  function _c(e, t, r) {
    L.call(this, null == e ? "canceled" : e, L.ERR_CANCELED, t, r),
      (this.name = "CanceledError");
  }
  O.inherits(_c, L, { __CANCEL__: !0 });
  var gc = _c;
  function Nc(e, t, r) {
    var n = r.config.validateStatus;
    r.status && n && !n(r.status)
      ? t(
          new L(
            "Request failed with status code " + r.status,
            [L.ERR_BAD_REQUEST, L.ERR_BAD_RESPONSE][
              Math.floor(r.status / 100) - 4
            ],
            r.config,
            r.request,
            r
          )
        )
      : e(r);
  }
  var Cc = function (s, i) {
    s = s || 10;
    const o = new Array(s),
      c = new Array(s);
    let l = 0,
      h = 0,
      u;
    return (
      (i = void 0 !== i ? i : 1e3),
      function (e) {
        var t = Date.now(),
          r = c[h];
        (u = u || t), (o[l] = e), (c[l] = t);
        let n = h,
          a = 0;
        for (; n !== l; ) (a += o[n++]), (n %= s);
        return (
          (l = (l + 1) % s) === h && (h = (h + 1) % s),
          !(t - u < i) && (e = r && t - r) ? Math.round((1e3 * a) / e) : void 0
        );
      }
    );
  };
  var Ic = function (r, e) {
      let n = 0;
      const a = 1e3 / e;
      let s = null;
      return function () {
        var e = !0 === this,
          t = Date.now();
        if (e || t - n > a)
          return (
            s && (clearTimeout(s), (s = null)),
            (n = t),
            r.apply(null, arguments)
          );
        s =
          s ||
          setTimeout(
            () => ((s = null), (n = Date.now()), r.apply(null, arguments)),
            a - (t - n)
          );
      };
    },
    Sc = (i, o, e = 3) => {
      let c = 0;
      const l = Cc(50, 250);
      return Ic((e) => {
        var t = e.loaded,
          r = e.lengthComputable ? e.total : void 0,
          n = t - c,
          a = l(n),
          s = t <= r,
          n = {
            loaded: (c = t),
            total: r,
            progress: r ? t / r : void 0,
            bytes: n,
            rate: a || void 0,
            estimated: a && r && s ? (r - t) / a : void 0,
            event: e,
            lengthComputable: null != r,
          };
        (n[o ? "download" : "upload"] = !0), i(n);
      }, e);
    },
    bc = rc.hasStandardBrowserEnv
      ? (function () {
          const r = /(msie|trident)/i.test(navigator.userAgent),
            n = document.createElement("a");
          let t;
          function a(e) {
            let t = e;
            return (
              r && (n.setAttribute("href", t), (t = n.href)),
              n.setAttribute("href", t),
              {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname:
                  "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname,
              }
            );
          }
          return (
            (t = a(window.location.href)),
            function (e) {
              e = O.isString(e) ? a(e) : e;
              return e.protocol === t.protocol && e.host === t.host;
            }
          );
        })()
      : function () {
          return !0;
        },
    Rc = rc.hasStandardBrowserEnv
      ? {
          write(e, t, r, n, a, s) {
            e = [e + "=" + encodeURIComponent(t)];
            O.isNumber(r) && e.push("expires=" + new Date(r).toGMTString()),
              O.isString(n) && e.push("path=" + n),
              O.isString(a) && e.push("domain=" + a),
              !0 === s && e.push("secure"),
              (document.cookie = e.join("; "));
          },
          read(e) {
            e = document.cookie.match(
              new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
            );
            return e ? decodeURIComponent(e[3]) : null;
          },
          remove(e) {
            this.write(e, "", Date.now() - 864e5);
          },
        }
      : {
          write() {},
          read() {
            return null;
          },
          remove() {},
        };
  function Dc(e, t) {
    var r;
    return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
      ? ((e = e),
        (r = t) ? e.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : e)
      : t;
  }
  var Oc = (e) => (e instanceof mc ? { ...e } : e);
  function Lc(n, a) {
    a = a || {};
    const s = {};
    function i(e, t, r) {
      return O.isPlainObject(e) && O.isPlainObject(t)
        ? O.merge.call({ caseless: r }, e, t)
        : O.isPlainObject(t)
        ? O.merge({}, t)
        : O.isArray(t)
        ? t.slice()
        : t;
    }
    function o(e, t, r) {
      return O.isUndefined(t)
        ? O.isUndefined(e)
          ? void 0
          : i(void 0, e, r)
        : i(e, t, r);
    }
    function e(e, t) {
      if (!O.isUndefined(t)) return i(void 0, t);
    }
    function t(e, t) {
      return O.isUndefined(t)
        ? O.isUndefined(e)
          ? void 0
          : i(void 0, e)
        : i(void 0, t);
    }
    function c(e, t, r) {
      return r in a ? i(e, t) : r in n ? i(void 0, e) : void 0;
    }
    const l = {
      url: e,
      method: e,
      data: e,
      baseURL: t,
      transformRequest: t,
      transformResponse: t,
      paramsSerializer: t,
      timeout: t,
      timeoutMessage: t,
      withCredentials: t,
      withXSRFToken: t,
      adapter: t,
      responseType: t,
      xsrfCookieName: t,
      xsrfHeaderName: t,
      onUploadProgress: t,
      onDownloadProgress: t,
      decompress: t,
      maxContentLength: t,
      maxBodyLength: t,
      beforeRedirect: t,
      transport: t,
      httpAgent: t,
      httpsAgent: t,
      cancelToken: t,
      socketPath: t,
      responseEncoding: t,
      validateStatus: c,
      headers: (e, t) => o(Oc(e), Oc(t), !0),
    };
    return (
      O.forEach(Object.keys(Object.assign({}, n, a)), function (e) {
        var t = l[e] || o,
          r = t(n[e], a[e], e);
        (O.isUndefined(r) && t !== c) || (s[e] = r);
      }),
      s
    );
  }
  var yc,
    kc,
    vc = (e) => {
      var t,
        r = Lc({}, e);
      let {
        data: n,
        withXSRFToken: a,
        xsrfHeaderName: s,
        xsrfCookieName: i,
        headers: o,
        auth: c,
      } = r;
      return (
        (r.headers = o = mc.from(o)),
        (r.url = Ko(Dc(r.baseURL, r.url), e.params, e.paramsSerializer)),
        c &&
          o.set(
            "Authorization",
            "Basic " +
              btoa(
                (c.username || "") +
                  ":" +
                  (c.password ? unescape(encodeURIComponent(c.password)) : "")
              )
          ),
        O.isFormData(n) &&
          (rc.hasStandardBrowserEnv || rc.hasStandardBrowserWebWorkerEnv
            ? o.setContentType(void 0)
            : !1 !== (e = o.getContentType()) &&
              (([e, ...t] = e
                ? e
                    .split(";")
                    .map((e) => e.trim())
                    .filter(Boolean)
                : []),
              o.setContentType([e || "multipart/form-data", ...t].join("; ")))),
        rc.hasStandardBrowserEnv &&
          ((a = a && O.isFunction(a) ? a(r) : a) || (!1 !== a && bc(r.url))) &&
          (e = s && i && Rc.read(i)) &&
          o.set(s, e),
        r
      );
    },
    Co =
      "undefined" != typeof XMLHttpRequest &&
      function (h) {
        return new Promise(function (t, r) {
          const n = vc(h);
          var e = n.data,
            a = mc.from(n.headers).normalize();
          let s = n["responseType"],
            i;
          function o() {
            n.cancelToken && n.cancelToken.unsubscribe(i),
              n.signal && n.signal.removeEventListener("abort", i);
          }
          let c = new XMLHttpRequest();
          function l() {
            var e;
            c &&
              ((e = mc.from(
                "getAllResponseHeaders" in c && c.getAllResponseHeaders()
              )),
              Nc(
                function (e) {
                  t(e), o();
                },
                function (e) {
                  r(e), o();
                },
                {
                  data:
                    s && "text" !== s && "json" !== s
                      ? c.response
                      : c.responseText,
                  status: c.status,
                  statusText: c.statusText,
                  headers: e,
                  config: h,
                  request: c,
                }
              ),
              (c = null));
          }
          c.open(n.method.toUpperCase(), n.url, !0),
            (c.timeout = n.timeout),
            "onloadend" in c
              ? (c.onloadend = l)
              : (c.onreadystatechange = function () {
                  c &&
                    4 === c.readyState &&
                    (0 !== c.status ||
                      (c.responseURL &&
                        0 === c.responseURL.indexOf("file:"))) &&
                    setTimeout(l);
                }),
            (c.onabort = function () {
              c &&
                (r(new L("Request aborted", L.ECONNABORTED, n, c)), (c = null));
            }),
            (c.onerror = function () {
              r(new L("Network Error", L.ERR_NETWORK, n, c)), (c = null);
            }),
            (c.ontimeout = function () {
              let e = n.timeout
                ? "timeout of " + n.timeout + "ms exceeded"
                : "timeout exceeded";
              var t = n.transitional || $o;
              n.timeoutErrorMessage && (e = n.timeoutErrorMessage),
                r(
                  new L(
                    e,
                    t.clarifyTimeoutError ? L.ETIMEDOUT : L.ECONNABORTED,
                    n,
                    c
                  )
                ),
                (c = null);
            }),
            void 0 === e && a.setContentType(null),
            "setRequestHeader" in c &&
              O.forEach(a.toJSON(), function (e, t) {
                c.setRequestHeader(t, e);
              }),
            O.isUndefined(n.withCredentials) ||
              (c.withCredentials = !!n.withCredentials),
            s && "json" !== s && (c.responseType = n.responseType),
            "function" == typeof n.onDownloadProgress &&
              c.addEventListener("progress", Sc(n.onDownloadProgress, !0)),
            "function" == typeof n.onUploadProgress &&
              c.upload &&
              c.upload.addEventListener("progress", Sc(n.onUploadProgress)),
            (n.cancelToken || n.signal) &&
              ((i = (e) => {
                c &&
                  (r(!e || e.type ? new gc(null, h, c) : e),
                  c.abort(),
                  (c = null));
              }),
              n.cancelToken && n.cancelToken.subscribe(i),
              n.signal) &&
              (n.signal.aborted ? i() : n.signal.addEventListener("abort", i));
          a = n.url;
          a = ((a = /^([-+\w]{1,25})(:?\/\/|:)/.exec(a)) && a[1]) || "";
          a && -1 === rc.protocols.indexOf(a)
            ? r(new L("Unsupported protocol " + a + ":", L.ERR_BAD_REQUEST, h))
            : c.send(e || null);
        });
      },
    Mc = (e, t) => {
      let r = new AbortController(),
        n;
      function a(e) {
        n ||
          ((n = !0),
          i(),
          (e = e instanceof Error ? e : this.reason),
          r.abort(
            e instanceof L ? e : new gc(e instanceof Error ? e.message : e)
          ));
      }
      let s =
        t &&
        setTimeout(() => {
          a(new L(`timeout ${t} of ms exceeded`, L.ETIMEDOUT));
        }, t);
      const i = () => {
        e &&
          (s && clearTimeout(s),
          (s = null),
          e.forEach((e) => {
            e &&
              (e.removeEventListener
                ? e.removeEventListener("abort", a)
                : e.unsubscribe(a));
          }),
          (e = null));
      };
      e.forEach(
        (e) => e && e.addEventListener && e.addEventListener("abort", a)
      );
      var o = r["signal"];
      return (
        (o.unsubscribe = i),
        [
          o,
          () => {
            s && clearTimeout(s), (s = null);
          },
        ]
      );
    },
    Pc = function* (t, r) {
      var n,
        a = t.byteLength;
      if (!r || a < r) yield t;
      else {
        let e = 0;
        for (; e < a; ) (n = e + r), yield t.slice(e, n), (e = n);
      }
    },
    wc = (e, t, n, a, r) => {
      const s = (async function* (e, t, r) {
        for await (const n of e)
          yield* Pc(ArrayBuffer.isView(n) ? n : await r(String(n)), t);
      })(e, t, r);
      let i = 0;
      return new ReadableStream(
        {
          type: "bytes",
          async pull(e) {
            var { done: t, value: r } = await s.next();
            t
              ? (e.close(), a())
              : ((t = r.byteLength),
                n && n((i += t)),
                e.enqueue(new Uint8Array(r)));
          },
          cancel(e) {
            return a(e), s.return();
          },
        },
        { highWaterMark: 2 }
      );
    },
    Bc = (t, r) => {
      const n = null != t;
      return (e) =>
        setTimeout(() => r({ lengthComputable: n, total: t, loaded: e }));
    },
    e =
      "function" == typeof fetch &&
      "function" == typeof Request &&
      "function" == typeof Response,
    n = e && "function" == typeof ReadableStream,
    xc =
      e &&
      ("function" == typeof TextEncoder
        ? ((yc = new TextEncoder()), (e) => yc.encode(e))
        : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
    Fc =
      n &&
      (() => {
        let e = !1;
        var t = new Request(rc.origin, {
          body: new ReadableStream(),
          method: "POST",
          get duplex() {
            return (e = !0), "half";
          },
        }).headers.has("Content-Type");
        return e && !t;
      })(),
    Uc =
      n &&
      !!(() => {
        try {
          return O.isReadableStream(new Response("").body);
        } catch (e) {}
      })(),
    Hc = { stream: Uc && ((e) => e.body) },
    Gc =
      (e &&
        ((kc = new Response()),
        ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((r) => {
          Hc[r] ||
            (Hc[r] = O.isFunction(kc[r])
              ? (e) => e[r]()
              : (e, t) => {
                  throw new L(
                    `Response type '${r}' is not supported`,
                    L.ERR_NOT_SUPPORT,
                    t
                  );
                });
        })),
      async (e, t) => {
        e = O.toFiniteNumber(e.getContentLength());
        return null == e
          ? (async (e) =>
              null == e
                ? 0
                : O.isBlob(e)
                ? e.size
                : O.isSpecCompliantForm(e)
                ? (await new Request(e).arrayBuffer()).byteLength
                : O.isArrayBufferView(e)
                ? e.byteLength
                : (O.isURLSearchParams(e) && (e += ""),
                  O.isString(e) ? (await xc(e)).byteLength : void 0))(t)
          : e;
      }),
    qc = {
      http: null,
      xhr: Co,
      fetch:
        e &&
        (async (a) => {
          let {
              url: t,
              method: e,
              data: s,
              signal: r,
              cancelToken: n,
              timeout: i,
              onDownloadProgress: o,
              onUploadProgress: c,
              responseType: l,
              headers: h,
              withCredentials: u = "same-origin",
              fetchOptions: d,
            } = vc(a),
            [E, p] =
              ((l = l ? (l + "").toLowerCase() : "text"),
              r || n || i ? Mc([r, n], i) : []),
            T,
            m;
          var f = () => {
            T ||
              setTimeout(() => {
                E && E.unsubscribe();
              }),
              (T = !0);
          };
          let A;
          try {
            if (
              c &&
              Fc &&
              "get" !== e &&
              "head" !== e &&
              0 !== (A = await Gc(h, s))
            ) {
              var _ = new Request(t, {
                method: "POST",
                body: s,
                duplex: "half",
              });
              let e;
              O.isFormData(s) &&
                (e = _.headers.get("content-type")) &&
                h.setContentType(e),
                _.body && (s = wc(_.body, 65536, Bc(A, Sc(c)), null, xc));
            }
            O.isString(u) || (u = u ? "cors" : "omit"),
              (m = new Request(t, {
                ...d,
                signal: E,
                method: e.toUpperCase(),
                headers: h.normalize().toJSON(),
                body: s,
                duplex: "half",
                withCredentials: u,
              }));
            let r = await fetch(m);
            var g = Uc && ("stream" === l || "response" === l);
            if (Uc && (o || g)) {
              const C = {};
              ["status", "statusText", "headers"].forEach((e) => {
                C[e] = r[e];
              });
              var N = O.toFiniteNumber(r.headers.get("content-length"));
              r = new Response(
                wc(r.body, 65536, o && Bc(N, Sc(o, !0)), g && f, xc),
                C
              );
            }
            l = l || "text";
            let n = await Hc[O.findKey(Hc, l) || "text"](r, a);
            return (
              g || f(),
              p && p(),
              await new Promise((e, t) => {
                Nc(e, t, {
                  data: n,
                  headers: mc.from(r.headers),
                  status: r.status,
                  statusText: r.statusText,
                  config: a,
                  request: m,
                });
              })
            );
          } catch (e) {
            if ((f(), e && "TypeError" === e.name && /fetch/i.test(e.message)))
              throw Object.assign(new L("Network Error", L.ERR_NETWORK, a, m), {
                cause: e.cause || e,
              });
            throw L.from(e, e && e.code, a, m);
          }
        }),
    },
    Yc =
      (O.forEach(qc, (e, t) => {
        if (e) {
          try {
            Object.defineProperty(e, "name", { value: t });
          } catch (e) {}
          Object.defineProperty(e, "adapterName", { value: t });
        }
      }),
      (e) => "- " + e),
    Vc = (r) => {
      var n,
        e = (r = O.isArray(r) ? r : [r])["length"];
      let a;
      var s,
        t,
        i = {};
      for (let t = 0; t < e; t++) {
        n = r[t];
        let e;
        if (
          ((a = n),
          (s = n),
          !O.isFunction(s) &&
            null !== s &&
            !1 !== s &&
            void 0 === (a = qc[(e = String(n)).toLowerCase()]))
        )
          throw new L(`Unknown adapter '${e}'`);
        if (a) break;
        i[e || "#" + t] = a;
      }
      if (a) return a;
      throw (
        ((t = Object.entries(i).map(
          ([e, t]) =>
            `adapter ${e} ` +
            (!1 === t
              ? "is not supported by the environment"
              : "is not available in the build")
        )),
        (t = e
          ? 1 < t.length
            ? "since :\n" + t.map(Yc).join("\n")
            : " " + Yc(t[0])
          : "as no adapter specified"),
        new L(
          "There is no suitable adapter to dispatch the request " + t,
          "ERR_NOT_SUPPORT"
        ))
      );
    };
  function Qc(e) {
    if (
      (e.cancelToken && e.cancelToken.throwIfRequested(),
      e.signal && e.signal.aborted)
    )
      throw new gc(null, e);
  }
  function jc(t) {
    return (
      Qc(t),
      (t.headers = mc.from(t.headers)),
      (t.data = fc.call(t, t.transformRequest)),
      -1 !== ["post", "put", "patch"].indexOf(t.method) &&
        t.headers.setContentType("application/x-www-form-urlencoded", !1),
      Vc(t.adapter || sc.adapter)(t).then(
        function (e) {
          return (
            Qc(t),
            (e.data = fc.call(t, t.transformResponse, e)),
            (e.headers = mc.from(e.headers)),
            e
          );
        },
        function (e) {
          return (
            Ac(e) ||
              (Qc(t),
              e &&
                e.response &&
                ((e.response.data = fc.call(
                  t,
                  t.transformResponse,
                  e.response
                )),
                (e.response.headers = mc.from(e.response.headers)))),
            Promise.reject(e)
          );
        }
      )
    );
  }
  var Wc = {},
    Xc =
      (["object", "boolean", "number", "function", "string", "symbol"].forEach(
        (t, r) => {
          Wc[t] = function (e) {
            return typeof e === t || "a" + (r < 1 ? "n " : " ") + t;
          };
        }
      ),
      {});
  Wc.transitional = function (n, a, r) {
    function s(e, t) {
      return (
        "[Axios v1.7.2] Transitional option '" +
        e +
        "'" +
        t +
        (r ? ". " + r : "")
      );
    }
    return (e, t, r) => {
      if (!1 === n)
        throw new L(
          s(t, " has been removed" + (a ? " in " + a : "")),
          L.ERR_DEPRECATED
        );
      return (
        a &&
          !Xc[t] &&
          ((Xc[t] = !0),
          console.warn(
            s(
              t,
              " has been deprecated since v" +
                a +
                " and will be removed in the near future"
            )
          )),
        !n || n(e, t, r)
      );
    };
  };
  var Kc = {
      assertOptions: function (e, t, r) {
        if ("object" != typeof e)
          throw new L("options must be an object", L.ERR_BAD_OPTION_VALUE);
        var n = Object.keys(e);
        let a = n.length;
        for (; 0 < a--; ) {
          var s = n[a],
            i = t[s];
          if (i) {
            var o = e[s],
              i = void 0 === o || i(o, s, e);
            if (!0 !== i)
              throw new L(
                "option " + s + " must be " + i,
                L.ERR_BAD_OPTION_VALUE
              );
          } else if (!0 !== r)
            throw new L("Unknown option " + s, L.ERR_BAD_OPTION);
        }
      },
      validators: Wc,
    },
    zc = Kc.validators,
    $c = class {
      constructor(e) {
        (this.defaults = e),
          (this.interceptors = { request: new zo(), response: new zo() });
      }
      async request(r, e) {
        try {
          return await this._request(r, e);
        } catch (t) {
          if (t instanceof Error) {
            let e;
            Error.captureStackTrace
              ? Error.captureStackTrace((e = {}))
              : (e = new Error());
            r = e.stack ? e.stack.replace(/^.+\n/, "") : "";
            try {
              t.stack
                ? r &&
                  !String(t.stack).endsWith(r.replace(/^.+\n.+\n/, "")) &&
                  (t.stack += "\n" + r)
                : (t.stack = r);
            } catch (e) {}
          }
          throw t;
        }
      }
      _request(e, t) {
        "string" == typeof e ? ((t = t || {}).url = e) : (t = e || {});
        const {
          transitional: r,
          paramsSerializer: n,
          headers: a,
        } = (t = Lc(this.defaults, t));
        void 0 !== r &&
          Kc.assertOptions(
            r,
            {
              silentJSONParsing: zc.transitional(zc.boolean),
              forcedJSONParsing: zc.transitional(zc.boolean),
              clarifyTimeoutError: zc.transitional(zc.boolean),
            },
            !1
          ),
          null != n &&
            (O.isFunction(n)
              ? (t.paramsSerializer = { serialize: n })
              : Kc.assertOptions(
                  n,
                  { encode: zc.function, serialize: zc.function },
                  !0
                )),
          (t.method = (
            t.method ||
            this.defaults.method ||
            "get"
          ).toLowerCase());
        e = a && O.merge(a.common, a[t.method]);
        a &&
          O.forEach(
            ["delete", "get", "head", "post", "put", "patch", "common"],
            (e) => {
              delete a[e];
            }
          ),
          (t.headers = mc.concat(e, a));
        const s = [];
        let i = !0;
        this.interceptors.request.forEach(function (e) {
          ("function" == typeof e.runWhen && !1 === e.runWhen(t)) ||
            ((i = i && e.synchronous), s.unshift(e.fulfilled, e.rejected));
        });
        const o = [];
        this.interceptors.response.forEach(function (e) {
          o.push(e.fulfilled, e.rejected);
        });
        let c,
          l = 0,
          h;
        if (i) {
          h = s.length;
          let e = t;
          for (l = 0; l < h; ) {
            var u = s[l++],
              d = s[l++];
            try {
              e = u(e);
            } catch (e) {
              d.call(this, e);
              break;
            }
          }
          try {
            c = jc.call(this, e);
          } catch (e) {
            return Promise.reject(e);
          }
          for (l = 0, h = o.length; l < h; ) c = c.then(o[l++], o[l++]);
        } else {
          var E = [jc.bind(this), void 0];
          for (
            E.unshift.apply(E, s),
              E.push.apply(E, o),
              h = E.length,
              c = Promise.resolve(t);
            l < h;

          )
            c = c.then(E[l++], E[l++]);
        }
        return c;
      }
      getUri(e) {
        return Ko(
          Dc((e = Lc(this.defaults, e)).baseURL, e.url),
          e.params,
          e.paramsSerializer
        );
      }
    },
    Jc =
      (O.forEach(["delete", "get", "head", "options"], function (r) {
        $c.prototype[r] = function (e, t) {
          return this.request(
            Lc(t || {}, { method: r, url: e, data: (t || {}).data })
          );
        };
      }),
      O.forEach(["post", "put", "patch"], function (a) {
        function e(n) {
          return function (e, t, r) {
            return this.request(
              Lc(r || {}, {
                method: a,
                headers: n ? { "Content-Type": "multipart/form-data" } : {},
                url: e,
                data: t,
              })
            );
          };
        }
        ($c.prototype[a] = e()), ($c.prototype[a + "Form"] = e(!0));
      }),
      $c),
    Zc = class {
      constructor(e) {
        if ("function" != typeof e)
          throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function (e) {
          n = e;
        });
        const a = this;
        this.promise.then((t) => {
          if (a._listeners) {
            let e = a._listeners.length;
            for (; 0 < e--; ) a._listeners[e](t);
            a._listeners = null;
          }
        }),
          (this.promise.then = (e) => {
            let t;
            e = new Promise((e) => {
              a.subscribe(e), (t = e);
            }).then(e);
            return (
              (e.cancel = function () {
                a.unsubscribe(t);
              }),
              e
            );
          }),
          e(function (e, t, r) {
            a.reason || ((a.reason = new gc(e, t, r)), n(a.reason));
          });
      }
      throwIfRequested() {
        if (this.reason) throw this.reason;
      }
      subscribe(e) {
        this.reason
          ? e(this.reason)
          : this._listeners
          ? this._listeners.push(e)
          : (this._listeners = [e]);
      }
      unsubscribe(e) {
        this._listeners &&
          -1 !== (e = this._listeners.indexOf(e)) &&
          this._listeners.splice(e, 1);
      }
      static source() {
        let t;
        return {
          token: new Zc(function (e) {
            t = e;
          }),
          cancel: t,
        };
      }
    },
    t = Zc;
  var el = {
      Continue: 100,
      SwitchingProtocols: 101,
      Processing: 102,
      EarlyHints: 103,
      Ok: 200,
      Created: 201,
      Accepted: 202,
      NonAuthoritativeInformation: 203,
      NoContent: 204,
      ResetContent: 205,
      PartialContent: 206,
      MultiStatus: 207,
      AlreadyReported: 208,
      ImUsed: 226,
      MultipleChoices: 300,
      MovedPermanently: 301,
      Found: 302,
      SeeOther: 303,
      NotModified: 304,
      UseProxy: 305,
      Unused: 306,
      TemporaryRedirect: 307,
      PermanentRedirect: 308,
      BadRequest: 400,
      Unauthorized: 401,
      PaymentRequired: 402,
      Forbidden: 403,
      NotFound: 404,
      MethodNotAllowed: 405,
      NotAcceptable: 406,
      ProxyAuthenticationRequired: 407,
      RequestTimeout: 408,
      Conflict: 409,
      Gone: 410,
      LengthRequired: 411,
      PreconditionFailed: 412,
      PayloadTooLarge: 413,
      UriTooLong: 414,
      UnsupportedMediaType: 415,
      RangeNotSatisfiable: 416,
      ExpectationFailed: 417,
      ImATeapot: 418,
      MisdirectedRequest: 421,
      UnprocessableEntity: 422,
      Locked: 423,
      FailedDependency: 424,
      TooEarly: 425,
      UpgradeRequired: 426,
      PreconditionRequired: 428,
      TooManyRequests: 429,
      RequestHeaderFieldsTooLarge: 431,
      UnavailableForLegalReasons: 451,
      InternalServerError: 500,
      NotImplemented: 501,
      BadGateway: 502,
      ServiceUnavailable: 503,
      GatewayTimeout: 504,
      HttpVersionNotSupported: 505,
      VariantAlsoNegotiates: 506,
      InsufficientStorage: 507,
      LoopDetected: 508,
      NotExtended: 510,
      NetworkAuthenticationRequired: 511,
    },
    vo =
      (Object.entries(el).forEach(([e, t]) => {
        el[t] = e;
      }),
      el);
  var tl,
    rl,
    nl,
    al,
    sl,
    il,
    ol,
    D = (function t(r) {
      var e = new Jc(r),
        n = so(Jc.prototype.request, e);
      return (
        O.extend(n, Jc.prototype, e, { allOwnKeys: !0 }),
        O.extend(n, e, null, { allOwnKeys: !0 }),
        (n.create = function (e) {
          return t(Lc(r, e));
        }),
        n
      );
    })(sc),
    cl =
      ((D.Axios = Jc),
      (D.CanceledError = gc),
      (D.CancelToken = t),
      (D.isCancel = Ac),
      (D.VERSION = "1.7.2"),
      (D.toFormData = Vo),
      (D.AxiosError = L),
      (D.Cancel = D.CanceledError),
      (D.all = function (e) {
        return Promise.all(e);
      }),
      (D.spread = function (t) {
        return function (e) {
          return t.apply(null, e);
        };
      }),
      (D.isAxiosError = function (e) {
        return O.isObject(e) && !0 === e.isAxiosError;
      }),
      (D.mergeConfig = Lc),
      (D.AxiosHeaders = mc),
      (D.formToJSON = (e) => nc(O.isHTMLForm(e) ? new FormData(e) : e)),
      (D.getAdapter = Vc),
      (D.HttpStatusCode = vo),
      (D.default = D)),
    {} = cl,
    ll = Spicetify["Player"],
    hl = "False";
  new Spicetify.Topbar.Button(
    "RefreshScore",
    `
<?xml version="1.0" ?><svg fill="white" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></svg>`,
    async function () {
      var e = Date.now();
      e - rl < 5e3
        ? Spicetify.showNotification(
            `You are on cooldown. Please wait ${
              (5e3 - (e - rl)) / 1e3
            } seconds to avoid hitting the rate limit.`
          )
        : ((hl = "True"), (rl = Date.now()), console.log("refreshing"), fl());
    },
    !1
  );
  function ul() {
    if (ol && nl) {
      console.log("clearing");
      try {
        sl &&
          (document.querySelectorAll(".songScore").forEach((e) => e.remove()),
          (sl.children[0].style.fontWeight = 400)),
          document.querySelectorAll(".scoreElement").forEach((e) => e.remove());
        for (
          let e = 0;
          e < document.getElementsByClassName("scoreElement").length;
          e++
        )
          document.getElementsByClassName("scoreElement")[e].remove();
        if (document.getElementsByClassName("songScore")[0])
          for (
            let e = 0;
            e < document.getElementsByClassName("songScore").length;
            e++
          )
            document.getElementsByClassName("songScore")[e].remove();
      } catch (e) {}
    }
  }
  function dl(e, t) {
    var r = e,
      n = t,
      t = (e.length < t.length && ((r = t), (n = e)), r.length);
    return 0 == t
      ? 1
      : (t -
          (function (e, t) {
            (e = e.toLowerCase()), (t = t.toLowerCase());
            for (var r = new Array(), n = 0; n <= e.length; n++) {
              for (var a, s = n, i = 0; i <= t.length; i++)
                0 == n
                  ? (r[i] = i)
                  : 0 < i &&
                    ((a = r[i - 1]),
                    e.charAt(n - 1) != t.charAt(i - 1) &&
                      (a = Math.min(Math.min(a, s), r[i]) + 1),
                    (r[i - 1] = s),
                    (s = a));
              0 < n && (r[t.length] = s);
            }
            return r[t.length];
          })(r, n)) /
          parseFloat(t);
  }
  async function El(e) {
    return await cl.get("https://proxy.life23243.workers.dev/?" + e, {
      headers: { "User-Agent": "Mozilla/5.0" },
    });
  }
  function pl(t) {
    return new Promise((e) => setTimeout(e, t));
  }
  new Spicetify.Topbar.Button(
    "ClearScore",
    `
<?xml version="1.0" ?><svg fill="white" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M 8.386719 1.800781 L 7.785156 2.398438 L 3.601562 2.398438 L 3.601562 4.800781 L 20.398438 4.800781 L 20.398438 2.398438 L 16.214844 2.398438 L 15.613281 1.800781 L 15.015625 1.199219 L 8.984375 1.199219 Z M 8.386719 1.800781 M 4.804688 13.402344 C 4.816406 20.230469 4.816406 20.816406 4.867188 20.96875 C 4.964844 21.300781 5.046875 21.480469 5.191406 21.699219 C 5.527344 22.222656 5.996094 22.554688 6.644531 22.734375 C 6.808594 22.78125 7.261719 22.785156 12 22.785156 C 16.738281 22.785156 17.191406 22.78125 17.355469 22.734375 C 18.003906 22.554688 18.472656 22.222656 18.808594 21.699219 C 18.953125 21.480469 19.035156 21.300781 19.132812 20.96875 C 19.183594 20.816406 19.183594 20.230469 19.195312 13.402344 L 19.199219 6 L 4.800781 6 Z M 4.804688 13.402344 "/></svg>`,
    ul,
    !1
  );
  var Tl = class extends Error {
    constructor(e) {
      super(e);
    }
  };
  async function ml(t, r, e) {
    let n = "https://www.albumoftheyear.orgundefined";
    1 == e &&
      (n =
        "https://www.albumoftheyear.org/search/albums/?q=" +
        encodeURIComponent(t + " " + r)),
      0 == e &&
        (n =
          "https://www.albumoftheyear.org/search/albums/?q=" +
          encodeURIComponent(r)),
      console.log(n);
    e = await El(n);
    console.log(e);
    let a = ao.load(e.data),
      s = "https://www.albumoftheyear.orgundefined",
      i = "{\n",
      o = "{\n",
      c = "{\n",
      l = "{\n",
      h = "{\n",
      u = "{\n";
    var d = [],
      E = [];
    for (let e = 0; e < a("div.artistTitle").length; e++)
      d.push(a(".artistTitle")[e].children[0].data),
        E.push(a(".albumTitle")[e].children[0].data);
    const p = new Set();
    if (
      (a("*[class]").each((e, t) => {
        a(t)
          .attr("class")
          .split(/\s+/)
          .forEach((e) => p.add(e));
      }),
      console.log("Class names found in the HTML:"),
      console.log([...p].join(", ")),
      console.log(d),
      1 == d.length &&
        a(".artistTitle")[0].parentNode.parentNode.children[2].attribs.href &&
        (s =
          "https://www.albumoftheyear.org" +
          a(".artistTitle")[0].parentNode.parentNode.children[2].attribs.href),
      1 < d.length)
    ) {
      var T = [];
      for (let e = 0; e < d.length; e++) {
        var m = d.length - (e + 1);
        0 != m &&
          ((i += `"${dl(d[m], t)}": "${d[m]}",
`),
          (o += `"${d[m]}": "${
            a(".artistTitle")[m].parentNode.parentNode.children[2].attribs.href
          }",
`),
          (c += `"${d[m]}": "${dl(d[m], t)}",
`),
          (l += `"${d[m]}": ${E[m]}
`),
          T.push(dl(d[m], t)),
          (u += `"${E[m].replaceAll('"', '\\"')}": "${
            a(".artistTitle")[m].parentNode.parentNode.children[2].attribs.href
          }",
`)),
          0 == m &&
            ((i += `"${dl(d[m], t)}": "${d[m]}"
}`),
            (o += `"${d[m]}": "${
              a(".artistTitle")[m].parentNode.parentNode.children[2].attribs
                .href
            }"
}`),
            (c += `"${d[m]}": "${dl(d[m], t)}"
}`),
            (l += `"${d[m]}": ` + E[m]),
            (u += `"${E[m].replaceAll('"', '\\"')}": "${
              a(".artistTitle")[m].parentNode.parentNode.children[2].attribs
                .href
            }"
}`),
            T.push(dl(d[m], t)));
      }
      var f = [],
        A = [],
        _ = JSON.parse(i)[T.reduce((e, t) => Math.max(e, t), -1 / 0)],
        g = l.split("\n");
      if (1 < o.split(_).length - 1)
        for (let e = 0; e < g.length; e++) {
          var N = g[e];
          -1 != N.indexOf(`"${_}":`) && f.push(N.split(`"${_}": `)[1]);
        }
      if (1 < f.length)
        for (let e = 0; e < f.length; e++)
          e !== f.length - 1 &&
            (h += `"${dl(f[e], r)}": "${f[e].replaceAll('"', '\\"')}",
`),
            e == f.length - 1 &&
              (h += `"${dl(f[e], r)}": "${f[e].replaceAll('"', '\\"')}"
}`),
            A.push(dl(f[e], r));
      1 <= f.length &&
        ((C = JSON.parse(h)[A.reduce((e, t) => Math.max(e, t), -1 / 0)]),
        (s = "https://www.albumoftheyear.org" + JSON.parse(u)[C])),
        f.length < 1 &&
          0.3 < JSON.parse(c)[_] &&
          (s = "https://www.albumoftheyear.org" + JSON.parse(o)[_]);
    }
    if ("https://www.albumoftheyear.orgundefined" == s) {
      if (500 == e.status)
        return (
          pl(3e3),
          Spicetify.showNotification("Request failed, retrying."),
          "noo"
        );
      if (200 == e.status)
        return (
          Spicetify.showNotification(
            "No release found on AOTY, searching just the album title without artist name (may return inaccurate results)"
          ),
          "no"
        );
      if (429 == e.status)
        return (
          pl(3e3),
          Spicetify.showNotification("Request failed, retrying."),
          "noo"
        );
    }
    console.log(s);
    var C = await El(s),
      I = ao.load(C.data),
      e = I(
        "#centerContent > div.fullWidth > div:nth-child(4) > div.albumUserScoreBox > div.text.numReviews > a > strong"
      ).text(),
      C = I(
        "#tracklist > div.trackList > table > tbody > tr:nth-child(1) > td.trackRating > span"
      ).text();
    let S = "False",
      b = "",
      R = "",
      D = "",
      O = "{\n",
      L = "{\n",
      y = "{\n",
      k,
      v = 0,
      M;
    if (1 == /^-?\d+$/.test(C)) {
      S = "True";
      let e = 1;
      var P = I(".discNumber"),
        B = [];
      if (0 < P.length) {
        for (let e = 0; e < P.length; e++)
          (M = I(".rightBox").find(".trackListTable").get(e)),
            (k = I(M).children("tbody").children("tr").length),
            B.push(k);
        v = B.reduce((e, t) => Math.max(e, t), -1 / 0);
      }
      P.length <= 0 &&
        ((M = I(".rightBox").find(".trackListTable").get(0)),
        (k = I(M).children("tbody").children("tr").length),
        (v = k));
      let t,
        i,
        o = 0;
      for (
        0 == P.length && ((t = 0), (i = 0)),
          0 < P.length && (t = 1),
          o = Number(t);
        o <= P.length;
        o++
      ) {
        let r = 0,
          n =
            (0 < P.length && (i = o - 1),
            (M = I(".rightBox").find(".trackListTable").get(Number(i))),
            (k = I(M).children("tbody").children("tr").length),
            ""),
          a = "",
          s = "";
        for (e = 0; e < v; e++) {
          var w = I(
              `#tracklist > div.trackList > table > tbody > tr:nth-child(${++r}) > td.trackRating > span`
            ),
            x = I(
              `#tracklist > div.trackList > table > tbody > tr:nth-child(${r}) > td.trackTitle > a`
            );
          let e, t;
          w.length !== P.length &&
            k !== v &&
            ((n += "00&"), (a += "/song/undefined"), (s += "0 Ratings&")),
            w.length !== P.length &&
              k == v &&
              ((e = I(w[w.length - 1])),
              (n += e.text() + "&"),
              (t = I(x[w.length - 1])),
              (a += t.attr("href")),
              (s += e.attr("title") + "&")),
            w.length == P.length &&
              ((e = I(w[Number(i)])),
              (n += e.text() + "&"),
              (t = I(x[Number(i)])),
              (a += t.attr("href")),
              (s += e.attr("title") + "&"));
        }
        (i !== P.length - 1 && 0 != P.length) ||
          ((O += `"${i}": "` + n + '"\n'),
          (L += `"${i}": "` + a + '"\n'),
          (y += `"${i}": "` + s + '"\n')),
          i !== P.length - 1 &&
            0 < P.length &&
            ((O += `"${i}": "` + n + '",\n'),
            (L += `"${i}": "` + a + '",\n'),
            (y += `"${i}": "` + s + '",\n'));
      }
      (O += "}"),
        (L += "}"),
        (y += "}"),
        (b = JSON.parse(L)),
        (R = JSON.parse(O)),
        (D = JSON.parse(y));
    }
    var C = e.replace(",", ""),
      F = I(
        "#centerContent > div.fullWidth > div:nth-child(4) > div.albumUserScoreBox > div.albumUserScore > a"
      ).attr("title"),
      F = parseFloat(F).toFixed(2);
    return [parseFloat(F), e, s, C, R, S, b, D];
  }
  async function fl() {
    var s;
    if (
      (console.log("update"),
      Spicetify.Player.data.playbackId || Spicetify.Player.data.playback_id)
    ) {
      var i,
        o,
        c,
        l =
          null != (l = Spicetify.Player.data.playbackId)
            ? l
            : Spicetify.Player.data.playback_id;
      if (
        (l != tl || "False" != hl) &&
        ((hl = "False"),
        document.querySelector(
          "#main > div > div.Root__top-container > div.Root__now-playing-bar > footer > div > div.main-nowPlayingBar-left > div > div.main-nowPlayingWidget-trackInfo.main-trackInfo-container"
        )
          ? (ol = document.querySelector(
              "#main > div > div.Root__top-container > div.Root__now-playing-bar > footer > div > div.main-nowPlayingBar-left > div > div.main-nowPlayingWidget-trackInfo.main-trackInfo-container"
            ))
          : document.querySelector(
              "#main > div > div.Root__top-container > div.Root__now-playing-bar > footer > div > div.main-nowPlayingBar-left > div > div.main-trackInfo-container.ellipsis-one-line"
            ) &&
            (ol = document.querySelector(
              "#main > div > div.Root__top-container > div.Root__now-playing-bar > footer > div > div.main-nowPlayingBar-left > div > div.main-trackInfo-container.ellipsis-one-line"
            )),
        ol)
      ) {
        ul(),
          document.getElementsByClassName("scoreElement").length,
          document.getElementsByClassName("songScore").length;
        let {
          title: e,
          album_title: t,
          artist_name: r,
          album_track_number: n,
          album_disc_number: a,
        } = null !=
        (s = null == (s = Spicetify.Player.data.item) ? void 0 : s.metadata)
          ? s
          : null == (s = Spicetify.Player.data.track)
          ? void 0
          : s.metadata;
        if (e && t && r) {
          tl = l;
          try {
            "Weezer" !== r &&
              (t = (t = (t = t.split(" -")[0]).split(" (")[0]).replace(
                '"',
                ""
              ));
            let e = await ml(
              (r =
                "RÜFÜS DU SOL" ==
                (r = "Ms. Lauryn Hill" == r ? "Lauryn Hill" : r)
                  ? "RÜFÜS"
                  : r),
              t,
              !0
            );
            if (
              (e[3] ||
                ("noo" == (e = "no" == e ? await ml(r, t, !1) : e) &&
                  ml(artist, album, !0)),
              1 <= document.getElementsByClassName("scoreElement").length)
            )
              for (
                let e = 0;
                e < document.getElementsByClassName("scoreElement").length;
                e++
              )
                document.getElementsByClassName("scoreElement")[e].remove();
            "True" === e[5] &&
              (document.querySelector(
                "#main > div > div.Root__top-container.Root__top-container--right-sidebar-visible > div.Root__now-playing-bar > footer > div > div.main-nowPlayingBar-left > div > div.main-trackInfo-container > div.main-trackInfo-name > div > div > div > div > span"
              ) &&
                (sl = document.querySelector(
                  "#main > div > div.Root__top-container.Root__top-container--right-sidebar-visible > div.Root__now-playing-bar > footer > div > div.main-nowPlayingBar-left > div > div.main-trackInfo-container > div.main-trackInfo-name > div > div > div > div > span"
                )),
              document.querySelector(
                "#main > div > div.Root__top-container > div.Root__now-playing-bar > footer > div > div.main-nowPlayingBar-left > div > div.main-trackInfo-container > div.main-trackInfo-name > div > div > div > div > span"
              ) &&
                (sl = document.querySelector(
                  "#main > div > div.Root__top-container > div.Root__now-playing-bar > footer > div > div.main-nowPlayingBar-left > div > div.main-trackInfo-container > div.main-trackInfo-name > div > div > div > div > span"
                )),
              (sl = document.querySelector(
                "#main > div > div.Root__top-container > div.Root__now-playing-bar > footer > div > div.main-nowPlayingBar-left > div > div.main-trackInfo-container.ellipsis-one-line > div.main-trackInfo-name.ellipsis-one-line.main-type-mesto > span"
              )
                ? document.querySelector(
                    "#main > div > div.Root__top-container > div.Root__now-playing-bar > footer > div > div.main-nowPlayingBar-left > div > div.main-trackInfo-container.ellipsis-one-line > div.main-trackInfo-name.ellipsis-one-line.main-type-mesto > span"
                  )
                : sl)) &&
              ((al = document.createElement("a")),
              (i = e[4][Number(a) - 1].split("&")[Number(n) - 1]),
              (al.className = "songScore"),
              69.5 <= i && (al.style.color = "#85ce73"),
              49.5 <= i && i < 69.5 && (al.style.color = "#f0e68c"),
              i < 49.5 && (al.style.color = "#d76666"),
              "undefined" != i && (al.innerText = `    [${i}]`),
              (o = String(e[6][Number(a) - 1]).split("/song")[Number(n)]),
              (al.href = "https://albumoftheyear.org/song" + o),
              (al.style.fontSize = "10px"),
              (al.style.fontWeight = "bold"),
              (c = e[7][Number(a) - 1].split("&")[Number(n) - 1]),
              (al.title = c),
              (il = sl.children[0]),
              90 <= i &&
                25 <= c.split("Ratings")[0] &&
                (il.style.fontWeight = "bold"),
              sl.appendChild(al)),
              ((divContainer = document.createElement("div")).style.gridArea =
                "rating"),
              (nl = document.createElement("a")),
              divContainer.appendChild(nl),
              (divContainer.className = "scoreElement"),
              69.5 <= e[0] && (nl.style.color = "#85ce73"),
              49.5 <= e[0] && e[0] < 69.5 && (nl.style.color = "#f0e68c"),
              e[0] < 49.5 && (nl.style.color = "#d76666"),
              0 < e[3] && (nl.innerText = `${e[0]} (${e[1]} ratings)`),
              0 == e[3] &&
                ((nl.style.color = "var(--spice-extratext)"),
                (nl.innerText = "No Ratings.")),
              (nl.href = String(e[2])),
              (nl.style.fontSize = "12px"),
              (ol.style.gridTemplate =
                '"title title" "badges subtitle" "genres genres" "rating rating" / auto 1fr auto auto'),
              ol.appendChild(divContainer);
          } catch (e) {
            e instanceof Tl
              ? (console.log("Failed to get AOTY rating:", e.message),
                console.log(e))
              : console.log("Unknown error", e);
          }
        }
      }
    }
  }
  (async () => {
    (async function () {
      for (; !Spicetify.CosmosAsync || !Spicetify.showNotification; )
        await pl(500);
      fl(), ll.addEventListener("songchange", fl);
    })();
  })();
})();

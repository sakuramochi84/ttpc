/*----------------------------------------------------------------------------------------
☆★ オブジェクト: 問題 ★☆
----------------------------------------------------------------------------------------*/
function ProblemWarmingUp(id){
  switch(id){
    case  0:
    // 初期マトリックス。デッドライン以上は含めない
    this.initialBlocks = [[0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]];
    this.ingredients = [[],Z,T,S,J,O,L,I,I,O,J];  // 使用可能ミノ 先頭要素は初期ホールドミノ
    this.caption = 'テトリス　その１';
    this.hint = '最初の７手は Perfect Clear\n(パーフェクト・クリア)を狙う\nための　代表的なテンプレです。';
    this.guides = [G(Z, 0, 6, 18), G(T, 3, 8, 17), G(S, 0, 7, 16), G(J, 0, 0, 18), G(O, 0, 0, 17), G(L, 2, 0, 15), G(I, 3, 2, 16), G(I, 0, 4, 15), G(O, 0, 3, 18), G(J, 2, 4, 17)];  // ガイド 作成する際は設置ミノのダンプ情報を利用（ttt.jsにてconsole.logに設置ミノをダンプしている）
    this.useGuide = true;  // ガイド使用(Rを押さなくてもガイドを利用するときtrue)
    this.req = [];       // ノルマ( REQuired features )
    this.req.push(0);    //   [0]: Single
    this.req.push(0);    //   [1]: Double
    this.req.push(0);    //   [2]: Triple
    this.req.push(0);    //   [3]: Tetris
    this.req.push(0);    //   [4]: T-Spin Mini ( 0 列)
    this.req.push(0);    //   [5]: T-Spin ( 0 列)
    this.req.push(0);    //   [6]: Mini T-Spin Single
    this.req.push(0);    //   [7]: T-Spin Single
    this.req.push(0);    //   [8]: T-Spin Double
    this.req.push(0);    //   [9]: T-Spin Triple
    this.req.push(1);    //   [10]: Perfect Clear
    this.req.push(0);    //   [11]: Back-to-Back
    this.req.push(0);    //   [12]: vREN (Combo)
    break;

    default:
    // 初期マトリックス。デッドライン以上は含めない
    this.initialBlocks = [[0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,0]];
    this.ingredients = [[],I];  // 使用可能ミノ 先頭要素は初期ホールドミノ
    this.caption = 'テトリス　その１';
    this.hint = '最初は　TETRiS (４列消し)を\nひたすら決めるだけ。まずは\nここで　ウォーミングアップ！';
    this.guides = [];    // ガイド 作成する際は設置ミノのダンプ情報を利用（ttt.jsにてconsole.logに設置ミノをダンプしている）
    this.useGuide = true;  // ガイド使用(Rを押さなくてもガイドを利用するときtrue)
    this.req = [];       // ノルマ( REQuired features )
    this.req.push(0);    //   [0]: Single
    this.req.push(0);    //   [1]: Double
    this.req.push(0);    //   [2]: Triple
    this.req.push(1);    //   [3]: Tetris
    this.req.push(0);    //   [4]: T-Spin Mini ( 0 列)
    this.req.push(0);    //   [5]: T-Spin ( 0 列)
    this.req.push(0);    //   [6]: Mini T-Spin Single
    this.req.push(0);    //   [7]: T-Spin Single
    this.req.push(0);    //   [8]: T-Spin Double
    this.req.push(0);    //   [9]: T-Spin Triple
    this.req.push(0);    //   [10]: Perfect Clear
    this.req.push(0);    //   [11]: Back-to-Back
    this.req.push(0);    //   [12]: vREN (Combo)
    break;

  }

  return this;

}
function Problem840(id){
  this.id = id;
  this.initialBlocks = INITIAL_PC_BLOCKS;
  this.caption = 'No.'+ id;
  this.hint = 'Perfect Clear を発動してください。';
  this.useGuide = false;
  this.req = [0,0,0,0,0,0,0,0,0,0,1,0,0];

  /* ここのcase文は 「テトリス_パフェテンプレ成功率.xlsx」の「テンプレ改_計算用」シート DB列からコピーすること */
  switch(id){
    case   1:    this.ingredients = [[],I,I,J,L,O];    this.guides = GUIDES_ILO;    break;
    case   3:    this.ingredients = [[],I,I,J,L,T];    this.guides = GUIDES_IJT;    break;
    case   5:    this.ingredients = [[],I,I,J,O,L];    this.guides = GUIDES_IOJ;    break;
    case   6:    this.ingredients = [[],I,I,J,O,S];    this.guides = GUIDES_IOJ;    break;
    case   7:    this.ingredients = [[],I,I,J,O,T];    this.guides = GUIDES_IJT;    break;
    case   8:    this.ingredients = [[],I,I,J,O,Z];    this.guides = GUIDES_IOJ;    break;
    case   9:    this.ingredients = [[],I,I,J,S,L];    this.guides = GUIDES_ISJ;    break;
    case  10:    this.ingredients = [[],I,I,J,S,O];    this.guides = GUIDES_ISJ;    break;
    case  11:    this.ingredients = [[],I,I,J,S,T];    this.guides = GUIDES_IJT;    break;
    case  12:    this.ingredients = [[],I,I,J,S,Z];    this.guides = GUIDES_ISJ;    break;
    case  13:    this.ingredients = [[],I,I,J,T,L];    this.guides = GUIDES_IJT;    break;
    case  14:    this.ingredients = [[],I,I,J,T,O];    this.guides = GUIDES_IJT;    break;
    case  15:    this.ingredients = [[],I,I,J,T,S];    this.guides = GUIDES_IJT;    break;
    case  16:    this.ingredients = [[],I,I,J,T,Z];    this.guides = GUIDES_IJT;    break;
    case  17:    this.ingredients = [[],I,I,J,Z,L];    this.guides = GUIDES_IZL;    break;
    case  19:    this.ingredients = [[],I,I,J,Z,S];    this.guides = GUIDES_JZS;    break;
    case  20:    this.ingredients = [[],I,I,J,Z,T];    this.guides = GUIDES_IJT;    break;
    case  21:    this.ingredients = [[],I,I,L,J,O];    this.guides = GUIDES_ILO;    break;
    case  23:    this.ingredients = [[],I,I,L,J,T];    this.guides = GUIDES_IJT;    break;
    case  24:    this.ingredients = [[],I,I,L,J,Z];    this.guides = GUIDES_LIZ;    break;
    case  25:    this.ingredients = [[],I,I,L,O,J];    this.guides = GUIDES_IOJ;    break;
    case  26:    this.ingredients = [[],I,I,L,O,S];    this.guides = GUIDES_ILO;    break;
    case  27:    this.ingredients = [[],I,I,L,O,T];    this.guides = GUIDES_LIT;    break;
    case  28:    this.ingredients = [[],I,I,L,O,Z];    this.guides = GUIDES_ILO;    break;
    case  29:    this.ingredients = [[],I,I,L,S,J];    this.guides = GUIDES_ISJ;    break;
    case  30:    this.ingredients = [[],I,I,L,S,O];    this.guides = GUIDES_ILO;    break;
    case  31:    this.ingredients = [[],I,I,L,S,T];    this.guides = GUIDES_LIT;    break;
    case  32:    this.ingredients = [[],I,I,L,S,Z];    this.guides = GUIDES_LIZ;    break;
    case  33:    this.ingredients = [[],I,I,L,T,J];    this.guides = GUIDES_ITJ;    break;
    case  34:    this.ingredients = [[],I,I,L,T,O];    this.guides = GUIDES_LTI;    break;
    case  35:    this.ingredients = [[],I,I,L,T,S];    this.guides = GUIDES_LTI;    break;
    case  36:    this.ingredients = [[],I,I,L,T,Z];    this.guides = GUIDES_LTI;    break;
    case  37:    this.ingredients = [[],I,I,L,Z,J];    this.guides = GUIDES_IZL;    break;
    case  38:    this.ingredients = [[],I,I,L,Z,O];    this.guides = GUIDES_IZL;    break;
    case  39:    this.ingredients = [[],I,I,L,Z,S];    this.guides = GUIDES_IZL;    break;
    case  40:    this.ingredients = [[],I,I,L,Z,T];    this.guides = GUIDES_IZL;    break;
    case  41:    this.ingredients = [[],I,I,O,J,L];    this.guides = GUIDES_IOJ;    break;
    case  42:    this.ingredients = [[],I,I,O,J,S];    this.guides = GUIDES_IOJ;    break;
    case  43:    this.ingredients = [[],I,I,O,J,T];    this.guides = GUIDES_IJT;    break;
    case  44:    this.ingredients = [[],I,I,O,J,Z];    this.guides = GUIDES_IOJ;    break;
    case  45:    this.ingredients = [[],I,I,O,L,J];    this.guides = GUIDES_IOJ;    break;
    case  46:    this.ingredients = [[],I,I,O,L,S];    this.guides = GUIDES_ILO;    break;
    case  47:    this.ingredients = [[],I,I,O,L,T];    this.guides = GUIDES_ILO;    break;
    case  48:    this.ingredients = [[],I,I,O,L,Z];    this.guides = GUIDES_ILO;    break;
    case  49:    this.ingredients = [[],I,I,O,S,J];    this.guides = GUIDES_IOJ;    break;
    case  50:    this.ingredients = [[],I,I,O,S,L];    this.guides = GUIDES_IOL;    break;
    case  53:    this.ingredients = [[],I,I,O,T,J];    this.guides = GUIDES_ITJ;    break;
    case  54:    this.ingredients = [[],I,I,O,T,L];    this.guides = GUIDES_ITL;    break;
    case  55:    this.ingredients = [[],I,I,O,T,S];    this.guides = GUIDES_ITO;    break;
    case  56:    this.ingredients = [[],I,I,O,T,Z];    this.guides = GUIDES_ITO;    break;
    case  57:    this.ingredients = [[],I,I,O,Z,J];    this.guides = GUIDES_IOJ;    break;
    case  58:    this.ingredients = [[],I,I,O,Z,L];    this.guides = GUIDES_IZL;    break;
    case  61:    this.ingredients = [[],I,I,S,J,L];    this.guides = GUIDES_ISJ;    break;
    case  62:    this.ingredients = [[],I,I,S,J,O];    this.guides = GUIDES_ISJ;    break;
    case  63:    this.ingredients = [[],I,I,S,J,T];    this.guides = GUIDES_IJT;    break;
    case  64:    this.ingredients = [[],I,I,S,J,Z];    this.guides = GUIDES_ISJ;    break;
    case  65:    this.ingredients = [[],I,I,S,L,J];    this.guides = GUIDES_ISJ;    break;
    case  66:    this.ingredients = [[],I,I,S,L,O];    this.guides = GUIDES_ILO;    break;
    case  69:    this.ingredients = [[],I,I,S,O,J];    this.guides = GUIDES_IOJ;    break;
    case  70:    this.ingredients = [[],I,I,S,O,L];    this.guides = GUIDES_IOL;    break;
    case  73:    this.ingredients = [[],I,I,S,T,J];    this.guides = GUIDES_ITJ;    break;
    case  74:    this.ingredients = [[],I,I,S,T,L];    this.guides = GUIDES_ITL;    break;
    case  75:    this.ingredients = [[],I,I,S,T,O];    this.guides = GUIDES_ITO;    break;
    case  76:    this.ingredients = [[],I,I,S,T,Z];    this.guides = GUIDES_ITS;    break;
    case  77:    this.ingredients = [[],I,I,S,Z,J];    this.guides = GUIDES_ISJ;    break;
    case  78:    this.ingredients = [[],I,I,S,Z,L];    this.guides = GUIDES_IZL;    break;
    case  81:    this.ingredients = [[],I,I,T,J,L];    this.guides = GUIDES_IJT;    break;
    case  82:    this.ingredients = [[],I,I,T,J,O];    this.guides = GUIDES_IJT;    break;
    case  83:    this.ingredients = [[],I,I,T,J,S];    this.guides = GUIDES_IJT;    break;
    case  84:    this.ingredients = [[],I,I,T,J,Z];    this.guides = GUIDES_IJT;    break;
    case  85:    this.ingredients = [[],I,I,T,L,J];    this.guides = GUIDES_ITJ;    break;
    case  86:    this.ingredients = [[],I,I,T,L,O];    this.guides = GUIDES_TLI;    break;
    case  87:    this.ingredients = [[],I,I,T,L,S];    this.guides = GUIDES_TLI;    break;
    case  88:    this.ingredients = [[],I,I,T,L,Z];    this.guides = GUIDES_TLI;    break;
    case  89:    this.ingredients = [[],I,I,T,O,J];    this.guides = GUIDES_ITJ;    break;
    case  90:    this.ingredients = [[],I,I,T,O,L];    this.guides = GUIDES_TIL;    break;
    case  91:    this.ingredients = [[],I,I,T,O,S];    this.guides = GUIDES_ITO;    break;
    case  92:    this.ingredients = [[],I,I,T,O,Z];    this.guides = GUIDES_ITO;    break;
    case  93:    this.ingredients = [[],I,I,T,S,J];    this.guides = GUIDES_ITJ;    break;
    case  94:    this.ingredients = [[],I,I,T,S,L];    this.guides = GUIDES_TIL;    break;
    case  95:    this.ingredients = [[],I,I,T,S,O];    this.guides = GUIDES_ITO;    break;
    case  96:    this.ingredients = [[],I,I,T,S,Z];    this.guides = GUIDES_TSZ;    break;
    case  97:    this.ingredients = [[],I,I,T,Z,J];    this.guides = GUIDES_ITJ;    break;
    case  98:    this.ingredients = [[],I,I,T,Z,L];    this.guides = GUIDES_IZL;    break;
    case  99:    this.ingredients = [[],I,I,T,Z,O];    this.guides = GUIDES_ITO;    break;
    case 100:    this.ingredients = [[],I,I,T,Z,S];    this.guides = GUIDES_TZS;    break;
    case 101:    this.ingredients = [[],I,I,Z,J,L];    this.guides = GUIDES_IZL;    break;
    case 103:    this.ingredients = [[],I,I,Z,J,S];    this.guides = GUIDES_ZJS;    break;
    case 104:    this.ingredients = [[],I,I,Z,J,T];    this.guides = GUIDES_IJT;    break;
    case 105:    this.ingredients = [[],I,I,Z,L,J];    this.guides = GUIDES_IZL;    break;
    case 106:    this.ingredients = [[],I,I,Z,L,O];    this.guides = GUIDES_IZL;    break;
    case 107:    this.ingredients = [[],I,I,Z,L,S];    this.guides = GUIDES_IZL;    break;
    case 108:    this.ingredients = [[],I,I,Z,L,T];    this.guides = GUIDES_IZL;    break;
    case 109:    this.ingredients = [[],I,I,Z,O,J];    this.guides = GUIDES_IOJ;    break;
    case 110:    this.ingredients = [[],I,I,Z,O,L];    this.guides = GUIDES_IZL;    break;
    case 113:    this.ingredients = [[],I,I,Z,S,J];    this.guides = GUIDES_ISJ;    break;
    case 114:    this.ingredients = [[],I,I,Z,S,L];    this.guides = GUIDES_IZL;    break;
    case 117:    this.ingredients = [[],I,I,Z,T,J];    this.guides = GUIDES_ITJ;    break;
    case 118:    this.ingredients = [[],I,I,Z,T,L];    this.guides = GUIDES_IZL;    break;
    case 119:    this.ingredients = [[],I,I,Z,T,O];    this.guides = GUIDES_ITO;    break;
    case 120:    this.ingredients = [[],I,I,Z,T,S];    this.guides = GUIDES_ITS;    break;
    case 121:    this.ingredients = [[],I,J,I,L,O];    this.guides = GUIDES_ILO;    break;
    case 123:    this.ingredients = [[],I,J,I,L,T];    this.guides = GUIDES_IJT;    break;
    case 125:    this.ingredients = [[],I,J,I,O,L];    this.guides = GUIDES_IOJ;    break;
    case 126:    this.ingredients = [[],I,J,I,O,S];    this.guides = GUIDES_IOJ;    break;
    case 127:    this.ingredients = [[],I,J,I,O,T];    this.guides = GUIDES_IJT;    break;
    case 128:    this.ingredients = [[],I,J,I,O,Z];    this.guides = GUIDES_IOJ;    break;
    case 129:    this.ingredients = [[],I,J,I,S,L];    this.guides = GUIDES_ISJ;    break;
    case 130:    this.ingredients = [[],I,J,I,S,O];    this.guides = GUIDES_ISJ;    break;
    case 131:    this.ingredients = [[],I,J,I,S,T];    this.guides = GUIDES_IJT;    break;
    case 132:    this.ingredients = [[],I,J,I,S,Z];    this.guides = GUIDES_ISJ;    break;
    case 133:    this.ingredients = [[],I,J,I,T,L];    this.guides = GUIDES_IJT;    break;
    case 134:    this.ingredients = [[],I,J,I,T,O];    this.guides = GUIDES_IJT;    break;
    case 135:    this.ingredients = [[],I,J,I,T,S];    this.guides = GUIDES_IJT;    break;
    case 136:    this.ingredients = [[],I,J,I,T,Z];    this.guides = GUIDES_IJT;    break;
    case 137:    this.ingredients = [[],I,J,I,Z,L];    this.guides = GUIDES_IZL;    break;
    case 139:    this.ingredients = [[],I,J,I,Z,S];    this.guides = GUIDES_JZS;    break;
    case 140:    this.ingredients = [[],I,J,I,Z,T];    this.guides = GUIDES_IJT;    break;
    case 141:    this.ingredients = [[],I,J,L,I,O];    this.guides = GUIDES_LIO;    break;
    case 143:    this.ingredients = [[],I,J,L,I,T];    this.guides = GUIDES_JIT;    break;
    case 144:    this.ingredients = [[],I,J,L,I,Z];    this.guides = GUIDES_LIZ;    break;
    case 146:    this.ingredients = [[],I,J,L,O,S];    this.guides = GUIDES_LOS;    break;
    case 147:    this.ingredients = [[],I,J,L,O,T];    this.guides = GUIDES_LOT;    break;
    case 151:    this.ingredients = [[],I,J,L,S,T];    this.guides = GUIDES_JST;    break;
    case 153:    this.ingredients = [[],I,J,L,T,I];    this.guides = GUIDES_JTI;    break;
    case 154:    this.ingredients = [[],I,J,L,T,O];    this.guides = GUIDES_JTO;    break;
    case 155:    this.ingredients = [[],I,J,L,T,S];    this.guides = GUIDES_LTS;    break;
    case 156:    this.ingredients = [[],I,J,L,T,Z];    this.guides = GUIDES_LTZ;    break;
    case 157:    this.ingredients = [[],I,J,L,Z,I];    this.guides = GUIDES_LZI;    break;
    case 159:    this.ingredients = [[],I,J,L,Z,S];    this.guides = GUIDES_JZS;    break;
    case 160:    this.ingredients = [[],I,J,L,Z,T];    this.guides = GUIDES_LZT;    break;
    case 161:    this.ingredients = [[],I,J,O,I,L];    this.guides = GUIDES_OIJ;    break;
    case 162:    this.ingredients = [[],I,J,O,I,S];    this.guides = GUIDES_OIJ;    break;
    case 163:    this.ingredients = [[],I,J,O,I,T];    this.guides = GUIDES_JIT;    break;
    case 164:    this.ingredients = [[],I,J,O,I,Z];    this.guides = GUIDES_OIJ;    break;
    case 165:    this.ingredients = [[],I,J,O,L,I];    this.guides = GUIDES_OJI;    break;
    case 166:    this.ingredients = [[],I,J,O,L,S];    this.guides = GUIDES_OJS;    break;
    case 167:    this.ingredients = [[],I,J,O,L,T];    this.guides = GUIDES_OJT;    break;
    case 169:    this.ingredients = [[],I,J,O,S,I];    this.guides = GUIDES_OJI;    break;
    case 170:    this.ingredients = [[],I,J,O,S,L];    this.guides = GUIDES_OSJ;    break;
    case 171:    this.ingredients = [[],I,J,O,S,T];    this.guides = GUIDES_JST;    break;
    case 172:    this.ingredients = [[],I,J,O,S,Z];    this.guides = GUIDES_OSJ;    break;
    case 173:    this.ingredients = [[],I,J,O,T,I];    this.guides = GUIDES_JTI;    break;
    case 174:    this.ingredients = [[],I,J,O,T,L];    this.guides = GUIDES_OJT;    break;
    case 175:    this.ingredients = [[],I,J,O,T,S];    this.guides = GUIDES_OJT;    break;
    case 176:    this.ingredients = [[],I,J,O,T,Z];    this.guides = GUIDES_OJT;    break;
    case 177:    this.ingredients = [[],I,J,O,Z,I];    this.guides = GUIDES_OJI;    break;
    case 179:    this.ingredients = [[],I,J,O,Z,S];    this.guides = GUIDES_JZS;    break;
    case 180:    this.ingredients = [[],I,J,O,Z,T];    this.guides = GUIDES_OJT;    break;
    case 181:    this.ingredients = [[],I,J,S,I,L];    this.guides = GUIDES_SJI;    break;
    case 182:    this.ingredients = [[],I,J,S,I,O];    this.guides = GUIDES_SJI;    break;
    case 183:    this.ingredients = [[],I,J,S,I,T];    this.guides = GUIDES_JIT;    break;
    case 184:    this.ingredients = [[],I,J,S,I,Z];    this.guides = GUIDES_SJI;    break;
    case 185:    this.ingredients = [[],I,J,S,L,I];    this.guides = GUIDES_SJI;    break;
    case 187:    this.ingredients = [[],I,J,S,L,T];    this.guides = GUIDES_JST;    break;
    case 189:    this.ingredients = [[],I,J,S,O,I];    this.guides = GUIDES_SJI;    break;
    case 190:    this.ingredients = [[],I,J,S,O,L];    this.guides = GUIDES_SOJ;    break;
    case 191:    this.ingredients = [[],I,J,S,O,T];    this.guides = GUIDES_JST;    break;
    case 192:    this.ingredients = [[],I,J,S,O,Z];    this.guides = GUIDES_SOJ;    break;
    case 193:    this.ingredients = [[],I,J,S,T,I];    this.guides = GUIDES_JTI;    break;
    case 194:    this.ingredients = [[],I,J,S,T,L];    this.guides = GUIDES_JST;    break;
    case 195:    this.ingredients = [[],I,J,S,T,O];    this.guides = GUIDES_JST;    break;
    case 196:    this.ingredients = [[],I,J,S,T,Z];    this.guides = GUIDES_JST;    break;
    case 197:    this.ingredients = [[],I,J,S,Z,I];    this.guides = GUIDES_SJI;    break;
    case 198:    this.ingredients = [[],I,J,S,Z,L];    this.guides = GUIDES_JZS;    break;
    case 199:    this.ingredients = [[],I,J,S,Z,O];    this.guides = GUIDES_JZS;    break;
    case 200:    this.ingredients = [[],I,J,S,Z,T];    this.guides = GUIDES_JST;    break;
    case 201:    this.ingredients = [[],I,J,T,I,L];    this.guides = GUIDES_TIJ;    break;
    case 202:    this.ingredients = [[],I,J,T,I,O];    this.guides = GUIDES_TIJ;    break;
    case 203:    this.ingredients = [[],I,J,T,I,S];    this.guides = GUIDES_TIJ;    break;
    case 204:    this.ingredients = [[],I,J,T,I,Z];    this.guides = GUIDES_TIJ;    break;
    case 205:    this.ingredients = [[],I,J,T,L,I];    this.guides = GUIDES_TJI;    break;
    case 206:    this.ingredients = [[],I,J,T,L,O];    this.guides = GUIDES_TJL;    break;
    case 207:    this.ingredients = [[],I,J,T,L,S];    this.guides = GUIDES_TJL;    break;
    case 208:    this.ingredients = [[],I,J,T,L,Z];    this.guides = GUIDES_TJL;    break;
    case 209:    this.ingredients = [[],I,J,T,O,I];    this.guides = GUIDES_TJI;    break;
    case 210:    this.ingredients = [[],I,J,T,O,L];    this.guides = GUIDES_TJL;    break;
    case 211:    this.ingredients = [[],I,J,T,O,S];    this.guides = GUIDES_TJS;    break;
    case 212:    this.ingredients = [[],I,J,T,O,Z];    this.guides = GUIDES_TOJ;    break;
    case 213:    this.ingredients = [[],I,J,T,S,I];    this.guides = GUIDES_TJI;    break;
    case 214:    this.ingredients = [[],I,J,T,S,L];    this.guides = GUIDES_TJL;    break;
    case 215:    this.ingredients = [[],I,J,T,S,O];    this.guides = GUIDES_JST;    break;
    case 216:    this.ingredients = [[],I,J,T,S,Z];    this.guides = GUIDES_TSZ;    break;
    case 217:    this.ingredients = [[],I,J,T,Z,I];    this.guides = GUIDES_TJI;    break;
    case 218:    this.ingredients = [[],I,J,T,Z,L];    this.guides = GUIDES_TJL;    break;
    case 219:    this.ingredients = [[],I,J,T,Z,O];    this.guides = GUIDES_TJO;    break;
    case 220:    this.ingredients = [[],I,J,T,Z,S];    this.guides = GUIDES_TZS;    break;
    case 221:    this.ingredients = [[],I,J,Z,I,L];    this.guides = GUIDES_ZIL;    break;
    case 223:    this.ingredients = [[],I,J,Z,I,S];    this.guides = GUIDES_ZJS;    break;
    case 224:    this.ingredients = [[],I,J,Z,I,T];    this.guides = GUIDES_JIT;    break;
    case 225:    this.ingredients = [[],I,J,Z,L,I];    this.guides = GUIDES_ZLI;    break;
    case 227:    this.ingredients = [[],I,J,Z,L,S];    this.guides = GUIDES_ZJS;    break;
    case 228:    this.ingredients = [[],I,J,Z,L,T];    this.guides = GUIDES_JZT;    break;
    case 231:    this.ingredients = [[],I,J,Z,O,S];    this.guides = GUIDES_ZJS;    break;
    case 232:    this.ingredients = [[],I,J,Z,O,T];    this.guides = GUIDES_JZT;    break;
    case 233:    this.ingredients = [[],I,J,Z,S,I];    this.guides = GUIDES_ZSJ;    break;
    case 234:    this.ingredients = [[],I,J,Z,S,L];    this.guides = GUIDES_ZSJ;    break;
    case 235:    this.ingredients = [[],I,J,Z,S,O];    this.guides = GUIDES_ZSJ;    break;
    case 236:    this.ingredients = [[],I,J,Z,S,T];    this.guides = GUIDES_ZSJ;    break;
    case 237:    this.ingredients = [[],I,J,Z,T,I];    this.guides = GUIDES_JTI;    break;
    case 238:    this.ingredients = [[],I,J,Z,T,L];    this.guides = GUIDES_JZT;    break;
    case 239:    this.ingredients = [[],I,J,Z,T,O];    this.guides = GUIDES_JTO;    break;
    case 240:    this.ingredients = [[],I,J,Z,T,S];    this.guides = GUIDES_ZJS;    break;
    case 241:    this.ingredients = [[],I,L,I,J,O];    this.guides = GUIDES_ILO;    break;
    case 243:    this.ingredients = [[],I,L,I,J,T];    this.guides = GUIDES_IJT;    break;
    case 244:    this.ingredients = [[],I,L,I,J,Z];    this.guides = GUIDES_LIZ;    break;
    case 245:    this.ingredients = [[],I,L,I,O,J];    this.guides = GUIDES_IOJ;    break;
    case 246:    this.ingredients = [[],I,L,I,O,S];    this.guides = GUIDES_ILO;    break;
    case 247:    this.ingredients = [[],I,L,I,O,T];    this.guides = GUIDES_LIT;    break;
    case 248:    this.ingredients = [[],I,L,I,O,Z];    this.guides = GUIDES_ILO;    break;
    case 249:    this.ingredients = [[],I,L,I,S,J];    this.guides = GUIDES_ISJ;    break;
    case 250:    this.ingredients = [[],I,L,I,S,O];    this.guides = GUIDES_ILO;    break;
    case 251:    this.ingredients = [[],I,L,I,S,T];    this.guides = GUIDES_LIT;    break;
    case 252:    this.ingredients = [[],I,L,I,S,Z];    this.guides = GUIDES_LIZ;    break;
    case 253:    this.ingredients = [[],I,L,I,T,J];    this.guides = GUIDES_ITJ;    break;
    case 254:    this.ingredients = [[],I,L,I,T,O];    this.guides = GUIDES_LTI;    break;
    case 255:    this.ingredients = [[],I,L,I,T,S];    this.guides = GUIDES_LTI;    break;
    case 256:    this.ingredients = [[],I,L,I,T,Z];    this.guides = GUIDES_LTI;    break;
    case 257:    this.ingredients = [[],I,L,I,Z,J];    this.guides = GUIDES_IZL;    break;
    case 258:    this.ingredients = [[],I,L,I,Z,O];    this.guides = GUIDES_IZL;    break;
    case 259:    this.ingredients = [[],I,L,I,Z,S];    this.guides = GUIDES_IZL;    break;
    case 260:    this.ingredients = [[],I,L,I,Z,T];    this.guides = GUIDES_IZL;    break;
    case 261:    this.ingredients = [[],I,L,J,I,O];    this.guides = GUIDES_LIO;    break;
    case 263:    this.ingredients = [[],I,L,J,I,T];    this.guides = GUIDES_JIT;    break;
    case 264:    this.ingredients = [[],I,L,J,I,Z];    this.guides = GUIDES_LIZ;    break;
    case 266:    this.ingredients = [[],I,L,J,O,S];    this.guides = GUIDES_LOS;    break;
    case 267:    this.ingredients = [[],I,L,J,O,T];    this.guides = GUIDES_LOT;    break;
    case 271:    this.ingredients = [[],I,L,J,S,T];    this.guides = GUIDES_JST;    break;
    case 273:    this.ingredients = [[],I,L,J,T,I];    this.guides = GUIDES_JTI;    break;
    case 274:    this.ingredients = [[],I,L,J,T,O];    this.guides = GUIDES_JTO;    break;
    case 275:    this.ingredients = [[],I,L,J,T,S];    this.guides = GUIDES_LTS;    break;
    case 276:    this.ingredients = [[],I,L,J,T,Z];    this.guides = GUIDES_LTZ;    break;
    case 277:    this.ingredients = [[],I,L,J,Z,I];    this.guides = GUIDES_LZI;    break;
    case 279:    this.ingredients = [[],I,L,J,Z,S];    this.guides = GUIDES_JZS;    break;
    case 280:    this.ingredients = [[],I,L,J,Z,T];    this.guides = GUIDES_LZT;    break;
    case 281:    this.ingredients = [[],I,L,O,I,J];    this.guides = GUIDES_OIJ;    break;
    case 282:    this.ingredients = [[],I,L,O,I,S];    this.guides = GUIDES_LIO;    break;
    case 283:    this.ingredients = [[],I,L,O,I,T];    this.guides = GUIDES_LIT;    break;
    case 284:    this.ingredients = [[],I,L,O,I,Z];    this.guides = GUIDES_LIO;    break;
    case 285:    this.ingredients = [[],I,L,O,J,I];    this.guides = GUIDES_OJI;    break;
    case 286:    this.ingredients = [[],I,L,O,J,S];    this.guides = GUIDES_LOS;    break;
    case 287:    this.ingredients = [[],I,L,O,J,T];    this.guides = GUIDES_OJT;    break;
    case 289:    this.ingredients = [[],I,L,O,S,I];    this.guides = GUIDES_LOS;    break;
    case 290:    this.ingredients = [[],I,L,O,S,J];    this.guides = GUIDES_OSJ;    break;
    case 291:    this.ingredients = [[],I,L,O,S,T];    this.guides = GUIDES_LOT;    break;
    case 292:    this.ingredients = [[],I,L,O,S,Z];    this.guides = GUIDES_LOS;    break;
    case 293:    this.ingredients = [[],I,L,O,T,I];    this.guides = GUIDES_LTI;    break;
    case 294:    this.ingredients = [[],I,L,O,T,J];    this.guides = GUIDES_OTJ;    break;
    case 295:    this.ingredients = [[],I,L,O,T,S];    this.guides = GUIDES_LTO;    break;
    case 296:    this.ingredients = [[],I,L,O,T,Z];    this.guides = GUIDES_LTO;    break;
    case 297:    this.ingredients = [[],I,L,O,Z,I];    this.guides = GUIDES_LZI;    break;
    case 299:    this.ingredients = [[],I,L,O,Z,S];    this.guides = GUIDES_LOS;    break;
    case 300:    this.ingredients = [[],I,L,O,Z,T];    this.guides = GUIDES_LOT;    break;
    case 301:    this.ingredients = [[],I,L,S,I,J];    this.guides = GUIDES_SIJ;    break;
    case 302:    this.ingredients = [[],I,L,S,I,O];    this.guides = GUIDES_LIO;    break;
    case 303:    this.ingredients = [[],I,L,S,I,T];    this.guides = GUIDES_LIT;    break;
    case 304:    this.ingredients = [[],I,L,S,I,Z];    this.guides = GUIDES_LIZ;    break;
    case 305:    this.ingredients = [[],I,L,S,J,I];    this.guides = GUIDES_SJI;    break;
    case 306:    this.ingredients = [[],I,L,S,J,O];    this.guides = GUIDES_LSIO;    break;
    case 307:    this.ingredients = [[],I,L,S,J,T];    this.guides = GUIDES_LST;    break;
    case 309:    this.ingredients = [[],I,L,S,O,I];    this.guides = GUIDES_LOS;    break;
    case 310:    this.ingredients = [[],I,L,S,O,J];    this.guides = GUIDES_SOJ;    break;
    case 311:    this.ingredients = [[],I,L,S,O,T];    this.guides = GUIDES_LOT;    break;
    case 312:    this.ingredients = [[],I,L,S,O,Z];    this.guides = GUIDES_LOS;    break;
    case 313:    this.ingredients = [[],I,L,S,T,I];    this.guides = GUIDES_LTI;    break;
    case 314:    this.ingredients = [[],I,L,S,T,J];    this.guides = GUIDES_LST;    break;
    case 315:    this.ingredients = [[],I,L,S,T,O];    this.guides = GUIDES_LTO;    break;
    case 316:    this.ingredients = [[],I,L,S,T,Z];    this.guides = GUIDES_LTZ;    break;
    case 317:    this.ingredients = [[],I,L,S,Z,I];    this.guides = GUIDES_SZL;    break;
    case 318:    this.ingredients = [[],I,L,S,Z,J];    this.guides = GUIDES_SZL;    break;
    case 319:    this.ingredients = [[],I,L,S,Z,O];    this.guides = GUIDES_SZL;    break;
    case 320:    this.ingredients = [[],I,L,S,Z,T];    this.guides = GUIDES_SZL;    break;
    case 321:    this.ingredients = [[],I,L,T,I,J];    this.guides = GUIDES_TIJ;    break;
    case 322:    this.ingredients = [[],I,L,T,I,O];    this.guides = GUIDES_LTI;    break;
    case 323:    this.ingredients = [[],I,L,T,I,S];    this.guides = GUIDES_LTI;    break;
    case 324:    this.ingredients = [[],I,L,T,I,Z];    this.guides = GUIDES_LTI;    break;
    case 325:    this.ingredients = [[],I,L,T,J,I];    this.guides = GUIDES_TJI;    break;
    case 326:    this.ingredients = [[],I,L,T,J,O];    this.guides = GUIDES_TJL;    break;
    case 327:    this.ingredients = [[],I,L,T,J,S];    this.guides = GUIDES_TJL;    break;
    case 328:    this.ingredients = [[],I,L,T,J,Z];    this.guides = GUIDES_TJL;    break;
    case 329:    this.ingredients = [[],I,L,T,O,I];    this.guides = GUIDES_LTI;    break;
    case 330:    this.ingredients = [[],I,L,T,O,J];    this.guides = GUIDES_TLJ;    break;
    case 331:    this.ingredients = [[],I,L,T,O,S];    this.guides = GUIDES_TLO;    break;
    case 332:    this.ingredients = [[],I,L,T,O,Z];    this.guides = GUIDES_TLO;    break;
    case 333:    this.ingredients = [[],I,L,T,S,I];    this.guides = GUIDES_LTI;    break;
    case 334:    this.ingredients = [[],I,L,T,S,J];    this.guides = GUIDES_TLJ;    break;
    case 335:    this.ingredients = [[],I,L,T,S,O];    this.guides = GUIDES_TLO;    break;
    case 336:    this.ingredients = [[],I,L,T,S,Z];    this.guides = GUIDES_TSZ;    break;
    case 337:    this.ingredients = [[],I,L,T,Z,I];    this.guides = GUIDES_LTI;    break;
    case 338:    this.ingredients = [[],I,L,T,Z,J];    this.guides = GUIDES_TLJ;    break;
    case 339:    this.ingredients = [[],I,L,T,Z,O];    this.guides = GUIDES_TLO;    break;
    case 340:    this.ingredients = [[],I,L,T,Z,S];    this.guides = GUIDES_TZS;    break;
    case 341:    this.ingredients = [[],I,L,Z,I,J];    this.guides = GUIDES_ZIL;    break;
    case 342:    this.ingredients = [[],I,L,Z,I,O];    this.guides = GUIDES_ZIL;    break;
    case 343:    this.ingredients = [[],I,L,Z,I,S];    this.guides = GUIDES_ZIL;    break;
    case 344:    this.ingredients = [[],I,L,Z,I,T];    this.guides = GUIDES_ZIL;    break;
    case 345:    this.ingredients = [[],I,L,Z,J,I];    this.guides = GUIDES_ZLI;    break;
    case 347:    this.ingredients = [[],I,L,Z,J,S];    this.guides = GUIDES_ZJS;    break;
    case 348:    this.ingredients = [[],I,L,Z,J,T];    this.guides = GUIDES_LZT;    break;
    case 349:    this.ingredients = [[],I,L,Z,O,I];    this.guides = GUIDES_ZLI;    break;
    case 351:    this.ingredients = [[],I,L,Z,O,S];    this.guides = GUIDES_LOS;    break;
    case 352:    this.ingredients = [[],I,L,Z,O,T];    this.guides = GUIDES_LOT;    break;
    case 353:    this.ingredients = [[],I,L,Z,S,I];    this.guides = GUIDES_ZLI;    break;
    case 354:    this.ingredients = [[],I,L,Z,S,J];    this.guides = GUIDES_ZSJ;    break;
    case 355:    this.ingredients = [[],I,L,Z,S,O];    this.guides = GUIDES_ZSL;    break;
    case 356:    this.ingredients = [[],I,L,Z,S,T];    this.guides = GUIDES_ZSL;    break;
    case 357:    this.ingredients = [[],I,L,Z,T,I];    this.guides = GUIDES_ZLI;    break;
    case 358:    this.ingredients = [[],I,L,Z,T,J];    this.guides = GUIDES_LZT;    break;
    case 359:    this.ingredients = [[],I,L,Z,T,O];    this.guides = GUIDES_LTO;    break;
    case 360:    this.ingredients = [[],I,L,Z,T,S];    this.guides = GUIDES_LZT;    break;
    case 361:    this.ingredients = [[],I,O,I,J,L];    this.guides = GUIDES_IOJ;    break;
    case 362:    this.ingredients = [[],I,O,I,J,S];    this.guides = GUIDES_IOJ;    break;
    case 363:    this.ingredients = [[],I,O,I,J,T];    this.guides = GUIDES_IJT;    break;
    case 364:    this.ingredients = [[],I,O,I,J,Z];    this.guides = GUIDES_IOJ;    break;
    case 365:    this.ingredients = [[],I,O,I,L,J];    this.guides = GUIDES_IOJ;    break;
    case 366:    this.ingredients = [[],I,O,I,L,S];    this.guides = GUIDES_ILO;    break;
    case 367:    this.ingredients = [[],I,O,I,L,T];    this.guides = GUIDES_ILO;    break;
    case 368:    this.ingredients = [[],I,O,I,L,Z];    this.guides = GUIDES_ILO;    break;
    case 369:    this.ingredients = [[],I,O,I,S,J];    this.guides = GUIDES_IOJ;    break;
    case 370:    this.ingredients = [[],I,O,I,S,L];    this.guides = GUIDES_IOL;    break;
    case 373:    this.ingredients = [[],I,O,I,T,J];    this.guides = GUIDES_ITJ;    break;
    case 374:    this.ingredients = [[],I,O,I,T,L];    this.guides = GUIDES_ITL;    break;
    case 375:    this.ingredients = [[],I,O,I,T,S];    this.guides = GUIDES_ITO;    break;
    case 376:    this.ingredients = [[],I,O,I,T,Z];    this.guides = GUIDES_ITO;    break;
    case 377:    this.ingredients = [[],I,O,I,Z,J];    this.guides = GUIDES_IOJ;    break;
    case 378:    this.ingredients = [[],I,O,I,Z,L];    this.guides = GUIDES_IZL;    break;
    case 381:    this.ingredients = [[],I,O,J,I,L];    this.guides = GUIDES_OIJ;    break;
    case 382:    this.ingredients = [[],I,O,J,I,S];    this.guides = GUIDES_OIJ;    break;
    case 383:    this.ingredients = [[],I,O,J,I,T];    this.guides = GUIDES_JIT;    break;
    case 384:    this.ingredients = [[],I,O,J,I,Z];    this.guides = GUIDES_OIJ;    break;
    case 385:    this.ingredients = [[],I,O,J,L,I];    this.guides = GUIDES_OJI;    break;
    case 386:    this.ingredients = [[],I,O,J,L,S];    this.guides = GUIDES_OJS;    break;
    case 387:    this.ingredients = [[],I,O,J,L,T];    this.guides = GUIDES_OJT;    break;
    case 389:    this.ingredients = [[],I,O,J,S,I];    this.guides = GUIDES_OJI;    break;
    case 390:    this.ingredients = [[],I,O,J,S,L];    this.guides = GUIDES_OSJ;    break;
    case 391:    this.ingredients = [[],I,O,J,S,T];    this.guides = GUIDES_JST;    break;
    case 392:    this.ingredients = [[],I,O,J,S,Z];    this.guides = GUIDES_OSJ;    break;
    case 393:    this.ingredients = [[],I,O,J,T,I];    this.guides = GUIDES_JTI;    break;
    case 394:    this.ingredients = [[],I,O,J,T,L];    this.guides = GUIDES_OJT;    break;
    case 395:    this.ingredients = [[],I,O,J,T,S];    this.guides = GUIDES_OJT;    break;
    case 396:    this.ingredients = [[],I,O,J,T,Z];    this.guides = GUIDES_OJT;    break;
    case 397:    this.ingredients = [[],I,O,J,Z,I];    this.guides = GUIDES_OJI;    break;
    case 399:    this.ingredients = [[],I,O,J,Z,S];    this.guides = GUIDES_JZS;    break;
    case 400:    this.ingredients = [[],I,O,J,Z,T];    this.guides = GUIDES_OJT;    break;
    case 401:    this.ingredients = [[],I,O,L,I,J];    this.guides = GUIDES_OIJ;    break;
    case 402:    this.ingredients = [[],I,O,L,I,S];    this.guides = GUIDES_LIO;    break;
    case 403:    this.ingredients = [[],I,O,L,I,T];    this.guides = GUIDES_LIT;    break;
    case 404:    this.ingredients = [[],I,O,L,I,Z];    this.guides = GUIDES_LIO;    break;
    case 405:    this.ingredients = [[],I,O,L,J,I];    this.guides = GUIDES_OJI;    break;
    case 406:    this.ingredients = [[],I,O,L,J,S];    this.guides = GUIDES_LOS;    break;
    case 407:    this.ingredients = [[],I,O,L,J,T];    this.guides = GUIDES_OJT;    break;
    case 409:    this.ingredients = [[],I,O,L,S,I];    this.guides = GUIDES_LOS;    break;
    case 410:    this.ingredients = [[],I,O,L,S,J];    this.guides = GUIDES_OSJ;    break;
    case 411:    this.ingredients = [[],I,O,L,S,T];    this.guides = GUIDES_LOT;    break;
    case 412:    this.ingredients = [[],I,O,L,S,Z];    this.guides = GUIDES_LOS;    break;
    case 413:    this.ingredients = [[],I,O,L,T,I];    this.guides = GUIDES_LTI;    break;
    case 414:    this.ingredients = [[],I,O,L,T,J];    this.guides = GUIDES_OTJ;    break;
    case 415:    this.ingredients = [[],I,O,L,T,S];    this.guides = GUIDES_LTO;    break;
    case 416:    this.ingredients = [[],I,O,L,T,Z];    this.guides = GUIDES_LTO;    break;
    case 417:    this.ingredients = [[],I,O,L,Z,I];    this.guides = GUIDES_LZI;    break;
    case 419:    this.ingredients = [[],I,O,L,Z,S];    this.guides = GUIDES_LOS;    break;
    case 420:    this.ingredients = [[],I,O,L,Z,T];    this.guides = GUIDES_LOT;    break;
    case 421:    this.ingredients = [[],I,O,S,I,J];    this.guides = GUIDES_OIJ;    break;
    case 425:    this.ingredients = [[],I,O,S,J,I];    this.guides = GUIDES_OJI;    break;
    case 426:    this.ingredients = [[],I,O,S,J,L];    this.guides = GUIDES_SOJ;    break;
    case 427:    this.ingredients = [[],I,O,S,J,T];    this.guides = GUIDES_OJT;    break;
    case 428:    this.ingredients = [[],I,O,S,J,Z];    this.guides = GUIDES_SOJ;    break;
    case 430:    this.ingredients = [[],I,O,S,L,J];    this.guides = GUIDES_SOJ;    break;
    case 433:    this.ingredients = [[],I,O,S,T,I];    this.guides = GUIDES_STO;    break;
    case 434:    this.ingredients = [[],I,O,S,T,J];    this.guides = GUIDES_OTJ;    break;
    case 435:    this.ingredients = [[],I,O,S,T,L];    this.guides = GUIDES_STO;    break;
    case 436:    this.ingredients = [[],I,O,S,T,Z];    this.guides = GUIDES_STO;    break;
    case 438:    this.ingredients = [[],I,O,S,Z,J];    this.guides = GUIDES_SOJ;    break;
    case 439:    this.ingredients = [[],I,O,S,Z,L];    this.guides = GUIDES_SZL;    break;
    case 441:    this.ingredients = [[],I,O,T,I,J];    this.guides = GUIDES_TIJ;    break;
    case 442:    this.ingredients = [[],I,O,T,I,L];    this.guides = GUIDES_TIL;    break;
    case 443:    this.ingredients = [[],I,O,T,I,S];    this.guides = GUIDES_TIO;    break;
    case 444:    this.ingredients = [[],I,O,T,I,Z];    this.guides = GUIDES_TIO;    break;
    case 445:    this.ingredients = [[],I,O,T,J,I];    this.guides = GUIDES_TJI;    break;
    case 446:    this.ingredients = [[],I,O,T,J,L];    this.guides = GUIDES_TJL;    break;
    case 447:    this.ingredients = [[],I,O,T,J,S];    this.guides = GUIDES_OJT;    break;
    case 448:    this.ingredients = [[],I,O,T,J,Z];    this.guides = GUIDES_OJT;    break;
    case 449:    this.ingredients = [[],I,O,T,L,I];    this.guides = GUIDES_TLI;    break;
    case 450:    this.ingredients = [[],I,O,T,L,J];    this.guides = GUIDES_TLJ;    break;
    case 451:    this.ingredients = [[],I,O,T,L,S];    this.guides = GUIDES_TLO;    break;
    case 452:    this.ingredients = [[],I,O,T,L,Z];    this.guides = GUIDES_TLO;    break;
    case 453:    this.ingredients = [[],I,O,T,S,I];    this.guides = GUIDES_TOI;    break;
    case 454:    this.ingredients = [[],I,O,T,S,J];    this.guides = GUIDES_TSJ;    break;
    case 455:    this.ingredients = [[],I,O,T,S,L];    this.guides = GUIDES_TSO;    break;
    case 456:    this.ingredients = [[],I,O,T,S,Z];    this.guides = GUIDES_TSZ;    break;
    case 457:    this.ingredients = [[],I,O,T,Z,I];    this.guides = GUIDES_TOI;    break;
    case 458:    this.ingredients = [[],I,O,T,Z,J];    this.guides = GUIDES_TOJ;    break;
    case 460:    this.ingredients = [[],I,O,T,Z,S];    this.guides = GUIDES_TZS;    break;
    case 461:    this.ingredients = [[],I,O,Z,I,J];    this.guides = GUIDES_OIJ;    break;
    case 462:    this.ingredients = [[],I,O,Z,I,L];    this.guides = GUIDES_ZIL;    break;
    case 465:    this.ingredients = [[],I,O,Z,J,I];    this.guides = GUIDES_OJI;    break;
    case 467:    this.ingredients = [[],I,O,Z,J,S];    this.guides = GUIDES_ZJS;    break;
    case 468:    this.ingredients = [[],I,O,Z,J,T];    this.guides = GUIDES_OJT;    break;
    case 469:    this.ingredients = [[],I,O,Z,L,I];    this.guides = GUIDES_ZLI;    break;
    case 474:    this.ingredients = [[],I,O,Z,S,J];    this.guides = GUIDES_ZSJ;    break;
    case 475:    this.ingredients = [[],I,O,Z,S,L];    this.guides = GUIDES_ZSL;    break;
    case 478:    this.ingredients = [[],I,O,Z,T,J];    this.guides = GUIDES_OTJ;    break;
    case 481:    this.ingredients = [[],I,S,I,J,L];    this.guides = GUIDES_ISJ;    break;
    case 482:    this.ingredients = [[],I,S,I,J,O];    this.guides = GUIDES_ISJ;    break;
    case 483:    this.ingredients = [[],I,S,I,J,T];    this.guides = GUIDES_IJT;    break;
    case 484:    this.ingredients = [[],I,S,I,J,Z];    this.guides = GUIDES_ISJ;    break;
    case 485:    this.ingredients = [[],I,S,I,L,J];    this.guides = GUIDES_ISJ;    break;
    case 486:    this.ingredients = [[],I,S,I,L,O];    this.guides = GUIDES_ILO;    break;
    case 489:    this.ingredients = [[],I,S,I,O,J];    this.guides = GUIDES_IOJ;    break;
    case 490:    this.ingredients = [[],I,S,I,O,L];    this.guides = GUIDES_IOL;    break;
    case 493:    this.ingredients = [[],I,S,I,T,J];    this.guides = GUIDES_ITJ;    break;
    case 494:    this.ingredients = [[],I,S,I,T,L];    this.guides = GUIDES_ITL;    break;
    case 495:    this.ingredients = [[],I,S,I,T,O];    this.guides = GUIDES_ITO;    break;
    case 496:    this.ingredients = [[],I,S,I,T,Z];    this.guides = GUIDES_ITS;    break;
    case 497:    this.ingredients = [[],I,S,I,Z,J];    this.guides = GUIDES_ISJ;    break;
    case 498:    this.ingredients = [[],I,S,I,Z,L];    this.guides = GUIDES_IZL;    break;
    case 501:    this.ingredients = [[],I,S,J,I,L];    this.guides = GUIDES_SJI;    break;
    case 502:    this.ingredients = [[],I,S,J,I,O];    this.guides = GUIDES_SJI;    break;
    case 503:    this.ingredients = [[],I,S,J,I,T];    this.guides = GUIDES_JIT;    break;
    case 504:    this.ingredients = [[],I,S,J,I,Z];    this.guides = GUIDES_SJI;    break;
    case 505:    this.ingredients = [[],I,S,J,L,I];    this.guides = GUIDES_SJI;    break;
    case 507:    this.ingredients = [[],I,S,J,L,T];    this.guides = GUIDES_JST;    break;
    case 509:    this.ingredients = [[],I,S,J,O,I];    this.guides = GUIDES_SJI;    break;
    case 510:    this.ingredients = [[],I,S,J,O,L];    this.guides = GUIDES_SOJ;    break;
    case 511:    this.ingredients = [[],I,S,J,O,T];    this.guides = GUIDES_JST;    break;
    case 512:    this.ingredients = [[],I,S,J,O,Z];    this.guides = GUIDES_SOJ;    break;
    case 513:    this.ingredients = [[],I,S,J,T,I];    this.guides = GUIDES_JTI;    break;
    case 514:    this.ingredients = [[],I,S,J,T,L];    this.guides = GUIDES_JST;    break;
    case 515:    this.ingredients = [[],I,S,J,T,O];    this.guides = GUIDES_JST;    break;
    case 516:    this.ingredients = [[],I,S,J,T,Z];    this.guides = GUIDES_JST;    break;
    case 517:    this.ingredients = [[],I,S,J,Z,I];    this.guides = GUIDES_SJI;    break;
    case 518:    this.ingredients = [[],I,S,J,Z,L];    this.guides = GUIDES_JZS;    break;
    case 519:    this.ingredients = [[],I,S,J,Z,O];    this.guides = GUIDES_JZS;    break;
    case 520:    this.ingredients = [[],I,S,J,Z,T];    this.guides = GUIDES_JST;    break;
    case 521:    this.ingredients = [[],I,S,L,I,J];    this.guides = GUIDES_SIJ;    break;
    case 522:    this.ingredients = [[],I,S,L,I,O];    this.guides = GUIDES_LIO;    break;
    case 523:    this.ingredients = [[],I,S,L,I,T];    this.guides = GUIDES_LIT;    break;
    case 524:    this.ingredients = [[],I,S,L,I,Z];    this.guides = GUIDES_LIZ;    break;
    case 525:    this.ingredients = [[],I,S,L,J,I];    this.guides = GUIDES_SJI;    break;
    case 527:    this.ingredients = [[],I,S,L,J,T];    this.guides = GUIDES_LST;    break;
    case 529:    this.ingredients = [[],I,S,L,O,I];    this.guides = GUIDES_LOS;    break;
    case 530:    this.ingredients = [[],I,S,L,O,J];    this.guides = GUIDES_SOJ;    break;
    case 531:    this.ingredients = [[],I,S,L,O,T];    this.guides = GUIDES_LOT;    break;
    case 532:    this.ingredients = [[],I,S,L,O,Z];    this.guides = GUIDES_LOS;    break;
    case 533:    this.ingredients = [[],I,S,L,T,I];    this.guides = GUIDES_LTI;    break;
    case 534:    this.ingredients = [[],I,S,L,T,J];    this.guides = GUIDES_LST;    break;
    case 535:    this.ingredients = [[],I,S,L,T,O];    this.guides = GUIDES_LTO;    break;
    case 536:    this.ingredients = [[],I,S,L,T,Z];    this.guides = GUIDES_LTZ;    break;
    case 537:    this.ingredients = [[],I,S,L,Z,I];    this.guides = GUIDES_SZL;    break;
    case 538:    this.ingredients = [[],I,S,L,Z,J];    this.guides = GUIDES_SZL;    break;
    case 539:    this.ingredients = [[],I,S,L,Z,O];    this.guides = GUIDES_SZL;    break;
    case 540:    this.ingredients = [[],I,S,L,Z,T];    this.guides = GUIDES_SZL;    break;
    case 541:    this.ingredients = [[],I,S,O,I,J];    this.guides = GUIDES_OIJ;    break;
    case 545:    this.ingredients = [[],I,S,O,J,I];    this.guides = GUIDES_OJI;    break;
    case 546:    this.ingredients = [[],I,S,O,J,L];    this.guides = GUIDES_SOJ;    break;
    case 547:    this.ingredients = [[],I,S,O,J,T];    this.guides = GUIDES_OJT;    break;
    case 548:    this.ingredients = [[],I,S,O,J,Z];    this.guides = GUIDES_SOJ;    break;
    case 550:    this.ingredients = [[],I,S,O,L,J];    this.guides = GUIDES_SOJ;    break;
    case 553:    this.ingredients = [[],I,S,O,T,I];    this.guides = GUIDES_STO;    break;
    case 554:    this.ingredients = [[],I,S,O,T,J];    this.guides = GUIDES_OTJ;    break;
    case 555:    this.ingredients = [[],I,S,O,T,L];    this.guides = GUIDES_STO;    break;
    case 556:    this.ingredients = [[],I,S,O,T,Z];    this.guides = GUIDES_STO;    break;
    case 558:    this.ingredients = [[],I,S,O,Z,J];    this.guides = GUIDES_SOJ;    break;
    case 559:    this.ingredients = [[],I,S,O,Z,L];    this.guides = GUIDES_SZL;    break;
    case 561:    this.ingredients = [[],I,S,T,I,J];    this.guides = GUIDES_TIJ;    break;
    case 562:    this.ingredients = [[],I,S,T,I,L];    this.guides = GUIDES_TIL;    break;
    case 563:    this.ingredients = [[],I,S,T,I,O];    this.guides = GUIDES_TIO;    break;
    case 564:    this.ingredients = [[],I,S,T,I,Z];    this.guides = GUIDES_TSZ;    break;
    case 565:    this.ingredients = [[],I,S,T,J,I];    this.guides = GUIDES_TJI;    break;
    case 566:    this.ingredients = [[],I,S,T,J,L];    this.guides = GUIDES_TJL;    break;
    case 567:    this.ingredients = [[],I,S,T,J,O];    this.guides = GUIDES_TSJ;    break;
    case 568:    this.ingredients = [[],I,S,T,J,Z];    this.guides = GUIDES_TSZ;    break;
    case 569:    this.ingredients = [[],I,S,T,L,I];    this.guides = GUIDES_TLI;    break;
    case 570:    this.ingredients = [[],I,S,T,L,J];    this.guides = GUIDES_TLJ;    break;
    case 571:    this.ingredients = [[],I,S,T,L,O];    this.guides = GUIDES_TLO;    break;
    case 572:    this.ingredients = [[],I,S,T,L,Z];    this.guides = GUIDES_TSZ;    break;
    case 573:    this.ingredients = [[],I,S,T,O,I];    this.guides = GUIDES_TOI;    break;
    case 574:    this.ingredients = [[],I,S,T,O,J];    this.guides = GUIDES_TSJ;    break;
    case 575:    this.ingredients = [[],I,S,T,O,L];    this.guides = GUIDES_STO;    break;
    case 576:    this.ingredients = [[],I,S,T,O,Z];    this.guides = GUIDES_TSZ;    break;
    case 577:    this.ingredients = [[],I,S,T,Z,I];    this.guides = GUIDES_TZS;    break;
    case 578:    this.ingredients = [[],I,S,T,Z,J];    this.guides = GUIDES_TZS;    break;
    case 579:    this.ingredients = [[],I,S,T,Z,L];    this.guides = GUIDES_TZS;    break;
    case 580:    this.ingredients = [[],I,S,T,Z,O];    this.guides = GUIDES_TZS;    break;
    case 581:    this.ingredients = [[],I,S,Z,I,J];    this.guides = GUIDES_SIJ;    break;
    case 582:    this.ingredients = [[],I,S,Z,I,L];    this.guides = GUIDES_ZIL;    break;
    case 585:    this.ingredients = [[],I,S,Z,J,I];    this.guides = GUIDES_SJI;    break;
    case 586:    this.ingredients = [[],I,S,Z,J,L];    this.guides = GUIDES_ZSJ;    break;
    case 587:    this.ingredients = [[],I,S,Z,J,O];    this.guides = GUIDES_ZSJ;    break;
    case 588:    this.ingredients = [[],I,S,Z,J,T];    this.guides = GUIDES_ZSJ;    break;
    case 589:    this.ingredients = [[],I,S,Z,L,I];    this.guides = GUIDES_ZLI;    break;
    case 590:    this.ingredients = [[],I,S,Z,L,J];    this.guides = GUIDES_ZSJ;    break;
    case 591:    this.ingredients = [[],I,S,Z,L,O];    this.guides = GUIDES_SZL;    break;
    case 592:    this.ingredients = [[],I,S,Z,L,T];    this.guides = GUIDES_SZL;    break;
    case 594:    this.ingredients = [[],I,S,Z,O,J];    this.guides = GUIDES_ZSJ;    break;
    case 595:    this.ingredients = [[],I,S,Z,O,L];    this.guides = GUIDES_SZL;    break;
    case 597:    this.ingredients = [[],I,S,Z,T,I];    this.guides = GUIDES_STI;    break;
    case 598:    this.ingredients = [[],I,S,Z,T,J];    this.guides = GUIDES_ZSJ;    break;
    case 599:    this.ingredients = [[],I,S,Z,T,L];    this.guides = GUIDES_SZL;    break;
    case 600:    this.ingredients = [[],I,S,Z,T,O];    this.guides = GUIDES_STO;    break;
    case 601:    this.ingredients = [[],I,T,I,J,L];    this.guides = GUIDES_IJT;    break;
    case 602:    this.ingredients = [[],I,T,I,J,O];    this.guides = GUIDES_IJT;    break;
    case 603:    this.ingredients = [[],I,T,I,J,S];    this.guides = GUIDES_IJT;    break;
    case 604:    this.ingredients = [[],I,T,I,J,Z];    this.guides = GUIDES_IJT;    break;
    case 605:    this.ingredients = [[],I,T,I,L,J];    this.guides = GUIDES_ITJ;    break;
    case 606:    this.ingredients = [[],I,T,I,L,O];    this.guides = GUIDES_TLI;    break;
    case 607:    this.ingredients = [[],I,T,I,L,S];    this.guides = GUIDES_TLI;    break;
    case 608:    this.ingredients = [[],I,T,I,L,Z];    this.guides = GUIDES_TLI;    break;
    case 609:    this.ingredients = [[],I,T,I,O,J];    this.guides = GUIDES_ITJ;    break;
    case 610:    this.ingredients = [[],I,T,I,O,L];    this.guides = GUIDES_TIL;    break;
    case 611:    this.ingredients = [[],I,T,I,O,S];    this.guides = GUIDES_ITO;    break;
    case 612:    this.ingredients = [[],I,T,I,O,Z];    this.guides = GUIDES_ITO;    break;
    case 613:    this.ingredients = [[],I,T,I,S,J];    this.guides = GUIDES_ITJ;    break;
    case 614:    this.ingredients = [[],I,T,I,S,L];    this.guides = GUIDES_TIL;    break;
    case 615:    this.ingredients = [[],I,T,I,S,O];    this.guides = GUIDES_ITO;    break;
    case 616:    this.ingredients = [[],I,T,I,S,Z];    this.guides = GUIDES_TSZ;    break;
    case 617:    this.ingredients = [[],I,T,I,Z,J];    this.guides = GUIDES_ITJ;    break;
    case 618:    this.ingredients = [[],I,T,I,Z,L];    this.guides = GUIDES_IZL;    break;
    case 619:    this.ingredients = [[],I,T,I,Z,O];    this.guides = GUIDES_ITO;    break;
    case 620:    this.ingredients = [[],I,T,I,Z,S];    this.guides = GUIDES_TZS;    break;
    case 621:    this.ingredients = [[],I,T,J,I,L];    this.guides = GUIDES_TIJ;    break;
    case 622:    this.ingredients = [[],I,T,J,I,O];    this.guides = GUIDES_TIJ;    break;
    case 623:    this.ingredients = [[],I,T,J,I,S];    this.guides = GUIDES_TIJ;    break;
    case 624:    this.ingredients = [[],I,T,J,I,Z];    this.guides = GUIDES_TIJ;    break;
    case 625:    this.ingredients = [[],I,T,J,L,I];    this.guides = GUIDES_TJI;    break;
    case 626:    this.ingredients = [[],I,T,J,L,O];    this.guides = GUIDES_TJL;    break;
    case 627:    this.ingredients = [[],I,T,J,L,S];    this.guides = GUIDES_TJL;    break;
    case 628:    this.ingredients = [[],I,T,J,L,Z];    this.guides = GUIDES_TJL;    break;
    case 629:    this.ingredients = [[],I,T,J,O,I];    this.guides = GUIDES_TJI;    break;
    case 630:    this.ingredients = [[],I,T,J,O,L];    this.guides = GUIDES_TJL;    break;
    case 631:    this.ingredients = [[],I,T,J,O,S];    this.guides = GUIDES_TJS;    break;
    case 632:    this.ingredients = [[],I,T,J,O,Z];    this.guides = GUIDES_TOJ;    break;
    case 633:    this.ingredients = [[],I,T,J,S,I];    this.guides = GUIDES_TJI;    break;
    case 634:    this.ingredients = [[],I,T,J,S,L];    this.guides = GUIDES_TJL;    break;
    case 635:    this.ingredients = [[],I,T,J,S,O];    this.guides = GUIDES_JST;    break;
    case 636:    this.ingredients = [[],I,T,J,S,Z];    this.guides = GUIDES_TSZ;    break;
    case 637:    this.ingredients = [[],I,T,J,Z,I];    this.guides = GUIDES_TJI;    break;
    case 638:    this.ingredients = [[],I,T,J,Z,L];    this.guides = GUIDES_TJL;    break;
    case 639:    this.ingredients = [[],I,T,J,Z,O];    this.guides = GUIDES_TJO;    break;
    case 640:    this.ingredients = [[],I,T,J,Z,S];    this.guides = GUIDES_TZS;    break;
    case 641:    this.ingredients = [[],I,T,L,I,J];    this.guides = GUIDES_TIJ;    break;
    case 642:    this.ingredients = [[],I,T,L,I,O];    this.guides = GUIDES_LTI;    break;
    case 643:    this.ingredients = [[],I,T,L,I,S];    this.guides = GUIDES_LTI;    break;
    case 644:    this.ingredients = [[],I,T,L,I,Z];    this.guides = GUIDES_LTI;    break;
    case 645:    this.ingredients = [[],I,T,L,J,I];    this.guides = GUIDES_TJI;    break;
    case 646:    this.ingredients = [[],I,T,L,J,O];    this.guides = GUIDES_TJL;    break;
    case 647:    this.ingredients = [[],I,T,L,J,S];    this.guides = GUIDES_TJL;    break;
    case 648:    this.ingredients = [[],I,T,L,J,Z];    this.guides = GUIDES_TJL;    break;
    case 649:    this.ingredients = [[],I,T,L,O,I];    this.guides = GUIDES_LTI;    break;
    case 650:    this.ingredients = [[],I,T,L,O,J];    this.guides = GUIDES_TLJ;    break;
    case 651:    this.ingredients = [[],I,T,L,O,S];    this.guides = GUIDES_TLO;    break;
    case 652:    this.ingredients = [[],I,T,L,O,Z];    this.guides = GUIDES_TLO;    break;
    case 653:    this.ingredients = [[],I,T,L,S,I];    this.guides = GUIDES_LTI;    break;
    case 654:    this.ingredients = [[],I,T,L,S,J];    this.guides = GUIDES_TLJ;    break;
    case 655:    this.ingredients = [[],I,T,L,S,O];    this.guides = GUIDES_TLO;    break;
    case 656:    this.ingredients = [[],I,T,L,S,Z];    this.guides = GUIDES_TSZ;    break;
    case 657:    this.ingredients = [[],I,T,L,Z,I];    this.guides = GUIDES_LTI;    break;
    case 658:    this.ingredients = [[],I,T,L,Z,J];    this.guides = GUIDES_TLJ;    break;
    case 659:    this.ingredients = [[],I,T,L,Z,O];    this.guides = GUIDES_TLO;    break;
    case 660:    this.ingredients = [[],I,T,L,Z,S];    this.guides = GUIDES_TZS;    break;
    case 661:    this.ingredients = [[],I,T,O,I,J];    this.guides = GUIDES_TIJ;    break;
    case 662:    this.ingredients = [[],I,T,O,I,L];    this.guides = GUIDES_TIL;    break;
    case 663:    this.ingredients = [[],I,T,O,I,S];    this.guides = GUIDES_TIO;    break;
    case 664:    this.ingredients = [[],I,T,O,I,Z];    this.guides = GUIDES_TIO;    break;
    case 665:    this.ingredients = [[],I,T,O,J,I];    this.guides = GUIDES_TJI;    break;
    case 666:    this.ingredients = [[],I,T,O,J,L];    this.guides = GUIDES_TJL;    break;
    case 667:    this.ingredients = [[],I,T,O,J,S];    this.guides = GUIDES_OJT;    break;
    case 668:    this.ingredients = [[],I,T,O,J,Z];    this.guides = GUIDES_OJT;    break;
    case 669:    this.ingredients = [[],I,T,O,L,I];    this.guides = GUIDES_TLI;    break;
    case 670:    this.ingredients = [[],I,T,O,L,J];    this.guides = GUIDES_TLJ;    break;
    case 671:    this.ingredients = [[],I,T,O,L,S];    this.guides = GUIDES_TLO;    break;
    case 672:    this.ingredients = [[],I,T,O,L,Z];    this.guides = GUIDES_TLO;    break;
    case 673:    this.ingredients = [[],I,T,O,S,I];    this.guides = GUIDES_TOI;    break;
    case 674:    this.ingredients = [[],I,T,O,S,J];    this.guides = GUIDES_TSJ;    break;
    case 675:    this.ingredients = [[],I,T,O,S,L];    this.guides = GUIDES_TSO;    break;
    case 676:    this.ingredients = [[],I,T,O,S,Z];    this.guides = GUIDES_TSZ;    break;
    case 677:    this.ingredients = [[],I,T,O,Z,I];    this.guides = GUIDES_TOI;    break;
    case 678:    this.ingredients = [[],I,T,O,Z,J];    this.guides = GUIDES_TOJ;    break;
    case 680:    this.ingredients = [[],I,T,O,Z,S];    this.guides = GUIDES_TZS;    break;
    case 681:    this.ingredients = [[],I,T,S,I,J];    this.guides = GUIDES_TIJ;    break;
    case 682:    this.ingredients = [[],I,T,S,I,L];    this.guides = GUIDES_TIL;    break;
    case 683:    this.ingredients = [[],I,T,S,I,O];    this.guides = GUIDES_TIO;    break;
    case 684:    this.ingredients = [[],I,T,S,I,Z];    this.guides = GUIDES_TSZ;    break;
    case 685:    this.ingredients = [[],I,T,S,J,I];    this.guides = GUIDES_TJI;    break;
    case 686:    this.ingredients = [[],I,T,S,J,L];    this.guides = GUIDES_TJL;    break;
    case 687:    this.ingredients = [[],I,T,S,J,O];    this.guides = GUIDES_TSJ;    break;
    case 688:    this.ingredients = [[],I,T,S,J,Z];    this.guides = GUIDES_TSZ;    break;
    case 689:    this.ingredients = [[],I,T,S,L,I];    this.guides = GUIDES_TLI;    break;
    case 690:    this.ingredients = [[],I,T,S,L,J];    this.guides = GUIDES_TLJ;    break;
    case 691:    this.ingredients = [[],I,T,S,L,O];    this.guides = GUIDES_TLO;    break;
    case 692:    this.ingredients = [[],I,T,S,L,Z];    this.guides = GUIDES_TSZ;    break;
    case 693:    this.ingredients = [[],I,T,S,O,I];    this.guides = GUIDES_TOI;    break;
    case 694:    this.ingredients = [[],I,T,S,O,J];    this.guides = GUIDES_TSJ;    break;
    case 695:    this.ingredients = [[],I,T,S,O,L];    this.guides = GUIDES_STO;    break;
    case 696:    this.ingredients = [[],I,T,S,O,Z];    this.guides = GUIDES_TSZ;    break;
    case 697:    this.ingredients = [[],I,T,S,Z,I];    this.guides = GUIDES_TZS;    break;
    case 698:    this.ingredients = [[],I,T,S,Z,J];    this.guides = GUIDES_TZS;    break;
    case 699:    this.ingredients = [[],I,T,S,Z,L];    this.guides = GUIDES_TZS;    break;
    case 700:    this.ingredients = [[],I,T,S,Z,O];    this.guides = GUIDES_TZS;    break;
    case 701:    this.ingredients = [[],I,T,Z,I,J];    this.guides = GUIDES_TIJ;    break;
    case 702:    this.ingredients = [[],I,T,Z,I,L];    this.guides = GUIDES_ZIL;    break;
    case 703:    this.ingredients = [[],I,T,Z,I,O];    this.guides = GUIDES_TIO;    break;
    case 704:    this.ingredients = [[],I,T,Z,I,S];    this.guides = GUIDES_TZS;    break;
    case 705:    this.ingredients = [[],I,T,Z,J,I];    this.guides = GUIDES_TJI;    break;
    case 706:    this.ingredients = [[],I,T,Z,J,L];    this.guides = GUIDES_TJL;    break;
    case 707:    this.ingredients = [[],I,T,Z,J,O];    this.guides = GUIDES_TJO;    break;
    case 708:    this.ingredients = [[],I,T,Z,J,S];    this.guides = GUIDES_TZS;    break;
    case 709:    this.ingredients = [[],I,T,Z,L,I];    this.guides = GUIDES_ZLI;    break;
    case 710:    this.ingredients = [[],I,T,Z,L,J];    this.guides = GUIDES_TLJ;    break;
    case 711:    this.ingredients = [[],I,T,Z,L,O];    this.guides = GUIDES_TLO;    break;
    case 712:    this.ingredients = [[],I,T,Z,L,S];    this.guides = GUIDES_TZS;    break;
    case 713:    this.ingredients = [[],I,T,Z,O,I];    this.guides = GUIDES_TOI;    break;
    case 714:    this.ingredients = [[],I,T,Z,O,J];    this.guides = GUIDES_TOJ;    break;
    case 716:    this.ingredients = [[],I,T,Z,O,S];    this.guides = GUIDES_TZS;    break;
    case 717:    this.ingredients = [[],I,T,Z,S,I];    this.guides = GUIDES_TZS;    break;
    case 718:    this.ingredients = [[],I,T,Z,S,J];    this.guides = GUIDES_TZS;    break;
    case 719:    this.ingredients = [[],I,T,Z,S,L];    this.guides = GUIDES_TZS;    break;
    case 720:    this.ingredients = [[],I,T,Z,S,O];    this.guides = GUIDES_TZS;    break;
    case 721:    this.ingredients = [[],I,Z,I,J,L];    this.guides = GUIDES_IZL;    break;
    case 723:    this.ingredients = [[],I,Z,I,J,S];    this.guides = GUIDES_ZJS;    break;
    case 724:    this.ingredients = [[],I,Z,I,J,T];    this.guides = GUIDES_IJT;    break;
    case 725:    this.ingredients = [[],I,Z,I,L,J];    this.guides = GUIDES_IZL;    break;
    case 726:    this.ingredients = [[],I,Z,I,L,O];    this.guides = GUIDES_IZL;    break;
    case 727:    this.ingredients = [[],I,Z,I,L,S];    this.guides = GUIDES_IZL;    break;
    case 728:    this.ingredients = [[],I,Z,I,L,T];    this.guides = GUIDES_IZL;    break;
    case 729:    this.ingredients = [[],I,Z,I,O,J];    this.guides = GUIDES_IOJ;    break;
    case 730:    this.ingredients = [[],I,Z,I,O,L];    this.guides = GUIDES_IZL;    break;
    case 733:    this.ingredients = [[],I,Z,I,S,J];    this.guides = GUIDES_ISJ;    break;
    case 734:    this.ingredients = [[],I,Z,I,S,L];    this.guides = GUIDES_IZL;    break;
    case 737:    this.ingredients = [[],I,Z,I,T,J];    this.guides = GUIDES_ITJ;    break;
    case 738:    this.ingredients = [[],I,Z,I,T,L];    this.guides = GUIDES_IZL;    break;
    case 739:    this.ingredients = [[],I,Z,I,T,O];    this.guides = GUIDES_ITO;    break;
    case 740:    this.ingredients = [[],I,Z,I,T,S];    this.guides = GUIDES_ITS;    break;
    case 741:    this.ingredients = [[],I,Z,J,I,L];    this.guides = GUIDES_ZIL;    break;
    case 743:    this.ingredients = [[],I,Z,J,I,S];    this.guides = GUIDES_ZJS;    break;
    case 744:    this.ingredients = [[],I,Z,J,I,T];    this.guides = GUIDES_JIT;    break;
    case 745:    this.ingredients = [[],I,Z,J,L,I];    this.guides = GUIDES_ZLI;    break;
    case 747:    this.ingredients = [[],I,Z,J,L,S];    this.guides = GUIDES_ZJS;    break;
    case 748:    this.ingredients = [[],I,Z,J,L,T];    this.guides = GUIDES_JZT;    break;
    case 751:    this.ingredients = [[],I,Z,J,O,S];    this.guides = GUIDES_ZJS;    break;
    case 752:    this.ingredients = [[],I,Z,J,O,T];    this.guides = GUIDES_JZT;    break;
    case 753:    this.ingredients = [[],I,Z,J,S,I];    this.guides = GUIDES_ZSJ;    break;
    case 754:    this.ingredients = [[],I,Z,J,S,L];    this.guides = GUIDES_ZSJ;    break;
    case 755:    this.ingredients = [[],I,Z,J,S,O];    this.guides = GUIDES_ZSJ;    break;
    case 756:    this.ingredients = [[],I,Z,J,S,T];    this.guides = GUIDES_ZSJ;    break;
    case 757:    this.ingredients = [[],I,Z,J,T,I];    this.guides = GUIDES_JTI;    break;
    case 758:    this.ingredients = [[],I,Z,J,T,L];    this.guides = GUIDES_JZT;    break;
    case 759:    this.ingredients = [[],I,Z,J,T,O];    this.guides = GUIDES_JTO;    break;
    case 760:    this.ingredients = [[],I,Z,J,T,S];    this.guides = GUIDES_ZJS;    break;
    case 761:    this.ingredients = [[],I,Z,L,I,J];    this.guides = GUIDES_ZIL;    break;
    case 762:    this.ingredients = [[],I,Z,L,I,O];    this.guides = GUIDES_ZIL;    break;
    case 763:    this.ingredients = [[],I,Z,L,I,S];    this.guides = GUIDES_ZIL;    break;
    case 764:    this.ingredients = [[],I,Z,L,I,T];    this.guides = GUIDES_ZIL;    break;
    case 765:    this.ingredients = [[],I,Z,L,J,I];    this.guides = GUIDES_ZLI;    break;
    case 767:    this.ingredients = [[],I,Z,L,J,S];    this.guides = GUIDES_ZJS;    break;
    case 768:    this.ingredients = [[],I,Z,L,J,T];    this.guides = GUIDES_LZT;    break;
    case 769:    this.ingredients = [[],I,Z,L,O,I];    this.guides = GUIDES_ZLI;    break;
    case 771:    this.ingredients = [[],I,Z,L,O,S];    this.guides = GUIDES_LOS;    break;
    case 772:    this.ingredients = [[],I,Z,L,O,T];    this.guides = GUIDES_LOT;    break;
    case 773:    this.ingredients = [[],I,Z,L,S,I];    this.guides = GUIDES_ZLI;    break;
    case 774:    this.ingredients = [[],I,Z,L,S,J];    this.guides = GUIDES_ZSJ;    break;
    case 775:    this.ingredients = [[],I,Z,L,S,O];    this.guides = GUIDES_ZSL;    break;
    case 776:    this.ingredients = [[],I,Z,L,S,T];    this.guides = GUIDES_ZSL;    break;
    case 777:    this.ingredients = [[],I,Z,L,T,I];    this.guides = GUIDES_ZLI;    break;
    case 778:    this.ingredients = [[],I,Z,L,T,J];    this.guides = GUIDES_LZT;    break;
    case 779:    this.ingredients = [[],I,Z,L,T,O];    this.guides = GUIDES_LTO;    break;
    case 780:    this.ingredients = [[],I,Z,L,T,S];    this.guides = GUIDES_LZT;    break;
    case 781:    this.ingredients = [[],I,Z,O,I,J];    this.guides = GUIDES_OIJ;    break;
    case 782:    this.ingredients = [[],I,Z,O,I,L];    this.guides = GUIDES_ZIL;    break;
    case 785:    this.ingredients = [[],I,Z,O,J,I];    this.guides = GUIDES_OJI;    break;
    case 787:    this.ingredients = [[],I,Z,O,J,S];    this.guides = GUIDES_ZJS;    break;
    case 788:    this.ingredients = [[],I,Z,O,J,T];    this.guides = GUIDES_OJT;    break;
    case 789:    this.ingredients = [[],I,Z,O,L,I];    this.guides = GUIDES_ZLI;    break;
    case 794:    this.ingredients = [[],I,Z,O,S,J];    this.guides = GUIDES_ZSJ;    break;
    case 795:    this.ingredients = [[],I,Z,O,S,L];    this.guides = GUIDES_ZSL;    break;
    case 798:    this.ingredients = [[],I,Z,O,T,J];    this.guides = GUIDES_OTJ;    break;
    case 801:    this.ingredients = [[],I,Z,S,I,J];    this.guides = GUIDES_SIJ;    break;
    case 802:    this.ingredients = [[],I,Z,S,I,L];    this.guides = GUIDES_ZIL;    break;
    case 805:    this.ingredients = [[],I,Z,S,J,I];    this.guides = GUIDES_SJI;    break;
    case 806:    this.ingredients = [[],I,Z,S,J,L];    this.guides = GUIDES_ZSJ;    break;
    case 807:    this.ingredients = [[],I,Z,S,J,O];    this.guides = GUIDES_ZSJ;    break;
    case 808:    this.ingredients = [[],I,Z,S,J,T];    this.guides = GUIDES_ZSJ;    break;
    case 809:    this.ingredients = [[],I,Z,S,L,I];    this.guides = GUIDES_ZLI;    break;
    case 810:    this.ingredients = [[],I,Z,S,L,J];    this.guides = GUIDES_ZSJ;    break;
    case 811:    this.ingredients = [[],I,Z,S,L,O];    this.guides = GUIDES_SZL;    break;
    case 812:    this.ingredients = [[],I,Z,S,L,T];    this.guides = GUIDES_SZL;    break;
    case 814:    this.ingredients = [[],I,Z,S,O,J];    this.guides = GUIDES_ZSJ;    break;
    case 815:    this.ingredients = [[],I,Z,S,O,L];    this.guides = GUIDES_SZL;    break;
    case 817:    this.ingredients = [[],I,Z,S,T,I];    this.guides = GUIDES_STI;    break;
    case 818:    this.ingredients = [[],I,Z,S,T,J];    this.guides = GUIDES_ZSJ;    break;
    case 819:    this.ingredients = [[],I,Z,S,T,L];    this.guides = GUIDES_SZL;    break;
    case 820:    this.ingredients = [[],I,Z,S,T,O];    this.guides = GUIDES_STO;    break;
    case 821:    this.ingredients = [[],I,Z,T,I,J];    this.guides = GUIDES_TIJ;    break;
    case 822:    this.ingredients = [[],I,Z,T,I,L];    this.guides = GUIDES_ZIL;    break;
    case 823:    this.ingredients = [[],I,Z,T,I,O];    this.guides = GUIDES_TIO;    break;
    case 824:    this.ingredients = [[],I,Z,T,I,S];    this.guides = GUIDES_TZS;    break;
    case 825:    this.ingredients = [[],I,Z,T,J,I];    this.guides = GUIDES_TJI;    break;
    case 826:    this.ingredients = [[],I,Z,T,J,L];    this.guides = GUIDES_TJL;    break;
    case 827:    this.ingredients = [[],I,Z,T,J,O];    this.guides = GUIDES_TJO;    break;
    case 828:    this.ingredients = [[],I,Z,T,J,S];    this.guides = GUIDES_TZS;    break;
    case 829:    this.ingredients = [[],I,Z,T,L,I];    this.guides = GUIDES_ZLI;    break;
    case 830:    this.ingredients = [[],I,Z,T,L,J];    this.guides = GUIDES_TLJ;    break;
    case 831:    this.ingredients = [[],I,Z,T,L,O];    this.guides = GUIDES_TLO;    break;
    case 832:    this.ingredients = [[],I,Z,T,L,S];    this.guides = GUIDES_TZS;    break;
    case 833:    this.ingredients = [[],I,Z,T,O,I];    this.guides = GUIDES_TOI;    break;
    case 834:    this.ingredients = [[],I,Z,T,O,J];    this.guides = GUIDES_TOJ;    break;
    case 836:    this.ingredients = [[],I,Z,T,O,S];    this.guides = GUIDES_TZS;    break;
    case 837:    this.ingredients = [[],I,Z,T,S,I];    this.guides = GUIDES_TZS;    break;
    case 838:    this.ingredients = [[],I,Z,T,S,J];    this.guides = GUIDES_TZS;    break;
    case 839:    this.ingredients = [[],I,Z,T,S,L];    this.guides = GUIDES_TZS;    break;
    case 840:    this.ingredients = [[],I,Z,T,S,O];    this.guides = GUIDES_TZS;    break;

    default:
    // 初期マトリックス。デッドライン以上は含めない
    this.initialBlocks = [[0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,0]];
    this.ingredients = [[],I];  // 使用可能ミノ 先頭要素は初期ホールドミノ
    this.caption = 'テトリス　その１';
    this.hint = '最初は　TETRiS (４列消し)を\nひたすら決めるだけ。まずは\nここで　ウォーミングアップ！';
    this.guides = [];    // ガイド 作成する際は設置ミノのダンプ情報を利用（ttt.jsにてconsole.logに設置ミノをダンプしている）
    this.useGuide = true;  // ガイド使用(Rを押さなくてもガイドを利用するときtrue)
    this.req = [];       // ノルマ( REQuired features )
    this.req.push(0);    //   [0]: Single
    this.req.push(0);    //   [1]: Double
    this.req.push(0);    //   [2]: Triple
    this.req.push(1);    //   [3]: Tetris
    this.req.push(0);    //   [4]: T-Spin Mini ( 0 列)
    this.req.push(0);    //   [5]: T-Spin ( 0 列)
    this.req.push(0);    //   [6]: Mini T-Spin Single
    this.req.push(0);    //   [7]: T-Spin Single
    this.req.push(0);    //   [8]: T-Spin Double
    this.req.push(0);    //   [9]: T-Spin Triple
    this.req.push(0);    //   [10]: Perfect Clear
    this.req.push(0);    //   [11]: Back-to-Back
    this.req.push(0);    //   [12]: vREN (Combo)
    break;
  }

  return this;
}

function ProblemWithGuidance(id){
  this.id = id;
  this.initialBlocks = INITIAL_PC_BLOCKS;
  this.caption = 'No.'+ id;
  this.hint = '基本パターン　[ガイドあり] \nPerfect Clear を発動してください。';
  this.useGuide = true;
  this.req = [0,0,0,0,0,0,0,0,0,0,1,0,0];

  switch(id){
    /* I 縦置き （ガイドあり）*/
    case  1:    this.ingredients = [[],I,I,J,T];        this.guides = GUIDES_IJT;   break;
    case  2:    this.ingredients = [[],I,I,O,J];        this.guides = GUIDES_IOJ;   break;
    case  3:    this.ingredients = [[],I,I,S,J];        this.guides = GUIDES_ISJ;   break;
    case  4:    this.ingredients = [[],I,I,Z,L];        this.guides = GUIDES_IZL;   break;
    case  5:    this.ingredients = [[],I,J,Z,S];        this.guides = GUIDES_JZS;   break;
    case  6:    this.ingredients = [[],I,L,T,I];        this.guides = GUIDES_LTI;   break;
    case  7:    this.ingredients = [[],I,I,T,O];        this.guides = GUIDES_ITO;   break;
    case  8:    this.ingredients = [[],I,I,T,S];        this.guides = GUIDES_ITS;   break;
    case  9:    this.ingredients = [[],I,T,J,L];        this.guides = GUIDES_TJL;   break;
    case 10:    this.ingredients = [[],I,T,Z,S];        this.guides = GUIDES_TZS;   break;
    case 11:    this.ingredients = [[],I,Z,J,S];        this.guides = GUIDES_ZJS;   break;
    case 12:    this.ingredients = [[],I,J,S,T];        this.guides = GUIDES_JST;   break;
    case 13:    this.ingredients = [[],I,O,J,T];        this.guides = GUIDES_OJT;   break;
    case 14:    this.ingredients = [[],I,T,J,S];        this.guides = GUIDES_TJS;   break;

    /* 初手 I ミノ１段目（ガイドあり） */
    case 15:    this.ingredients = [[],I,T,O,J];        this.guides = GUIDES_TOJ;   break;
    case 16:    this.ingredients = [[],I,T,L,O];        this.guides = GUIDES_TLO;   break;
    case 17:    this.ingredients = [[],I,S,T,O];        this.guides = GUIDES_STO;   break;
    case 18:    this.ingredients = [[],I,S,Z,L];        this.guides = GUIDES_SZL;   break;
    case 19:    this.ingredients = [[],I,S,O,J];        this.guides = GUIDES_SOJ;   break;
    case 20:    this.ingredients = [[],I,T,S,I];        this.guides = GUIDES_TSI;   break;

    /* 全部寝かせ（ガイドあり） */
    case 21:    this.ingredients = [[],I,L,Z,T];        this.guides = GUIDES_LZT;   break;
    case 22:    this.ingredients = [[],I,L,S,T];        this.guides = GUIDES_LST;   break;
    case 23:    this.ingredients = [[],I,J,Z,T];        this.guides = GUIDES_JZT;   break;
    case 24:    this.ingredients = [[],I,J,S,T];        this.guides = GUIDES_JST2;   break;

    /* I I L O（ガイドあり） */
    case 25:    this.ingredients = [[],I,I,L,O];        this.guides = GUIDES_ILO;   break;
    case 26:    this.ingredients = [[],I,L,I,O];        this.guides = GUIDES_LIO;   break;

    /* 初手 I ミノ3段目（ガイドあり） */
    case 27:    this.ingredients = [[],I,L,O,S];        this.guides = GUIDES_LOS;   break;
    case 28:    this.ingredients = [[],I,L,I,Z];        this.guides = GUIDES_LIZ;   break;
    case 29:    this.ingredients = [[],I,O,J,S];        this.guides = GUIDES_OJS;   break;

    /* LSIO （ガイドあり）*/
    case 30:    this.ingredients = [[],L,S,I,O];        this.guides = GUIDES_LSIO;   break;

    default:
    // 初期マトリックス。デッドライン以上は含めない
    this.initialBlocks = [[0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,0]];
    this.ingredients = [[],I];  // 使用可能ミノ 先頭要素は初期ホールドミノ
    this.caption = 'テトリス　その１';
    this.hint = '最初は　TETRiS (４列消し)を\nひたすら決めるだけ。まずは\nここで　ウォーミングアップ！';
    this.guides = [];    // ガイド 作成する際は設置ミノのダンプ情報を利用（ttt.jsにてconsole.logに設置ミノをダンプしている）
    this.useGuide = true;  // ガイド使用(Rを押さなくてもガイドを利用するときtrue)
    this.req = [];       // ノルマ( REQuired features )
    this.req.push(0);    //   [0]: Single
    this.req.push(0);    //   [1]: Double
    this.req.push(0);    //   [2]: Triple
    this.req.push(1);    //   [3]: Tetris
    this.req.push(0);    //   [4]: T-Spin Mini ( 0 列)
    this.req.push(0);    //   [5]: T-Spin ( 0 列)
    this.req.push(0);    //   [6]: Mini T-Spin Single
    this.req.push(0);    //   [7]: T-Spin Single
    this.req.push(0);    //   [8]: T-Spin Double
    this.req.push(0);    //   [9]: T-Spin Triple
    this.req.push(0);    //   [10]: Perfect Clear
    this.req.push(0);    //   [11]: Back-to-Back
    this.req.push(0);    //   [12]: vREN (Combo)
    break;
  }

  return this;
}

function ProblemOtherwise(id){
  this.id = id;
  this.initialBlocks = INITIAL_PC_BLOCKS;
  this.caption = 'No.'+ id;
  this.hint = 'Perfect Clear を発動してください。';
  this.useGuide = true;
  this.req = [0,0,0,0,0,0,0,0,0,0,1,0,0];

  switch(id){
    case    1:    this.ingredients = [[],I,I,J,T];    this.guides = [G(I, 3, 2, 16),G(I, 3, 3, 16),G(J, 1, 4, 17),G(T, 2, 5, 17)];    break;
    case    2:    this.ingredients = [[],I,T,L,J];    this.guides = [G(I, 0, 3, 16),G(T, 1, 2, 17),G(L, 2, 5, 16),G(J, 0, 4, 18)];    break;
    case    3:    this.ingredients = [[],I,L,O,T];    this.guides = [G(I, 0, 3, 16),G(L, 0, 3, 18),G(O, 0, 2, 17),G(T, 2, 5, 17)];    break;
    case    4:    this.ingredients = [[],I,L,S,T];    this.guides = [G(I, 0, 3, 16),G(L, 1, 2, 17),G(S, 1, 3, 17),G(T, 2, 5, 17)];    break;
    case    5:    this.ingredients = [[],I,J,O,T];    this.guides = [G(I, 0, 3, 16),G(J, 2, 3, 17),G(O, 0, 2, 18),G(T, 2, 5, 17)];    break;
    case    6:    this.ingredients = [[],I,O,J,T];    this.guides = [G(I, 0, 3, 16),G(O, 0, 3, 18),G(J, 1, 2, 17),G(T, 2, 5, 17)];    break;
    case    7:    this.ingredients = [[],I,T,S,L];    this.guides = [G(I, 0, 3, 16),G(T, 2, 3, 17),G(S, 0, 5, 18),G(L, 2, 3, 17)];    break;
    case    8:    this.ingredients = [[],I,L,T,I];    this.guides = [G(I, 2, 3, 17),G(L, 1, 2, 17),G(T, 2, 4, 17),G(I, 0, 4, 18)];    break;
    case    9:    this.ingredients = [[],I,L,S,T];    this.guides = [G(I, 2, 3, 17),G(L, 1, 2, 17),G(S, 1, 3, 17),G(T, 2, 5, 17)];    break;
    case   10:    this.ingredients = [[],I,L,T,Z];    this.guides = [G(I, 2, 3, 17),G(L, 2, 3, 17),G(T, 2, 5, 16),G(Z, 2, 3, 17)];    break;
    case   11:    this.ingredients = [[],I,T,S,L];    this.guides = [G(I, 2, 3, 17),G(T, 0, 3, 18),G(S, 0, 5, 18),G(L, 2, 3, 17)];    break;
    case   12:    this.ingredients = [[],L,O,S,T];    this.guides = [G(L, 2, 3, 17),G(O, 0, 2, 17),G(S, 2, 4, 17),G(T, 2, 5, 17)];    break;
    case   13:    this.ingredients = [[],L,Z,S,T];    this.guides = [G(L, 1, 2, 17),G(Z, 2, 4, 17),G(S, 0, 5, 18),G(T, 2, 3, 17)];    break;
    case   14:    this.ingredients = [[],L,T,Z,S];    this.guides = [G(L, 1, 2, 17),G(T, 0, 4, 16),G(Z, 2, 3, 16),G(S, 2, 5, 17)];    break;
    case   15:    this.ingredients = [[],J,T,L,S];    this.guides = [G(J, 1, 2, 17),G(T, 1, 4, 16),G(L, 3, 3, 17),G(S, 2, 5, 17)];    break;
    case   16:    this.ingredients = [[],J,S,O,T];    this.guides = [G(J, 0, 3, 18),G(S, 0, 4, 17),G(O, 0, 2, 17),G(T, 2, 5, 17)];    break;
    case   17:    this.ingredients = [[],O,T,L,S];    this.guides = [G(O, 0, 2, 18),G(T, 2, 4, 16),G(L, 2, 3, 16),G(S, 2, 5, 17)];    break;
    case   18:    this.ingredients = [[],Z,J,S,T];    this.guides = [G(Z, 0, 4, 18),G(J, 1, 2, 17),G(S, 0, 5, 17),G(T, 2, 3, 17)];    break;
    case   19:    this.ingredients = [[],Z,T,L,O];    this.guides = [G(Z, 0, 4, 18),G(T, 2, 5, 15),G(L, 2, 3, 16),G(O, 0, 2, 18)];    break;
    case   20:    this.ingredients = [[],T,S,O,L];    this.guides = [G(T, 0, 4, 18),G(S, 0, 5, 16),G(O, 0, 2, 17),G(L, 2, 3, 17)];    break;
    case   21:    this.ingredients = [[],T,S,Z,L];    this.guides = [G(T, 0, 4, 18),G(S, 0, 5, 16),G(Z, 3, 3, 17),G(L, 2, 3, 17)];    break;
    case   22:    this.ingredients = [[],S,J,Z,T];    this.guides = [G(S, 0, 3, 18),G(J, 1, 2, 16),G(Z, 2, 4, 17),G(T, 2, 5, 17)];    break;
    case   23:    this.ingredients = [[],S,J,T,Z];    this.guides = [G(S, 0, 4, 17),G(J, 1, 2, 17),G(T, 2, 5, 17),G(Z, 2, 3, 17)];    break;
    case   24:    this.ingredients = [[],S,Z,J,T];    this.guides = [G(S, 0, 4, 17),G(Z, 3, 3, 16),G(J, 0, 3, 18),G(T, 2, 5, 17)];    break;
    case   25:    this.ingredients = [[],S,T,J,L];    this.guides = [G(S, 0, 3, 18),G(T, 1, 2, 16),G(J, 1, 5, 17),G(L, 3, 4, 17)];    break;
    case   26:    this.ingredients = [[],S,T,O,I];    this.guides = [G(S, 0, 3, 18),G(T, 1, 2, 16),G(O, 0, 4, 18),G(I, 0, 4, 18)];    break;
    case   27:    this.ingredients = [[],I,T,J,S];    this.guides = [G(I, 3, 2, 16),G(T, 2, 4, 16),G(J, 1, 3, 17),G(S, 2, 5, 17)];    break;

    default:
    // 初期マトリックス。デッドライン以上は含めない
    this.initialBlocks = [[0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,0]];
    this.ingredients = [[],I];  // 使用可能ミノ 先頭要素は初期ホールドミノ
    this.caption = 'テトリス　その１';
    this.hint = '最初は　TETRiS (４列消し)を\nひたすら決めるだけ。まずは\nここで　ウォーミングアップ！';
    this.guides = [];    // ガイド 作成する際は設置ミノのダンプ情報を利用（ttt.jsにてconsole.logに設置ミノをダンプしている）
    this.useGuide = true;  // ガイド使用(Rを押さなくてもガイドを利用するときtrue)
    this.req = [];       // ノルマ( REQuired features )
    this.req.push(0);    //   [0]: Single
    this.req.push(0);    //   [1]: Double
    this.req.push(0);    //   [2]: Triple
    this.req.push(1);    //   [3]: Tetris
    this.req.push(0);    //   [4]: T-Spin Mini ( 0 列)
    this.req.push(0);    //   [5]: T-Spin ( 0 列)
    this.req.push(0);    //   [6]: Mini T-Spin Single
    this.req.push(0);    //   [7]: T-Spin Single
    this.req.push(0);    //   [8]: T-Spin Double
    this.req.push(0);    //   [9]: T-Spin Triple
    this.req.push(0);    //   [10]: Perfect Clear
    this.req.push(0);    //   [11]: Back-to-Back
    this.req.push(0);    //   [12]: vREN (Combo)
    break;
  }

  return this;
}
function Problem840_Mirror(id){
  this.id = id;
  this.initialBlocks = INITIAL_PC_BLOCKS_MIRROR;
  this.caption = 'No.'+ id;
  this.hint = 'Perfect Clear を発動してください。';
  this.useGuide = false;
  this.req = [0,0,0,0,0,0,0,0,0,0,1,0,0];

  /* ここのcase文は 「テトリス_パフェテンプレ成功率.xlsx」の「テンプレ改_ミラー_計算用」シート DB列からコピーすること */
  switch(id){
    case   1:    this.ingredients = [[],I,I,J,L,O];    this.guides = GUIDES_MIRROR_IJO;    break;
    case   2:    this.ingredients = [[],I,I,J,L,S];    this.guides = GUIDES_MIRROR_JIS;    break;
    case   3:    this.ingredients = [[],I,I,J,L,T];    this.guides = GUIDES_MIRROR_ILT;    break;
    case   5:    this.ingredients = [[],I,I,J,O,L];    this.guides = GUIDES_MIRROR_IOL;    break;
    case   6:    this.ingredients = [[],I,I,J,O,S];    this.guides = GUIDES_MIRROR_IJO;    break;
    case   7:    this.ingredients = [[],I,I,J,O,T];    this.guides = GUIDES_MIRROR_JIT;    break;
    case   8:    this.ingredients = [[],I,I,J,O,Z];    this.guides = GUIDES_MIRROR_IJO;    break;
    case   9:    this.ingredients = [[],I,I,J,S,L];    this.guides = GUIDES_MIRROR_ISJ;    break;
    case  10:    this.ingredients = [[],I,I,J,S,O];    this.guides = GUIDES_MIRROR_ISJ;    break;
    case  11:    this.ingredients = [[],I,I,J,S,T];    this.guides = GUIDES_MIRROR_ISJ;    break;
    case  12:    this.ingredients = [[],I,I,J,S,Z];    this.guides = GUIDES_MIRROR_ISJ;    break;
    case  13:    this.ingredients = [[],I,I,J,T,L];    this.guides = GUIDES_MIRROR_ITL;    break;
    case  14:    this.ingredients = [[],I,I,J,T,O];    this.guides = GUIDES_MIRROR_JTI;    break;
    case  15:    this.ingredients = [[],I,I,J,T,S];    this.guides = GUIDES_MIRROR_JTI;    break;
    case  16:    this.ingredients = [[],I,I,J,T,Z];    this.guides = GUIDES_MIRROR_JTI;    break;
    case  17:    this.ingredients = [[],I,I,J,Z,L];    this.guides = GUIDES_MIRROR_IZL;    break;
    case  18:    this.ingredients = [[],I,I,J,Z,O];    this.guides = GUIDES_MIRROR_IJO;    break;
    case  19:    this.ingredients = [[],I,I,J,Z,S];    this.guides = GUIDES_MIRROR_JIS;    break;
    case  20:    this.ingredients = [[],I,I,J,Z,T];    this.guides = GUIDES_MIRROR_JIT;    break;
    case  21:    this.ingredients = [[],I,I,L,J,O];    this.guides = GUIDES_MIRROR_IJO;    break;
    case  23:    this.ingredients = [[],I,I,L,J,T];    this.guides = GUIDES_MIRROR_ILT;    break;
    case  25:    this.ingredients = [[],I,I,L,O,J];    this.guides = GUIDES_MIRROR_IOL;    break;
    case  26:    this.ingredients = [[],I,I,L,O,S];    this.guides = GUIDES_MIRROR_IOL;    break;
    case  27:    this.ingredients = [[],I,I,L,O,T];    this.guides = GUIDES_MIRROR_ILT;    break;
    case  28:    this.ingredients = [[],I,I,L,O,Z];    this.guides = GUIDES_MIRROR_IOL;    break;
    case  29:    this.ingredients = [[],I,I,L,S,J];    this.guides = GUIDES_MIRROR_ISJ;    break;
    case  31:    this.ingredients = [[],I,I,L,S,T];    this.guides = GUIDES_MIRROR_ILT;    break;
    case  32:    this.ingredients = [[],I,I,L,S,Z];    this.guides = GUIDES_MIRROR_LSZ;    break;
    case  33:    this.ingredients = [[],I,I,L,T,J];    this.guides = GUIDES_MIRROR_ILT;    break;
    case  34:    this.ingredients = [[],I,I,L,T,O];    this.guides = GUIDES_MIRROR_ILT;    break;
    case  35:    this.ingredients = [[],I,I,L,T,S];    this.guides = GUIDES_MIRROR_ILT;    break;
    case  36:    this.ingredients = [[],I,I,L,T,Z];    this.guides = GUIDES_MIRROR_ILT;    break;
    case  37:    this.ingredients = [[],I,I,L,Z,J];    this.guides = GUIDES_MIRROR_IZL;    break;
    case  38:    this.ingredients = [[],I,I,L,Z,O];    this.guides = GUIDES_MIRROR_IZL;    break;
    case  39:    this.ingredients = [[],I,I,L,Z,S];    this.guides = GUIDES_MIRROR_IZL;    break;
    case  40:    this.ingredients = [[],I,I,L,Z,T];    this.guides = GUIDES_MIRROR_ILT;    break;
    case  41:    this.ingredients = [[],I,I,O,J,L];    this.guides = GUIDES_MIRROR_IOL;    break;
    case  42:    this.ingredients = [[],I,I,O,J,S];    this.guides = GUIDES_MIRROR_IJO;    break;
    case  43:    this.ingredients = [[],I,I,O,J,T];    this.guides = GUIDES_MIRROR_IJO;    break;
    case  44:    this.ingredients = [[],I,I,O,J,Z];    this.guides = GUIDES_MIRROR_IJO;    break;
    case  45:    this.ingredients = [[],I,I,O,L,J];    this.guides = GUIDES_MIRROR_IOL;    break;
    case  46:    this.ingredients = [[],I,I,O,L,S];    this.guides = GUIDES_MIRROR_IOL;    break;
    case  47:    this.ingredients = [[],I,I,O,L,T];    this.guides = GUIDES_MIRROR_ILT;    break;
    case  48:    this.ingredients = [[],I,I,O,L,Z];    this.guides = GUIDES_MIRROR_IOL;    break;
    case  49:    this.ingredients = [[],I,I,O,S,J];    this.guides = GUIDES_MIRROR_ISJ;    break;
    case  50:    this.ingredients = [[],I,I,O,S,L];    this.guides = GUIDES_MIRROR_IOL;    break;
    case  53:    this.ingredients = [[],I,I,O,T,J];    this.guides = GUIDES_MIRROR_ITJ;    break;
    case  54:    this.ingredients = [[],I,I,O,T,L];    this.guides = GUIDES_MIRROR_ITL;    break;
    case  55:    this.ingredients = [[],I,I,O,T,S];    this.guides = GUIDES_MIRROR_ITO;    break;
    case  56:    this.ingredients = [[],I,I,O,T,Z];    this.guides = GUIDES_MIRROR_ITO;    break;
    case  57:    this.ingredients = [[],I,I,O,Z,J];    this.guides = GUIDES_MIRROR_IOJ;    break;
    case  58:    this.ingredients = [[],I,I,O,Z,L];    this.guides = GUIDES_MIRROR_IOL;    break;
    case  61:    this.ingredients = [[],I,I,S,J,L];    this.guides = GUIDES_MIRROR_ISJ;    break;
    case  62:    this.ingredients = [[],I,I,S,J,O];    this.guides = GUIDES_MIRROR_ISJ;    break;
    case  63:    this.ingredients = [[],I,I,S,J,T];    this.guides = GUIDES_MIRROR_ISJ;    break;
    case  64:    this.ingredients = [[],I,I,S,J,Z];    this.guides = GUIDES_MIRROR_ISJ;    break;
    case  65:    this.ingredients = [[],I,I,S,L,J];    this.guides = GUIDES_MIRROR_ISJ;    break;
    case  67:    this.ingredients = [[],I,I,S,L,T];    this.guides = GUIDES_MIRROR_ILT;    break;
    case  68:    this.ingredients = [[],I,I,S,L,Z];    this.guides = GUIDES_MIRROR_SLZ;    break;
    case  69:    this.ingredients = [[],I,I,S,O,J];    this.guides = GUIDES_MIRROR_ISJ;    break;
    case  70:    this.ingredients = [[],I,I,S,O,L];    this.guides = GUIDES_MIRROR_IOL;    break;
    case  73:    this.ingredients = [[],I,I,S,T,J];    this.guides = GUIDES_MIRROR_ISJ;    break;
    case  74:    this.ingredients = [[],I,I,S,T,L];    this.guides = GUIDES_MIRROR_ITL;    break;
    case  75:    this.ingredients = [[],I,I,S,T,O];    this.guides = GUIDES_MIRROR_ITO;    break;
    case  76:    this.ingredients = [[],I,I,S,T,Z];    this.guides = GUIDES_MIRROR_ITZ;    break;
    case  77:    this.ingredients = [[],I,I,S,Z,J];    this.guides = GUIDES_MIRROR_ISJ;    break;
    case  78:    this.ingredients = [[],I,I,S,Z,L];    this.guides = GUIDES_MIRROR_IZL;    break;
    case  81:    this.ingredients = [[],I,I,T,J,L];    this.guides = GUIDES_MIRROR_ITL;    break;
    case  82:    this.ingredients = [[],I,I,T,J,O];    this.guides = GUIDES_MIRROR_TJI;    break;
    case  83:    this.ingredients = [[],I,I,T,J,S];    this.guides = GUIDES_MIRROR_TJI;    break;
    case  84:    this.ingredients = [[],I,I,T,J,Z];    this.guides = GUIDES_MIRROR_TJI;    break;
    case  85:    this.ingredients = [[],I,I,T,L,J];    this.guides = GUIDES_MIRROR_ILT;    break;
    case  86:    this.ingredients = [[],I,I,T,L,O];    this.guides = GUIDES_MIRROR_ILT;    break;
    case  87:    this.ingredients = [[],I,I,T,L,S];    this.guides = GUIDES_MIRROR_ILT;    break;
    case  88:    this.ingredients = [[],I,I,T,L,Z];    this.guides = GUIDES_MIRROR_ILT;    break;
    case  89:    this.ingredients = [[],I,I,T,O,J];    this.guides = GUIDES_MIRROR_TIJ;    break;
    case  90:    this.ingredients = [[],I,I,T,O,L];    this.guides = GUIDES_MIRROR_ITL;    break;
    case  91:    this.ingredients = [[],I,I,T,O,S];    this.guides = GUIDES_MIRROR_ITO;    break;
    case  92:    this.ingredients = [[],I,I,T,O,Z];    this.guides = GUIDES_MIRROR_ITO;    break;
    case  93:    this.ingredients = [[],I,I,T,S,J];    this.guides = GUIDES_MIRROR_ISJ;    break;
    case  94:    this.ingredients = [[],I,I,T,S,L];    this.guides = GUIDES_MIRROR_ITL;    break;
    case  95:    this.ingredients = [[],I,I,T,S,O];    this.guides = GUIDES_MIRROR_ITO;    break;
    case  96:    this.ingredients = [[],I,I,T,S,Z];    this.guides = GUIDES_MIRROR_TSZ;    break;
    case  97:    this.ingredients = [[],I,I,T,Z,J];    this.guides = GUIDES_MIRROR_TIJ;    break;
    case  98:    this.ingredients = [[],I,I,T,Z,L];    this.guides = GUIDES_MIRROR_ITL;    break;
    case  99:    this.ingredients = [[],I,I,T,Z,O];    this.guides = GUIDES_MIRROR_ITO;    break;
    case 100:    this.ingredients = [[],I,I,T,Z,S];    this.guides = GUIDES_MIRROR_TZS;    break;
    case 101:    this.ingredients = [[],I,I,Z,J,L];    this.guides = GUIDES_MIRROR_IZL;    break;
    case 102:    this.ingredients = [[],I,I,Z,J,O];    this.guides = GUIDES_MIRROR_IJO;    break;
    case 105:    this.ingredients = [[],I,I,Z,L,J];    this.guides = GUIDES_MIRROR_IZL;    break;
    case 106:    this.ingredients = [[],I,I,Z,L,O];    this.guides = GUIDES_MIRROR_IZL;    break;
    case 107:    this.ingredients = [[],I,I,Z,L,S];    this.guides = GUIDES_MIRROR_IZL;    break;
    case 108:    this.ingredients = [[],I,I,Z,L,T];    this.guides = GUIDES_MIRROR_ILT;    break;
    case 109:    this.ingredients = [[],I,I,Z,O,J];    this.guides = GUIDES_MIRROR_IOJ;    break;
    case 110:    this.ingredients = [[],I,I,Z,O,L];    this.guides = GUIDES_MIRROR_IOL;    break;
    case 113:    this.ingredients = [[],I,I,Z,S,J];    this.guides = GUIDES_MIRROR_ISJ;    break;
    case 114:    this.ingredients = [[],I,I,Z,S,L];    this.guides = GUIDES_MIRROR_IZL;    break;
    case 117:    this.ingredients = [[],I,I,Z,T,J];    this.guides = GUIDES_MIRROR_ITJ;    break;
    case 118:    this.ingredients = [[],I,I,Z,T,L];    this.guides = GUIDES_MIRROR_ITL;    break;
    case 119:    this.ingredients = [[],I,I,Z,T,O];    this.guides = GUIDES_MIRROR_ITO;    break;
    case 120:    this.ingredients = [[],I,I,Z,T,S];    this.guides = GUIDES_MIRROR_ITZ;    break;
    case 121:    this.ingredients = [[],I,J,I,L,O];    this.guides = GUIDES_MIRROR_IJO;    break;
    case 122:    this.ingredients = [[],I,J,I,L,S];    this.guides = GUIDES_MIRROR_JIS;    break;
    case 123:    this.ingredients = [[],I,J,I,L,T];    this.guides = GUIDES_MIRROR_ILT;    break;
    case 125:    this.ingredients = [[],I,J,I,O,L];    this.guides = GUIDES_MIRROR_IOL;    break;
    case 126:    this.ingredients = [[],I,J,I,O,S];    this.guides = GUIDES_MIRROR_IJO;    break;
    case 127:    this.ingredients = [[],I,J,I,O,T];    this.guides = GUIDES_MIRROR_JIT;    break;
    case 128:    this.ingredients = [[],I,J,I,O,Z];    this.guides = GUIDES_MIRROR_IJO;    break;
    case 129:    this.ingredients = [[],I,J,I,S,L];    this.guides = GUIDES_MIRROR_ISJ;    break;
    case 130:    this.ingredients = [[],I,J,I,S,O];    this.guides = GUIDES_MIRROR_ISJ;    break;
    case 131:    this.ingredients = [[],I,J,I,S,T];    this.guides = GUIDES_MIRROR_ISJ;    break;
    case 132:    this.ingredients = [[],I,J,I,S,Z];    this.guides = GUIDES_MIRROR_ISJ;    break;
    case 133:    this.ingredients = [[],I,J,I,T,L];    this.guides = GUIDES_MIRROR_ITL;    break;
    case 134:    this.ingredients = [[],I,J,I,T,O];    this.guides = GUIDES_MIRROR_JTI;    break;
    case 135:    this.ingredients = [[],I,J,I,T,S];    this.guides = GUIDES_MIRROR_JTI;    break;
    case 136:    this.ingredients = [[],I,J,I,T,Z];    this.guides = GUIDES_MIRROR_JTI;    break;
    case 137:    this.ingredients = [[],I,J,I,Z,L];    this.guides = GUIDES_MIRROR_IZL;    break;
    case 138:    this.ingredients = [[],I,J,I,Z,O];    this.guides = GUIDES_MIRROR_IJO;    break;
    case 139:    this.ingredients = [[],I,J,I,Z,S];    this.guides = GUIDES_MIRROR_JIS;    break;
    case 140:    this.ingredients = [[],I,J,I,Z,T];    this.guides = GUIDES_MIRROR_JIT;    break;
    case 141:    this.ingredients = [[],I,J,L,I,O];    this.guides = GUIDES_MIRROR_JIO;    break;
    case 142:    this.ingredients = [[],I,J,L,I,S];    this.guides = GUIDES_MIRROR_JIS;    break;
    case 143:    this.ingredients = [[],I,J,L,I,T];    this.guides = GUIDES_MIRROR_LIT;    break;
    case 147:    this.ingredients = [[],I,J,L,O,T];    this.guides = GUIDES_MIRROR_JOT;    break;
    case 148:    this.ingredients = [[],I,J,L,O,Z];    this.guides = GUIDES_MIRROR_JOZ;    break;
    case 149:    this.ingredients = [[],I,J,L,S,I];    this.guides = GUIDES_MIRROR_JSI;    break;
    case 151:    this.ingredients = [[],I,J,L,S,T];    this.guides = GUIDES_MIRROR_JST;    break;
    case 152:    this.ingredients = [[],I,J,L,S,Z];    this.guides = GUIDES_MIRROR_LSZ;    break;
    case 153:    this.ingredients = [[],I,J,L,T,I];    this.guides = GUIDES_MIRROR_LTI;    break;
    case 154:    this.ingredients = [[],I,J,L,T,O];    this.guides = GUIDES_MIRROR_LTO;    break;
    case 155:    this.ingredients = [[],I,J,L,T,S];    this.guides = GUIDES_MIRROR_JTS;    break;
    case 156:    this.ingredients = [[],I,J,L,T,Z];    this.guides = GUIDES_MIRROR_JTZ;    break;
    case 160:    this.ingredients = [[],I,J,L,Z,T];    this.guides = GUIDES_MIRROR_LZT;    break;
    case 161:    this.ingredients = [[],I,J,O,I,L];    this.guides = GUIDES_MIRROR_OIL;    break;
    case 162:    this.ingredients = [[],I,J,O,I,S];    this.guides = GUIDES_MIRROR_JIO;    break;
    case 163:    this.ingredients = [[],I,J,O,I,T];    this.guides = GUIDES_MIRROR_JIT;    break;
    case 164:    this.ingredients = [[],I,J,O,I,Z];    this.guides = GUIDES_MIRROR_JIO;    break;
    case 165:    this.ingredients = [[],I,J,O,L,I];    this.guides = GUIDES_MIRROR_OLI;    break;
    case 167:    this.ingredients = [[],I,J,O,L,T];    this.guides = GUIDES_MIRROR_OLT;    break;
    case 168:    this.ingredients = [[],I,J,O,L,Z];    this.guides = GUIDES_MIRROR_JOZ;    break;
    case 169:    this.ingredients = [[],I,J,O,S,I];    this.guides = GUIDES_MIRROR_JSI;    break;
    case 171:    this.ingredients = [[],I,J,O,S,T];    this.guides = GUIDES_MIRROR_JOT;    break;
    case 172:    this.ingredients = [[],I,J,O,S,Z];    this.guides = GUIDES_MIRROR_JOZ;    break;
    case 173:    this.ingredients = [[],I,J,O,T,I];    this.guides = GUIDES_MIRROR_JTI;    break;
    case 174:    this.ingredients = [[],I,J,O,T,L];    this.guides = GUIDES_MIRROR_OTL;    break;
    case 175:    this.ingredients = [[],I,J,O,T,S];    this.guides = GUIDES_MIRROR_JTO;    break;
    case 176:    this.ingredients = [[],I,J,O,T,Z];    this.guides = GUIDES_MIRROR_JTO;    break;
    case 177:    this.ingredients = [[],I,J,O,Z,I];    this.guides = GUIDES_MIRROR_JOZ;    break;
    case 178:    this.ingredients = [[],I,J,O,Z,L];    this.guides = GUIDES_MIRROR_OZL;    break;
    case 179:    this.ingredients = [[],I,J,O,Z,S];    this.guides = GUIDES_MIRROR_JOZ;    break;
    case 180:    this.ingredients = [[],I,J,O,Z,T];    this.guides = GUIDES_MIRROR_JOT;    break;
    case 181:    this.ingredients = [[],I,J,S,I,L];    this.guides = GUIDES_MIRROR_SIJ;    break;
    case 182:    this.ingredients = [[],I,J,S,I,O];    this.guides = GUIDES_MIRROR_SIJ;    break;
    case 183:    this.ingredients = [[],I,J,S,I,T];    this.guides = GUIDES_MIRROR_SIJ;    break;
    case 184:    this.ingredients = [[],I,J,S,I,Z];    this.guides = GUIDES_MIRROR_SIJ;    break;
    case 185:    this.ingredients = [[],I,J,S,L,I];    this.guides = GUIDES_MIRROR_SJI;    break;
    case 187:    this.ingredients = [[],I,J,S,L,T];    this.guides = GUIDES_MIRROR_JST;    break;
    case 188:    this.ingredients = [[],I,J,S,L,Z];    this.guides = GUIDES_MIRROR_SLZ;    break;
    case 189:    this.ingredients = [[],I,J,S,O,I];    this.guides = GUIDES_MIRROR_SJI;    break;
    case 191:    this.ingredients = [[],I,J,S,O,T];    this.guides = GUIDES_MIRROR_JOT;    break;
    case 192:    this.ingredients = [[],I,J,S,O,Z];    this.guides = GUIDES_MIRROR_JOZ;    break;
    case 193:    this.ingredients = [[],I,J,S,T,I];    this.guides = GUIDES_MIRROR_SJI;    break;
    case 194:    this.ingredients = [[],I,J,S,T,L];    this.guides = GUIDES_MIRROR_JST;    break;
    case 195:    this.ingredients = [[],I,J,S,T,O];    this.guides = GUIDES_MIRROR_JTO;    break;
    case 196:    this.ingredients = [[],I,J,S,T,Z];    this.guides = GUIDES_MIRROR_JST;    break;
    case 197:    this.ingredients = [[],I,J,S,Z,I];    this.guides = GUIDES_MIRROR_SJI;    break;
    case 198:    this.ingredients = [[],I,J,S,Z,L];    this.guides = GUIDES_MIRROR_SZL;    break;
    case 199:    this.ingredients = [[],I,J,S,Z,O];    this.guides = GUIDES_MIRROR_SZJ;    break;
    case 200:    this.ingredients = [[],I,J,S,Z,T];    this.guides = GUIDES_MIRROR_SZJ;    break;
    case 201:    this.ingredients = [[],I,J,T,I,L];    this.guides = GUIDES_MIRROR_TIL;    break;
    case 202:    this.ingredients = [[],I,J,T,I,O];    this.guides = GUIDES_MIRROR_JTI;    break;
    case 203:    this.ingredients = [[],I,J,T,I,S];    this.guides = GUIDES_MIRROR_JTI;    break;
    case 204:    this.ingredients = [[],I,J,T,I,Z];    this.guides = GUIDES_MIRROR_JTI;    break;
    case 205:    this.ingredients = [[],I,J,T,L,I];    this.guides = GUIDES_MIRROR_TLI;    break;
    case 206:    this.ingredients = [[],I,J,T,L,O];    this.guides = GUIDES_MIRROR_TLJ;    break;
    case 207:    this.ingredients = [[],I,J,T,L,S];    this.guides = GUIDES_MIRROR_TLJ;    break;
    case 208:    this.ingredients = [[],I,J,T,L,Z];    this.guides = GUIDES_MIRROR_TLJ;    break;
    case 209:    this.ingredients = [[],I,J,T,O,I];    this.guides = GUIDES_MIRROR_JTI;    break;
    case 210:    this.ingredients = [[],I,J,T,O,L];    this.guides = GUIDES_MIRROR_TJL;    break;
    case 211:    this.ingredients = [[],I,J,T,O,S];    this.guides = GUIDES_MIRROR_TJO;    break;
    case 212:    this.ingredients = [[],I,J,T,O,Z];    this.guides = GUIDES_MIRROR_TJO;    break;
    case 213:    this.ingredients = [[],I,J,T,S,I];    this.guides = GUIDES_MIRROR_JTI;    break;
    case 214:    this.ingredients = [[],I,J,T,S,L];    this.guides = GUIDES_MIRROR_TJL;    break;
    case 215:    this.ingredients = [[],I,J,T,S,O];    this.guides = GUIDES_MIRROR_TJO;    break;
    case 216:    this.ingredients = [[],I,J,T,S,Z];    this.guides = GUIDES_MIRROR_TSZ;    break;
    case 217:    this.ingredients = [[],I,J,T,Z,I];    this.guides = GUIDES_MIRROR_JTI;    break;
    case 218:    this.ingredients = [[],I,J,T,Z,L];    this.guides = GUIDES_MIRROR_TJL;    break;
    case 219:    this.ingredients = [[],I,J,T,Z,O];    this.guides = GUIDES_MIRROR_TJO;    break;
    case 220:    this.ingredients = [[],I,J,T,Z,S];    this.guides = GUIDES_MIRROR_TZS;    break;
    case 221:    this.ingredients = [[],I,J,Z,I,L];    this.guides = GUIDES_MIRROR_ZIL;    break;
    case 222:    this.ingredients = [[],I,J,Z,I,O];    this.guides = GUIDES_MIRROR_JIO;    break;
    case 223:    this.ingredients = [[],I,J,Z,I,S];    this.guides = GUIDES_MIRROR_JIS;    break;
    case 224:    this.ingredients = [[],I,J,Z,I,T];    this.guides = GUIDES_MIRROR_JIT;    break;
    case 225:    this.ingredients = [[],I,J,Z,L,I];    this.guides = GUIDES_MIRROR_ZLI;    break;
    case 226:    this.ingredients = [[],I,J,Z,L,O];    this.guides = GUIDES_MIRROR_JZIO;    break;
    case 228:    this.ingredients = [[],I,J,Z,L,T];    this.guides = GUIDES_MIRROR_JZT;    break;
    case 229:    this.ingredients = [[],I,J,Z,O,I];    this.guides = GUIDES_MIRROR_JOZ;    break;
    case 230:    this.ingredients = [[],I,J,Z,O,L];    this.guides = GUIDES_MIRROR_ZOL;    break;
    case 231:    this.ingredients = [[],I,J,Z,O,S];    this.guides = GUIDES_MIRROR_JOZ;    break;
    case 232:    this.ingredients = [[],I,J,Z,O,T];    this.guides = GUIDES_MIRROR_JOT;    break;
    case 233:    this.ingredients = [[],I,J,Z,S,I];    this.guides = GUIDES_MIRROR_ZSJ;    break;
    case 234:    this.ingredients = [[],I,J,Z,S,L];    this.guides = GUIDES_MIRROR_ZSJ;    break;
    case 235:    this.ingredients = [[],I,J,Z,S,O];    this.guides = GUIDES_MIRROR_ZSJ;    break;
    case 236:    this.ingredients = [[],I,J,Z,S,T];    this.guides = GUIDES_MIRROR_ZSJ;    break;
    case 237:    this.ingredients = [[],I,J,Z,T,I];    this.guides = GUIDES_MIRROR_JTI;    break;
    case 238:    this.ingredients = [[],I,J,Z,T,L];    this.guides = GUIDES_MIRROR_JZT;    break;
    case 239:    this.ingredients = [[],I,J,Z,T,O];    this.guides = GUIDES_MIRROR_JTO;    break;
    case 240:    this.ingredients = [[],I,J,Z,T,S];    this.guides = GUIDES_MIRROR_JTS;    break;
    case 241:    this.ingredients = [[],I,L,I,J,O];    this.guides = GUIDES_MIRROR_IJO;    break;
    case 243:    this.ingredients = [[],I,L,I,J,T];    this.guides = GUIDES_MIRROR_ILT;    break;
    case 245:    this.ingredients = [[],I,L,I,O,J];    this.guides = GUIDES_MIRROR_IOL;    break;
    case 246:    this.ingredients = [[],I,L,I,O,S];    this.guides = GUIDES_MIRROR_IOL;    break;
    case 247:    this.ingredients = [[],I,L,I,O,T];    this.guides = GUIDES_MIRROR_ILT;    break;
    case 248:    this.ingredients = [[],I,L,I,O,Z];    this.guides = GUIDES_MIRROR_IOL;    break;
    case 249:    this.ingredients = [[],I,L,I,S,J];    this.guides = GUIDES_MIRROR_ISJ;    break;
    case 251:    this.ingredients = [[],I,L,I,S,T];    this.guides = GUIDES_MIRROR_ILT;    break;
    case 252:    this.ingredients = [[],I,L,I,S,Z];    this.guides = GUIDES_MIRROR_LSZ;    break;
    case 253:    this.ingredients = [[],I,L,I,T,J];    this.guides = GUIDES_MIRROR_ILT;    break;
    case 254:    this.ingredients = [[],I,L,I,T,O];    this.guides = GUIDES_MIRROR_ILT;    break;
    case 255:    this.ingredients = [[],I,L,I,T,S];    this.guides = GUIDES_MIRROR_ILT;    break;
    case 256:    this.ingredients = [[],I,L,I,T,Z];    this.guides = GUIDES_MIRROR_ILT;    break;
    case 257:    this.ingredients = [[],I,L,I,Z,J];    this.guides = GUIDES_MIRROR_IZL;    break;
    case 258:    this.ingredients = [[],I,L,I,Z,O];    this.guides = GUIDES_MIRROR_IZL;    break;
    case 259:    this.ingredients = [[],I,L,I,Z,S];    this.guides = GUIDES_MIRROR_IZL;    break;
    case 260:    this.ingredients = [[],I,L,I,Z,T];    this.guides = GUIDES_MIRROR_ILT;    break;
    case 261:    this.ingredients = [[],I,L,J,I,O];    this.guides = GUIDES_MIRROR_JIO;    break;
    case 262:    this.ingredients = [[],I,L,J,I,S];    this.guides = GUIDES_MIRROR_JIS;    break;
    case 263:    this.ingredients = [[],I,L,J,I,T];    this.guides = GUIDES_MIRROR_LIT;    break;
    case 267:    this.ingredients = [[],I,L,J,O,T];    this.guides = GUIDES_MIRROR_JOT;    break;
    case 268:    this.ingredients = [[],I,L,J,O,Z];    this.guides = GUIDES_MIRROR_JOZ;    break;
    case 269:    this.ingredients = [[],I,L,J,S,I];    this.guides = GUIDES_MIRROR_JSI;    break;
    case 271:    this.ingredients = [[],I,L,J,S,T];    this.guides = GUIDES_MIRROR_JST;    break;
    case 272:    this.ingredients = [[],I,L,J,S,Z];    this.guides = GUIDES_MIRROR_LSZ;    break;
    case 273:    this.ingredients = [[],I,L,J,T,I];    this.guides = GUIDES_MIRROR_LTI;    break;
    case 274:    this.ingredients = [[],I,L,J,T,O];    this.guides = GUIDES_MIRROR_LTO;    break;
    case 275:    this.ingredients = [[],I,L,J,T,S];    this.guides = GUIDES_MIRROR_JTS;    break;
    case 276:    this.ingredients = [[],I,L,J,T,Z];    this.guides = GUIDES_MIRROR_JTZ;    break;
    case 280:    this.ingredients = [[],I,L,J,Z,T];    this.guides = GUIDES_MIRROR_LZT;    break;
    case 281:    this.ingredients = [[],I,L,O,I,J];    this.guides = GUIDES_MIRROR_OIL;    break;
    case 282:    this.ingredients = [[],I,L,O,I,S];    this.guides = GUIDES_MIRROR_OIL;    break;
    case 283:    this.ingredients = [[],I,L,O,I,T];    this.guides = GUIDES_MIRROR_LIT;    break;
    case 284:    this.ingredients = [[],I,L,O,I,Z];    this.guides = GUIDES_MIRROR_OIL;    break;
    case 285:    this.ingredients = [[],I,L,O,J,I];    this.guides = GUIDES_MIRROR_OLI;    break;
    case 287:    this.ingredients = [[],I,L,O,J,T];    this.guides = GUIDES_MIRROR_OLT;    break;
    case 288:    this.ingredients = [[],I,L,O,J,Z];    this.guides = GUIDES_MIRROR_OLZ;    break;
    case 289:    this.ingredients = [[],I,L,O,S,I];    this.guides = GUIDES_MIRROR_OLI;    break;
    case 291:    this.ingredients = [[],I,L,O,S,T];    this.guides = GUIDES_MIRROR_OLT;    break;
    case 292:    this.ingredients = [[],I,L,O,S,Z];    this.guides = GUIDES_MIRROR_LSZ;    break;
    case 293:    this.ingredients = [[],I,L,O,T,I];    this.guides = GUIDES_MIRROR_LTI;    break;
    case 294:    this.ingredients = [[],I,L,O,T,J];    this.guides = GUIDES_MIRROR_OLT;    break;
    case 295:    this.ingredients = [[],I,L,O,T,S];    this.guides = GUIDES_MIRROR_OLT;    break;
    case 296:    this.ingredients = [[],I,L,O,T,Z];    this.guides = GUIDES_MIRROR_OLT;    break;
    case 297:    this.ingredients = [[],I,L,O,Z,I];    this.guides = GUIDES_MIRROR_OLI;    break;
    case 298:    this.ingredients = [[],I,L,O,Z,J];    this.guides = GUIDES_MIRROR_OZL;    break;
    case 299:    this.ingredients = [[],I,L,O,Z,S];    this.guides = GUIDES_MIRROR_OZL;    break;
    case 300:    this.ingredients = [[],I,L,O,Z,T];    this.guides = GUIDES_MIRROR_LZT;    break;
    case 301:    this.ingredients = [[],I,L,S,I,J];    this.guides = GUIDES_MIRROR_SIJ;    break;
    case 303:    this.ingredients = [[],I,L,S,I,T];    this.guides = GUIDES_MIRROR_LIT;    break;
    case 304:    this.ingredients = [[],I,L,S,I,Z];    this.guides = GUIDES_MIRROR_SLZ;    break;
    case 305:    this.ingredients = [[],I,L,S,J,I];    this.guides = GUIDES_MIRROR_SJI;    break;
    case 307:    this.ingredients = [[],I,L,S,J,T];    this.guides = GUIDES_MIRROR_LST;    break;
    case 308:    this.ingredients = [[],I,L,S,J,Z];    this.guides = GUIDES_MIRROR_SLZ;    break;
    case 311:    this.ingredients = [[],I,L,S,O,T];    this.guides = GUIDES_MIRROR_LST;    break;
    case 312:    this.ingredients = [[],I,L,S,O,Z];    this.guides = GUIDES_MIRROR_SLZ;    break;
    case 313:    this.ingredients = [[],I,L,S,T,I];    this.guides = GUIDES_MIRROR_LTI;    break;
    case 314:    this.ingredients = [[],I,L,S,T,J];    this.guides = GUIDES_MIRROR_LST;    break;
    case 315:    this.ingredients = [[],I,L,S,T,O];    this.guides = GUIDES_MIRROR_LTO;    break;
    case 316:    this.ingredients = [[],I,L,S,T,Z];    this.guides = GUIDES_MIRROR_SLZ;    break;
    case 317:    this.ingredients = [[],I,L,S,Z,I];    this.guides = GUIDES_MIRROR_SZL;    break;
    case 318:    this.ingredients = [[],I,L,S,Z,J];    this.guides = GUIDES_MIRROR_SZL;    break;
    case 319:    this.ingredients = [[],I,L,S,Z,O];    this.guides = GUIDES_MIRROR_SZL;    break;
    case 320:    this.ingredients = [[],I,L,S,Z,T];    this.guides = GUIDES_MIRROR_SZL;    break;
    case 321:    this.ingredients = [[],I,L,T,I,J];    this.guides = GUIDES_MIRROR_TIL;    break;
    case 322:    this.ingredients = [[],I,L,T,I,O];    this.guides = GUIDES_MIRROR_TIL;    break;
    case 323:    this.ingredients = [[],I,L,T,I,S];    this.guides = GUIDES_MIRROR_TIL;    break;
    case 324:    this.ingredients = [[],I,L,T,I,Z];    this.guides = GUIDES_MIRROR_TIL;    break;
    case 325:    this.ingredients = [[],I,L,T,J,I];    this.guides = GUIDES_MIRROR_TLI;    break;
    case 326:    this.ingredients = [[],I,L,T,J,O];    this.guides = GUIDES_MIRROR_TLJ;    break;
    case 327:    this.ingredients = [[],I,L,T,J,S];    this.guides = GUIDES_MIRROR_TLJ;    break;
    case 328:    this.ingredients = [[],I,L,T,J,Z];    this.guides = GUIDES_MIRROR_TLJ;    break;
    case 329:    this.ingredients = [[],I,L,T,O,I];    this.guides = GUIDES_MIRROR_TLI;    break;
    case 330:    this.ingredients = [[],I,L,T,O,J];    this.guides = GUIDES_MIRROR_TLJ;    break;
    case 331:    this.ingredients = [[],I,L,T,O,S];    this.guides = GUIDES_MIRROR_TOL;    break;
    case 332:    this.ingredients = [[],I,L,T,O,Z];    this.guides = GUIDES_MIRROR_TLZ;    break;
    case 333:    this.ingredients = [[],I,L,T,S,I];    this.guides = GUIDES_MIRROR_TLI;    break;
    case 334:    this.ingredients = [[],I,L,T,S,J];    this.guides = GUIDES_MIRROR_TLJ;    break;
    case 335:    this.ingredients = [[],I,L,T,S,O];    this.guides = GUIDES_MIRROR_TLO;    break;
    case 336:    this.ingredients = [[],I,L,T,S,Z];    this.guides = GUIDES_MIRROR_TSZ;    break;
    case 337:    this.ingredients = [[],I,L,T,Z,I];    this.guides = GUIDES_MIRROR_TLI;    break;
    case 338:    this.ingredients = [[],I,L,T,Z,J];    this.guides = GUIDES_MIRROR_TLJ;    break;
    case 339:    this.ingredients = [[],I,L,T,Z,O];    this.guides = GUIDES_MIRROR_LZT;    break;
    case 340:    this.ingredients = [[],I,L,T,Z,S];    this.guides = GUIDES_MIRROR_TZS;    break;
    case 341:    this.ingredients = [[],I,L,Z,I,J];    this.guides = GUIDES_MIRROR_ZLI;    break;
    case 342:    this.ingredients = [[],I,L,Z,I,O];    this.guides = GUIDES_MIRROR_ZLI;    break;
    case 343:    this.ingredients = [[],I,L,Z,I,S];    this.guides = GUIDES_MIRROR_ZLI;    break;
    case 344:    this.ingredients = [[],I,L,Z,I,T];    this.guides = GUIDES_MIRROR_LIT;    break;
    case 345:    this.ingredients = [[],I,L,Z,J,I];    this.guides = GUIDES_MIRROR_ZLI;    break;
    case 348:    this.ingredients = [[],I,L,Z,J,T];    this.guides = GUIDES_MIRROR_LZT;    break;
    case 349:    this.ingredients = [[],I,L,Z,O,I];    this.guides = GUIDES_MIRROR_ZLI;    break;
    case 350:    this.ingredients = [[],I,L,Z,O,J];    this.guides = GUIDES_MIRROR_ZOL;    break;
    case 351:    this.ingredients = [[],I,L,Z,O,S];    this.guides = GUIDES_MIRROR_ZOL;    break;
    case 352:    this.ingredients = [[],I,L,Z,O,T];    this.guides = GUIDES_MIRROR_LZT;    break;
    case 353:    this.ingredients = [[],I,L,Z,S,I];    this.guides = GUIDES_MIRROR_ZLI;    break;
    case 354:    this.ingredients = [[],I,L,Z,S,J];    this.guides = GUIDES_MIRROR_LSZ;    break;
    case 355:    this.ingredients = [[],I,L,Z,S,O];    this.guides = GUIDES_MIRROR_LSZ;    break;
    case 356:    this.ingredients = [[],I,L,Z,S,T];    this.guides = GUIDES_MIRROR_LZT;    break;
    case 357:    this.ingredients = [[],I,L,Z,T,I];    this.guides = GUIDES_MIRROR_LTI;    break;
    case 358:    this.ingredients = [[],I,L,Z,T,J];    this.guides = GUIDES_MIRROR_LZT;    break;
    case 359:    this.ingredients = [[],I,L,Z,T,O];    this.guides = GUIDES_MIRROR_LZT;    break;
    case 360:    this.ingredients = [[],I,L,Z,T,S];    this.guides = GUIDES_MIRROR_LZT;    break;
    case 361:    this.ingredients = [[],I,O,I,J,L];    this.guides = GUIDES_MIRROR_IOL;    break;
    case 362:    this.ingredients = [[],I,O,I,J,S];    this.guides = GUIDES_MIRROR_IJO;    break;
    case 363:    this.ingredients = [[],I,O,I,J,T];    this.guides = GUIDES_MIRROR_IJO;    break;
    case 364:    this.ingredients = [[],I,O,I,J,Z];    this.guides = GUIDES_MIRROR_IJO;    break;
    case 365:    this.ingredients = [[],I,O,I,L,J];    this.guides = GUIDES_MIRROR_IOL;    break;
    case 366:    this.ingredients = [[],I,O,I,L,S];    this.guides = GUIDES_MIRROR_IOL;    break;
    case 367:    this.ingredients = [[],I,O,I,L,T];    this.guides = GUIDES_MIRROR_ILT;    break;
    case 368:    this.ingredients = [[],I,O,I,L,Z];    this.guides = GUIDES_MIRROR_IOL;    break;
    case 369:    this.ingredients = [[],I,O,I,S,J];    this.guides = GUIDES_MIRROR_ISJ;    break;
    case 370:    this.ingredients = [[],I,O,I,S,L];    this.guides = GUIDES_MIRROR_IOL;    break;
    case 373:    this.ingredients = [[],I,O,I,T,J];    this.guides = GUIDES_MIRROR_ITJ;    break;
    case 374:    this.ingredients = [[],I,O,I,T,L];    this.guides = GUIDES_MIRROR_ITL;    break;
    case 375:    this.ingredients = [[],I,O,I,T,S];    this.guides = GUIDES_MIRROR_ITO;    break;
    case 376:    this.ingredients = [[],I,O,I,T,Z];    this.guides = GUIDES_MIRROR_ITO;    break;
    case 377:    this.ingredients = [[],I,O,I,Z,J];    this.guides = GUIDES_MIRROR_IOJ;    break;
    case 378:    this.ingredients = [[],I,O,I,Z,L];    this.guides = GUIDES_MIRROR_IOL;    break;
    case 381:    this.ingredients = [[],I,O,J,I,L];    this.guides = GUIDES_MIRROR_OIL;    break;
    case 382:    this.ingredients = [[],I,O,J,I,S];    this.guides = GUIDES_MIRROR_JIO;    break;
    case 383:    this.ingredients = [[],I,O,J,I,T];    this.guides = GUIDES_MIRROR_JIT;    break;
    case 384:    this.ingredients = [[],I,O,J,I,Z];    this.guides = GUIDES_MIRROR_JIO;    break;
    case 385:    this.ingredients = [[],I,O,J,L,I];    this.guides = GUIDES_MIRROR_OLI;    break;
    case 387:    this.ingredients = [[],I,O,J,L,T];    this.guides = GUIDES_MIRROR_OLT;    break;
    case 388:    this.ingredients = [[],I,O,J,L,Z];    this.guides = GUIDES_MIRROR_JOZ;    break;
    case 389:    this.ingredients = [[],I,O,J,S,I];    this.guides = GUIDES_MIRROR_JSI;    break;
    case 391:    this.ingredients = [[],I,O,J,S,T];    this.guides = GUIDES_MIRROR_JOT;    break;
    case 392:    this.ingredients = [[],I,O,J,S,Z];    this.guides = GUIDES_MIRROR_JOZ;    break;
    case 393:    this.ingredients = [[],I,O,J,T,I];    this.guides = GUIDES_MIRROR_JTI;    break;
    case 394:    this.ingredients = [[],I,O,J,T,L];    this.guides = GUIDES_MIRROR_OTL;    break;
    case 395:    this.ingredients = [[],I,O,J,T,S];    this.guides = GUIDES_MIRROR_JTO;    break;
    case 396:    this.ingredients = [[],I,O,J,T,Z];    this.guides = GUIDES_MIRROR_JTO;    break;
    case 397:    this.ingredients = [[],I,O,J,Z,I];    this.guides = GUIDES_MIRROR_JOZ;    break;
    case 398:    this.ingredients = [[],I,O,J,Z,L];    this.guides = GUIDES_MIRROR_OZL;    break;
    case 399:    this.ingredients = [[],I,O,J,Z,S];    this.guides = GUIDES_MIRROR_JOZ;    break;
    case 400:    this.ingredients = [[],I,O,J,Z,T];    this.guides = GUIDES_MIRROR_JOT;    break;
    case 401:    this.ingredients = [[],I,O,L,I,J];    this.guides = GUIDES_MIRROR_OIL;    break;
    case 402:    this.ingredients = [[],I,O,L,I,S];    this.guides = GUIDES_MIRROR_OIL;    break;
    case 403:    this.ingredients = [[],I,O,L,I,T];    this.guides = GUIDES_MIRROR_LIT;    break;
    case 404:    this.ingredients = [[],I,O,L,I,Z];    this.guides = GUIDES_MIRROR_OIL;    break;
    case 405:    this.ingredients = [[],I,O,L,J,I];    this.guides = GUIDES_MIRROR_OLI;    break;
    case 407:    this.ingredients = [[],I,O,L,J,T];    this.guides = GUIDES_MIRROR_OLT;    break;
    case 408:    this.ingredients = [[],I,O,L,J,Z];    this.guides = GUIDES_MIRROR_OLZ;    break;
    case 409:    this.ingredients = [[],I,O,L,S,I];    this.guides = GUIDES_MIRROR_OLI;    break;
    case 411:    this.ingredients = [[],I,O,L,S,T];    this.guides = GUIDES_MIRROR_OLT;    break;
    case 412:    this.ingredients = [[],I,O,L,S,Z];    this.guides = GUIDES_MIRROR_LSZ;    break;
    case 413:    this.ingredients = [[],I,O,L,T,I];    this.guides = GUIDES_MIRROR_LTI;    break;
    case 414:    this.ingredients = [[],I,O,L,T,J];    this.guides = GUIDES_MIRROR_OLT;    break;
    case 415:    this.ingredients = [[],I,O,L,T,S];    this.guides = GUIDES_MIRROR_OLT;    break;
    case 416:    this.ingredients = [[],I,O,L,T,Z];    this.guides = GUIDES_MIRROR_OLT;    break;
    case 417:    this.ingredients = [[],I,O,L,Z,I];    this.guides = GUIDES_MIRROR_OLI;    break;
    case 418:    this.ingredients = [[],I,O,L,Z,J];    this.guides = GUIDES_MIRROR_OZL;    break;
    case 419:    this.ingredients = [[],I,O,L,Z,S];    this.guides = GUIDES_MIRROR_OZL;    break;
    case 420:    this.ingredients = [[],I,O,L,Z,T];    this.guides = GUIDES_MIRROR_LZT;    break;
    case 421:    this.ingredients = [[],I,O,S,I,J];    this.guides = GUIDES_MIRROR_SIJ;    break;
    case 422:    this.ingredients = [[],I,O,S,I,L];    this.guides = GUIDES_MIRROR_OIL;    break;
    case 425:    this.ingredients = [[],I,O,S,J,I];    this.guides = GUIDES_MIRROR_SJI;    break;
    case 429:    this.ingredients = [[],I,O,S,L,I];    this.guides = GUIDES_MIRROR_OLI;    break;
    case 431:    this.ingredients = [[],I,O,S,L,T];    this.guides = GUIDES_MIRROR_OLT;    break;
    case 432:    this.ingredients = [[],I,O,S,L,Z];    this.guides = GUIDES_MIRROR_SLZ;    break;
    case 435:    this.ingredients = [[],I,O,S,T,L];    this.guides = GUIDES_MIRROR_OTL;    break;
    case 438:    this.ingredients = [[],I,O,S,Z,J];    this.guides = GUIDES_MIRROR_SZJ;    break;
    case 439:    this.ingredients = [[],I,O,S,Z,L];    this.guides = GUIDES_MIRROR_SZL;    break;
    case 441:    this.ingredients = [[],I,O,T,I,J];    this.guides = GUIDES_MIRROR_TIJ;    break;
    case 442:    this.ingredients = [[],I,O,T,I,L];    this.guides = GUIDES_MIRROR_TIL;    break;
    case 443:    this.ingredients = [[],I,O,T,I,S];    this.guides = GUIDES_MIRROR_TIO;    break;
    case 444:    this.ingredients = [[],I,O,T,I,Z];    this.guides = GUIDES_MIRROR_TIO;    break;
    case 445:    this.ingredients = [[],I,O,T,J,I];    this.guides = GUIDES_MIRROR_TJI;    break;
    case 446:    this.ingredients = [[],I,O,T,J,L];    this.guides = GUIDES_MIRROR_TJL;    break;
    case 447:    this.ingredients = [[],I,O,T,J,S];    this.guides = GUIDES_MIRROR_TJO;    break;
    case 448:    this.ingredients = [[],I,O,T,J,Z];    this.guides = GUIDES_MIRROR_TJO;    break;
    case 449:    this.ingredients = [[],I,O,T,L,I];    this.guides = GUIDES_MIRROR_TLI;    break;
    case 450:    this.ingredients = [[],I,O,T,L,J];    this.guides = GUIDES_MIRROR_TLJ;    break;
    case 451:    this.ingredients = [[],I,O,T,L,S];    this.guides = GUIDES_MIRROR_OLT;    break;
    case 452:    this.ingredients = [[],I,O,T,L,Z];    this.guides = GUIDES_MIRROR_OLT;    break;
    case 453:    this.ingredients = [[],I,O,T,S,I];    this.guides = GUIDES_MIRROR_TOI;    break;
    case 455:    this.ingredients = [[],I,O,T,S,L];    this.guides = GUIDES_MIRROR_TOL;    break;
    case 456:    this.ingredients = [[],I,O,T,S,Z];    this.guides = GUIDES_MIRROR_TSZ;    break;
    case 457:    this.ingredients = [[],I,O,T,Z,I];    this.guides = GUIDES_MIRROR_TOI;    break;
    case 458:    this.ingredients = [[],I,O,T,Z,J];    this.guides = GUIDES_MIRROR_TZO;    break;
    case 459:    this.ingredients = [[],I,O,T,Z,L];    this.guides = GUIDES_MIRROR_TZL;    break;
    case 460:    this.ingredients = [[],I,O,T,Z,S];    this.guides = GUIDES_MIRROR_TZS;    break;
    case 462:    this.ingredients = [[],I,O,Z,I,L];    this.guides = GUIDES_MIRROR_OIL;    break;
    case 466:    this.ingredients = [[],I,O,Z,J,L];    this.guides = GUIDES_MIRROR_ZOL;    break;
    case 469:    this.ingredients = [[],I,O,Z,L,I];    this.guides = GUIDES_MIRROR_OLI;    break;
    case 470:    this.ingredients = [[],I,O,Z,L,J];    this.guides = GUIDES_MIRROR_ZOL;    break;
    case 471:    this.ingredients = [[],I,O,Z,L,S];    this.guides = GUIDES_MIRROR_ZOL;    break;
    case 472:    this.ingredients = [[],I,O,Z,L,T];    this.guides = GUIDES_MIRROR_OLT;    break;
    case 474:    this.ingredients = [[],I,O,Z,S,J];    this.guides = GUIDES_MIRROR_ZSJ;    break;
    case 475:    this.ingredients = [[],I,O,Z,S,L];    this.guides = GUIDES_MIRROR_ZOL;    break;
    case 477:    this.ingredients = [[],I,O,Z,T,I];    this.guides = GUIDES_MIRROR_ZTO;    break;
    case 478:    this.ingredients = [[],I,O,Z,T,J];    this.guides = GUIDES_MIRROR_ZTO;    break;
    case 479:    this.ingredients = [[],I,O,Z,T,L];    this.guides = GUIDES_MIRROR_OTL;    break;
    case 480:    this.ingredients = [[],I,O,Z,T,S];    this.guides = GUIDES_MIRROR_ZTO;    break;
    case 481:    this.ingredients = [[],I,S,I,J,L];    this.guides = GUIDES_MIRROR_ISJ;    break;
    case 482:    this.ingredients = [[],I,S,I,J,O];    this.guides = GUIDES_MIRROR_ISJ;    break;
    case 483:    this.ingredients = [[],I,S,I,J,T];    this.guides = GUIDES_MIRROR_ISJ;    break;
    case 484:    this.ingredients = [[],I,S,I,J,Z];    this.guides = GUIDES_MIRROR_ISJ;    break;
    case 485:    this.ingredients = [[],I,S,I,L,J];    this.guides = GUIDES_MIRROR_ISJ;    break;
    case 487:    this.ingredients = [[],I,S,I,L,T];    this.guides = GUIDES_MIRROR_ILT;    break;
    case 488:    this.ingredients = [[],I,S,I,L,Z];    this.guides = GUIDES_MIRROR_SLZ;    break;
    case 489:    this.ingredients = [[],I,S,I,O,J];    this.guides = GUIDES_MIRROR_ISJ;    break;
    case 490:    this.ingredients = [[],I,S,I,O,L];    this.guides = GUIDES_MIRROR_IOL;    break;
    case 493:    this.ingredients = [[],I,S,I,T,J];    this.guides = GUIDES_MIRROR_ISJ;    break;
    case 494:    this.ingredients = [[],I,S,I,T,L];    this.guides = GUIDES_MIRROR_ITL;    break;
    case 495:    this.ingredients = [[],I,S,I,T,O];    this.guides = GUIDES_MIRROR_ITO;    break;
    case 496:    this.ingredients = [[],I,S,I,T,Z];    this.guides = GUIDES_MIRROR_ITZ;    break;
    case 497:    this.ingredients = [[],I,S,I,Z,J];    this.guides = GUIDES_MIRROR_ISJ;    break;
    case 498:    this.ingredients = [[],I,S,I,Z,L];    this.guides = GUIDES_MIRROR_IZL;    break;
    case 501:    this.ingredients = [[],I,S,J,I,L];    this.guides = GUIDES_MIRROR_SIJ;    break;
    case 502:    this.ingredients = [[],I,S,J,I,O];    this.guides = GUIDES_MIRROR_SIJ;    break;
    case 503:    this.ingredients = [[],I,S,J,I,T];    this.guides = GUIDES_MIRROR_SIJ;    break;
    case 504:    this.ingredients = [[],I,S,J,I,Z];    this.guides = GUIDES_MIRROR_SIJ;    break;
    case 505:    this.ingredients = [[],I,S,J,L,I];    this.guides = GUIDES_MIRROR_SJI;    break;
    case 507:    this.ingredients = [[],I,S,J,L,T];    this.guides = GUIDES_MIRROR_JST;    break;
    case 508:    this.ingredients = [[],I,S,J,L,Z];    this.guides = GUIDES_MIRROR_SLZ;    break;
    case 509:    this.ingredients = [[],I,S,J,O,I];    this.guides = GUIDES_MIRROR_SJI;    break;
    case 511:    this.ingredients = [[],I,S,J,O,T];    this.guides = GUIDES_MIRROR_JOT;    break;
    case 512:    this.ingredients = [[],I,S,J,O,Z];    this.guides = GUIDES_MIRROR_JOZ;    break;
    case 513:    this.ingredients = [[],I,S,J,T,I];    this.guides = GUIDES_MIRROR_SJI;    break;
    case 514:    this.ingredients = [[],I,S,J,T,L];    this.guides = GUIDES_MIRROR_JST;    break;
    case 515:    this.ingredients = [[],I,S,J,T,O];    this.guides = GUIDES_MIRROR_JTO;    break;
    case 516:    this.ingredients = [[],I,S,J,T,Z];    this.guides = GUIDES_MIRROR_JST;    break;
    case 517:    this.ingredients = [[],I,S,J,Z,I];    this.guides = GUIDES_MIRROR_SJI;    break;
    case 518:    this.ingredients = [[],I,S,J,Z,L];    this.guides = GUIDES_MIRROR_SZL;    break;
    case 519:    this.ingredients = [[],I,S,J,Z,O];    this.guides = GUIDES_MIRROR_SZJ;    break;
    case 520:    this.ingredients = [[],I,S,J,Z,T];    this.guides = GUIDES_MIRROR_SZJ;    break;
    case 521:    this.ingredients = [[],I,S,L,I,J];    this.guides = GUIDES_MIRROR_SIJ;    break;
    case 523:    this.ingredients = [[],I,S,L,I,T];    this.guides = GUIDES_MIRROR_LIT;    break;
    case 524:    this.ingredients = [[],I,S,L,I,Z];    this.guides = GUIDES_MIRROR_SLZ;    break;
    case 525:    this.ingredients = [[],I,S,L,J,I];    this.guides = GUIDES_MIRROR_SJI;    break;
    case 527:    this.ingredients = [[],I,S,L,J,T];    this.guides = GUIDES_MIRROR_LST;    break;
    case 528:    this.ingredients = [[],I,S,L,J,Z];    this.guides = GUIDES_MIRROR_SLZ;    break;
    case 531:    this.ingredients = [[],I,S,L,O,T];    this.guides = GUIDES_MIRROR_LST;    break;
    case 532:    this.ingredients = [[],I,S,L,O,Z];    this.guides = GUIDES_MIRROR_SLZ;    break;
    case 533:    this.ingredients = [[],I,S,L,T,I];    this.guides = GUIDES_MIRROR_LTI;    break;
    case 534:    this.ingredients = [[],I,S,L,T,J];    this.guides = GUIDES_MIRROR_LST;    break;
    case 535:    this.ingredients = [[],I,S,L,T,O];    this.guides = GUIDES_MIRROR_LTO;    break;
    case 536:    this.ingredients = [[],I,S,L,T,Z];    this.guides = GUIDES_MIRROR_SLZ;    break;
    case 537:    this.ingredients = [[],I,S,L,Z,I];    this.guides = GUIDES_MIRROR_SZL;    break;
    case 538:    this.ingredients = [[],I,S,L,Z,J];    this.guides = GUIDES_MIRROR_SZL;    break;
    case 539:    this.ingredients = [[],I,S,L,Z,O];    this.guides = GUIDES_MIRROR_SZL;    break;
    case 540:    this.ingredients = [[],I,S,L,Z,T];    this.guides = GUIDES_MIRROR_SZL;    break;
    case 541:    this.ingredients = [[],I,S,O,I,J];    this.guides = GUIDES_MIRROR_SIJ;    break;
    case 542:    this.ingredients = [[],I,S,O,I,L];    this.guides = GUIDES_MIRROR_OIL;    break;
    case 545:    this.ingredients = [[],I,S,O,J,I];    this.guides = GUIDES_MIRROR_SJI;    break;
    case 549:    this.ingredients = [[],I,S,O,L,I];    this.guides = GUIDES_MIRROR_OLI;    break;
    case 551:    this.ingredients = [[],I,S,O,L,T];    this.guides = GUIDES_MIRROR_OLT;    break;
    case 552:    this.ingredients = [[],I,S,O,L,Z];    this.guides = GUIDES_MIRROR_SLZ;    break;
    case 555:    this.ingredients = [[],I,S,O,T,L];    this.guides = GUIDES_MIRROR_OTL;    break;
    case 558:    this.ingredients = [[],I,S,O,Z,J];    this.guides = GUIDES_MIRROR_SZJ;    break;
    case 559:    this.ingredients = [[],I,S,O,Z,L];    this.guides = GUIDES_MIRROR_SZL;    break;
    case 561:    this.ingredients = [[],I,S,T,I,J];    this.guides = GUIDES_MIRROR_SIJ;    break;
    case 562:    this.ingredients = [[],I,S,T,I,L];    this.guides = GUIDES_MIRROR_TIL;    break;
    case 563:    this.ingredients = [[],I,S,T,I,O];    this.guides = GUIDES_MIRROR_TIO;    break;
    case 564:    this.ingredients = [[],I,S,T,I,Z];    this.guides = GUIDES_MIRROR_TSZ;    break;
    case 565:    this.ingredients = [[],I,S,T,J,I];    this.guides = GUIDES_MIRROR_SJI;    break;
    case 566:    this.ingredients = [[],I,S,T,J,L];    this.guides = GUIDES_MIRROR_TJL;    break;
    case 567:    this.ingredients = [[],I,S,T,J,O];    this.guides = GUIDES_MIRROR_TJO;    break;
    case 568:    this.ingredients = [[],I,S,T,J,Z];    this.guides = GUIDES_MIRROR_TSZ;    break;
    case 569:    this.ingredients = [[],I,S,T,L,I];    this.guides = GUIDES_MIRROR_TLI;    break;
    case 570:    this.ingredients = [[],I,S,T,L,J];    this.guides = GUIDES_MIRROR_TLJ;    break;
    case 571:    this.ingredients = [[],I,S,T,L,O];    this.guides = GUIDES_MIRROR_TLO;    break;
    case 572:    this.ingredients = [[],I,S,T,L,Z];    this.guides = GUIDES_MIRROR_TSZ;    break;
    case 573:    this.ingredients = [[],I,S,T,O,I];    this.guides = GUIDES_MIRROR_TOI;    break;
    case 575:    this.ingredients = [[],I,S,T,O,L];    this.guides = GUIDES_MIRROR_TOL;    break;
    case 576:    this.ingredients = [[],I,S,T,O,Z];    this.guides = GUIDES_MIRROR_TSZ;    break;
    case 577:    this.ingredients = [[],I,S,T,Z,I];    this.guides = GUIDES_MIRROR_TSZ;    break;
    case 578:    this.ingredients = [[],I,S,T,Z,J];    this.guides = GUIDES_MIRROR_TSZ;    break;
    case 579:    this.ingredients = [[],I,S,T,Z,L];    this.guides = GUIDES_MIRROR_TSZ;    break;
    case 580:    this.ingredients = [[],I,S,T,Z,O];    this.guides = GUIDES_MIRROR_TSZ;    break;
    case 581:    this.ingredients = [[],I,S,Z,I,J];    this.guides = GUIDES_MIRROR_SIJ;    break;
    case 582:    this.ingredients = [[],I,S,Z,I,L];    this.guides = GUIDES_MIRROR_ZIL;    break;
    case 585:    this.ingredients = [[],I,S,Z,J,I];    this.guides = GUIDES_MIRROR_SJI;    break;
    case 586:    this.ingredients = [[],I,S,Z,J,L];    this.guides = GUIDES_MIRROR_SZL;    break;
    case 587:    this.ingredients = [[],I,S,Z,J,O];    this.guides = GUIDES_MIRROR_ZSJ;    break;
    case 588:    this.ingredients = [[],I,S,Z,J,T];    this.guides = GUIDES_MIRROR_ZSJ;    break;
    case 589:    this.ingredients = [[],I,S,Z,L,I];    this.guides = GUIDES_MIRROR_ZLI;    break;
    case 590:    this.ingredients = [[],I,S,Z,L,J];    this.guides = GUIDES_MIRROR_SZL;    break;
    case 591:    this.ingredients = [[],I,S,Z,L,O];    this.guides = GUIDES_MIRROR_SZL;    break;
    case 592:    this.ingredients = [[],I,S,Z,L,T];    this.guides = GUIDES_MIRROR_SZL;    break;
    case 594:    this.ingredients = [[],I,S,Z,O,J];    this.guides = GUIDES_MIRROR_ZSJ;    break;
    case 595:    this.ingredients = [[],I,S,Z,O,L];    this.guides = GUIDES_MIRROR_SZL;    break;
    case 597:    this.ingredients = [[],I,S,Z,T,I];    this.guides = GUIDES_MIRROR_ZTI;    break;
    case 598:    this.ingredients = [[],I,S,Z,T,J];    this.guides = GUIDES_MIRROR_ZSJ;    break;
    case 599:    this.ingredients = [[],I,S,Z,T,L];    this.guides = GUIDES_MIRROR_SZL;    break;
    case 600:    this.ingredients = [[],I,S,Z,T,O];    this.guides = GUIDES_MIRROR_ZTO;    break;
    case 601:    this.ingredients = [[],I,T,I,J,L];    this.guides = GUIDES_MIRROR_ITL;    break;
    case 602:    this.ingredients = [[],I,T,I,J,O];    this.guides = GUIDES_MIRROR_TJI;    break;
    case 603:    this.ingredients = [[],I,T,I,J,S];    this.guides = GUIDES_MIRROR_TJI;    break;
    case 604:    this.ingredients = [[],I,T,I,J,Z];    this.guides = GUIDES_MIRROR_TJI;    break;
    case 605:    this.ingredients = [[],I,T,I,L,J];    this.guides = GUIDES_MIRROR_ILT;    break;
    case 606:    this.ingredients = [[],I,T,I,L,O];    this.guides = GUIDES_MIRROR_ILT;    break;
    case 607:    this.ingredients = [[],I,T,I,L,S];    this.guides = GUIDES_MIRROR_ILT;    break;
    case 608:    this.ingredients = [[],I,T,I,L,Z];    this.guides = GUIDES_MIRROR_ILT;    break;
    case 609:    this.ingredients = [[],I,T,I,O,J];    this.guides = GUIDES_MIRROR_TIJ;    break;
    case 610:    this.ingredients = [[],I,T,I,O,L];    this.guides = GUIDES_MIRROR_ITL;    break;
    case 611:    this.ingredients = [[],I,T,I,O,S];    this.guides = GUIDES_MIRROR_ITO;    break;
    case 612:    this.ingredients = [[],I,T,I,O,Z];    this.guides = GUIDES_MIRROR_ITO;    break;
    case 613:    this.ingredients = [[],I,T,I,S,J];    this.guides = GUIDES_MIRROR_ISJ;    break;
    case 614:    this.ingredients = [[],I,T,I,S,L];    this.guides = GUIDES_MIRROR_ITL;    break;
    case 615:    this.ingredients = [[],I,T,I,S,O];    this.guides = GUIDES_MIRROR_ITO;    break;
    case 616:    this.ingredients = [[],I,T,I,S,Z];    this.guides = GUIDES_MIRROR_TSZ;    break;
    case 617:    this.ingredients = [[],I,T,I,Z,J];    this.guides = GUIDES_MIRROR_TIJ;    break;
    case 618:    this.ingredients = [[],I,T,I,Z,L];    this.guides = GUIDES_MIRROR_ITL;    break;
    case 619:    this.ingredients = [[],I,T,I,Z,O];    this.guides = GUIDES_MIRROR_ITO;    break;
    case 620:    this.ingredients = [[],I,T,I,Z,S];    this.guides = GUIDES_MIRROR_TZS;    break;
    case 621:    this.ingredients = [[],I,T,J,I,L];    this.guides = GUIDES_MIRROR_TIL;    break;
    case 622:    this.ingredients = [[],I,T,J,I,O];    this.guides = GUIDES_MIRROR_JTI;    break;
    case 623:    this.ingredients = [[],I,T,J,I,S];    this.guides = GUIDES_MIRROR_JTI;    break;
    case 624:    this.ingredients = [[],I,T,J,I,Z];    this.guides = GUIDES_MIRROR_JTI;    break;
    case 625:    this.ingredients = [[],I,T,J,L,I];    this.guides = GUIDES_MIRROR_TLI;    break;
    case 626:    this.ingredients = [[],I,T,J,L,O];    this.guides = GUIDES_MIRROR_TLJ;    break;
    case 627:    this.ingredients = [[],I,T,J,L,S];    this.guides = GUIDES_MIRROR_TLJ;    break;
    case 628:    this.ingredients = [[],I,T,J,L,Z];    this.guides = GUIDES_MIRROR_TLJ;    break;
    case 629:    this.ingredients = [[],I,T,J,O,I];    this.guides = GUIDES_MIRROR_JTI;    break;
    case 630:    this.ingredients = [[],I,T,J,O,L];    this.guides = GUIDES_MIRROR_TJL;    break;
    case 631:    this.ingredients = [[],I,T,J,O,S];    this.guides = GUIDES_MIRROR_TJO;    break;
    case 632:    this.ingredients = [[],I,T,J,O,Z];    this.guides = GUIDES_MIRROR_TJO;    break;
    case 633:    this.ingredients = [[],I,T,J,S,I];    this.guides = GUIDES_MIRROR_JTI;    break;
    case 634:    this.ingredients = [[],I,T,J,S,L];    this.guides = GUIDES_MIRROR_TJL;    break;
    case 635:    this.ingredients = [[],I,T,J,S,O];    this.guides = GUIDES_MIRROR_TJO;    break;
    case 636:    this.ingredients = [[],I,T,J,S,Z];    this.guides = GUIDES_MIRROR_TSZ;    break;
    case 637:    this.ingredients = [[],I,T,J,Z,I];    this.guides = GUIDES_MIRROR_JTI;    break;
    case 638:    this.ingredients = [[],I,T,J,Z,L];    this.guides = GUIDES_MIRROR_TJL;    break;
    case 639:    this.ingredients = [[],I,T,J,Z,O];    this.guides = GUIDES_MIRROR_TJO;    break;
    case 640:    this.ingredients = [[],I,T,J,Z,S];    this.guides = GUIDES_MIRROR_TZS;    break;
    case 641:    this.ingredients = [[],I,T,L,I,J];    this.guides = GUIDES_MIRROR_TIL;    break;
    case 642:    this.ingredients = [[],I,T,L,I,O];    this.guides = GUIDES_MIRROR_TIL;    break;
    case 643:    this.ingredients = [[],I,T,L,I,S];    this.guides = GUIDES_MIRROR_TIL;    break;
    case 644:    this.ingredients = [[],I,T,L,I,Z];    this.guides = GUIDES_MIRROR_TIL;    break;
    case 645:    this.ingredients = [[],I,T,L,J,I];    this.guides = GUIDES_MIRROR_TLI;    break;
    case 646:    this.ingredients = [[],I,T,L,J,O];    this.guides = GUIDES_MIRROR_TLJ;    break;
    case 647:    this.ingredients = [[],I,T,L,J,S];    this.guides = GUIDES_MIRROR_TLJ;    break;
    case 648:    this.ingredients = [[],I,T,L,J,Z];    this.guides = GUIDES_MIRROR_TLJ;    break;
    case 649:    this.ingredients = [[],I,T,L,O,I];    this.guides = GUIDES_MIRROR_TLI;    break;
    case 650:    this.ingredients = [[],I,T,L,O,J];    this.guides = GUIDES_MIRROR_TLJ;    break;
    case 651:    this.ingredients = [[],I,T,L,O,S];    this.guides = GUIDES_MIRROR_TOL;    break;
    case 652:    this.ingredients = [[],I,T,L,O,Z];    this.guides = GUIDES_MIRROR_TLZ;    break;
    case 653:    this.ingredients = [[],I,T,L,S,I];    this.guides = GUIDES_MIRROR_TLI;    break;
    case 654:    this.ingredients = [[],I,T,L,S,J];    this.guides = GUIDES_MIRROR_TLJ;    break;
    case 655:    this.ingredients = [[],I,T,L,S,O];    this.guides = GUIDES_MIRROR_TLO;    break;
    case 656:    this.ingredients = [[],I,T,L,S,Z];    this.guides = GUIDES_MIRROR_TSZ;    break;
    case 657:    this.ingredients = [[],I,T,L,Z,I];    this.guides = GUIDES_MIRROR_TLI;    break;
    case 658:    this.ingredients = [[],I,T,L,Z,J];    this.guides = GUIDES_MIRROR_TLJ;    break;
    case 659:    this.ingredients = [[],I,T,L,Z,O];    this.guides = GUIDES_MIRROR_LZT;    break;
    case 660:    this.ingredients = [[],I,T,L,Z,S];    this.guides = GUIDES_MIRROR_TZS;    break;
    case 661:    this.ingredients = [[],I,T,O,I,J];    this.guides = GUIDES_MIRROR_TIJ;    break;
    case 662:    this.ingredients = [[],I,T,O,I,L];    this.guides = GUIDES_MIRROR_TIL;    break;
    case 663:    this.ingredients = [[],I,T,O,I,S];    this.guides = GUIDES_MIRROR_TIO;    break;
    case 664:    this.ingredients = [[],I,T,O,I,Z];    this.guides = GUIDES_MIRROR_TIO;    break;
    case 665:    this.ingredients = [[],I,T,O,J,I];    this.guides = GUIDES_MIRROR_TJI;    break;
    case 666:    this.ingredients = [[],I,T,O,J,L];    this.guides = GUIDES_MIRROR_TJL;    break;
    case 667:    this.ingredients = [[],I,T,O,J,S];    this.guides = GUIDES_MIRROR_TJO;    break;
    case 668:    this.ingredients = [[],I,T,O,J,Z];    this.guides = GUIDES_MIRROR_TJO;    break;
    case 669:    this.ingredients = [[],I,T,O,L,I];    this.guides = GUIDES_MIRROR_TLI;    break;
    case 670:    this.ingredients = [[],I,T,O,L,J];    this.guides = GUIDES_MIRROR_TLJ;    break;
    case 671:    this.ingredients = [[],I,T,O,L,S];    this.guides = GUIDES_MIRROR_OLT;    break;
    case 672:    this.ingredients = [[],I,T,O,L,Z];    this.guides = GUIDES_MIRROR_OLT;    break;
    case 673:    this.ingredients = [[],I,T,O,S,I];    this.guides = GUIDES_MIRROR_TOI;    break;
    case 675:    this.ingredients = [[],I,T,O,S,L];    this.guides = GUIDES_MIRROR_TOL;    break;
    case 676:    this.ingredients = [[],I,T,O,S,Z];    this.guides = GUIDES_MIRROR_TSZ;    break;
    case 677:    this.ingredients = [[],I,T,O,Z,I];    this.guides = GUIDES_MIRROR_TOI;    break;
    case 678:    this.ingredients = [[],I,T,O,Z,J];    this.guides = GUIDES_MIRROR_TZO;    break;
    case 679:    this.ingredients = [[],I,T,O,Z,L];    this.guides = GUIDES_MIRROR_TZL;    break;
    case 680:    this.ingredients = [[],I,T,O,Z,S];    this.guides = GUIDES_MIRROR_TZS;    break;
    case 681:    this.ingredients = [[],I,T,S,I,J];    this.guides = GUIDES_MIRROR_SIJ;    break;
    case 682:    this.ingredients = [[],I,T,S,I,L];    this.guides = GUIDES_MIRROR_TIL;    break;
    case 683:    this.ingredients = [[],I,T,S,I,O];    this.guides = GUIDES_MIRROR_TIO;    break;
    case 684:    this.ingredients = [[],I,T,S,I,Z];    this.guides = GUIDES_MIRROR_TSZ;    break;
    case 685:    this.ingredients = [[],I,T,S,J,I];    this.guides = GUIDES_MIRROR_SJI;    break;
    case 686:    this.ingredients = [[],I,T,S,J,L];    this.guides = GUIDES_MIRROR_TJL;    break;
    case 687:    this.ingredients = [[],I,T,S,J,O];    this.guides = GUIDES_MIRROR_TJO;    break;
    case 688:    this.ingredients = [[],I,T,S,J,Z];    this.guides = GUIDES_MIRROR_TSZ;    break;
    case 689:    this.ingredients = [[],I,T,S,L,I];    this.guides = GUIDES_MIRROR_TLI;    break;
    case 690:    this.ingredients = [[],I,T,S,L,J];    this.guides = GUIDES_MIRROR_TLJ;    break;
    case 691:    this.ingredients = [[],I,T,S,L,O];    this.guides = GUIDES_MIRROR_TLO;    break;
    case 692:    this.ingredients = [[],I,T,S,L,Z];    this.guides = GUIDES_MIRROR_TSZ;    break;
    case 693:    this.ingredients = [[],I,T,S,O,I];    this.guides = GUIDES_MIRROR_TOI;    break;
    case 695:    this.ingredients = [[],I,T,S,O,L];    this.guides = GUIDES_MIRROR_TOL;    break;
    case 696:    this.ingredients = [[],I,T,S,O,Z];    this.guides = GUIDES_MIRROR_TSZ;    break;
    case 697:    this.ingredients = [[],I,T,S,Z,I];    this.guides = GUIDES_MIRROR_TSZ;    break;
    case 698:    this.ingredients = [[],I,T,S,Z,J];    this.guides = GUIDES_MIRROR_TSZ;    break;
    case 699:    this.ingredients = [[],I,T,S,Z,L];    this.guides = GUIDES_MIRROR_TSZ;    break;
    case 700:    this.ingredients = [[],I,T,S,Z,O];    this.guides = GUIDES_MIRROR_TSZ;    break;
    case 701:    this.ingredients = [[],I,T,Z,I,J];    this.guides = GUIDES_MIRROR_TIJ;    break;
    case 702:    this.ingredients = [[],I,T,Z,I,L];    this.guides = GUIDES_MIRROR_TIL;    break;
    case 703:    this.ingredients = [[],I,T,Z,I,O];    this.guides = GUIDES_MIRROR_TIO;    break;
    case 704:    this.ingredients = [[],I,T,Z,I,S];    this.guides = GUIDES_MIRROR_TZS;    break;
    case 705:    this.ingredients = [[],I,T,Z,J,I];    this.guides = GUIDES_MIRROR_TJI;    break;
    case 706:    this.ingredients = [[],I,T,Z,J,L];    this.guides = GUIDES_MIRROR_TJL;    break;
    case 707:    this.ingredients = [[],I,T,Z,J,O];    this.guides = GUIDES_MIRROR_TJO;    break;
    case 708:    this.ingredients = [[],I,T,Z,J,S];    this.guides = GUIDES_MIRROR_TZS;    break;
    case 709:    this.ingredients = [[],I,T,Z,L,I];    this.guides = GUIDES_MIRROR_TLI;    break;
    case 710:    this.ingredients = [[],I,T,Z,L,J];    this.guides = GUIDES_MIRROR_TLJ;    break;
    case 711:    this.ingredients = [[],I,T,Z,L,O];    this.guides = GUIDES_MIRROR_TZL;    break;
    case 712:    this.ingredients = [[],I,T,Z,L,S];    this.guides = GUIDES_MIRROR_TZS;    break;
    case 713:    this.ingredients = [[],I,T,Z,O,I];    this.guides = GUIDES_MIRROR_TOI;    break;
    case 714:    this.ingredients = [[],I,T,Z,O,J];    this.guides = GUIDES_MIRROR_ZTO;    break;
    case 715:    this.ingredients = [[],I,T,Z,O,L];    this.guides = GUIDES_MIRROR_TZL;    break;
    case 716:    this.ingredients = [[],I,T,Z,O,S];    this.guides = GUIDES_MIRROR_TZS;    break;
    case 717:    this.ingredients = [[],I,T,Z,S,I];    this.guides = GUIDES_MIRROR_TSZ;    break;
    case 718:    this.ingredients = [[],I,T,Z,S,J];    this.guides = GUIDES_MIRROR_TSZ;    break;
    case 719:    this.ingredients = [[],I,T,Z,S,L];    this.guides = GUIDES_MIRROR_TSZ;    break;
    case 720:    this.ingredients = [[],I,T,Z,S,O];    this.guides = GUIDES_MIRROR_TSZ;    break;
    case 721:    this.ingredients = [[],I,Z,I,J,L];    this.guides = GUIDES_MIRROR_IZL;    break;
    case 722:    this.ingredients = [[],I,Z,I,J,O];    this.guides = GUIDES_MIRROR_IJO;    break;
    case 725:    this.ingredients = [[],I,Z,I,L,J];    this.guides = GUIDES_MIRROR_IZL;    break;
    case 726:    this.ingredients = [[],I,Z,I,L,O];    this.guides = GUIDES_MIRROR_IZL;    break;
    case 727:    this.ingredients = [[],I,Z,I,L,S];    this.guides = GUIDES_MIRROR_IZL;    break;
    case 728:    this.ingredients = [[],I,Z,I,L,T];    this.guides = GUIDES_MIRROR_ILT;    break;
    case 729:    this.ingredients = [[],I,Z,I,O,J];    this.guides = GUIDES_MIRROR_IOJ;    break;
    case 730:    this.ingredients = [[],I,Z,I,O,L];    this.guides = GUIDES_MIRROR_IOL;    break;
    case 733:    this.ingredients = [[],I,Z,I,S,J];    this.guides = GUIDES_MIRROR_ISJ;    break;
    case 734:    this.ingredients = [[],I,Z,I,S,L];    this.guides = GUIDES_MIRROR_IZL;    break;
    case 737:    this.ingredients = [[],I,Z,I,T,J];    this.guides = GUIDES_MIRROR_ITJ;    break;
    case 738:    this.ingredients = [[],I,Z,I,T,L];    this.guides = GUIDES_MIRROR_ITL;    break;
    case 739:    this.ingredients = [[],I,Z,I,T,O];    this.guides = GUIDES_MIRROR_ITO;    break;
    case 740:    this.ingredients = [[],I,Z,I,T,S];    this.guides = GUIDES_MIRROR_ITZ;    break;
    case 741:    this.ingredients = [[],I,Z,J,I,L];    this.guides = GUIDES_MIRROR_ZIL;    break;
    case 742:    this.ingredients = [[],I,Z,J,I,O];    this.guides = GUIDES_MIRROR_JIO;    break;
    case 743:    this.ingredients = [[],I,Z,J,I,S];    this.guides = GUIDES_MIRROR_JIS;    break;
    case 744:    this.ingredients = [[],I,Z,J,I,T];    this.guides = GUIDES_MIRROR_JIT;    break;
    case 745:    this.ingredients = [[],I,Z,J,L,I];    this.guides = GUIDES_MIRROR_ZLI;    break;
    case 748:    this.ingredients = [[],I,Z,J,L,T];    this.guides = GUIDES_MIRROR_JZT;    break;
    case 749:    this.ingredients = [[],I,Z,J,O,I];    this.guides = GUIDES_MIRROR_JOZ;    break;
    case 750:    this.ingredients = [[],I,Z,J,O,L];    this.guides = GUIDES_MIRROR_ZOL;    break;
    case 751:    this.ingredients = [[],I,Z,J,O,S];    this.guides = GUIDES_MIRROR_JOZ;    break;
    case 752:    this.ingredients = [[],I,Z,J,O,T];    this.guides = GUIDES_MIRROR_JOT;    break;
    case 753:    this.ingredients = [[],I,Z,J,S,I];    this.guides = GUIDES_MIRROR_ZSJ;    break;
    case 754:    this.ingredients = [[],I,Z,J,S,L];    this.guides = GUIDES_MIRROR_ZSJ;    break;
    case 755:    this.ingredients = [[],I,Z,J,S,O];    this.guides = GUIDES_MIRROR_ZSJ;    break;
    case 756:    this.ingredients = [[],I,Z,J,S,T];    this.guides = GUIDES_MIRROR_ZSJ;    break;
    case 757:    this.ingredients = [[],I,Z,J,T,I];    this.guides = GUIDES_MIRROR_JTI;    break;
    case 758:    this.ingredients = [[],I,Z,J,T,L];    this.guides = GUIDES_MIRROR_JZT;    break;
    case 759:    this.ingredients = [[],I,Z,J,T,O];    this.guides = GUIDES_MIRROR_JTO;    break;
    case 760:    this.ingredients = [[],I,Z,J,T,S];    this.guides = GUIDES_MIRROR_JTS;    break;
    case 761:    this.ingredients = [[],I,Z,L,I,J];    this.guides = GUIDES_MIRROR_ZLI;    break;
    case 762:    this.ingredients = [[],I,Z,L,I,O];    this.guides = GUIDES_MIRROR_ZLI;    break;
    case 763:    this.ingredients = [[],I,Z,L,I,S];    this.guides = GUIDES_MIRROR_ZLI;    break;
    case 764:    this.ingredients = [[],I,Z,L,I,T];    this.guides = GUIDES_MIRROR_LIT;    break;
    case 765:    this.ingredients = [[],I,Z,L,J,I];    this.guides = GUIDES_MIRROR_ZLI;    break;
    case 768:    this.ingredients = [[],I,Z,L,J,T];    this.guides = GUIDES_MIRROR_LZT;    break;
    case 769:    this.ingredients = [[],I,Z,L,O,I];    this.guides = GUIDES_MIRROR_ZLI;    break;
    case 770:    this.ingredients = [[],I,Z,L,O,J];    this.guides = GUIDES_MIRROR_ZOL;    break;
    case 771:    this.ingredients = [[],I,Z,L,O,S];    this.guides = GUIDES_MIRROR_ZOL;    break;
    case 772:    this.ingredients = [[],I,Z,L,O,T];    this.guides = GUIDES_MIRROR_LZT;    break;
    case 773:    this.ingredients = [[],I,Z,L,S,I];    this.guides = GUIDES_MIRROR_ZLI;    break;
    case 774:    this.ingredients = [[],I,Z,L,S,J];    this.guides = GUIDES_MIRROR_LSZ;    break;
    case 775:    this.ingredients = [[],I,Z,L,S,O];    this.guides = GUIDES_MIRROR_LSZ;    break;
    case 776:    this.ingredients = [[],I,Z,L,S,T];    this.guides = GUIDES_MIRROR_LZT;    break;
    case 777:    this.ingredients = [[],I,Z,L,T,I];    this.guides = GUIDES_MIRROR_LTI;    break;
    case 778:    this.ingredients = [[],I,Z,L,T,J];    this.guides = GUIDES_MIRROR_LZT;    break;
    case 779:    this.ingredients = [[],I,Z,L,T,O];    this.guides = GUIDES_MIRROR_LZT;    break;
    case 780:    this.ingredients = [[],I,Z,L,T,S];    this.guides = GUIDES_MIRROR_LZT;    break;
    case 782:    this.ingredients = [[],I,Z,O,I,L];    this.guides = GUIDES_MIRROR_OIL;    break;
    case 786:    this.ingredients = [[],I,Z,O,J,L];    this.guides = GUIDES_MIRROR_ZOL;    break;
    case 789:    this.ingredients = [[],I,Z,O,L,I];    this.guides = GUIDES_MIRROR_OLI;    break;
    case 790:    this.ingredients = [[],I,Z,O,L,J];    this.guides = GUIDES_MIRROR_ZOL;    break;
    case 791:    this.ingredients = [[],I,Z,O,L,S];    this.guides = GUIDES_MIRROR_ZOL;    break;
    case 792:    this.ingredients = [[],I,Z,O,L,T];    this.guides = GUIDES_MIRROR_OLT;    break;
    case 794:    this.ingredients = [[],I,Z,O,S,J];    this.guides = GUIDES_MIRROR_ZSJ;    break;
    case 795:    this.ingredients = [[],I,Z,O,S,L];    this.guides = GUIDES_MIRROR_ZOL;    break;
    case 797:    this.ingredients = [[],I,Z,O,T,I];    this.guides = GUIDES_MIRROR_ZTO;    break;
    case 798:    this.ingredients = [[],I,Z,O,T,J];    this.guides = GUIDES_MIRROR_ZTO;    break;
    case 799:    this.ingredients = [[],I,Z,O,T,L];    this.guides = GUIDES_MIRROR_OTL;    break;
    case 800:    this.ingredients = [[],I,Z,O,T,S];    this.guides = GUIDES_MIRROR_ZTO;    break;
    case 801:    this.ingredients = [[],I,Z,S,I,J];    this.guides = GUIDES_MIRROR_SIJ;    break;
    case 802:    this.ingredients = [[],I,Z,S,I,L];    this.guides = GUIDES_MIRROR_ZIL;    break;
    case 805:    this.ingredients = [[],I,Z,S,J,I];    this.guides = GUIDES_MIRROR_SJI;    break;
    case 806:    this.ingredients = [[],I,Z,S,J,L];    this.guides = GUIDES_MIRROR_SZL;    break;
    case 807:    this.ingredients = [[],I,Z,S,J,O];    this.guides = GUIDES_MIRROR_ZSJ;    break;
    case 808:    this.ingredients = [[],I,Z,S,J,T];    this.guides = GUIDES_MIRROR_ZSJ;    break;
    case 809:    this.ingredients = [[],I,Z,S,L,I];    this.guides = GUIDES_MIRROR_ZLI;    break;
    case 810:    this.ingredients = [[],I,Z,S,L,J];    this.guides = GUIDES_MIRROR_SZL;    break;
    case 811:    this.ingredients = [[],I,Z,S,L,O];    this.guides = GUIDES_MIRROR_SZL;    break;
    case 812:    this.ingredients = [[],I,Z,S,L,T];    this.guides = GUIDES_MIRROR_SZL;    break;
    case 814:    this.ingredients = [[],I,Z,S,O,J];    this.guides = GUIDES_MIRROR_ZSJ;    break;
    case 815:    this.ingredients = [[],I,Z,S,O,L];    this.guides = GUIDES_MIRROR_SZL;    break;
    case 817:    this.ingredients = [[],I,Z,S,T,I];    this.guides = GUIDES_MIRROR_ZTI;    break;
    case 818:    this.ingredients = [[],I,Z,S,T,J];    this.guides = GUIDES_MIRROR_ZSJ;    break;
    case 819:    this.ingredients = [[],I,Z,S,T,L];    this.guides = GUIDES_MIRROR_SZL;    break;
    case 820:    this.ingredients = [[],I,Z,S,T,O];    this.guides = GUIDES_MIRROR_ZTO;    break;
    case 821:    this.ingredients = [[],I,Z,T,I,J];    this.guides = GUIDES_MIRROR_TIJ;    break;
    case 822:    this.ingredients = [[],I,Z,T,I,L];    this.guides = GUIDES_MIRROR_TIL;    break;
    case 823:    this.ingredients = [[],I,Z,T,I,O];    this.guides = GUIDES_MIRROR_TIO;    break;
    case 824:    this.ingredients = [[],I,Z,T,I,S];    this.guides = GUIDES_MIRROR_TZS;    break;
    case 825:    this.ingredients = [[],I,Z,T,J,I];    this.guides = GUIDES_MIRROR_TJI;    break;
    case 826:    this.ingredients = [[],I,Z,T,J,L];    this.guides = GUIDES_MIRROR_TJL;    break;
    case 827:    this.ingredients = [[],I,Z,T,J,O];    this.guides = GUIDES_MIRROR_TJO;    break;
    case 828:    this.ingredients = [[],I,Z,T,J,S];    this.guides = GUIDES_MIRROR_TZS;    break;
    case 829:    this.ingredients = [[],I,Z,T,L,I];    this.guides = GUIDES_MIRROR_TLI;    break;
    case 830:    this.ingredients = [[],I,Z,T,L,J];    this.guides = GUIDES_MIRROR_TLJ;    break;
    case 831:    this.ingredients = [[],I,Z,T,L,O];    this.guides = GUIDES_MIRROR_TZL;    break;
    case 832:    this.ingredients = [[],I,Z,T,L,S];    this.guides = GUIDES_MIRROR_TZS;    break;
    case 833:    this.ingredients = [[],I,Z,T,O,I];    this.guides = GUIDES_MIRROR_TOI;    break;
    case 834:    this.ingredients = [[],I,Z,T,O,J];    this.guides = GUIDES_MIRROR_ZTO;    break;
    case 835:    this.ingredients = [[],I,Z,T,O,L];    this.guides = GUIDES_MIRROR_TZL;    break;
    case 836:    this.ingredients = [[],I,Z,T,O,S];    this.guides = GUIDES_MIRROR_TZS;    break;
    case 837:    this.ingredients = [[],I,Z,T,S,I];    this.guides = GUIDES_MIRROR_TSZ;    break;
    case 838:    this.ingredients = [[],I,Z,T,S,J];    this.guides = GUIDES_MIRROR_TSZ;    break;
    case 839:    this.ingredients = [[],I,Z,T,S,L];    this.guides = GUIDES_MIRROR_TSZ;    break;
    case 840:    this.ingredients = [[],I,Z,T,S,O];    this.guides = GUIDES_MIRROR_TSZ;    break;

    default:
    // 初期マトリックス。デッドライン以上は含めない
    this.initialBlocks = [[0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,0]];
    this.ingredients = [[],I];  // 使用可能ミノ 先頭要素は初期ホールドミノ
    this.caption = 'テトリス　その１';
    this.hint = '最初は　TETRiS (４列消し)を\nひたすら決めるだけ。まずは\nここで　ウォーミングアップ！';
    this.guides = [];    // ガイド 作成する際は設置ミノのダンプ情報を利用（ttt.jsにてconsole.logに設置ミノをダンプしている）
    this.useGuide = true;  // ガイド使用(Rを押さなくてもガイドを利用するときtrue)
    this.req = [];       // ノルマ( REQuired features )
    this.req.push(0);    //   [0]: Single
    this.req.push(0);    //   [1]: Double
    this.req.push(0);    //   [2]: Triple
    this.req.push(1);    //   [3]: Tetris
    this.req.push(0);    //   [4]: T-Spin Mini ( 0 列)
    this.req.push(0);    //   [5]: T-Spin ( 0 列)
    this.req.push(0);    //   [6]: Mini T-Spin Single
    this.req.push(0);    //   [7]: T-Spin Single
    this.req.push(0);    //   [8]: T-Spin Double
    this.req.push(0);    //   [9]: T-Spin Triple
    this.req.push(0);    //   [10]: Perfect Clear
    this.req.push(0);    //   [11]: Back-to-Back
    this.req.push(0);    //   [12]: vREN (Combo)
    break;
  }

  return this;
}

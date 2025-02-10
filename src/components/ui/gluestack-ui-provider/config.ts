'use client';
import { vars } from 'nativewind';




export const config = {
  light: vars({
    // primary
    "--color-primary-0": "244 249 247",
    "--color-primary-50": "220 235 229",
    "--color-primary-100": "184 215 203",
    "--color-primary-200": "155 188 178",
    "--color-primary-300": "139 161 155",
    "--color-primary-400": "101 124 106",
    "--color-primary-500": "75 97 81",
    "--color-primary-600": "58 71 58",
    "--color-primary-700": "49 52 42",
    "--color-primary-800": "43 68 62",
    "--color-primary-900": "39 58 53",
    "--color-primary-950": "18 32 29",

    /* Secondary */
    "--color-secondary-0": "235 254 245",
    "--color-secondary-50": "206 253 229",
    "--color-secondary-100": "161 249 209",
    "--color-secondary-200": "100 241 186",
    "--color-secondary-300": "39 224 158",
    "--color-secondary-400": "2 199 135",
    "--color-secondary-500": "0 162 103",
    "--color-secondary-600": "0 130 85",
    "--color-secondary-700": "0 100 59",
    "--color-secondary-800": "0 70 41",
    "--color-secondary-900": "0 49 28",
    "--color-secondary-950": "0 30 20",

    /* Tertiary */
    "--color-tertiary-0": "250 250 235",
    "--color-tertiary-50": "243 243 212",
    "--color-tertiary-100": "231 232 174",
    "--color-tertiary-200": "215 215 127",
    "--color-tertiary-300": "196 199 87",
    "--color-tertiary-400": "175 180 56",
    "--color-tertiary-500": "163 170 38",
    "--color-tertiary-600": "127 135 29",
    "--color-tertiary-700": "96 103 24",
    "--color-tertiary-800": "75 80 20",
    "--color-tertiary-900": "66 71 20",
    "--color-tertiary-950": "34 38 13",

    /* Error */
    '--color-error-0': '254 233 233',
    '--color-error-50': '254 226 226',
    '--color-error-100': '254 202 202',
    '--color-error-200': '252 165 165',
    '--color-error-300': '248 113 113',
    '--color-error-400': '239 68 68',
    '--color-error-500': '230 53 53',
    '--color-error-600': '220 38 38',
    '--color-error-700': '185 28 28',
    '--color-error-800': '153 27 27',
    '--color-error-900': '127 29 29',
    '--color-error-950': '83 19 19',

    /* Success */
    '--color-success-0': '228 255 244',
    '--color-success-50': '202 255 232',
    '--color-success-100': '162 241 192',
    '--color-success-200': '132 211 162',
    '--color-success-300': '102 181 132',
    '--color-success-400': '72 151 102',
    '--color-success-500': '52 131 82',
    '--color-success-600': '42 121 72',
    '--color-success-700': '32 111 62',
    '--color-success-800': '22 101 52',
    '--color-success-900': '20 83 45',
    '--color-success-950': '27 50 36',

    /* Warning */
    '--color-warning-0': '255 249 245',
    '--color-warning-50': '255 244 236',
    '--color-warning-100': '255 231 213',
    '--color-warning-200': '254 205 170',
    '--color-warning-300': '253 173 116',
    '--color-warning-400': '251 149 75',
    '--color-warning-500': '231 120 40',
    '--color-warning-600': '215 108 31',
    '--color-warning-700': '180 90 26',
    '--color-warning-800': '130 68 23',
    '--color-warning-900': '108 56 19',
    '--color-warning-950': '84 45 18',

    /* Info */
    '--color-info-0': '236 248 254',
    '--color-info-50': '199 235 252',
    '--color-info-100': '162 221 250',
    '--color-info-200': '124 207 248',
    '--color-info-300': '87 194 246',
    '--color-info-400': '50 180 244',
    '--color-info-500': '13 166 242',
    '--color-info-600': '11 141 205',
    '--color-info-700': '9 115 168',
    '--color-info-800': '7 90 131',
    '--color-info-900': '5 64 93',
    '--color-info-950': '3 38 56',

    /* Typography */
    '--color-typography-0': '254 254 255',
    '--color-typography-50': '245 245 245',
    '--color-typography-100': '229 229 229',
    '--color-typography-200': '219 219 220',
    '--color-typography-300': '212 212 212',
    '--color-typography-400': '163 163 163',
    '--color-typography-500': '140 140 140',
    '--color-typography-600': '115 115 115',
    '--color-typography-700': '82 82 82',
    '--color-typography-800': '64 64 64',
    '--color-typography-900': '38 38 39',
    '--color-typography-950': '23 23 23',

    /* Outline */
    '--color-outline-0': '253 254 254',
    '--color-outline-50': '243 243 243',
    '--color-outline-100': '230 230 230',
    '--color-outline-200': '221 220 219',
    '--color-outline-300': '211 211 211',
    '--color-outline-400': '165 163 163',
    '--color-outline-500': '140 141 141',
    '--color-outline-600': '115 116 116',
    '--color-outline-700': '83 82 82',
    '--color-outline-800': '65 65 65',
    '--color-outline-900': '39 38 36',
    '--color-outline-950': '26 23 23',

    /* Background */
    '--color-background-0': '255 255 255',
    '--color-background-50': '246 246 246',
    '--color-background-100': '242 241 241',
    '--color-background-200': '220 219 219',
    '--color-background-300': '213 212 212',
    '--color-background-400': '162 163 163',
    '--color-background-500': '142 142 142',
    '--color-background-600': '116 116 116',
    '--color-background-700': '83 82 82',
    '--color-background-800': '65 64 64',
    '--color-background-900': '39 38 37',
    '--color-background-950': '18 18 18',

    /* Background Special */
    '--color-background-error': '254 241 241',
    '--color-background-warning': '255 243 234',
    '--color-background-success': '237 252 242',
    '--color-background-muted': '247 248 247',
    '--color-background-info': '235 248 254',

    /* Focus Ring Indicator  */
    '--color-indicator-primary': '55 55 55',
    '--color-indicator-info': '83 153 236',
    '--color-indicator-error': '185 28 28',
  }),
  dark: vars({
    '--color-primary-0': '244 249 247', // it should be dark mode '166 166 166'
    '--color-primary-50': '220 235 229', // it should be dark mode '175 175 175'
    '--color-primary-100': '184 215 203', // it should be dark mode '186 186 186'
    '--color-primary-200': '155 188 178', // it should be dark mode '197 197 197'
    '--color-primary-300': '139 161 155', // it should be dark mode '212 212 212'
    '--color-primary-400': '101 124 106', // it should be dark mode '221 221 221'
    '--color-primary-500': '75 97 81', // it should be dark mode '230 230 230'
    '--color-primary-600': '58 71 58', // it should be dark mode '240 240 240'
    '--color-primary-700': '49 52 42', // it should be dark mode '250 250 250'
    '--color-primary-800': '43 68 62', // it should be dark mode '253 253 253'
    '--color-primary-900': '39 58 53', // it should be dark mode '254 249 249'
    '--color-primary-950': '18 32 29', // it should be dark mode '253 252 252'

    /* Secondary  */
    '--color-secondary-0': '235 254 245', // it should be dark mode '20 20 20'
    '--color-secondary-50': '206 253 229', // it should be dark mode '23 23 23'
    '--color-secondary-100': '161 249 209', // it should be dark mode '31 31 31'
    '--color-secondary-200': '100 241 186', // it should be dark mode '39 39 39'
    '--color-secondary-300': '39 224 158', // it should be dark mode '44 44 44'
    '--color-secondary-400': '2 199 135', // it should be dark mode '56 57 57'
    '--color-secondary-500': '0 162 103', // it should be dark mode '63 64 64'
    '--color-secondary-600': '0 130 85', // it should be dark mode '86 86 86'
    '--color-secondary-700': '0 100 59', // it should be dark mode '110 110 110'
    '--color-secondary-800': '0 70 41', // it should be dark mode '135 135 135'
    '--color-secondary-900': '0 49 28', // it should be dark mode '150 150 150'
    '--color-secondary-950': '0 30 20', // it should be dark mode '164 164 164'

    /* Tertiary */
    '--color-tertiary-0': '250 250 235', // it should be dark mode '84 49 18'
    '--color-tertiary-50': '243 243 212', // it should be dark mode '108 61 19'
    '--color-tertiary-100': '231 232 174', // it should be dark mode '130 73 23'
    '--color-tertiary-200': '215 215 127', // it should be dark mode '180 98 26'
    '--color-tertiary-300': '196 199 87', // it should be dark mode '215 117 31'
    '--color-tertiary-400': '175 180 56', // it should be dark mode '231 129 40'
    '--color-tertiary-500': '163 170 38', // it should be dark mode '251 157 75'
    '--color-tertiary-600': '127 135 29', // it should be dark mode '253 180 116'
    '--color-tertiary-700': '96 103 24', // it should be dark mode '254 209 170'
    '--color-tertiary-800': '75 80 20', // it should be dark mode '255 233 213'
    '--color-tertiary-900': '66 71 20', // it should be dark mode '255 242 229'
    '--color-tertiary-950': '34 38 13', // it should be dark mode '255 250 245'

    /* Error */
    '--color-error-0': '254 233 233', // it should be dark mode '83 19 19'
    '--color-error-50': '254 226 226', // it should be dark mode '127 29 29'
    '--color-error-100': '254 202 202', // it should be dark mode '153 27 27'
    '--color-error-200': '252 165 165', // it should be dark mode '185 28 28'
    '--color-error-300': '248 113 113', // it should be dark mode '220 38 38'
    '--color-error-400': '239 68 68', // it should be dark mode '230 53 53'
    '--color-error-500': '230 53 53', // it should be dark mode '239 68 68'
    '--color-error-600': '220 38 38', // it should be dark mode '249 97 96'
    '--color-error-700': '185 28 28', // it should be dark mode '229 91 90'
    '--color-error-800': '153 27 27', // it should be dark mode '254 202 202'
    '--color-error-900': '127 29 29', // it should be dark mode '254 226 226'
    '--color-error-950': '83 19 19', // it should be dark mode '254 233 233'

    /* Success */
    '--color-success-0': '228 255 244', // it should be dark mode '27 50 36'
    '--color-success-50': '202 255 232', // it should be dark mode '20 83 45'
    '--color-success-100': '162 241 192', // it should be dark mode '22 101 52'
    '--color-success-200': '132 211 162', // it should be dark mode '32 111 62'
    '--color-success-300': '102 181 132', // it should be dark mode '42 121 72'
    '--color-success-400': '72 151 102', // it should be dark mode '52 131 82'
    '--color-success-500': '52 131 82', // it should be dark mode '72 151 102'
    '--color-success-600': '42 121 72', // it should be dark mode '102 181 132'
    '--color-success-700': '32 111 62', // it should be dark mode '132 211 162'
    '--color-success-800': '22 101 52', // it should be dark mode '162 241 192'
    '--color-success-900': '20 83 45', // it should be dark mode '202 255 232'
    '--color-success-950': '27 50 36', // it should be dark mode '228 255 244'

    /* Warning */
    '--color-warning-0': '255 249 245', // it should be dark mode '84 45 18'
    '--color-warning-50': '255 244 236', // it should be dark mode '108 56 19'
    '--color-warning-100': '255 231 213', // it should be dark mode '130 68 23'
    '--color-warning-200': '254 205 170', // it should be dark mode '180 90 26'
    '--color-warning-300': '253 173 116', // it should be dark mode '215 108 31'
    '--color-warning-400': '251 149 75', // it should be dark mode '231 120 40'
    '--color-warning-500': '231 120 40', // it should be dark mode '251 149 75'
    '--color-warning-600': '215 108 31', // it should be dark mode '253 173 116'
    '--color-warning-700': '180 90 26', // it should be dark mode '254 205 170'
    '--color-warning-800': '130 68 23', // it should be dark mode '255 231 213'
    '--color-warning-900': '108 56 19', // it should be dark mode '255 244 237'
    '--color-warning-950': '84 45 18', // it should be dark mode '255 249 245'

    /* Info */
    '--color-info-0': '236 248 254', // it should be dark mode '3 38 56'
    '--color-info-50': '199 235 252', // it should be dark mode '5 64 93'
    '--color-info-100': '162 221 250', // it should be dark mode '7 90 131'
    '--color-info-200': '124 207 248', // it should be dark mode '9 115 168'
    '--color-info-300': '87 194 246', // it should be dark mode '11 141 205'
    '--color-info-400': '50 180 244', // it should be dark mode '13 166 242'
    '--color-info-500': '13 166 242', // it should be dark mode '50 180 244'
    '--color-info-600': '11 141 205', // it should be dark mode '87 194 246'
    '--color-info-700': '9 115 168', // it should be dark mode '124 207 248'
    '--color-info-800': '7 90 131', // it should be dark mode '162 221 250'
    '--color-info-900': '5 64 93', // it should be dark mode '199 235 252'
    '--color-info-950': '3 38 56', // it should be dark mode '236 248 254'

    /* Typography */
    '--color-typography-0': '254 254 255', // it should be dark mode '23 23 23'
    '--color-typography-50': '245 245 245', // it should be dark mode '38 38 39'
    '--color-typography-100': '229 229 229', // it should be dark mode '64 64 64'
    '--color-typography-200': '219 219 220', // it should be dark mode '82 82 82'
    '--color-typography-300': '212 212 212', // it should be dark mode '115 115 115'
    '--color-typography-400': '163 163 163', // it should be dark mode '140 140 140'
    '--color-typography-500': '140 140 140', // it should be dark mode '163 163 163'
    '--color-typography-600': '115 115 115', // it should be dark mode '212 212 212'
    '--color-typography-700': '82 82 82', // it should be dark mode '219 219 220'
    '--color-typography-800': '64 64 64', // it should be dark mode '229 229 229'
    '--color-typography-900': '38 38 39', // it should be dark mode '245 245 245'
    '--color-typography-950': '23 23 23', // it should be dark mode '254 254 255'

    /* Outline */
    '--color-outline-0': '253 254 254', // it should be dark mode '26 23 23'
    '--color-outline-50': '243 243 243', // it should be dark mode '39 38 36'
    '--color-outline-100': '230 230 230', // it should be dark mode '65 65 65'
    '--color-outline-200': '221 220 219', // it should be dark mode '83 82 82'
    '--color-outline-300': '211 211 211', // it should be dark mode '115 116 116'
    '--color-outline-400': '165 163 163', // it should be dark mode '140 141 141'
    '--color-outline-500': '140 141 141', // it should be dark mode '165 163 163'
    '--color-outline-600': '115 116 116', // it should be dark mode '211 211 211'
    '--color-outline-700': '83 82 82', // it should be dark mode '221 220 219'
    '--color-outline-800': '65 65 65', // it should be dark mode '230 230 230'
    '--color-outline-900': '39 38 36', // it should be dark mode '243 243 243'
    '--color-outline-950': '26 23 23', // it should be dark mode '253 254 254'

    /* Background */
    '--color-background-0': '255 255 255', // it should be dark mode '18 18 18'
    '--color-background-50': '246 246 246', // it should be dark mode '39 38 37'
    '--color-background-100': '242 241 241', // it should be dark mode '65 64 64'
    '--color-background-200': '220 219 219', // it should be dark mode '83 82 82'
    '--color-background-300': '213 212 212', // it should be dark mode '116 116 116'
    '--color-background-400': '162 163 163', // it should be dark mode '142 142 142'
    '--color-background-500': '142 142 142', // it should be dark mode '162 163 163'
    '--color-background-600': '116 116 116', // it should be dark mode '213 212 212'
    '--color-background-700': '83 82 82', // it should be dark mode '229 228 228'
    '--color-background-800': '65 64 64', // it should be dark mode '242 241 241'
    '--color-background-900': '39 38 37', // it should be dark mode '246 246 246'
    '--color-background-950': '18 18 18', // it should be dark mode '255 255 255'

    /* Background Special */
    '--color-background-error': '66 43 43',
    '--color-background-warning': '65 47 35',
    '--color-background-success': '28 43 33',
    '--color-background-muted': '51 51 51',
    '--color-background-info': '26 40 46',

    /* Focus Ring Indicator  */
    '--color-indicator-primary': '247 247 247',
    '--color-indicator-info': '161 199 245',
    '--color-indicator-error': '232 70 69',
  }),
};

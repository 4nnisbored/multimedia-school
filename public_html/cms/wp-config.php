<?php
define( 'WP_CACHE', true );

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'tXjpibjeIZre9W' );

/** Database username */
define( 'DB_USER', 'tXjpibjeIZre9W' );

/** Database password */
define( 'DB_PASSWORD', 'JCxMwvau0WpFkX' );

/** Database hostname */
define( 'DB_HOST', 'localhost:3306' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'I.}0tw:KLRsyzxz?90Q%F:R^K.LgG]hSwW@@5KAbloM;Y/iS#M:rC AuHEv7qf)k' );
define( 'SECURE_AUTH_KEY',   'A}cC?LC{DB+1PSBv3+cssSw?jTuy69$%2u7 bQ`uTOYz#D=jAP9^]6|jU/CIx}_p' );
define( 'LOGGED_IN_KEY',     'B ,2K)>!y0=l`X~_>6^PPwN,$oQ-:tp?Rg7.^gKd4BIO;6kLZ!hcovt_hBAV*,J%' );
define( 'NONCE_KEY',         '<X*9E@Y-Sy>C_btq^R7R-v[$^N{vz?9!bP>v %7s@wtyvfn|!&m3hr<f6k_1qnPQ' );
define( 'AUTH_SALT',         'r#|#.yWRO|0|#twGVw~GVO.(U7UVrutwA:m_vjSzD%t+#YEs3|IN0bA%+Q^Mpwpi' );
define( 'SECURE_AUTH_SALT',  ')I1Q%mpd9rMu2aoU_%N:8h(Uy{uZv3w]M&Vk6f2urjSK>RD}3r654_0$6Xb,2+.!' );
define( 'LOGGED_IN_SALT',    '~iXDO,5R7*MZ#!<c.k~ntV#jG?1o$KJeq@ViI|Ezrr_|n&-/9Q$vi?lJRN!VFC!a' );
define( 'NONCE_SALT',        ']WAi3&/,du_0bFN(d&{viMEdp?R:=ggjw3uYcLEpZt0U!b.Y%E~F 0W8ETgjH|/B' );
define( 'WP_CACHE_KEY_SALT', 'T?Sp,m|L=o<8=u,4tfwpG*h[di;=NEnt+n0a_ !^H%m5HI?tnBSvunh+1#n{abRB' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

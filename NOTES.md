https://matejkustec.github.io/SpinThatShit/?utm_source=bypeople
https://connoratherton.com/loaders
https://projects.lukehaas.me/css-loaders/

  //@include container-fixed;
  //margin-right: auto;
  //margin-left: auto;
WEEK OF
27 of November to 03 of December of 2016


// Container widths
//
// Set the container width, and override it for fixed navbars in media queries.

//.container {
//  @include container-fixed;
//
//  @media (min-width: $screen-sm-min) {
//    width: $container-sm;
//  }
//  @media (min-width: $screen-md-min) {
//    width: $container-md;
//  }
//  @media (min-width: $screen-lg-min) {
//    width: $container-lg;
//  }
//}

// Fluid container
//
// Utilizes the mixin meant for fixed width containers, but without any defined
// width for fluid, full width layouts.

//.container-fluid {
//  @include container-fixed;
//}


@BlockItem = React.createClass
  render: ->
    return (
      <a href="#" className="block-item">

        <label className="switch mini pull-right">
          <input type="checkbox"/>
          <span></span>
        </label>
        <strong>App movil</strong>
        <span className="type-caption color-secondary ml-xs">Sosafe</span>

      </a>
    )


@Component = React.createClass
  render: ->
    return (
      <div className="classname">

      </div>
    )









//  # Usage
//  @import "vendor/mediaquery";
//
//  # SCSS usage:
//  @media screen #{to(phone)} { /* CSS here */ }
//
//  # Or mixin usage:
//  @include respond(to phone)   { /* CSS here ... */ };
//  @include respond(from phone) { /* CSS here ... */ };
//
//  @include respond(to 320px)   { /* CSS here ... */ };
//  @include respond(from 320px) { /* CSS here ... */ };
//
//  @include respond(from 320px, 2x)                  { /* CSS here ... */ };
//  @include respond(from 320px, portrait)            { /* CSS here ... */ };
//  @include respond(from 320px, to 500px, landscape) { /* CSS here ... */ };
//
//  @include respond(from 320px, to 500px)   { /* CSS here ... */ };
//  @include respond(from 320px, to medium) { /* CSS here ... */ };
//

// Supported breakpoints
// $breakpoints: (
//   phone:          $size-mini,
//   tablet:         $size-small,
//   laptop:         $size-medium,
//   desktop:        $size-large,
//   cinema:         $size-oversized,
//   container:      $size-container,
// );

//  mini:           $size-mini,
//  small:          $size-small,
//  medium:         $size-medium,
//  large:          $size-large,
//  oversized:      $size-oversized,
//
//  phone:          $size-mini,
//  tablet:         $size-small,
//  laptop:         $size-medium,
//  desktop:        $size-large,
//  cinema:         $size-oversized,
//
//  container:      $size-container,
//
//
//  xsmall:           $screen-xs,
//  small:            $screen-sm,
//  medium:           $screen-md,
//  large:            $screen-lg,
//  xlarge:           $screen-xl,
//
//  container-xsmall: $container-xs,
//  container-small:  $container-sm,
//  container-medium: $container-md,
//  container-large:  $container-lg,
//  container-xlarge: $container-xl,
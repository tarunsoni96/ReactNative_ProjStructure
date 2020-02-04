package com.dummynew;

import com.facebook.react.ReactActivity;
import android.os.Bundle;
 import com.facebook.react.ReactActivityDelegate;
 import com.facebook.react.ReactRootView;
 import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
import org.devio.rn.splashscreen.SplashScreen; // here
public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */

     @Override
    protected void onCreate(Bundle savedInstanceState) {
        setTheme(R.style.AppTheme); // Now set the theme from Splash to App before setContentView
        setContentView(R.layout.launch_screen); // Then inflate the new view
        SplashScreen.show(this, R.style.SplashTheme);
        super.onCreate(savedInstanceState);
        SplashScreen.show(this, R.style.SplashScreenTheme);
        super.onCreate(savedInstanceState);
    }

    @Override
    protected String getMainComponentName() {
        return "University";
    }

      @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
       return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }

}
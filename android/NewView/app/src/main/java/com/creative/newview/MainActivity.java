package com.creative.newview;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.widget.ImageView;
import android.widget.Toast;

import com.bumptech.glide.Glide;
import com.youth.banner.Banner;
import com.youth.banner.BannerConfig;
import com.youth.banner.Transformer;
import com.youth.banner.listener.OnBannerListener;
import com.youth.banner.loader.ImageLoader;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity implements OnBannerListener {
    /*轮播图*/
    private Banner mBanner;
    private MyImageLoader mMyImageLoader;
    private ArrayList<Integer> imagePath;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        imagePath=new ArrayList<>();
        imagePath.add(R.mipmap.banner_new);
        imagePath.add(R.mipmap.home_top);
        imagePath.add(R.mipmap.hotel1);
        mMyImageLoader = new MyImageLoader();

        mBanner= findViewById(R.id.banner);
        //设置样式，里面有很多种样式可以自己都看看效果
        //mBanner.setBannerStyle(BannerConfig.CIRCLE_INDICATOR_TITLE);
        //设置图片加载器
        mBanner.setImageLoader(mMyImageLoader);
        //设置轮播的动画效果,里面有很多种特效,可以都看看效果。
        //mBanner.setBannerAnimation(Transformer.ZoomOutSlide);
        mBanner.setBannerAnimation(Transformer.Default);
        //轮播图片的文字
        //mBanner.setBannerTitles(imageTitle);
        //设置轮播间隔时间
        mBanner.setDelayTime(3000);
        //设置是否为自动轮播，默认是true
        mBanner.isAutoPlay(true);
        //设置指示器的位置，小点点，居中显示
        mBanner.setIndicatorGravity(BannerConfig.CENTER);
        //设置图片加载地址
        mBanner.setImages(imagePath)
                //轮播图的监听
                .setOnBannerListener(this)
                //开始调用的方法，启动轮播图。
                .start();
    }

    @Override
    public void OnBannerClick(int position) {
        Toast.makeText(this, "你点了第" + (position + 1) + "张轮播图", Toast.LENGTH_SHORT).show();
        Intent intent=new Intent(MainActivity.this,FirstActivity.class);
        if (position+1==1) {
            intent.putExtra("url", "https://activity.huajiao.com/pagenew/gfzdxxzs/index.html");
        }else if (position+1==2){
            intent.putExtra("url", "https://activity.huajiao.com/pagenew/hjmljdejrqb/share.html");
        }else if (position+1==3){
            intent.putExtra("url", "https://m.kuaishouvideo.com/dist/activity/queen/datuanzi.html");
        }
            startActivity(intent);

    }


    /**
     * 图片加载类
     */
    public class MyImageLoader extends ImageLoader {
        @Override
        public void displayImage(Context context, Object path, ImageView imageView) {
            Glide.with(context)
                    .load(path)
                    .into(imageView);
        }
    }
}

<template>
  <GradientBannerComponent title="Chúng tôi là iDev" />
  <div class="connect">
    <div class="introduce">
      <h3>I.Giới thiệu về iDev</h3>
      <p>
        iDev được thành lập từ sự hợp tác của những Senior Developers/ Kỹ sư lập
        trình có bề dày kinh nghiệm thực chiến trong lĩnh vực code web kết hợp
        cùng những người bạn Designers đầy sáng tạo và không thể thiếu bộ phận
        kinh doanh năng nổ sẵn sàng tư vấn - hỗ trợ cho khách hàng mọi lúc.
      </p>
      <p>
        Tất cả những người bạn đó đã tạo nên một team iDev mang trong mình sứ
        mệnh thiết kế ra những website chuyên nghiệp và chất lượng cao trên thị
        trường hiện nay.
      </p>
      <p>
        Tạo lập và phát triển những website mang lại giá trị và hiệu quả là mục
        tiêu mà đội ngũ iDev hướng đến cho bạn.
      </p>
      <div class="content-image">
        <img
          class="image"
          src="~/assets/images/team-spirit.svg"
          alt="Nhóm iDev"
        />
      </div>
    </div>
    <div class="introduce">
      <h3>II. Lý do bạn nên chọn iDev</h3>
      <p>
        Bảng giá dịch vụ tổng quan luôn tốt nhất thị trường với thế mạnh chúng
        tôi có đội ngũ được xây dựng từ những senior developers, designers có
        nhiều năm kinh nghiệm trong lĩnh vực thiết kế web, đã đúc kết được nhiều
        kinh nghiệm để cùng xây dựng một teamwork vững chắc cho ra những sản
        phẩm tốt nhất mà không cần qua một bên trung gian nào khác
      </p>
      <p>
        Giá domain + server rẻ hơn thị trường vì iDev có server mua được domain
        với giá gốc.
      </p>
      <div class="content-image">
        <img class="image" src="~/assets/images/browser-stats.svg" alt="" />
      </div>
    </div>
    <div class="introduce">
      <h3>III. Tổng kết</h3>
      <p>
        Với những lí do trên iDev luôn tin rằng sẽ là người đồng hành đầy tâm huyết và mang lại giá trị cho khách hàng
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
<style scoped lang="scss">
.connect {
  width: 700px;
  margin: 40px auto;
  .content-image {
    width: 100%;
    text-align: center;

    .image {
      width: 400px;
      margin: 0 auto;
    }
  }
}
</style>

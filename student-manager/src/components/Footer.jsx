function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#212529",
        color: "#fff",
        padding: "20px 0",
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        textAlign: "center",
        zIndex: 1000,
      }}
    >
      <p style={{ margin: 0 }}>
        &copy; {new Date().getFullYear()} - Bản quyền thuộc về Nguyễn Văn Trường
        - 65KTPM
      </p>
    </footer>
  );
}

export default Footer;

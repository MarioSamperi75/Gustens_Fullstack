package com.fg.GustensBackend.entity;

import jakarta.persistence.*;

@Entity
@Table(name="product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int Id;

    @Column(name="namn")
    private String namn;

    @Column(name="ursprung")
    private String ursprung;

    @Column(name="scoville")
    private int scoville;


    @Column(name="styckpris")
    private int styckpris;

    @Column(name="antal")
    private int antal;


    public Product() {}

    public Product(String namn, String ursprung, int scoville, int styckpris, int antal) {
        this.namn = namn;
        this.ursprung = ursprung;
        this.scoville = scoville;
        this.styckpris = styckpris;
        this.antal = antal;
    }

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }

    public String getNamn() {
        return namn;
    }

    public void setNamn(String namn) {
        this.namn = namn;
    }

    public String getUrsprung() {
        return ursprung;
    }

    public void setUrsprung(String ursprung) {
        this.ursprung = ursprung;
    }

    public int getScoville() {
        return scoville;
    }

    public void setScoville(int scoville) {
        this.scoville = scoville;
    }

    public int getStyckpris() {
        return styckpris;
    }

    public void setStyckpris(int styckpris) {
        this.styckpris = styckpris;
    }

    public int getAntal() {
        return antal;
    }

    public void setAntal(int antal) {
        this.antal = antal;
    }

    @Override
    public String toString() {
        return "Product{" +
                "Id=" + Id +
                ", namn='" + namn + '\'' +
                ", ursprung='" + ursprung + '\'' +
                ", scoville=" + scoville +
                ", styckpris=" + styckpris +
                ", antal=" + antal +
                '}';
    }
}

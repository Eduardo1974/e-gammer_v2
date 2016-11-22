package br.gov.sp.fatec.egammer.domain.game;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonView;

import br.gov.sp.fatec.egammer.domain.desenvolvedora.Desenvolvedora;
import br.gov.sp.fatec.egammer.domain.genero.Genero;
import br.gov.sp.fatec.egammer.util.View;

@Entity
@Table(name = "GAME") 
public class Game {
	
	@Id 
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "gam_codigo")
	@JsonView( View.Game.class)
	private Long codigo;
	
	@Column(name = "gam_titulo",  length = 250, nullable = false)
	@JsonView( View.Game.class)
	private String titulo;
	
	@Column(name = "gam_descricao",  length = 250, nullable = false)
	@JsonView( View.Game.class)
	private String descricao;
	
	@Column(name = "gam_preco",  length = 250, nullable = false)
	@JsonView( View.Game.class)
	private Double preco;
	
	@Column(name = "gam_quant",  length = 250, nullable = false)
	@JsonView( View.Game.class)
	private Integer quantidade;
	
	@Column(name = "gam_capa",  length = 250, nullable = false)
	@JsonView( View.Game.class)
	private String imgCapa;
	
	@Column(name = "gam_img01",  length = 250, nullable = false)
	@JsonView( View.Game.class)
	private String img01;
	
	@Column(name = "gam_img02",  length = 250, nullable = false)
	@JsonView( View.Game.class)
	private String img02;
	
	@Column(name = "gam_img03",  length = 250, nullable = false)
	@JsonView( View.Game.class)
	private String img03;
	
	@Column(name = "gam_classificacao",  length = 250, nullable = false)
	@JsonView( View.Game.class)
	private String classificacao;
	
	@Column(name = "gam_data",  length = 250, nullable = false)
	@JsonView( View.Game.class)
	private Date dataLancamento;
	
	@Column(name = "gam_plataforma",  length = 250, nullable = false)
	@JsonView( View.Game.class)
	private String plataforma;
	
	@ManyToOne(fetch = FetchType.EAGER, optional = true)
    @JoinColumn(name = "gen_codigo", nullable = true)
	@JsonView( View.Game.class)
	Genero genero;
	
	@ManyToOne(fetch = FetchType.EAGER, optional = true)
    @JoinColumn(name = "des_codigo", nullable = true)
	@JsonView( View.Game.class)
	private Desenvolvedora desenvolvedora;

	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public Double getPreco() {
		return preco;
	}

	public void setPreco(Double preco) {
		this.preco = preco;
	}

	public Integer getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(Integer quantidade) {
		this.quantidade = quantidade;
	}

	public String getImgCapa() {
		return imgCapa;
	}

	public void setImgCapa(String imgCapa) {
		this.imgCapa = imgCapa;
	}

	public String getImg01() {
		return img01;
	}

	public void setImg01(String img01) {
		this.img01 = img01;
	}

	public String getImg02() {
		return img02;
	}

	public void setImg02(String img02) {
		this.img02 = img02;
	}

	public String getImg03() {
		return img03;
	}

	public void setImg03(String img03) {
		this.img03 = img03;
	}

	public Date getDataLancamento() {
		return dataLancamento;
	}

	public void setDataLancamento(Date dataLancamento) {
		this.dataLancamento = dataLancamento;
	}

	public String getPlataforma() {
		return plataforma;
	}

	public void setPlataforma(String plataforma) {
		this.plataforma = plataforma;
	}

	public Genero getGenero() {
		return genero;
	}

	public void setGenero(Genero genero) {
		this.genero = genero;
	}

	public Desenvolvedora getDesenvolvedora() {
		return desenvolvedora;
	}

	public void setDesenvolvedora(Desenvolvedora desenvolvedora) {
		this.desenvolvedora = desenvolvedora;
	}

	public String getClassificacao() {
		return classificacao;
	}
}
